import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["var(--font-garamond)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      colors: {
        paper: "#faf8f3",
        "paper-dark": "#f0ece3",
        ink: "#1a1714",
        "ink-mid": "#4a4540",
        "ink-light": "#8a8078",
        crimson: "#8b1a1a",
        "crimson-light": "#fdf2f2",
        rule: "#c8c0b4",
        "rule-strong": "#9a9088",
      },
    },
  },
  plugins: [],
};

export default config;
