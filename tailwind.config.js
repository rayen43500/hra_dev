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
          DEFAULT: '#0056B3',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0056B3', // Couleur principale - bleu professionnel
          600: '#0049A6',
          700: '#003C8A',
          800: '#002F6D',
          900: '#002251',
        },
        secondary: {
          DEFAULT: '#FF8A00',
          50: '#FFF8E6',
          100: '#FFECC2',
          200: '#FFD280',
          300: '#FFB84D',
          400: '#FFA01A',
          500: '#FF8A00', // Couleur secondaire - orange
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
        'glow': '0 0 15px rgba(0, 86, 179, 0.5)',
        'glow-orange': '0 0 15px rgba(255, 138, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 