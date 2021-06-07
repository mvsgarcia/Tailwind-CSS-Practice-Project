module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        }
      }, // always put comma kapag may susunod

      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
