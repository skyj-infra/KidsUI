"use client";
import Image from "next/image";

export default function KidsBirthdaySection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-wide">
          PERFECT SPOT FOR
        </h2>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff7a00] mt-1">
          Kids Birthday
        </h2>

        {/* Divider */}
        <div className="w-24 h-[3px] bg-[#1a1a1a] mx-auto mt-3 mb-6"></div>

        {/* Description */}
        <p className="text-[#444] max-w-lg mx-auto leading-relaxed text-[15px] mb-10">
          SkyJumper offers the ultimate party venue where kids can enjoy a mix of 
          exhilarating free play, engaging guided trampoline games, and endless fun 
          in our soft play area. It's an action-packed, hassle-free celebration 
          that every child absolutely loves!
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg w-[165px] lg:w-[390px]">
            <div className="relative w-full h-40 lg:h-[430px]">
              <Image
                src="/images/kidsbday.png"
                alt="Dedicated Party Area"
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>
            <p className="py-3 text-sm font-semibold text-[#ff7a00] text-center px-2">
              Dedicated Party Area
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg w-[165px] lg:w-[390px]">
            <div className="relative w-full h-40 lg:h-[430px]">
              <Image
                src="/images/kidsbday.png"
                alt="Dedicated Party Area"
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>
            <p className="py-3 text-sm font-semibold text-[#ff7a00] text-center px-2">
              Dedicated Party Area
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg w-[165px] lg:w-[390px]">
            <div className="relative w-full h-40 lg:h-[430px]">
              <Image
                src="/images/kidsbday.png"
                alt="Customizable Packages"
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>
            <p className="py-3 text-sm font-semibold text-[#ff7a00] text-center px-2">
              Customizable Packages
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
