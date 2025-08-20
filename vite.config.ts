import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/userlist_app/',
  server: {
    proxy: {},
    watch: {},
  },
  resolve: {
    alias: {
      '@app': '/src/app',
      '@shared': '/src/shared',
      '@types': '/src/types',
    },
  },
});
