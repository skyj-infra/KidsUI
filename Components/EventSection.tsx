"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function OtherEvents() {
  const pathname = usePathname();

  const isLocations = pathname === "/locations";

  return (
    <section
      className="relative w-full py-20 h-[1050px] pt-[6rem] lg:pt-8 lg:h-full py-12 text-center  bg-[url('/images/bg-cloud-mobile.png')]        
   /* desktop default */  md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
    >

      {/* ========== TOP ASTRONAUT (conditional) ========== */}
      <div
        className=" w-[230px]
          absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10
          lg:top-10 lg:left-10 lg:translate-x-0 lg:-translate-y-0
        "
      >
        <Image
          src={
            isLocations
              ? "/images/Astro/astro-img4.png" // ONLY on /locations
              : "/images/characters/Space Character 3.png" // default
          }
          alt="astronaut"
          width={230}
          height={230}
          className="-mt-8"
        />
      </div>

      {/* ========= HEADING ========= */}
      <div className="text-center mt-24">
        <h2 className="text-white text-4xl lg:text-6xl font-extrabold tracking-widest">
          OTHER
        </h2>
        <h3 className="text-orange-500 text-5xl lg:text-7xl font-extrabold -mt-2">
          Events
        </h3>
        <div className="w-24 lg:w-32 h-1 bg-white mx-auto mt-3"></div>
      </div>

      {/* ========= CARDS GRID ========= */}
      <div
        className="
          mt-24 mb-14 px-6 gap-10 
          grid grid-cols-1 
          md:grid-cols-2 
          max-w-4xl md:max-w-6xl mx-auto
          lg:gap-12
        "
      >

        {/* CARD 1 */}
        <div
          className="
            rounded-3xl 
            bg-[#39226b]/90 
            border-2 border-white/80 
            backdrop-blur-xl 
            shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
            relative overflow-hidden
            p-2 flex items-center gap-4
            lg:p-8 lg:gap-8 lg:h-[260px]
          "
        >

          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_25px_10px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1">
            <h4 className="text-white text-xl lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              PLAY DATE
            </h4>
            <p className="text-white/80 text-sm lg:text-lg mt-2 leading-tight drop-shadow-md">
              A safe environment where kids socialize, play and have fun.
            </p>
          </div>

          <Image
            src="/images/2kids-imgnew.png"
            alt="kids"
            width={170}
            height={200}
            className="
              rounded-xl 
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[230px] lg:h-[260px]
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]
            "
          />
        </div>


        {/* CARD 2 */}
        <div
          className="
            rounded-3xl 
            bg-[#39226b]/90 
            border-2 border-white/80 
            backdrop-blur-xl 
            shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
            relative overflow-hidden
            p-2 flex items-center gap-4
            lg:p-8 lg:gap-8 lg:h-[260px]
          "
        >

          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_8px_8px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1">
            <h4 className="text-white text-xl lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              SCHOOL TRIP
            </h4>
            <p className="text-white/80 text-sm lg:text-lg mt-2 drop-shadow-md">
              An exciting learning experience your child will never forget.
            </p>
          </div>

          <Image
            src="/images/2kids-imgnew.png"
            alt="kids"
            width={170}
            height={200}
            className="
              rounded-xl 
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[230px] lg:h-[260px]
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]
            "
          />
        </div>

      </div>


      {/* ========== BOTTOM ASTRONAUT (hide on /locations) ========== */}
      {!isLocations && (
        <div
          className="w-[250px]
            absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10
            lg:bottom-10 lg:right-10 lg:left-auto lg:translate-x-0 lg:translate-y-0
          "
        >
          <Image
            src="/images/characters/Space Character 6.png"
            alt="astronaut"
            width={250}
            height={250}
            className="mt-8"
          />
        </div>
      )}

    </section>
  );
}
