// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  env: {
    schema: {
      MONGO_URI: envField.string({ context: 'server', access: 'secret'})
    }
  }
});