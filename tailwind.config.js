/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nm-blue': {
          50: '#f0f4f7',
          100: '#d9e3eb',
          200: '#b8c5d0',
          300: '#9aacbd',
          400: '#7a91a8',
          500: '#5c7693',
          600: '#4a5f77',
          700: '#3a4a5c',
          800: '#2a3642',
          900: '#1a2129',
        },
        'nm-navy': {
          DEFAULT: '#1e2d3d',
          light: '#2a3f54',
          dark: '#151f2b',
        },
        'nm-cream': '#f8f6f3',
        'nm-warm': '#e8e4df',
      },
      fontFamily: {
        'display': ['Noto Serif KR', 'serif'],
        'body': ['Pretendard', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mountain': 'linear-gradient(to bottom, #b8c5d0 0%, #7a91a8 50%, #3a4a5c 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
