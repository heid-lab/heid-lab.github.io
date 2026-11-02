// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from the root of https://heid-lab.github.io/ (the repo is
// named heid-lab.github.io), so internal links are written as root paths like
// "/team". If it ever moves under a sub-path, set `base` here and prefix them.
export default defineConfig({
  site: 'https://heid-lab.github.io',
  build: {
    // Put Astro's bundled CSS and JS in dist/assets/ instead of the default
    // dist/_astro/. File names inside are still hashed, so browsers fetch the
    // new version whenever a file changes.
    assets: 'assets',
  },
});
