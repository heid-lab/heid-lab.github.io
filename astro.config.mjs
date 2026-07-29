// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from https://heid-lab.github.io/website/, i.e. under the
// "/website/" sub-path (no custom domain). `base` makes Astro prefix that path
// onto every internal link and asset, so nothing 404s in production. Locally
// (npm run dev) the same base applies, so preview matches production exactly.
export default defineConfig({
  site: 'https://heid-lab.github.io',
  base: '/website',
  // Emit clean directory-style URLs (/team/ rather than /team.html) so the
  // routes read as nicely as the folder structure.
  trailingSlash: 'ignore',
  build: {
    // Keep asset filenames stable & predictable rather than hashed, so the
    // occasional hand-referenced file stays findable.
    assets: 'assets',
  },
});
