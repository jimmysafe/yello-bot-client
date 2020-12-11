module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx, ./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'primary': ['Space Mono', 'monospace'],
      'secondary': ['Montserrat', 'sans serif']
    },
    extend: {
      colors: {
        primary: '#FFB300',
        secondary: '#272727',
        bgColor: '#2E3034'
      },
      borderRadius: {
        DEFAULT: '9px'
      },
      maxWidth: {
        'card': '720px'
      },
      height: {
        'icon': '64px'
      },
      width: {
        'icon': '64px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
