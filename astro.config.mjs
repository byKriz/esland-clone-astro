import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca'],
    routing: {
      prefixDefaultLocale: false
    }
    // fallback: {
    //   ca: 'es',
    // }
  },
  adapter: vercel()
});