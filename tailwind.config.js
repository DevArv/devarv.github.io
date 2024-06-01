/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home/*.{html,js}"],
  theme: {
    extend: {
      //Background images link
      backgroundImage: {
        'bali': "url('./img/bali.jpg')",
        'chicago': "url('./img/chicago.jpg')",
        'europe': "url('./img/europe.jpg')",
        'iceland': "url('./img/iceland.jpg')",
        'LA': "url('./img/LA.jpg')",
        'miami': "url('./img/miami.jpg')",
        'newyork': "url('./img/new_york.jpg')",
        'norway': "url('./img/norway.jpg')",
        'sanfrancisco': "url('./img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('./img/sanFranciscoDesktop.jpg')",
        'seattle': "url('./img/seattle.jpg')",
        'switzerland': "url('./img/switzerland.jpg')",
        'sydney': "url('./img/sydney.jpg')",
        'yosemite': "url('./img/yosemite.jpg')",
      },
      //Color link for the project
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      //Link text colors for the project
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      //Typography link. Take into account the <link> link in the HTML
      fontFamily: {
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}