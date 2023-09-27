/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#222222',
        'card-blue': '#390099',
        'card-orange': '#FF5400',
        'card-pink': '#FF0054',
        'card-dark-pink': '#9E0059',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}