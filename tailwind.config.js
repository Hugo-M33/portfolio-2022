/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(75%)', opacity: '0%' },
          '100%': { transform: 'translateY(0%)', opacity: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0%' },
          '75%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-1': 'fadeIn 1s ease-out',
        'fade-in-2': 'fadeIn 2s ease-out',
        'fade-in-3': 'fadeIn 3s ease-out',
      },
      boxShadow: {
        '-xl': '0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1)',
      }
    },
    colors: {
      'light': {
        'shades': '#F0F4EB',
        'accent': '#DE6F70',
      },
      'main': '#F9A357',
      'dark': {
        'shades': '#45849C',
        'accent': '#38C4DD',
        '700': '#13313b',
      }
    }
  },
  plugins: [],
}
