"use client";

import Image from "next/image";

export default function SpotUsSection() {
  
  return (
    <section
      className="relative w-full px-5 py-14 text-white h-[1200px] pt-[6rem] lg:pt-8 lg:h-full py-12 text-center bg-[url('/images/bg-cloud-mobile.png')] md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
    >

      {/* ---------- CENTER CONTAINER (1500px DESKTOP) ---------- */}
      <div className="max-w-[1500px] mx-auto mt-24 lg:mt-16 mb-16">

        {/* ---------- HEADING ---------- */}
       <div className="text-center">
            {/* MOBILE VIEW – Separate lines */}
            <h2 className="text-white text-3xl font-extrabold block lg:hidden">
                SPOT
            </h2>
            <h3 className="text-orange-500 text-4xl font-extrabold -mt-1 block lg:hidden">
                Us
            </h3>

            {/* DESKTOP VIEW – One Line */}
            <h2 className="hidden lg:inline-block text-white text-4xl font-extrabold">
                SPOT <span className="text-orange-500">Us</span>
            </h2>

            <div className="h-[3px] w-20 bg-white mx-auto mt-2 rounded-full" />
        </div>

        {/* ---------- CONTENT LAYOUT ---------- */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">

          {/* ---- LEFT: MAP ---- */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-white/20">
            <iframe
              className="w-full h-[350px] lg:h-[420px]"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19835248.9864424!2d18.20!3d30.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMxJzE5LjAiTiAxOMKwMzAnMzkuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            ></iframe>
          </div>

          {/* ---- RIGHT: DETAILS ---- */}
          <div className="text-center lg:text-left max-w-md">

            <p className=" leading-relaxed text-sm opacity-95">
              SkyJumper Kids is located in multiple cities across India—
              offering a fun, safe, and memorable indoor play experience!
              Visit us for trampoline parks, cafeteria, soft play zones &
              exciting attractions for all ages.
            </p>

            {/* Phone */}
            <div className="mt-5 flex items-center lg:justify-start justify-center gap-2 text-orange-400 font-semibold">
              <span className="text-lg">📞</span>
              <p>08071 820 516</p>
            </div>

            {/* Timings Buttons */}
            <div className="mt-6 space-y-3">
              <button className="w-full bg-orange-500 text-white py-2 rounded-full shadow-lg text-sm">
                Timing (Mon - Fri) • 11:00AM to 10:00PM
              </button>
              <button className="w-full bg-orange-500 text-white py-2 rounded-full shadow-lg text-sm">
                Timing (Sat - Sun) • 10:00AM to 10:00PM
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
