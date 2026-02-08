/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // Blue-600 modern
          light: "#60a5fa", // Blue-400
          dark: "#1d4ed8", // Blue-700
        },
        secondary: {
          DEFAULT: "#475569", // Slate-600 modern
          light: "#64748b", // Slate-500
        },
        background: {
          light: "#f8fafc", // Slate-50 modern
          dark: "#0f172a", // Slate-900 modern
        },
        accent: "#06b6d4", // Cyan-500 modern
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(circle at 30% 50%, #f0f9ff, #e0f2fe 70%)",
        "hero-dark": "radial-gradient(circle_at_30%_50%,#0f172a,#020617_70%)",
        "hero-pattern": `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h8v8H0zM12 0h8v8h-8zM24 0h8v8h-8zM0 12h8v8H0zM12 12h8v8h-8zM24 12h8v8h-8zM0 24h8v8H0zM12 24h8v8h-8zM24 24h8v8h-8z'/%3E%3C/g%3E%3C/svg%3E")`,
      },
      boxShadow: {
        soft: "0 8px 32px rgba(59, 130, 246, 0.15)", // Modern soft shadow
        card: "0 4px 12px rgba(31, 41, 55, 0.08)", // Modern card shadow
        glow: "0 0 30px rgba(59, 130, 246, 0.4)", // Modern glow
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
};
