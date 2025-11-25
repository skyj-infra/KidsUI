"use client";

import Image from "next/image";

export default function AboutKidsSection() {
  return (
    <section className="w-full max-w-[1500px] mx-auto py-16 px-6 text-center md:text-left">
      
      {/* Wrapper for desktop alignment */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        
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
          <div className="w-[260px] md:w-[330px] transform rotate-[-6deg] shadow-xl">
            <Image
              src="/images/about-kids-img.png"
              width={400}
              height={400}
              alt="Kids Activity"
              className="rounded-md"
            />
          </div>

          {/* Astronaut Graphic */}
          <div className="absolute right-[-20px] bottom-[-40px] md:right-[-40px] md:bottom-[-20px] w-[110px] md:w-[150px]">
            <Image
              src="/images/characters/Space Character 9.png"
              width={300}
              height={300}
              alt="Astronaut Rocket"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
