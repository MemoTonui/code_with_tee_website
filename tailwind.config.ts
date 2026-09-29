import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { poppins: ["var(--font-poppins)", "sans-serif"] },
      colors: {
        ink: "#17233C",
        pink: "#E91E63",
        mint: "#61C4CC",
        yellow: "#FFD447",
        purple: "#44357D",
        cream: "#FFFDF7",
        peach: "#FFE8D7",
        blue: "#DCEBFF",
        teal: "#61C4CC",
        dark: "#17233C",
      },
      boxShadow: {
        card: "0 12px 30px rgba(43,36,85,.08)"
      }
    }
  },
};
export default config;
