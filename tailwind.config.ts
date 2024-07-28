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
        "primary-darker": "#254234",
        "primary-dark": "#37634D",
        primary: "#498467",
        "primary-light": "#A4C1B3",
        "primary-lighter": "#D1E0D9",
        "secondary-darker": "#7F4B55",
        "secondary-dark": "#CA7887",
        secondary: "#FD96A9",
        "secondary-light": "#FECAD4",
        "secondary-lighter": "#FEE5E9",
        light: "#F2F6F4",
        dark: "#011627",
        "dark-light": "#808A93",
        "dark-lighter": "#BFC5C9",
        "error-primary": "#FF0000",
      },
      fontFamily: {
        "DM Sans": ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        br: ".5em",
      },
    },
  },
  plugins: [],
};
export default config;
