import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsmedium: ["var(--font-poppinsmedium)"],
        poppinssemibold: ["var(--font-poppinssemibold)"],
        poppinsbold: ["var(--font-poppinsbold)"],
      },
      colors:{
        primary: "#B88E2F",
        secondary: "#FFF3E3",
        tertiary: "#F4F5F7",
        fontprimary: "#333333",
        fontsecondary: "#666666",
        fonttertiary: "#3A3A3A",
        fontquaternary: "#898989",
        bgred: "#E97171",
        bggreen: "#2EC1AC",
        bgprimary: "#FCF8F3",
        bgdark: "#616161",
        bggray: "#9F9F9F"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
