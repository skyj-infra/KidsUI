"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function OtherEvents() {
  const pathname = usePathname();

  const isLocations = pathname === "/locations";

  return (
    <section
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/images/bg-whykids.jpg')" }}
    >

      {/* ========== TOP ASTRONAUT (conditional) ========== */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10
          lg:top-10 lg:left-10 lg:translate-x-0 lg:-translate-y-0
        "
      >
        <Image
          src={
            isLocations
              ? "/images/Astro/astro-img4.png" // ONLY on /locations
              : "/images/Astro/astro-img2.png" // default
          }
          alt="astronaut"
          width={250}
          height={250}
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
          mt-14 mb-14 px-6 gap-8 
          grid grid-cols-1 
          md:grid-cols-2 
          max-w-4xl md:max-w-6xl mx-auto
          lg:gap-12
        "
      >

        {/* CARD 1 */}
        <div
          className="
            rounded-3xl bg-white/10 border border-purple-400 backdrop-blur-md shadow-xl 
            p-4 flex items-center gap-4

            lg:p-8 lg:gap-8 lg:h-[260px] lg:backdrop-blur-xl
          "
        >
          <div className="flex-1">
            <h4 className="text-white text-xl lg:text-3xl font-bold">PLAY DATE</h4>
            <p className="text-white/70 text-sm lg:text-lg mt-2">
              A safe environment where kids socialize, play and have fun.
            </p>
          </div>

          <Image
            src="/images/2kids-imgnew.png"
            alt="kids"
            width={170}
            height={200}
            className="rounded-xl -mb-4 lg:mb-1 -mr-4 lg:-mr-8 lg:w-[230px] lg:h-[260px]"
          />
        </div>

        {/* CARD 2 */}
        <div
          className="
            rounded-3xl bg-white/10 border border-purple-400 backdrop-blur-md shadow-xl 
            p-4 flex items-center gap-4

            lg:p-8 lg:gap-8 lg:h-[260px] lg:backdrop-blur-xl
          "
        >
          <div className="flex-1">
            <h4 className="text-white text-xl lg:text-3xl font-bold">SCHOOL TRIP</h4>
            <p className="text-white/70 text-sm lg:text-lg mt-2">
              An exciting learning experience your child will never forget.
            </p>
          </div>

          <Image
            src="/images/2kids-imgnew.png"
            alt="kids"
            width={170}
            height={200}
            className="rounded-xl -mb-4 lg:mb-1 -mr-4 lg:-mr-8 lg:w-[230px] lg:h-[260px]"
          />
        </div>

      </div>

      {/* ========== BOTTOM ASTRONAUT (hide on /locations) ========== */}
      {!isLocations && (
        <div
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10
            lg:bottom-10 lg:right-10 lg:left-auto lg:translate-x-0 lg:translate-y-0
          "
        >
          <Image
            src="/images/Astro/astro-img2.png"
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
