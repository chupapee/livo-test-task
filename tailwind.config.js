/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#F53838',
        darkBlue: '#0B132A',
        gray: '#F8F8F8',
        grayPrimary: '#4F5665',
        lightGray: '#AFB5C0',
        green: '#2FAB73'
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
      keyframes: {
        smooth: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        }
      },
      animation: {
        smooth: "smooth 2.5s ease-in-out"
      }
    },
  },
}