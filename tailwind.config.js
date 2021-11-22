module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          900: '#683545',
          300: '#F9C5B3',
          100: '#F0E2DA'
        },
        gray: {
          500: '#6C6C6C',
          200: '#F9F9F9'
        },
        orange: {
          500: '#F2BF5E',
          800: '#D99543'
        },
        yellow: {
          200: '#F2DD72'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
