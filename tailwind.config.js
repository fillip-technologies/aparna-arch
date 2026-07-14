/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E4828', // Dark Forest Green
          dark: '#0A331C',
          light: '#1B6B3F',
        },
        secondary: {
          DEFAULT: '#008250', // Mint/Emerald Green
          light: '#97C693',
          bg: '#EFFAE5',
        },
        neutral: {
          dark: '#282626', // Charcoal
          light: '#F1F5ED', // Warm off-white
        },
        accent: {
          DEFAULT: '#9C2426', // Burgundy Red
          orange: '#AE3E09',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        navbar: ['avenir-lt-w01_85-heavy1475544', 'sans-serif'],
        bitter: ['Bitter', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
