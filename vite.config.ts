import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  optimizeDeps: {
    include: ["react", "react-dom", "@react-pdf/renderer"],
    exclude: ["lucide-react"],
  },
  build: {
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
  root: ".",
  publicDir: "public",
  base: "/portfolio/",
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
    },
  },
}));
