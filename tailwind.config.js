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
        "horizon": "#383B4B",
     },
     fontFamily: {
        'bele': ['Bellefair', 'serif'],
     },
     textUnderlineOffset: {
      32: '26px',
      16: '10px',
    },
    animation: {
      "spin-slow": "spin 6s linear infinite",
    }
    },
    
  },
  plugins: [],
}

