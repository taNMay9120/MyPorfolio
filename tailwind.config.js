/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark": "#0f172a",
      "light": "#f8fafc",
      "light/80": "rgba(248, 250, 252, 0.8)",
      "light/70": "rgba(248, 250, 252, 0.7)",
      "light/60": "rgba(248, 250, 252, 0.6)",
      "light/50": "rgba(248, 250, 252, 0.5)",
      "light/40": "rgba(248, 250, 252, 0.4)",
      "light/20": "rgba(248, 250, 252, 0.2)",
      "light/10": "rgba(248, 250, 252, 0.1)",
      "primary": "#0ea5e9",
      "primary/60": "rgba(14, 165, 233, 0.6)",
      "primary/50": "rgba(14, 165, 233, 0.5)",
      "primary/40": "rgba(14, 165, 233, 0.4)",
      "primary/30": "rgba(14, 165, 233, 0.3)",
      "primary/20": "rgba(14, 165, 233, 0.2)",
      "primary/10": "rgba(14, 165, 233, 0.1)",
      "secondary": "#1e293b",
      "secondary/80": "rgba(30, 41, 59, 0.8)",
      "secondary/50": "rgba(30, 41, 59, 0.5)",
      "secondary/30": "rgba(30, 41, 59, 0.3)",
      "accent": "#0284c7",
      "accent/20": "rgba(2, 132, 199, 0.2)",
      "accent/10": "rgba(2, 132, 199, 0.1)",
      "red": {
        "500": "#ef4444",
        "600": "#dc2626",
      },
      "yellow": {
        "400": "#facc15",
      },
      "slate": {
        "600": "#475569",
      },
      "transparent": "transparent",
      "white": "#ffffff",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
