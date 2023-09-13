/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greyish': '#F0F0F0',
        'navy-blue': '#213555',
        'light-blue': '#4F709C',
        

      }
    },
  },
  plugins: [],
}

