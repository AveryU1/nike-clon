/** @type {import('tailwindcss').Config} */
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
    },
    colors: {
      gray: "#F2F2F2",
      "light-gray": "#FCFBFB",
      black: "#161617",
      "light-black": "#474747",
    },
  },
  plugins: [],
};
