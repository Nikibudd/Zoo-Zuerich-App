import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#313131",
        foreground: "var(--foreground)",
        primary: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bdc8ff',
          300: '#8b9fff',
          400: '#5b6eff',
          500: '#3444ff',
          600: '#1721ff',
          700: '#1015eb',
          800: '#1214bc',
          900: '#141593',
          950: '#0c0c5c',
        },
        secondary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7916ff',
          700: '#6b04ff',
          800: '#5a03d6',
          900: '#4b05af',
          950: '#2c0076',
        },
        neutral: {
          50: '#f7f7f8',
          100: '#eeeef1',
          200: '#d9d9df',
          300: '#b8b9c2',
          400: '#8f919e',
          500: '#717382',
          600: '#5b5c6a',
          700: '#4a4b57',
          800: '#40414b',
          900: '#383942',
          950: '#25262d',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-outfit)'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(to right, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} satisfies Config;