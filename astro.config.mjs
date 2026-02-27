import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.gozeroshot.dev',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  adapter: undefined // Ensure static build
});