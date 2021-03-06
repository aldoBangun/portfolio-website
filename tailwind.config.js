module.exports = {
  mode: 'jit',
  purge: ['./index.html', './js/**/*.js', './js/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          lightest: '#FDEBFF',
          light: '#F495FF',
          DEFAULT: '#E300FF',
          dark: '#9805AA',
          darker: '#250229',
          'darker-2': '#140117',
          darkest: '#0D000F'
        }
      },
      fontFamily: {
        headline: 'Inter, sans-serif',
        poppins: 'Poppins, sans-serif'
      },
      fontSize: {
        'headline': 'clamp(2rem,12vw,4rem)'
      }
    },
    container: {
      center: true,
      screens: {
        '2xl': '1088px',
        xl: '1088px',
        lg: '1088px',
        md: '786px',
        sm: '640px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo')({
      empty: true
    })
  ],
}
