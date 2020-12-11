module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx, ./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'primary': ['Space Mono', 'monospace'],
      'secondary': ['Nanum Pen Script', 'cursive']
    },
    borderRadius: {
      DEFAULT: '9px'
    },
    extend: {
      colors: {
        primary: '#FFB300',
        secondary: '#272727',
        bgColor: '#2E3034'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
