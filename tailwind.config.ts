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
        "primary-darker": "#1F557E",
        "primary-dark": "#2E7FBD",
        primary: "#3DA9FC",
        "primary-light": "#9ED4FD",
        "primary-lighter": "#CEE9FE",
        "secondary-darker": "#3C1119",
        "secondary-dark": "#782333",
        secondary: "#EF4565",
        "secondary-light": "#F7A2B2",
        "secondary-lighter": "#FBD0D8",
        light: "#F2F5F6",
        dark: "#094067",
        "dark-light": "#808A93",
        "dark-lighter": "#BFC5C9",
        "error-primary": "#FF4E32",

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
