module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  theme: {
    fontFamily: {
      'primary': ['Space Mono', 'monospace'],
      'secondary': ['Montserrat', 'sans serif']
    },
    extend: {
      colors: {
        primary: '#FFB300',
        secondary: '#272727',
        tertiary: '#3772FF',
        bgColor: '#2E3034',
        textGrey: '#AAAAAA'
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
