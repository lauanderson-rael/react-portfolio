import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    historyApiFallback: true, // Garante que o roteamento de páginas seja tratado pelo React Router
    proxy: {
      '/api': {
        target: 'https://backend-instabytes-776727787744.southamerica-east1.run.app/posts',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  base: '/', // Adicionando o base corretamente

});
