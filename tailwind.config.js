module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purlpe: {
          lightest: '#FDEBFF',
          light: '#F495FF',
          DEFAULT: '#E300FF',
          dark: '##9805AA',
          darkest: '#0D000F'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
