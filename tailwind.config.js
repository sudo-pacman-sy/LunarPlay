/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStopPositions: {
        5: "5%",
        1: "1%",
        2: "2%",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        cinzel: ["Cinzel Decorative", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
