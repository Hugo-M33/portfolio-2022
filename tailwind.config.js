/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'light': {
        DEFAULT: '#F5F7F5',
        'accent': '#9DC3C8',
      },
      'main': '#F7C63E',
      'dark': {
        DEFAULT: '#1D6364',
        'accent': '#7D868C',
        '700': '#13313b',
      }
    }
  },
  plugins: [],
}
