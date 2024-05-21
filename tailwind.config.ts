import { nextui } from "@nextui-org/react";
import typography from "@tailwindcss/typography";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
import { PluginCreator } from "tailwindcss/types/config";

// Function to add Tailwind colors as CSS variables
const addVariablesForColors: PluginCreator = ({ addBase, theme }) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, String(val)])
  );

  addBase({
    ":root": newVars,
  });
};

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'heallar-blue': '#C2FFFF',
        'heallar-primary': "#39CCCC",
      },
      boxShadow: {
        'heallar': '0 4px 6px -1px rgba(57, 204, 204, 0.1), 0 2px 4px -1px rgba(57, 204, 204, 0.06)',
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "1000% 100%, 110% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 500%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    typography,
    addVariablesForColors, // Include the function as a plugin
  ],
};

export default config;
