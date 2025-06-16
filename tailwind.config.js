/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2f4f45',  // Dark green
        secondary: '#87774f',  // Gold/brown
      },
    },
  },
  plugins: [],
};
