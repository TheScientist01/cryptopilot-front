/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "card-100": "0 0 10px 0 rgba(0,0,0,0.1)",
        "card-200": "0 0 10px 0 rgba(0,0,0,0.2)",
        "card-300": "0 0 10px 0 rgba(0,0,0,0.3)",
        "card-400": "0 0 10px 0 rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
}
