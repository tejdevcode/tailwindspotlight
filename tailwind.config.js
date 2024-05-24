/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './*html'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', '"Open Sans"'],
      'h1fm': ['"Alfa Slab One"', '"Open Sans"'],
      'h3fm': ['"Bebas Neue"', '"Open Sans"']
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'uibrown': '#3d2514',
      'uired': '#bf2222',
      'uiyellow': '#ffc045',
    }),
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }], // body fontSize 16px
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px body big fontsize 20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }], // 25px
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }], //title top fontsize 29px
      '4xl': ['2.6rem', { lineHeight: '2.5rem' }], //heading 3, h3 fontsize 41.67px
      '5xl': ['3.15rem', { lineHeight: '1' }], //heading 2, h2 fontsize 50px
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      'h1': ['7.15rem', { lineHeight: '1.2' }], //heading 1, h1 fontsize 114px
      'h2': ['3.15rem', { lineHeight: '1' }], //heading 2, h2 fontsize 50px
      'h3': ['2.6rem', { lineHeight: '2.5rem' }], //heading 3, h3 fontsize 41.67px
    },
    extend: {},
  },
  plugins: [],
}