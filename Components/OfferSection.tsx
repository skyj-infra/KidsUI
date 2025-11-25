"use client";
import Image from "next/image";

export default function KidsOffers() {
  return (
    <section className="w-full py-14 px-5">

      {/* ========= RESPONSIVE WRAPPER (text + image) ========= */}
      <div className="
        flex flex-col 
        items-center 
        text-center
        lg:flex-row lg:text-left 
        lg:justify-between 
        lg:items-center
        lg:max-w-6xl lg:mx-auto
        gap-10 lg:gap-16
      ">

        {/* ========= TEXT (ONE TIME ONLY) ========= */}
        <div className="lg:w-1/2">

          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl font-extrabold text-black tracking-wide">
            SKUJUMPER KIDS
          </h2>

          <h3 className="text-orange-500 text-4xl lg:text-5xl font-extrabold mt-1 leading-tight">
            Dropping Offers!
          </h3>

          {/* Underline */}
          <div className="w-20 lg:w-28 h-[4px] bg-[#1c1c2b] mx-auto lg:mx-0 mt-3 rounded-full"></div>

          {/* Desktop paragraph under heading (requested) */}
          <p className="hidden lg:block text-gray-600 text-lg mt-6 leading-relaxed">
            Exciting deals specially crafted for Skyjumper Kids!  
            Get ready for fun with amazing offers.
          </p>

        </div>

        {/* ========= IMAGE ========= */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/offer-img.png"
            alt="Kids Offer"
            width={450}
            height={300}
            className="rounded-3xl shadow-xl w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}
