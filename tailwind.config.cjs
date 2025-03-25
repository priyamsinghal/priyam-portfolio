/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0070F3',    // Main blue accent
        dark: {
          100: '#666666',      // Lightest text
          200: '#444444',      // Secondary text
          300: '#111111',      // Primary text
        },
        light: {
          100: '#FFFFFF',      // White
          200: '#F5F5F5',      // Light background
          300: '#EEEEEE',      // Border colors
        }
      }
    },
  },
  plugins: [],
}