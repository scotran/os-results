module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        75: 'repeat(75, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        75: 'repeat(75, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      'display-sans': ['Noto Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
