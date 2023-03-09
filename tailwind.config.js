/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        brand: ["Plus Jakarta", "sans-serif"],
      },

      colors: {
        brand: {
          100: "#CCDEFF",
          200: "#99BAFF",
          300: "#6694FF",
          400: "#3F74FF",
          500: "#0040FF",
          600: "#0031DB",
          700: "#0024B7",
          800: "#001993",
          900: "#00117A",
        },
      },
    },
  },

  plugins: [],
};
