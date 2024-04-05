/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}"
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#c72f2e'
      },
      spacing: {
        '100': '650px',
      }
    },
  },
  plugins: [],
}

