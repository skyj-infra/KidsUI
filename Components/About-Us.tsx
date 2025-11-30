"use client";

import Image from "next/image";

export default function AboutKidsSection() {
  return (
    <section className="w-full max-w-[1500px] mx-auto lg:py-16 md:mb-[-8rem] lg:mb-[1rem] px-6 text-center md:text-left
    relative  py-20 h-[750px] lg:pt-8 lg:h-full py-12 text-center  bg-[url('/images/cloud-upper-bg-long.png')]        
   /* desktop default */  bg-cover bg-center bg-no-repeat"
      >
      
      {/* Wrapper for desktop alignment */}
      <div className="flex flex-col mt-[10rem] lg:mt-0 md:flex-row md:items-center md:justify-between gap-20">
        
        {/* Left Section (Text) */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-black">
            ABOUT
          </h2>

          <h3 className="text-[32px] md:text-[40px] font-extrabold text-[#ff6a34] -mt-1">
            Skyjumper Kids
          </h3>

          <div className="w-20 h-[3px] bg-black mx-auto md:mx-0 mt-2 mb-6"></div>

          <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed">
            SkyJumper Kids is a dedicated indoor play and party destination 
            designed specially for children aged from 3 to 13. More than just a 
            playground, it is a vibrant center where imagination, physical 
            activity, and social interaction flourish. With safe, high-energy 
            attractions and a warm, parent-approved environment, it’s the perfect 
            place for kids to jump, play, celebrate, and make unforgettable 
            memories.
          </p>
        </div>

        {/* Right Section (Images) */}
        <div className="relative md:w-1/2 flex justify-center md:justify-end">

          {/* Kids Photo */}
          <div className="w-[200px] -ml-24 transform rotate-[-12deg]  shadow-[8px_8px_25px_rgba(0,0,0,0.75)] shadow-black/80 ">
            <Image
              src="/images/about-kids-img.png"
              width={200}
              height={300}
              alt="Kids Activity"
              className="rounded-md"
            />
          </div>

        {/* Astronaut Graphic */}
        <div className="absolute right-[-10px] bottom-[100px] transform rotate-[8deg] 
                        md:right-[-40px] md:bottom-[-20px] w-[180px]">
          <Image
            src="/images/characters/Space Character 9.png"
            width={300}
            height={300}
            alt="Astronaut Rocket"
            className="object-contain"
          />
        </div>

        </div>

      </div>
    </section>
  );
}
