"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HostMemorable() {
  const pathname = usePathname();
  const isschool = pathname === "/school-trip";


  return (
    <section
      className={`
        relative  
        w-full 
        ${isschool ? "h-[1280px]" : "h-[1150px]"}
        pt-[12rem] text-center 
        bg-[url('/images/bg-cloud-mobile-bday11.png')]
        md:bg-[url('/images/bg-whykids.jpg')]
        bg-cover bg-center bg-no-repeat
        px-5 py-12 lg:pt-20 lg:h-full
      `}
    >

      {/* 🔥 Top Astronaut */}
        <div
        className={` w-[200px] transform  
          absolute lg:top-[-5rem] left-1/2 -translate-x-1/2
          md:left-20 md:-translate-x-0" 
          ${isschool ? "rotate-[0deg] top-[-20px] ml-4" : "rotate-[-30deg]  top-[-54px]"}`}
        >
        <Image
            src={
            isschool
                ? "/images/characters/Space Character 8.png" 
                : "/images/characters/Space Character 5.png"
            }
            alt="astronaut"
            width={200} 
            height={200} 
            className="drop-shadow-xl select-none pointer-events-none"
        />
        </div>

      {/* ========== DESKTOP LAYOUT ========== */}
      <div className="hidden w-full max-w-7xl mx-auto md:grid grid-cols-2 gap-10 text-left py-10">

        {/* LEFT SIDE TEXT */}
        <div className="pr-10">

          <h1 className="text-white text-3xl md:text-[46px] font-bold tracking-wide">
            HOST THE MOST MEMORABLE
          </h1>

          <h2 className="text-orange-500 text-4xl md:text-[44px] font-extrabold -mt-1">
            {isschool ? "School Trip" : "Birthday Party"}
          </h2>

          <div className="h-1 w-24 bg-white mt-3 rounded-full" />

          <p className="text-white mt-6 text-sm md:text-base leading-relaxed opacity-90">
            {isschool
              ? ""
              : "Looking for the best birthday party place near you?"}
          </p>

          <p className="text-white mt-6 text-sm md:text-base leading-relaxed opacity-90 max-w-md">
            {isschool
              ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                 ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
              : `Step into SkyJumper Trampoline Park, India’s favorite indoor birthday destination
                 for kids, teens, and families! From wall-to-wall trampolines and thrilling games 
                 to delicious food and stress-free planning, we make every celebration fun, safe,
                 and effortless.`}
          </p>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center items-center">
          <div className="w-[450px] h-[300px] rounded-3xl overflow-hidden shadow-xl border border-orange-400 bg-white/5 p-1">
            <img
              src="/images/parkatrack-img/slider-img4.png"
              className="w-full h-full object-cover rounded-3xl"
              alt="img"
            />
          </div>
        </div>

      </div>

      {/* ========== MOBILE LAYOUT ========== */}
      <div className="md:hidden">

        <div className="text-center px-4">
          <h1 className="text-white text-3xl font-bold tracking-wide">
            HOST THE MOST MEMORABLE
          </h1>
          <h2 className="text-orange-500 text-4xl font-extrabold -mt-1">
            {isschool ? "School Trip" : "Birthday Party"}
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mt-3 rounded-full" />
        </div>

        {!isschool && (
          <p className="text-white text-center mt-6 px-18 text-sm leading-relaxed max-w-md mx-auto opacity-90">
            Looking for the best birthday party place near you?
          </p>
        )}

        <p
          className={`text-white text-center mt-6 ${
            isschool ? "px-10" : "px-18"
          } text-sm leading-relaxed max-w-md mx-auto opacity-90`}
        >
          {isschool
            ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo 
            viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis 
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. `
            : `Step into SkyJumper Trampoline Park, India’s favorite indoor birthday destination 
               for kids, teens, and families! From wall-to-wall trampolines and thrilling games to 
               delicious food and stress-free planning, we make every celebration fun, safe, and 
               effortless. Whether it’s your child’s big day or a surprise for a loved one, 
               SkyJumper birthday parties promise high-energy laughter, unforgettable moments, 
               and zero hassle.`}
        </p>

        <div className="max-w-[400px] mx-auto mt-12">
        <div
            className={`w-full ${
            isschool ? "h-[510px]" : "h-[250px]"
            } rounded-3xl overflow-hidden shadow-xl border border-orange-400 bg-white/5 p-1`}
        >
            <img
            src="/images/parkatrack-img/slider-img4.png"
            className="w-full h-full object-cover rounded-3xl"
            alt="img"
            />
        </div>
        </div>

        {/* Mobile Astronaut */}
        <div
        className={`absolute left-1/2 -translate-x-1/2 block md:hidden
            ${isschool ? " w-[220px] ml-10" : " w-[290px]"}`}
        >
        <Image
            src={
            isschool
                ? "/images/characters/Space Character 11.png"
                : "/images/characters/Space Character 12.png"
            }
            alt="astronaut"
            width={290}
            height={400}
            className="mt-10 -ml-8"
        />
        </div>


      </div>

    </section>
  );
}
