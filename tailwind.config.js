/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-gray':'#A0AEC0',
        'custom-gray-context':'#718086',
        'custom-green-button':'#4FD1C5',
        'custom-gray-button':'#718096',
      },
      backgroundColor:{
        'custom-gray':'#f2f2f2'
      },
      fontFamily:{
        Roboto: ['Roboto', 'sans-serif']
      } 
    },
  },
  plugins: [],
}

