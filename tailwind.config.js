module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
      },
    },
  },
  plugins: [],
}
