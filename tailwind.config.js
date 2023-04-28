/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: "url('./public/assets/nike-banner.webp')",
      colors: {
        gray: "#F2F2F2",
        "light-gray": "#FCFBFB",
        "dark-gray": "#757575",
        black: "#111111",
        "light-black": "#474747",
      },
    },
    screens: {
      xs: { min: "375px" },
      ...defaultTheme.screens,
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
    },
    plugins: [],
  },
};
