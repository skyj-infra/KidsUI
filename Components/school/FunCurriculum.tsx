"use client";
import Image from "next/image";

export default function FunCurriculum() {
  return (
    <section
      className="
        relative w-full h-[1200px] lg:h-full
        bg-[url('/images/bg-cloud-mobile-schol128.png')]
        /* desktop default */  md:bg-[url('/images/Space-bg-1.jpg')]
        bg-cover bg-center bg-no-repeat
        pt-32 pb-24 px-6
        md:pt-10 md:pb-16
      "
    >

      {/* ---------- TOP ASTRONAUT ---------- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-[200px] lg:top-10 lg:left-10 lg:translate-x-0 lg:-translate-y-0">
        <Image
          src="/images/characters/Space Character 7.png"
          width={200}
          height={200}
          alt="astronaut"
          className="drop-shadow-xl"
        />
      </div>

      {/* ---------- HEADING ---------- */}
      <div className="text-center mt-16">
        <h1 className="text-white text-3xl font-extrabold">FUN</h1>
        <h2 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Curriculum
        </h2>
        <div className="h-[3px] w-20 bg-white mx-auto mt-3 rounded-full"></div>
      </div>

      {/* ---------- TIMELINE CONTENT GRID (mobile) ---------- */}
      <div className="relative mt-10 max-w-md mx-auto">

        {/* DOTTED CENTER PATH */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full">
          <div className="h-full w-[2px] border-l-2 border-dotted border-purple-300 opacity-60"></div>
        </div>

        {/* TEXT BLOCK 1 */}
        <div className="flex justify-between mt-6">
          <p className="text-white text-sm w-[45%]">Lorem ipsum<br/>Lorem ipsum</p>
          <p className="text-white text-sm w-[45%] mt-12 lg:mt-0 text-right">Lorem ipsum<br/>Lorem ipsum</p>
        </div>

        {/* TEXT BLOCK 2 */}
        <div className="flex justify-between mt-10">
          <p className="text-white text-sm w-[45%]">Lorem ipsum<br/>Lorem ipsum</p>
          <p className="text-white text-sm w-[45%] mt-18 lg:mt-0 text-right">Lorem ipsum<br/>Lorem ipsum</p>
        </div>

        {/* TEXT BLOCK 3 */}
        <div className="flex justify-between mt-10">
          <p className="text-white text-sm w-[45%]">Lorem ipsum<br/>Lorem ipsum</p>
          <p className="text-white text-sm w-[45%] mt-24 lg:mt-0 text-right">Lorem ipsum<br/>Lorem ipsum</p>
        </div>
      </div>

      {/* ---------- BOTTOM IMAGES ---------- */}
      <div className="flex justify-center gap-4 mt-20">
        <Image
          src="/images/chi-chi.png"
          width={110}
          height={150}
          alt="girl"
          className="rounded-xl mr-[-2rem] shadow-lg -rotate-6"
        />
        <Image
          src="/images/vr-img.png"
          width={110}
          height={150}
          alt="girl"
          className="rounded-xl z-10 shadow-lg"
        />
        <Image
          src="/images/girl-trampoline.png"
          width={110}
          height={150}
          alt="girl"
          className="rounded-xl ml-[-2rem] shadow-lg rotate-6"
        />
      </div>

      {/* ---------- BOTTOM ASTRONAUT ---------- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 w-[200px] lg:bottom-2 lg:right-6 lg:left-auto lg:translate-x-0 lg:translate-y-0">
        <Image
          src="/images/characters/Space Character 6.png"
          width={200}
          height={200}
          alt="astronaut"
        />
      </div>
    </section>
  );
}
