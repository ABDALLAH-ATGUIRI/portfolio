import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/", // Matches your repo name for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom", "@react-pdf/renderer"],
    exclude: ["lucide-react"],
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    sourcemap: false,
    modulePreload: { polyfill: false },
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
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
    headers: {
      "Permissions-Policy": "geolocation=(), camera=(), microphone=()",
    },
  },
  preview: {
    headers: {
      "Permissions-Policy": "geolocation=(), camera=(), microphone=()",
    },
  },
});
