import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Base path for GitHub Pages or similar deployment
  base: "/portfolio/",

  // Dependency optimization (use defaults unless you have specific needs)
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["lucide-react"],
  },

  // Build configuration
  build: {
    outDir: "dist",
    sourcemap: false, // Set to true if you need source maps for debugging
    minify: "esbuild", // Default minification, you can change to 'terser' for more aggressive minification
    chunkSizeWarningLimit: 500, // Change limit if needed for large bundles
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("react/")) {
              return "react";
            }
            if (id.includes("lucide-react")) {
              return "icons";
            }
          }
        },
      },
    },
  },

  // Server and preview headers for security and privacy
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

  // Public folder configuration
  publicDir: "public", // Ensure assets in public folder are served correctly

  // Path aliases for cleaner imports
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
