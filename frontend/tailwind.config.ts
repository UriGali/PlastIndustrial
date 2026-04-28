import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#e8eef7",
          100: "#c5d4e9",
          200: "#9eb7d9",
          300: "#7799c8",
          400: "#5a84bc",
          500: "#3d6eb0",
          600: "#2d5799",
          700: "#234374",
          800: "#192f54",
          900: "#0f1c33",
        },
        accent: {
          DEFAULT: "#4E87C4",
          light:   "#7AADD9",
          dark:    "#2D5F9A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
