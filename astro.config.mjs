import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({

  i18n:{
    defaultLocale: "es",
    locales: ["es","en"],
  },

  site: 'https://wdsevilla.github.io',
base:'/Downtown/',  
  image: {
    service: passthroughImageService(),
  },

  integrations: [tailwind(), react()]
});