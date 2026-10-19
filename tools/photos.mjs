// Keeps the site's images reasonably small and free of hidden metadata, while
// changing the pictures themselves as little as possible:
//   - no camera metadata (EXIF/XMP/IPTC, e.g. the GPS location a phone stores
//     in every photo). It is cut out of the file without re-saving the image,
//     so the pixels stay exactly the same. The color profile is kept.
//   - at most 1.5 MB, and stored upright. Only images that break one of these
//     are re-saved: shrunk to at most 2400 px on the long edge, at high
//     quality (JPEG 90, PNG lossless), keeping their color profile.
//
// Usage:
//   npm run photos           fix every image in public/imgs that breaks a rule
//   npm run photos:check     only report problems (exits with an error if any)
//   node tools/photos.mjs --check --staged
//                            check only the images staged for the next commit
//                            (run by the pre-commit hook in .githooks/)
//
// Images that follow the rules are never touched, so running it again is
// harmless.

import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, join, relative, sep } from 'node:path';

const ROOT = 'public/imgs';
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const MAX_EDGE = 2400;
const MAX_BYTES = 1.5 * 1024 * 1024;
const JPEG_QUALITY = 90;

const args = new Set(process.argv.slice(2));
const checkOnly = args.has('--check');
const stagedOnly = args.has('--staged');

const isImage = (path) => path.startsWith(`${ROOT}/`) && EXTENSIONS.has(extname(path).toLowerCase());
const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

function allImages(dir = ROOT) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name).split(sep).join('/');
    if (entry.isDirectory()) return allImages(path);
    return isImage(path) ? [path] : [];
  });
}

function stagedImages() {
  const out = execFileSync('git', ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z'], { encoding: 'utf8' });
  return out.split('\0').filter(isImage);
}

// For a staged check, read the version that is about to be committed.
function read(path) {
  if (!stagedOnly) return readFileSync(path);
  return execFileSync('git', ['show', `:${path}`], { maxBuffer: 512 * 1024 * 1024 });
}

// Cuts metadata out of a JPEG without touching the compressed image: keeps the
// image data, JFIF/Adobe headers and the color profile (APP2 ICC_PROFILE);
// drops EXIF/XMP (APP1), IPTC (APP13), comments, other APPn blocks, and
// anything after the image (e.g. an iPhone's embedded HDR gain map).
function stripJpeg(buf) {
  const out = [buf.subarray(0, 2)]; // SOI
  let i = 2;
  while (i < buf.length - 1) {
    if (buf[i] !== 0xff) throw new Error('unexpected JPEG structure');
    const marker = buf[i + 1];
    if (marker === 0xff) { i++; continue; } // fill byte
    if (marker === 0xda) {
      // Start of the image data: copy everything up to and including the end
      // marker, stepping over marker segments between progressive scans so
      // their contents can't be mistaken for the end.
      let j = i;
      while (j < buf.length - 1) {
        const m = buf[j + 1];
        if (buf[j] !== 0xff || m === 0x00 || m === 0xff || (m >= 0xd0 && m <= 0xd7)) { j++; continue; }
        if (m === 0xd9) return Buffer.concat([...out, buf.subarray(i, j + 2)]);
        j += 2 + buf.readUInt16BE(j + 2);
      }
      throw new Error('JPEG end marker not found');
    }
    const end = i + 2 + buf.readUInt16BE(i + 2);
    const isApp = marker >= 0xe0 && marker <= 0xef;
    const keep = (!isApp && marker !== 0xfe)
      || marker === 0xe0 // JFIF
      || marker === 0xee // Adobe (how colors are encoded)
      || (marker === 0xe2 && buf.toString('latin1', i + 4, i + 15) === 'ICC_PROFILE');
    if (keep) out.push(buf.subarray(i, end));
    i = end;
  }
  throw new Error('JPEG image data not found');
}

// Cuts metadata chunks out of a PNG; the image data stays as it is.
const PNG_METADATA = new Set(['eXIf', 'tEXt', 'zTXt', 'iTXt', 'tIME']);
function stripPng(buf) {
  const out = [buf.subarray(0, 8)]; // signature
  let i = 8;
  while (i < buf.length) {
    const type = buf.toString('latin1', i + 4, i + 8);
    const end = i + 12 + buf.readUInt32BE(i);
    if (!PNG_METADATA.has(type)) out.push(buf.subarray(i, end));
    i = end;
    if (type === 'IEND') break;
  }
  return Buffer.concat(out);
}

// Loaded only when there is something to look at, so commits without images
// stay fast.
const paths = stagedOnly ? stagedImages() : allImages();
if (paths.length === 0) process.exit(0);
const { default: sharp } = await import('sharp');

async function inspect(data) {
  const meta = await sharp(data).metadata();
  // Phone photos are often stored sideways with a flag saying how to turn them.
  const sideways = (meta.orientation ?? 1) > 1;
  const tooHeavy = data.length > MAX_BYTES;
  const metadata = Boolean(meta.exif || meta.xmp || meta.iptc);
  const found = [];
  if (tooHeavy) found.push(`${kb(data.length)} (max ${kb(MAX_BYTES)})`);
  if (sideways) found.push('stored sideways');
  if (metadata) found.push('hidden camera metadata (may include the GPS location)');
  return { found, resave: tooHeavy || sideways, metadata };
}

// Turn upright and shrink to fit, keeping the color profile; sharp drops all
// other metadata when saving.
async function resave(path, data) {
  let image = sharp(data).rotate()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .keepIccProfile();
  const ext = extname(path).toLowerCase();
  if (ext === '.png') image = image.png({ compressionLevel: 9 });
  else if (ext === '.webp') image = image.webp({ quality: JPEG_QUALITY });
  else image = image.jpeg({ quality: JPEG_QUALITY });
  return image.toBuffer();
}

let failed = 0;
for (const path of paths) {
  const data = read(path);
  const { found, resave: needsResave, metadata } = await inspect(data);
  if (found.length === 0) continue;

  if (checkOnly) {
    failed++;
    console.log(`✗ ${relative('.', path)}: ${found.join('; ')}`);
    continue;
  }

  const ext = extname(path).toLowerCase();
  let output;
  let how;
  if (needsResave || ext === '.webp') {
    output = await resave(path, data);
    how = 're-saved';
  } else if (metadata) {
    output = ext === '.png' ? stripPng(data) : stripJpeg(data);
    how = 'metadata removed, image unchanged';
  }
  writeFileSync(path, output);
  console.log(`✓ ${relative('.', path)}: ${how}, ${kb(data.length)} → ${kb(output.length)}`);

  const left = (await inspect(output)).found;
  if (left.length > 0) {
    failed++;
    console.log(`  still: ${left.join('; ')}`);
  }
}

if (failed > 0 && checkOnly) {
  console.log(`\n${failed} image(s) need fixing. Run "npm run photos", then add the changed files again.`);
}
process.exit(failed > 0 ? 1 : 0);
