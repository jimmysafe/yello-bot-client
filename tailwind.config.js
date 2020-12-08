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
        yellow: '#FAF77D',
        teal: '#B8FFF3',
        pink: '#FFDCED'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
