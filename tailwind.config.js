/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // path куда надо компилировать tailwind в обычный css
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#F53838',
        darkBlue: '#0B132A',
        gray: '#4F5665',
        lightGray: '#AFB5C0',
      },
      fontSize: {
        primary: '16px',
        medium: '35px',
        lg: '50px',
      },
      boxShadow: {
        'md': '0px 25px 50px -20px #F53838',
        'widget': '0px 25px 50px -30px #F53838',
        'primary': '0px 20px 50px -20px #F53838',
      },
    },
  },
  plugins: [
    // plugin(({addComponents, theme, addUtilities}) => {
    //   addComponents()
    // })
  ],
}
