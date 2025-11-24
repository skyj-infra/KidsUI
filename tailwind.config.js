/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        tungsten: ["var(--font-tungsten)"],
        superjoyful: ["var(--font-superjoyful)"],
      },
    },
  },
  plugins: [],
};
