import { nextui } from "@nextui-org/react";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heallar-blue': '#C2FFFF',
        'heallar-primary': "#39CCCC"
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    typography,
  ],
};

export default config;
