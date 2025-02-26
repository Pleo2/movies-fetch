/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
    './presentation/**/*.{js,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'Geist-regular': ['Geist-regular', 'font-sans'],
        'Geist-bold': ['Geist-bold', 'font-sans'],
        'Geist-medium': ['Geist-medium', 'font-sans'],
      },
    },
  },
  plugins: [],
};
