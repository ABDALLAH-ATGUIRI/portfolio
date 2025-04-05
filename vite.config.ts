import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "@react-pdf/renderer"], // Pre-bundle React explicitly
    exclude: ["lucide-react"],
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    sourcemap: false, // Set to true temporarily to debug
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react"],
          icons: ["lucide-react"],
          pdf: ["@react-pdf/renderer"],
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: true,
  },
});
