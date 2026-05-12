// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        migra: {
          primary: '#1F655B',
          secondary: '#2E8B7B',
          accent: '#9FC8BE',
          border: '#DCDCDC',
          bg: '#F3F3F3',
          warning: '#F39A32',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
