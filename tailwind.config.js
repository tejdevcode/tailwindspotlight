/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './*html'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', '"Open Sans"'],
      'h2': ['"Alfa Slab One"', '"Open Sans"'],
      'h3': ['"Bebas Neue"', '"Open Sans"']
    },
    colors: {
      'uibrown': '#3d2514',
      'uired': '#bf2222',
      'uiyellow': '#ffc045',
    },
    extend: {},
  },
  plugins: [],
}