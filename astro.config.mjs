import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://leanna-bakehouse.pages.dev',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
