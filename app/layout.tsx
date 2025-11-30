import type { Metadata } from "next";
import "./globals.css";

// Import your fonts
import { poppins } from "./fonts";
import { tungsten } from "./fonts";
import { superjoyful } from "./fonts";
import Footer from "@/Components/layout/Footer";
import Navbar from "@/Components/layout/Navbar";

export const metadata: Metadata = {
  title: "Kids UI",
  description: "Kids Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`
        ${poppins.variable}
        ${tungsten.variable}
        ${superjoyful.variable}
      `}
    >
      <body
          className={`
          font-poppins          /* global default font */
          ${poppins.variable}
          ${tungsten.variable}
          ${superjoyful.variable}
        `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>

  );
}
