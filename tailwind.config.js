/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        varPink: "#E70FAA",
        varBlue: "#13B0F5"
      }
    },
  },
  plugins: [],
}

