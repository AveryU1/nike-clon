/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: "url('./public/assets/nike-banner.webp')",
      colors: {
        gray: "#F2F2F2",
        "light-gray": "#FCFBFB",
        black: "#161617",
        "light-black": "#474747",
      },
    },
    screens: {
      'xs': {'min': '375px', 'max': '639px'},
      ...defaultTheme.screens,
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
  },
  plugins: [],
},
}
