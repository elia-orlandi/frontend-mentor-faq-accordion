/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['WorkSans', 'sans-serif'],
      },
      colors: {
        'fuchsia-pink': {
          '50': '#fbf5fe',
          '100': '#f6eafd',
          '200': '#edd3fb',
          '300': '#e2b1f6',
          '400': '#d283ef',
          '500': '#b139de',
          '600': '#a133c6',
          '700': '#8727a4',
          '800': '#702286',
          '900': '#5f216e',
          '950': '#3c0a48',
        }
      }
    }
  },
  plugins: [],
}