/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a2e',
        primary: '#4361ee',
        secondary: '#3f37c9',
        accent: '#4cc9f0',
        light: '#f8f9fa'
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
