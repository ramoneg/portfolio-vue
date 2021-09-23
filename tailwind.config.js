const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const primary = colors.red

module.exports = {
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        heading: ["Source Sans Pro"],
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: { ...primary, 950: '#0a0000' }
      },
      boxShadow: {
        primary: `0 4px 14px 0 rgba(${primary[200]}, 1)`,
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scale: ['active']
    }
  }
}
