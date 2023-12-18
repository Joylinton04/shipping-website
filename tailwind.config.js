/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'header': ['M PLUS Code Latin', 'monospace'],
      },
      screens: {
        '2xxl': {'max': '1535px'},
        'xxl': {'max': '1279px'},
        'lgg': {'max': '1024px'},
        'mdd': {'max': '800px'},
        'ssm': {'max': '639px'},
      }
    },
  },
  plugins: [],
}

