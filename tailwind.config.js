/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // xl: { min: "1040px", max: "1280px" },
        xs: { min: "0px", max: "640px" },
        gf: { min: "0px", max: "280px" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
