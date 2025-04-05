/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#6c757d",
        success: "#198754",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#0dcaf0",
        light: "#f8f9fa",
        dark: "#212529",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": `url("data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2330A2FF' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M4 0h8v8H4zM16 0h8v8h-8zM28 0h8v8h-8zM40 0h8v8h-8zM0 12h8v8H0zM12 12h8v8h-8zM24 12h8v8h-8zM36 12h8v8h-8zM4 24h8v8H4zM16 24h8v8h-8zM28 24h8v8h-8zM40 24h8v8h-8zM0 36h8v8H0zM12 36h8v8h-8zM24 36h8v8h-8zM36 36h8v8h-8zM4 48h8v8H4zM16 48h8v8h-8zM28 48h8v8h-8zM40 48h8v8h-8zM0 60h8v4H0zM12 60h8v4h-8zM24 60h8v4h-8zM36 60h8v4h-8z'/%3E%3C/g%3E%3C/svg%3E")`,
      }
    },
  },
};
