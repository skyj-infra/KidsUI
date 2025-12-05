"use client";
import React from "react";
import Image from "next/image";

export default function CelebrationSpread() {
  return (
    <section className="w-full flex flex-col items-center lg:pt-[4rem] pb-10 bg-white">

      {/* ========= HEADING ========= */}
      <div className="text-center">
        <h1 className="text-black uppercase text-4xl lg:text-[46px] font-extrabold tracking-widest">
          Celebration
        </h1>
        <h2 className="text-orange-500 text-5xl lg:text-[44px] font-extrabold -mt-2">
          Spread
        </h2>

        <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* ========= MOBILE VIEW (same as before – NO CHANGE) ========= */}
      <div className="w-full max-w-[500px] mx-auto px-4 mt-10 block lg:hidden">

        <div className="w-full">
          <Image
            src="/images/birthday-img/Gold-mobile.png"
            alt="Gold Feast"
            width={1080}
            height={900}
            className="w-full object-cover"
          />
        </div>

        <div className="w-full mt-8">
          <Image
            src="/images/birthday-img/Platinum-mobile.png"
            alt="Platinum Platter"
            width={1080}
            height={900}
            className="w-full object-cover"
          />
        </div>

        <div className="w-full mt-15">
          <Image
            src="/images/birthday-img/fodmanu-mobile.png"
            alt="Food Menu"
            width={1080}
            height={900}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* ========= DESKTOP LAYOUT (MATCHES YOUR PINK WIREFRAME) ========= */}
      <div className="hidden lg:grid grid-cols-2 gap-10 max-w-[1440px] w-full ml-[4rem] mx-auto mt-16 px-10">

        {/* LEFT SIDE → 2 stacked cards */}
        <div className="flex flex-col gap-6">

          {/* GOLD */}
          <div className="w-full">
            <Image
              src="/images/birthday-img/Gold-mobile.png"
              alt="Gold Feast"
              width={900}
              height={500}
              className="w-full rounded-2xl p-6 object-cover"
            />
          </div>

          {/* PLATINUM */}
          <div className="w-full">
            <Image
              src="/images/birthday-img/Platinum-mobile.png"
              alt="Platinum Platter"
              width={500}
              height={500}
              className="w-full rounded-2xl p-6 object-cover"
            />
          </div>

        </div>

        {/* RIGHT SIDE → Tall menu card */}
        <div className="w-full h-full flex justify-center">
          <Image
            src="/images/birthday-img/fodmanu-mobile.png"
            alt="Food Menu"
            width={550}
            height={1000}
            className="w-full rounded-2xl px-[6rem] py-[1rem] mt-[-8rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
