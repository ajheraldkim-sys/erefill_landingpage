/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#E8EFFF',
          100: '#D5E2FF',
          200: '#ADC4FF',
          300: '#7FA0FF',
          400: '#4D78FE',
          500: '#0437F2', // Primary Blue
          600: '#0329B8', // Primary Dark
          700: '#021F8F',
          800: '#02176B',
          900: '#01104D',
          DEFAULT: '#0437F2',
          dark: '#0329B8',
          soft: '#E8EFFF',
          subtle: '#F3F6FD'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          page: '#F8FAFC',
          muted: '#F1F5F9',
        },
        navy: {
          900: '#0A1128',
          800: '#14213D', // Text Primary
          700: '#1C2D54',
          600: '#283B68',
        },
        slate: {
          muted: '#5C6784', // Text Secondary
          subtle: '#828CA2',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
      },
      boxShadow: {
        'brand-glow': '0 0 25px -5px rgba(4, 55, 242, 0.35)',
        'brand-glow-lg': '0 0 45px -8px rgba(4, 55, 242, 0.45)',
        'subtle-card': '0 2px 10px -2px rgba(20, 33, 61, 0.05), 0 1px 3px -1px rgba(20, 33, 61, 0.03)',
        'card-hover': '0 12px 30px -8px rgba(20, 33, 61, 0.12), 0 4px 10px -3px rgba(20, 33, 61, 0.06)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'ripple': 'ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'scale(1.15)', opacity: '0.2' },
          '100%': { transform: 'scale(1.35)', opacity: '0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}

