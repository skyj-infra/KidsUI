import type { Metadata } from "next";
import "./globals.css";

import { poppins, tungsten, superjoyful } from "./fonts";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  title: "Kids UI",
  description: "Kids Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={`${poppins.variable} ${tungsten.variable} ${superjoyful.variable} font-poppins`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
