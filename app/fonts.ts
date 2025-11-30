// app/fonts.ts
import localFont from "next/font/local";

// Poppins (multiple weights)
export const poppins = localFont({
  src: [
    { path: "../public/fonts/poppins/Poppins-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-Italic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/poppins/Poppins-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-SemiBoldItalic.otf", weight: "600", style: "italic" },
  ],
  variable: "--font-poppins",
});

// Super Joyful
export const superjoyful = localFont({
  src: "../public/fonts/superjoyful/SuperJoyful.ttf",
  variable: "--font-superjoyful",
});

// Tungsten (you don't need all 30 files – pick one weight for now)
export const tungsten = localFont({
  src: "../public/fonts/tungsten/Tungsten-Semibold.otf",
  weight: "600",
  variable: "--font-tungsten",
});
