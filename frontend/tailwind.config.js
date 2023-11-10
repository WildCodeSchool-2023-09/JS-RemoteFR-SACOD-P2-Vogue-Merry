/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-heart": {
          50: "#f9f5ff",
          100: "#f1e9fe",
          200: "#e6d7fd",
          300: "#d2b7fb",
          400: "#b789f7",
          500: "#9c5bf1",
          600: "#853ae3",
          700: "#6e28c3",
          800: "#6026a3",
          900: "#4f2083",
          950: "#340b60",
        },
      },
      backgroundImage: {
        "fond-ok": "url('./assets/potionclassroom-animation-ok.gif')",
        "fond-false": "url(./assets/potionclassroom-animation-ok.gif')",
      },
    },
  },
  plugins: [],
};
