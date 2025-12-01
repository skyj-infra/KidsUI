/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
      fontFamily: {
        poppins: [
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        tungsten: [
          "var(--font-tungsten)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        superjoyful: [
          "var(--font-superjoyful)",
          "cursive",
        ],
      },
    },
  },
};
