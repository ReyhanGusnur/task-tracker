/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'orange-1' : '#FCD28D',
        'orange-2' : '#DE6B1F',
        'green-1' : '#9AE6B4',
        'green-2' : '#4EAF79',
        'grey-1' : '#EDF2F6',
        'grey-2' : '#A0AEC0',

      }
    },
  },
  plugins: [],
}

