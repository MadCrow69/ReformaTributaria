/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#213147',
        secondary: '#102D72',
        accent: '#385DA1',
        highlight: '#A8EAFF',
      },
    },
  },
  plugins: [],
};