/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'powderblue': '#A8DADC'
      },
      backgroundImage: {
        'image': "url('./assets/listing1.png')",
        'card1': "url('./assets/listing2.png')",
        'card2': "url('./assets/listing3.png')",
        'card3': "url('./assets/listing4.png')"
      }
    },
  },
  plugins: [],
}
