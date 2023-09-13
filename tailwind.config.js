/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ash": "#D0D6F9",
        "navColor": "#303030",
     },
     fontFamily: {
        'bele': ['Bellefair', 'serif'],
     },
     textUnderlineOffset: {
      32: '26px',
    }
    },
    
  },
  plugins: [],
}

