"use client";

import Image from "next/image";

export default function OtherBrands() {
  const logo = "/images/skyjup-logo.png";

  return (
    <section className="w-full py-12 mt-8 lg:mt-0 max-w-[1500px] mx-auto lg:py-16 md:mb-[-8rem] lg:mb-[1rem] px-6 text-center md:text-left
    relative  h-[750px] lg:pt-8 lg:h-full py-12 text-center  bg-[url('/images/cloud-down-bg-long.png')]        
   /* desktop default */  bg-cover bg-center bg-no-repeat">

      {/* Heading */}
      <div className="text-center pt-12 lg:pt-0 mb-6">
        <h1 className="text-black text-3xl md:text-[46px] font-extrabold tracking-wide">
          OUR OTHER
        </h1>
        <h2 className="text-orange-500 text-4xl md:text-[44px] font-extrabold -mt-1">
          Brands
        </h2>
        <div className="h-1 w-20 bg-black mx-auto mt-2 rounded-full" />
      </div>

      {/* LOGO GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1500px] mx-auto">
        {/* Box 1 */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="relative w-28 h-28">
            <Image
              src={logo}
              alt="Skyjumper Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="relative w-28 h-28">
            <Image
              src={logo}
              alt="Skyjumper Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="relative w-28 h-28">
            <Image
              src={logo}
              alt="Skyjumper Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex items-center justify-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="relative w-28 h-28">
            <Image
              src={logo}
              alt="Skyjumper Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

    {/* 🚀 Bottom Astronaut — changes based on location */}
    <div className="w-[210px] mt-[-1rem] absolute right-0 z-10 translate-y-10 lg:hidden">
      <Image
        src={"/images/characters/Space Character 13.png"}
        alt="astronaut"
        width={200}
        height={200}
        className=""
      />
    </div>

    </section>
  );
}
