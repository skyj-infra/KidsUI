import localFont from "next/font/local";

// Poppins (multiple weights)
export const poppins = localFont({
   src: [
    { path: "../public/fonts/poppins/Poppins-Thin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-ThinItalic.otf", weight: "100", style: "italic" },

    { path: "../public/fonts/poppins/Poppins-ExtraLight.otf", weight: "200", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-ExtraLightItalic.otf", weight: "200", style: "italic" },

    { path: "../public/fonts/poppins/Poppins-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-LightItalic.otf", weight: "300", style: "italic" },

    { path: "../public/fonts/poppins/Poppins-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-Italic.otf", weight: "400", style: "italic" },

    { path: "../public/fonts/poppins/Poppins-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-MediumItalic.otf", weight: "500", style: "italic" },

    { path: "../public/fonts/poppins/Poppins-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-SemiBoldItalic.otf", weight: "600", style: "italic" },

    { path: "../public/fonts/poppins/Poppins-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-BoldItalic.otf", weight: "700", style: "italic" },

    { path: "../public/fonts/poppins/Poppins-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-ExtraBoldItalic.otf", weight: "800", style: "italic" },

    { path: "../public/fonts/poppins/Poppins-Black.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/poppins/Poppins-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-poppins",
});

// Super Joyful
export const superjoyful = localFont({
  src: "../public/fonts/superjoyful/SuperJoyful.ttf",
  variable: "--font-superjoyful",
});

// Tungsten
export const tungsten = localFont({
  src: [
    // Regular Width
    { path: "../public/fonts/tungsten/Tungsten-Thin.otf", weight: "100" },
    { path: "../public/fonts/tungsten/Tungsten-Light.otf", weight: "200" },
    { path: "../public/fonts/tungsten/Tungsten-XLight.otf", weight: "300" },
    { path: "../public/fonts/tungsten/Tungsten-Book.otf", weight: "400" },
    { path: "../public/fonts/tungsten/Tungsten-Medium.otf", weight: "500" },
    { path: "../public/fonts/tungsten/Tungsten-Semibold.otf", weight: "600" },
    { path: "../public/fonts/tungsten/Tungsten-Bold.otf", weight: "700" },
    { path: "../public/fonts/tungsten/Tungsten-Black.otf", weight: "900" },

    // Compressed
    { path: "../public/fonts/tungsten/TungstenComp-Thin.otf", weight: "100" },
    { path: "../public/fonts/tungsten/TungstenComp-Light.otf", weight: "200" },
    { path: "../public/fonts/tungsten/TungstenComp-XLight.otf", weight: "300" },
    { path: "../public/fonts/tungsten/TungstenComp-Book.otf", weight: "400" },
    { path: "../public/fonts/tungsten/TungstenComp-Medium.otf", weight: "500" },
    { path: "../public/fonts/tungsten/TungstenComp-Semibold.otf", weight: "600" },
    { path: "../public/fonts/tungsten/TungstenComp-Bold.otf", weight: "700" },
    { path: "../public/fonts/tungsten/TungstenComp-Black.otf", weight: "900" },

    // Condensed
    { path: "../public/fonts/tungsten/TungstenCond-Thin.otf", weight: "100" },
    { path: "../public/fonts/tungsten/TungstenCond-Light.otf", weight: "200" },
    { path: "../public/fonts/tungsten/TungstenCond-XLight.otf", weight: "300" },
    { path: "../public/fonts/tungsten/TungstenCond-Book.otf", weight: "400" },
    { path: "../public/fonts/tungsten/TungstenCond-Medium.otf", weight: "500" },
    { path: "../public/fonts/tungsten/TungstenCond-Semibold.otf", weight: "600" },
    { path: "../public/fonts/tungsten/TungstenCond-Bold.otf", weight: "700" },
    { path: "../public/fonts/tungsten/TungstenCond-Black.otf", weight: "900" },

    // Narrow
    { path: "../public/fonts/tungsten/TungstenNarrow-Thin.otf", weight: "100" },
    { path: "../public/fonts/tungsten/TungstenNarrow-Light.otf", weight: "200" },
    { path: "../public/fonts/tungsten/TungstenNarrow-XLight.otf", weight: "300" },
    { path: "../public/fonts/tungsten/TungstenNarrow-Book.otf", weight: "400" },
    { path: "../public/fonts/tungsten/TungstenNarrow-Medium.otf", weight: "500" },
    { path: "../public/fonts/tungsten/TungstenNarrow-Semibold.otf", weight: "600" },
    { path: "../public/fonts/tungsten/TungstenNarrow-Bold.otf", weight: "700" },
    { path: "../public/fonts/tungsten/TungstenNarrow-Black.otf", weight: "900" },
  ],
  variable: "--font-tungsten",
});

