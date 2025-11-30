"use client";
import Image from "next/image";

export default function KidsBirthdaySection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1500px] mx-auto pb-15 lg:pb-5 px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-wide">
          PERFECT SPOT FOR
        </h2>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff7a00] mt-1">
          Kids Birthday
        </h2>
        <div className="w-24 h-[3px] bg-[#1a1a1a] mx-auto mt-3 mb-6"></div>

        {/* Description */}
        <p className="text-[#444] max-w-lg mx-auto leading-relaxed text-[15px] mb-10">
          SkyJumper offers the ultimate party venue where kids can enjoy
          exhilarating activities, guided trampoline games & endless fun!
        </p>

        {/* ========= NEW MODIFIED DESIGN LIKE FIRST SCREENSHOT ========= */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

          {/* CARD 1 */}
          <div className="relative w-[165px] h-[190px] sm:w-[200px] sm:h-[250px] lg:w-[320px] lg:h-[330px] rounded-3xl overflow-hidden shadow-xl">
            
            <Image src="/images/kidsbday.png" alt="Party" fill className="object-cover" />

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

            {/* TEXT INSIDE IMAGE */}
            <p className="w-full absolute bottom-4 left-1/2 -translate-x-1/2 text-[12px] lg:text-[18px] font-bold text-orange-500 text-center">
              Be our Franchise Partner
            </p>
          </div>

          {/* CARD 2 */}
          <div className="relative w-[165px] h-[190px] sm:w-[200px] sm:h-[250px] lg:w-[320px] lg:h-[330px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/kidsbday.png" alt="Retail" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

            <p className="w-full absolute bottom-4 left-1/2 -translate-x-1/2 text-[12px] lg:text-[18px] font-bold text-orange-500 text-center">
              Retail at Skyjumper
            </p>
          </div>

          {/* CARD 3 */}
          <div className="relative w-[165px] h-[190px] sm:w-[200px] sm:h-[250px] lg:w-[320px] lg:h-[330px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/kidsbday.png" alt="Marketing" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

            <p className="w-full absolute bottom-4 left-1/2 -translate-x-1/2 text-[12px] lg:text-[18px] font-bold text-orange-500 text-center">
              Marketing at Skyjumper
            </p>
          </div>

          {/* CARD 4 */}
          <div className="relative w-[165px] h-[190px] sm:w-[200px] sm:h-[250px] lg:w-[320px] lg:h-[330px] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/kidsbday.png" alt="Lease" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

            <p className="w-full absolute bottom-4 left-1/2 -translate-x-1/2 text-[12px] lg:text-[18px] font-bold text-orange-500 text-center">
              Lease Your Space
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
