module.exports = {
  mode: 'jit',
  purge: ['./index.html', './js/**/*.js'],
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
