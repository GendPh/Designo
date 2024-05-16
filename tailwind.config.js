/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        "Peach": "#E7816B",
        "Light-Peach": "#FFAD9B",
        "Black": "#1D1C1E",
        "Black-Grey": "#333136",
        "Black-Opacity": "#979797",
        "White": "#FFFFFF",
        "White-Grey": "#F1F3F5",
      },
    },
  },
  plugins: [],
}