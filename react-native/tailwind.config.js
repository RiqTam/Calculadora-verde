module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#4A4A4A',
        green:{
          light: '#70C900',
          medium: '#52AA20',
          dark: '#188216'
        },
        white: '#FAFAFA',
        red:{
          DEFAULT: '#E72C2C',
          dark: '#710808'
        },
        textLight: '#c5c5c5',
        yellow:{
          DEFAULT: '#F5F867',
          dark: '#9D9700'
        }
      },
      borderWidth:{
        '20': '20px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
