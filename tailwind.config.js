/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}