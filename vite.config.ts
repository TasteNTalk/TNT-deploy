import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 4000, // Port for the frontend (adjust if necessary)
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
