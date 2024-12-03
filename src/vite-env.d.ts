/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-instabytes-776727787744.southamerica-east1.run.app/posts', // URL do back-end
        changeOrigin: true,
        secure: false,
      },
      '/api2': {
        target: 'https://backend-instabytes-776727787744.southamerica-east1.run.app/', // URL do back-end
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
