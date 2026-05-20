import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e4ff",
          200: "#b8caff",
          300: "#8aa6ff",
          400: "#5b7dff",
          500: "#3a5bf5",
          600: "#2a44d6",
          700: "#2236a9",
          800: "#1f2f87",
          900: "#1c2a6e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
