/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sistema unificado de colores
        primary: "#fff3db", // Primary Cream
        secondary: "#f59e0b", // Secondary Amber
        accent: "#fbbf24", // Accent Yellow
        locked: "#fef3c7", // Button Locked

        // Colores de fondo
        background: "#0f0f0f", // Background principal
        "background-secondary": "#111827", // Background secundario

        // Colores de texto
        "text-primary": "#fff3db",
        "text-secondary": "#9ca3af",
        "text-muted": "#6b7280",

        // Colores de bordes
        "border-primary": "rgba(255, 243, 219, 0.1)",
        "border-secondary": "rgba(245, 158, 11, 0.3)",

        // Colores de estado
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
      },
      transitionDuration: {
        800: "800ms",
        1000: "1000ms",
        1200: "1200ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
