import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/", // Replace with your GitHub Pages repo name
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["@react-pdf/rendeurer"],
  },
  build: {
    chunkSizeWarningLimit: 600, // Already set, but we'll optimize further
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
