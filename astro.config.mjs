// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from the root of https://heid-lab.github.io/ (the repo is
// named heid-lab.github.io, so GitHub Pages serves it at the domain root, not
// under a sub-path). `base: '/'` means internal links and assets get no prefix.
export default defineConfig({
  site: 'https://heid-lab.github.io',
  base: '/',
  // Emit clean directory-style URLs (/team/ rather than /team.html) so the
  // routes read as nicely as the folder structure.
  trailingSlash: 'ignore',
  build: {
    // Keep asset filenames stable & predictable rather than hashed, so the
    // occasional hand-referenced file stays findable.
    assets: 'assets',
  },
});
