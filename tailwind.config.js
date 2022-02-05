module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '1500': '1500ms',
        '2000': '2000ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
