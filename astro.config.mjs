import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://eddimas.github.io', // Use to generate your sitemap and canonical URLs in your final build.
  // base: '/my-repo',
  trailingSlash: 'always', // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark'
      }
    },
  },
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
  ],
  prefetch: true,
  experimental: {
    contentCollectionCache: true,
    i18n: {
      defaultLocale: "en",
      locales: ["en", "es", "pt-br"]
    }
  }
});
