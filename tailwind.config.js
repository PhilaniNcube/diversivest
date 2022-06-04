module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
          '100': '100px auto',
          'featured': 'repeat(2, auto)',
          'gallery': '20vw 1fr 200px'
        },
        gridTemplateRows: {
          'featured': 'repeat(2, auto)'
        },
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
