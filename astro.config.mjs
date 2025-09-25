import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://payshiga.github.io/website/',
  base: '/website/',   // 👈 this is critical for GitHub project pages
});
