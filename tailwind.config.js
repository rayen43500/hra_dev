/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(24, 24, 24, 0.4)',
        'glow-lg': '0 0 30px rgba(24, 24, 24, 0.6)',
        'glow-orange': '0 0 15px rgba(255, 122, 0, 0.4)',
        'glow-orange-lg': '0 0 30px rgba(255, 122, 0, 0.6)',
      },
      dropShadow: {
        'glow': '0 0 15px rgba(24, 24, 24, 0.4)',
        'glow-lg': '0 0 30px rgba(24, 24, 24, 0.6)',
        'glow-orange': '0 0 15px rgba(255, 122, 0, 0.4)',
        'glow-orange-lg': '0 0 30px rgba(255, 122, 0, 0.6)',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 122, 0, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 122, 0, 0.8)' },
        }
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
      // Améliorations pour mobile
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} 