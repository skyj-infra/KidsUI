"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ParkAttractionsBday() {
const attractions = [ 
  { img: "/images/parkatrack-img/slider-img1.png", title: "SKYSHOTS" }, 
  { img: "/images/parkatrack-img/slider-img2.png", title: "LASER TAG" }, 
  { img: "/images/parkatrack-img/slider-img1.png", title: "VIRTUAL REALITY" }, 
  { img: "/images/parkatrack-img/slider-img3.png", title: "ROPE ADVENTURE" }, 
  { img: "/images/parkatrack-img/slider-img1.png", title: "SKYSHOTS" }, 
  { img: "/images/parkatrack-img/slider-img2.png", title: "LASER TAG" }, 
  { img: "/images/parkatrack-img/slider-img1.png", title: "VIRTUAL REALITY" }, 
  { img: "/images/parkatrack-img/slider-img3.png", title: "ROPE ADVENTURE" }, 
  { img: "/images/parkatrack-img/slider-img1.png", title: "SKYSHOTS" }, 
  { img: "/images/parkatrack-img/slider-img2.png", title: "LASER TAG" }, 
  { img: "/images/parkatrack-img/slider-img1.png", title: "VIRTUAL REALITY" }, 
  { img: "/images/parkatrack-img/slider-img3.png", title: "ROPE ADVENTURE" }, 
  { img: "/images/parkatrack-img/slider-img1.png", title: "SKYSHOTS" }, 
  { img: "/images/parkatrack-img/slider-img2.png", title: "LASER TAG" }, 
  { img: "/images/parkatrack-img/slider-img1.png", title: "VIRTUAL REALITY" }, 
  { img: "/images/parkatrack-img/slider-img3.png", title: "ROPE ADVENTURE" }, 
];

  const [index, setIndex] = useState(0);

  /* ---------- CARD WIDTHS ---------- */
  const mobileWidth = 260;
  const desktopWidth = 300;

  return (
    <section className="w-full py-16 bg-white text-center">

      {/* ---------- HEADING ---------- */}
      <div>
        <h1 className="text-black uppercase text-3xl md:text-[46px] font-extrabold tracking-wide">
          Park
        </h1>

        <h2 className="text-orange-500 text-4xl md:text-[44px] font-extrabold -mt-2">
          Attractions
        </h2>

        <div className="w-28 h-[4px] bg-[#1e2251] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* ============================================================= */}
      {/* 🚀 MOBILE SLIDER (unchanged) */}
      {/* ============================================================= */}
      <div className="relative bg-[#e5e7eb] px-3 py-10 overflow-hidden mt-10 md:hidden">
        <motion.div
          className="flex gap-5"
          animate={{ x: -index * (mobileWidth + 20) }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
        >
          {attractions.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[260px]">
              <div className="rounded-2xl overflow-hidden">
                <div className="relative w-full h-94 rounded-xl overflow-hidden">
                  <Image src={item.img} fill alt={item.title} className="object-cover" />
                </div>
                <p className="mt-3 mb-4 !text-[16px] text-black font-semibold text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {attractions.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-2 rounded-full transition-all ${
                index === i ? "bg-orange-500 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ============================================================= */}
      {/* 🚀 DESKTOP CAROUSEL (4 slides) */}
      {/* ============================================================= */}
      <div className="hidden relative w-full max-w-[1500px] mx-auto bg-[#e5e7eb] p-[3rem] md:block mt-16">
        <div className="overflow-hidden ">

          <motion.div
            className="flex gap-8"
            animate={{ x: -index * (desktopWidth + 32) }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
          >
            {attractions.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[300px]">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition">
                  <div className="relative w-full h-94 rounded-xl overflow-hidden">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>

                  <p className="mt-4 mb-6 text-black font-bold text-lg">{item.title}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* DESKTOP PAGINATION – show # of slides / 4 */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(attractions.length / 4) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i * 4)}
                className={`w-4 h-2 rounded-full transition-all ${
                  index === i * 4 ? "bg-orange-500 scale-110" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
