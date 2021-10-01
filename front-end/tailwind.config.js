module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
    colors:{
      black: '#4A4A4A',
      gray: '#B0B0B0',
      green:{
        DEFAULT:'#70C900',
        dark: '#188216'
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
