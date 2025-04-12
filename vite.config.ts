import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/portfolio/" : "/",
  optimizeDeps: {
    include: ["react", "react-dom", "@react-pdf/renderer"],
    // exclude: ["lucide-react"],
  },
  build: {
    rollupOptions: {
      input: {
        main: './src/main.tsx',
      },
    },
    outDir: "dist",
    sourcemap: false,
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
  publicDir: "public",
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
    },
  },
}));
