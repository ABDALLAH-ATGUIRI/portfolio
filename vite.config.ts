import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'Porftolio',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@react-pdf/rendeurer'],
  },
  build: {
    chunkSizeWarningLimit: 600, // Slightly increased from default 500 kB
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
});