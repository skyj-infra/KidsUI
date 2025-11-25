"use client";
import Image from "next/image";

export default function KidsBirthdaySection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-wide">
          PERFECT SPOT FOR
        </h2>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ff7a00] mt-1 mb-3">
          Kids Birthday
        </h2>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-[#1a1a1a] mx-auto mb-8"></div>

        {/* Description */}
        <p className="text-[#444] max-w-xl mx-auto mb-12 leading-relaxed text-[15px]">
          SkyJump Park offers the ultimate party venue, where kids can enjoy a mix of
          exhilarating free play, engaging guided trampoline games, and endless fun in
          our soft play area. It’s an action-packed, hassle-free celebration that every
          child absolutely loves!
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 place-items-center">

          {/* Card 1 */}
          <div className="w-[90%] max-w-[260px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl duration-300">
            <Image
              src="/images/kidsbday.png"
              width={400}
              height={300}
              alt="Dedicated Party Area"
              className="w-full h-40 object-cover"
            />
            <p className="p-3 text-base font-semibold text-[#ff7a00] text-center">
              Dedicated Party Area
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[90%] max-w-[260px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl duration-300">
            <Image
              src="/images/kidsbday.png"
              width={400}
              height={300}
              alt="Hassle-Free for Parents"
              className="w-full h-40 object-cover"
            />
            <p className="p-3 text-base font-semibold text-[#ff7a00] text-center">
              Hassle-Free for Parents
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[90%] max-w-[260px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl duration-300">
            <Image
              src="/images/kidsbday.png"
              width={400}
              height={300}
              alt="Customizable Packages"
              className="w-full h-40 object-cover"
            />
            <p className="p-3 text-base font-semibold text-[#ff7a00] text-center">
              Customizable Packages
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
