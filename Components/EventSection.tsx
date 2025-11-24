"use client";
import Image from "next/image";

export default function OtherEvents() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/images/bg-whykids.jpg')" }}
    >
      {/* Top Astronaut */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10">
        <Image
          src="/images/Astro/astro-img2.png"
          alt="kids"
          width={250}
          height={250}
        />
      </div>

      {/* Heading */}
      <div className="text-center mt-24">
        <h2 className="text-white text-4xl font-extrabold tracking-widest">
          OTHER
        </h2>
        <h3 className="text-orange-500 text-5xl font-extrabold -mt-2">
          Events
        </h3>
        <div className="w-24 h-1 bg-white mx-auto mt-3"></div>
      </div>

      {/* Event Cards */}
      <div
        className="mt-14 mb-14 px-6 gap-8 grid grid-cols-1 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="rounded-3xl bg-white/10 border border-purple-400 backdrop-blur-md shadow-xl p-4 flex items-center gap-4">
          <div className="flex-1">
            <h4 className="text-white text-xl font-bold">PLAY DATE</h4>
            <p className="text-white/70 text-sm">
              A safe environment where kids socialize, play and have fun.
            </p>
          </div>
          <Image
            src="/images/2kids-imgnew.png"
            alt="kids"
            width={170}
            height={200}
            className="rounded-xl -mb-4 -mr-4"
          />
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl bg-white/10 border border-purple-400 backdrop-blur-md shadow-xl p-4 flex items-center gap-4">
          <div className="flex-1">
            <h4 className="text-white text-xl font-bold">SCHOOL TRIP</h4>
            <p className="text-white/70 text-sm">
              An exciting learning experience your child will never forget.
            </p>
          </div>
          <Image
            src="/images/2kids-imgnew.png"
            alt="kids"
            width={170}
            height={200}
            className="rounded-xl -mb-4 -mr-4"
          />
        </div>
      </div>

      {/* Bottom Astronaut */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10 mt-8">
        <Image
          src="/images/Astro/astro-img2.png"
          alt="astronaut"
          width={250}
          height={250}
          className="mt-8"
        />
      </div>
    </section>
  );
}
