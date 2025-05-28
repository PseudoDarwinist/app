/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        'brilliant-green': '#00C985',
        'brilliant-blue': '#3B82F6',
        'brilliant-purple': '#8B5CF6',
        'brilliant-orange': '#F59E0B',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out infinite 1s',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'brilliant': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'brilliant-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}