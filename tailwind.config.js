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
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#181818', // Couleur principale - noir profond
          600: '#171717',
          700: '#141414',
          800: '#121212',
          900: '#0d0d0d',
          950: '#080808',
          DEFAULT: '#181818',
        },
        secondary: {
          50: '#fff8ed',
          100: '#ffefd5',
          200: '#ffdaa8',
          300: '#ffbe70',
          400: '#ff9a36',
          500: '#ff7a00', // Couleur secondaire - orange vif
          600: '#ff6000',
          700: '#cc4d00',
          800: '#a33d00',
          900: '#873400',
          950: '#471a00',
          DEFAULT: '#ff7a00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(24, 24, 24, 0.4)',
        'glow-lg': '0 0 30px rgba(24, 24, 24, 0.6)',
        'glow-orange': '0 0 15px rgba(255, 122, 0, 0.4)',
        'glow-orange-lg': '0 0 30px rgba(255, 122, 0, 0.6)',
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