/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'purple': '#D254D1',
        'black': '#0F0F0F',
        'blue': '#2F66EE',
        'yellow': '#FFC35A',
        'green': '#20BF6C',
        'grey': '#1B1B1B',
        'lightGrey':"#343434"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backdropBrightness: {
        25: '.25'
      },
    },
    plugins: [],
  }

} 