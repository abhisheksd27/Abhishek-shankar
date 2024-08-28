/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235", // Custom shade of black
        },
        blue: {
          500: "#2b77e7",
        },
        purple: {
          500: "#6D28D9",
        },
        red: {
          500: "#EF4444",
        },
        green: {
          500: "#10B981",
        },
        yellow: {
          500: "#FBBF24",
        },
        cyan: {
          500: "#06B6D4",
        },
        teal: {
          500: "#14B8A6",
        },
        pink: {
          500: "#EC4899",
        },
        indigo: {
          500: "#4F46E5",
        },
        lime: {
          500: "#84CC16",
        },
      },
      backgroundColor: {
        'btn-back-red': '#EF4444',
        'btn-back-blue': '#2b77e7',
        'btn-back-green': '#10B981',
        'btn-back-purple': '#6D28D9',
        'btn-back-yellow': '#FBBF24',
        'btn-back-cyan': '#06B6D4',
        'btn-back-teal': '#14B8A6',
        'btn-back-pink': '#EC4899',
        'btn-back-indigo': '#4F46E5',
        'btn-back-lime': '#84CC16',
        'btn-back-gray': '#D5DAE1',
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
