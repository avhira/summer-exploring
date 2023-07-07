/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7F7770',
        secondary: '#DEB37E',
        tersier: '#E2A355',
      },
      screens: {
        mobile: '320px',
      },
    },
  },
  plugins: [],
};
