/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#ef4444",
          light: "#fee2e2",
          dark: "#dc2626",
        },
        surface: {
          DEFAULT: "#fafafa",
          raised: "#ffffff",
          muted: "#f4f4f5",
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
