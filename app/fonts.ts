import localFont from "next/font/local";

// Poppins (multiple weights)
export const poppins = localFont({
  src: [
    { path: "../public/fonts/poppins/Poppins-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
});

// Super Joyful
export const superJoyful = localFont({
  src: "../public/fonts/superjoyful/SuperJoyful-lxwPq.ttf",
  variable: "--font-superjoyful",
});

// Tungsten
export const tungsten = localFont({
  src: "../public/fonts/tungsten/Tungsten.otf",
  variable: "--font-tungsten",
});
