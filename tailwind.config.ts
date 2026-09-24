import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#0f4a3c",
          dark: "#0a3329",
          light: "#1c6b57",
        },
        sand: {
          DEFAULT: "#f6f1e7",
          dark: "#ece3d1",
        },
        gold: {
          DEFAULT: "#b8925a",
          light: "#d6b78a",
        },
        ink: "#1c2420",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
