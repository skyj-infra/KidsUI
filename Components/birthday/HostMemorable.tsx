"use client";

import Image from "next/image";

export default function HostMemorable() {
  return (
    <section
      className="
      relative  
      w-full h-[1150px] pt-[10rem] text-center 
      bg-[url('/images/bg-cloud-mobile-bday11.png')]
      md:bg-[url('/images/bg-whykids.jpg')]
      bg-cover bg-center bg-no-repeat
      px-5 py-12 lg:pt-20 lg:h-full
      "
    >

      {/* 🔥 Top Astronaut */}
      <div
        className="
          w-[200px] transform rotate-[-30deg]
          absolute top-[-54px] lg:top-[-5rem] left-1/2 -translate-x-1/2
          md:left-10 md:-translate-x-0
        "
      >
        <Image
          src="/images/characters/Space Character 5.png"
          width={200}
          height={200}
          alt="astronaut"
          className="drop-shadow-xl select-none pointer-events-none"
        />
      </div>

      {/* ========== DESKTOP 2-COLUMN WRAPPER ========== */}
      <div className="hidden w-full max-w-7xl mx-auto md:grid grid-cols-2 gap-10 text-left py-10">

        {/* LEFT COLUMN → Heading + Content */}
        <div className="pr-10">

          <h1 className="text-white text-3xl md:text-[46px] font-bold tracking-wide text-left">
            HOST THE MOST MEMORABLE
          </h1>

          <h2 className="text-orange-500 text-4xl md:text-[44px] font-extrabold -mt-1 text-left">
            Birthday Party
          </h2>

          <div className="h-1 w-24 bg-white mt-3 rounded-full"></div>

          <p className="text-white mt-6 text-sm md:text-base leading-relaxed opacity-90">
            Looking for the best birthday party place near you?
          </p>

          <p className="text-white mt-6 text-sm md:text-base leading-relaxed opacity-90 max-w-md">
            Step into SkyJumper Trampoline Park, India’s favorite indoor birthday
            destination for kids, teens, and families!
            From wall-to-wall trampolines and thrilling games to delicious food
            and stress-free planning, we make every celebration fun, safe, and
            effortless.
            Whether it’s your child’s big day or a surprise for a loved one, 
            SkyJumper birthday parties promise high-energy laughter,
            unforgettable moments, and zero hassle.
          </p>

        </div>

        {/* RIGHT COLUMN → Image */}
        <div className="flex justify-center items-center">
          <div className="w-[450px] h-[300px] rounded-3xl overflow-hidden shadow-xl border border-orange-400 bg-white/5 p-1">
            <img
              src="/images/parkatrack-img/slider-img4.png"
              className="w-full h-full object-cover rounded-3xl"
              alt="Birthday Party"
            />
          </div>
        </div>

      </div>

      {/* ========== MOBILE LAYOUT (unchanged) ========== */}
      <div className="md:hidden">

        <div className="text-center px-4">
          <h1 className="text-white text-3xl font-bold tracking-wide">
            HOST THE MOST MEMORABLE
          </h1>
          <h2 className="text-orange-500 text-4xl font-extrabold -mt-1">
            Birthday Party
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mt-3 rounded-full"></div>
        </div>

        <p className="text-white text-center mt-6 px-18 text-sm leading-relaxed max-w-md mx-auto opacity-90">
          Looking for the best birthday party place near you?
        </p>

        <p className="text-white text-center mt-6 px-18 text-sm leading-relaxed max-w-md mx-auto opacity-90">
          Step into SkyJumper Trampoline Park, India’s favorite indoor birthday
          destination for kids, teens, and families! From wall-to-wall trampolines
          and thrilling games to delicious food and stress-free planning,
          we make every celebration fun, safe, and effortless. Whether it’s your
          child’s big day or a surprise for a loved one, SkyJumper birthday parties
          promise high-energy laughter, unforgettable moments, and zero hassle.
        </p>

        <div className="max-w-[400px] mx-auto mt-12">
          <div className="w-full h-[250px] rounded-3xl overflow-hidden shadow-xl border border-orange-400 bg-white/5 p-1">
            <img
              src="/images/parkatrack-img/slider-img4.png"
              className="w-full h-full object-cover rounded-3xl"
              alt="Birthday Party"
            />
          </div>
        </div>

        {/* Mobile Astronaut */}
        <div className="absolute w-[290px] left-1/2 -translate-x-1/2 block md:hidden">
          <Image
            src="/images/characters/Space Character 12.png"
            alt="Astronaut"
            width={290}
            height={400}
            className="mt-10 -ml-8"
          />
        </div>

      </div>
    </section>
  );
}
