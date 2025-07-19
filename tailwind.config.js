/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C2BD9',
          50: '#F3EEFF',
          100: '#E4D9FF',
          200: '#C7B3FF',
          300: '#A98DFF',
          400: '#8B66FF',
          500: '#6C2BD9', // Couleur principale
          600: '#5A24B5',
          700: '#4A148C',
          800: '#3A1078',
          900: '#2A0C64',
        },
        secondary: {
          DEFAULT: '#FF8A00',
          50: '#FFF8E6',
          100: '#FFECC2',
          200: '#FFD280',
          300: '#FFB84D',
          400: '#FFA01A',
          500: '#FF8A00', // Couleur secondaire
          600: '#E67A00',
          700: '#CC6D00',
          800: '#B35F00',
          900: '#994F00',
        },
        dark: {
          DEFAULT: '#2D2E3A',
          50: '#F5F5F7',
          100: '#EBEBEF',
          200: '#D1D1D9',
          300: '#B7B7C3',
          400: '#9D9DAD',
          500: '#7A7A8C',
          600: '#5C5C6B',
          700: '#44444F',
          800: '#2D2E3A', // Couleur sombre
          900: '#1A1A22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(108, 43, 217, 0.5)',
        'glow-orange': '0 0 15px rgba(255, 138, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 