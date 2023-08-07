/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chestnut': '#A33B29',
        'eerie-black': '#171D1C',
        'denim': '#045CB4',
        'old-gold': '#d2a847',
      },
    },
  },
  plugins: [],
}

