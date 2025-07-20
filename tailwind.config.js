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
          50: '#f3eeff',
          100: '#e4d9ff',
          200: '#c7b3ff',
          300: '#a98dff',
          400: '#8b66ff',
          500: '#6C2BD9', // Couleur principale - violet profond
          600: '#5a24b5',
          700: '#4a148c',
          800: '#3a1078',
          900: '#2a0c64',
          950: '#1e084a',
          DEFAULT: '#6C2BD9',
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
          DEFAULT: '#f97316',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(108, 43, 217, 0.4)',
        'glow-lg': '0 0 30px rgba(108, 43, 217, 0.6)',
        'glow-orange': '0 0 15px rgba(249, 115, 22, 0.4)',
        'glow-orange-lg': '0 0 30px rgba(249, 115, 22, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
    },
  },
  plugins: [],
} 