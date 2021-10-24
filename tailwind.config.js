module.exports = {
  mode: 'jit', // enable when in production
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    fontFamily: {
      'display-sans': ['Noto Sans', 'sans-serif'],
      'crimson-semi-bold': ['Crimson Text', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
