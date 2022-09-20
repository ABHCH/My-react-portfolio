/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
      'my-border-color': '#c0c0c1;'
      },
      fontFamily: {
        'my-font': ['Dangrek', 'cursive'],
      },
    },
  },
  plugins: [],
}
