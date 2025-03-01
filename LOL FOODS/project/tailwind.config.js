/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        background: '#1A1A2E',
        text: '#F7FFF7',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        logo: ['Bebas Neue', 'sans-serif'],
        accent: ['Pacifico', 'cursive'],
      },
      animation: {
        'float': 'floating 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};