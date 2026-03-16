/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-flow': {
          '0%, 100%': {
            'stop-color': 'var(--tw-gradient-from)',
          },
          '50%': {
            'stop-color': 'var(--tw-gradient-to)',
          },
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 3s ease infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      colors: {
        // MatriCx Brand Primary - Jaune
        primary: {
          50: '#FFFEF7',
          100: '#FFFADB',
          200: '#FFF4B8',
          300: '#FFEC85',
          400: '#FFE052',
          500: '#FDC300',  // Couleur principale
          600: '#E6B000',
          700: '#CC9D00',
          800: '#B38A00',
          900: '#996F00',
        },
        // MatriCx Brand Secondary - Gris
        secondary: {
          50: '#FAFAFA',
          100: '#F4F4F4',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#575756',  // Couleur principale
          600: '#4F4F4E',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // MatriCx Brand Accent - Bleu
        accent: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0080AF',  // Couleur principale
          600: '#0073A1',
          700: '#006691',
          800: '#005A82',
          900: '#004D73',
        },
        // Grays MatriCx compatibles
        gray: {
          50: '#FAFAFA',
          100: '#F4F4F4',
          200: '#E5E5E5',
          400: '#A3A3A3',
          500: '#575756',  // MatriCx Gray principal
          600: '#4F4F4E',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        // MatriCx Typography System - Montserrat uniquement
        sans: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}