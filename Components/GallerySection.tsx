"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function GallerySection() {
  const img = "/images/kidsbday.png";
  const pathname = usePathname();
  const isLocations = pathname === "/locations";

  const slides = [
    {
      id: 1,
      images: [
        { src: img, h: "h-54" },
        { src: img, h: "h-36" },
        { src: img, h: "h-36" },
        { src: img, h: "h-54" },
      ],
    },
    {
      id: 2,
      images: [
        { src: img, h: "h-54" },
        { src: img, h: "h-36" },
        { src: img, h: "h-36" },
        { src: img, h: "h-54" },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section
      className={
        isLocations
          ? "relative w-full px-5 py-20 h-[890px] pt-[6rem] lg:pt-8 lg:h-full text-center bg-[url('/images/bg-cloud-mobile-sm.png')] md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
          : "w-full py-6 lg:py-0 lg:mt-0 mb-20 px-5 bg-white"
      }
    >
      {/* Heading */}
      <div className={`text-center lg:mt-16 mb-6 ${isLocations ? "mt-20" : "mt-24"}`}>
        <h1 className={`text-black text-2xl font-extrabold tracking-wide ${isLocations ? "text-white" : ""}`}>
          OUR
        </h1>
        <h2 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Gallery
        </h2>
        <div className={`h-1 w-20 bg-black mx-auto mt-2 rounded-full ${isLocations ? "bg-white" : ""}`} />
      </div>

      {/* ===================== MOBILE CAROUSEL ===================== */}
      <div className="block lg:hidden relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45 }}
            className="p-2"
          >
            {/* --- ROW 1 --- */}
            <div className="flex gap-3">
              <div className="relative w-1/2 h-54 rounded-2xl overflow-hidden shadow-md">
                <Image src={slides[current].images[0].src} fill alt="" className="object-cover" />
              </div>
              <div className="relative w-1/2 h-36 rounded-2xl overflow-hidden shadow-md">
                <Image src={slides[current].images[1].src} fill alt="" className="object-cover" />
              </div>
            </div>

            {/* --- ROW 2 --- */}
            <div className="flex gap-3 mt-3">
              <div className="relative w-1/2 h-36 rounded-2xl overflow-hidden shadow-md">
                <Image src={slides[current].images[2].src} fill alt="" className="object-cover" />
              </div>
              <div className="relative w-1/2 h-54 -mt-18 rounded-2xl overflow-hidden shadow-md">
                <Image src={slides[current].images[3].src} fill alt="" className="object-cover" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
      {/* -------- Pagination Bullets UI -------- */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2 px-2 py-2 rounded-full"
            style={{ backgroundColor: "lavender" }}>

          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-2 rounded-full transition-all duration-300 ${
                current === i ? "bg-orange-500 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      </div>

      {/* ================== DESKTOP GRID STATIC ================== */}
      <div className="hidden lg:grid grid-cols-3 gap-6 max-w-[1500px] mx-auto mt-10">
        {[1,2,3].map(col => (
          <div key={col} className="flex flex-col gap-6">
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
              <Image src={img} fill alt="" className="object-cover" />
            </div>
            <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
              <Image src={img} fill alt="" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
