/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./Components/**/*.{js,ts,jsx,tsx,mdx}", // you have capital folder, so keep both
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f86624",   // 🔥 NOW text-primary works
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        tungsten: ["var(--font-tungsten)"],
        superjoyful: ["var(--font-superjoyful)"],
      },
    },
  },
  plugins: [],
};
