/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e40af", // Blue-800, matches CV titles
          light: "#3b82f6", // Blue-500, for hover/active
        },
        secondary: {
          DEFAULT: "#4b5563", // Gray-600, matches CV body text
          light: "#6b7280", // Gray-500, for subtle accents
        },
        background: {
          light: "#f3f4f6", // Gray-100, matches CV chip backgrounds
          dark: "#0f172a", // Slate-900, for dark mode
        },
        accent: "#bfdbfe", // Blue-200, matches CV borders
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(circle at 30% 50%, #f3f4f6, #e5e7eb 70%)",
        "hero-dark": "radial-gradient(circle_at_30%_50%,#f8fafc,#e2e8f0_70%)",
        "hero-pattern": `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e40af' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 0h8v8H0zM12 0h8v8h-8zM24 0h8v8h-8zM0 12h8v8H0zM12 12h8v8h-8zM24 12h8v8h-8zM0 24h8v8H0zM12 24h8v8h-8zM24 24h8v8h-8z'/%3E%3C/g%3E%3C/svg%3E")`,
      },
      boxShadow: {
        soft: "0 4px 20px rgba(59, 130, 246, 0.15)", // Blue-500, subtle for both modes
        card: "0 2px 8px rgba(31, 41, 55, 0.1)", // Gray-800, for cards
      },
    },
  },
};
