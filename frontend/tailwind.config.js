/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      // colors: {
      //   themeCol: "#fb8500"
      // }
    },
  },
  plugins: [],
}