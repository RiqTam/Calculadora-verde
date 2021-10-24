module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
      borderRadius:{
        'xxl': '10rem'
      },
      minHeight:{
        '1/2': '50%'
      },
      height:{
        '100': '6rem'
      }
    },
    colors:{
      black: '#4A4A4A',
      gray: '#B0B0B0',
      white: {
        DEFAULT: "#FFF",
        dark: "#FAFAFA"
      },
      green:{
        DEFAULT:'#7CC72D',
        dark: '#188216',
        darker: '#014A00',
        defdark: '#569A00'
      },
      red:{
        DEFAULT: '#F12C2C',
        dark: '#710808'
      },
      blue: {
        DEFAULT: '#AFFAFF',
        dark: '#004680'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['focus']
    },
  },
  plugins: [],
};
