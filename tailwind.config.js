/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tnh-dark': '#1f2937',
        'tnh-slate': '#364451',
        'tnh-slate-light': '#4a5d6b',
        'tnh-blue': '#00b0f0',
        'tnh-green': '#92d050',
        'tnh-orange': '#cc5500',
        'tnh-gold': '#f4c255',
      },
    },
  },
  plugins: [],
}
