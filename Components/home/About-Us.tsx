"use client";

import Image from "next/image";

export default function AboutKidsSection() {
  return (
    <section className="w-full max-w-[1500px] mx-auto mt-[-9rem] lg:mt-0 lg:py-16 md:mb-[-8rem] lg:mb-[1rem] px-6 lg:px-20 text-center md:text-left
    relative h-[700px] lg:pt-16 lg:h-full py-12 text-center  bg-[url('/images/bg-cloud-mobile-trans700.png')]        
   /* desktop default */  bg-cover bg-center bg-no-repeat"
      >
      
      {/* Wrapper for desktop alignment */}
      <div className="flex flex-col mt-[9rem] lg:mt-0 md:flex-row md:items-center md:justify-between gap-15">
        
        {/* Left Section (Text) */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-[46px] font-extrabold tracking-wide text-black">
            ABOUT
          </h1>

          <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#ff6a34] -mt-1">
            Skyjumper Kids
          </h2>

          <div className="w-20 h-[3px] bg-black mx-auto md:mx-0 mt-2 mb-6"></div>

          <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed px-2 lg:px-0">
            SkyJumper Kids is India’s first and only dedicated trampoline and soft-play park designed exclusively for children aged 3 to 13 years. Built around child-safety, age-appropriate growth, and worry-free fun, it gives kids a world made just for them — without the rush or safety concerns of older teens playing around.
            Here, little explorers can jump, slide, climb, crawl, balance, and discover in a fully supervised, air-conditioned indoor environment. Every attraction from colourful soft-play structures and toddler zones to mini-trampolines, sensory play, interactive games, and beginner-friendly ninja challenges is thoughtfully created to boost motor skills, build confidence, strengthen social development, and encourage healthy movement.
            Beyond everyday fun, SkyJumper Kids is also the perfect destination for unforgettable birthday parties, joyful playdates, and exciting school trips. With dedicated celebration zones, trained supervisors, safe padded infrastructure, and seamless planning support, every visit becomes a memory parents love and kids never forget.

          </p>
        </div>

        {/* Right Section (Images) */}
        <div className="relative md:w-1/2 flex justify-center md:justify-end">

          {/* Kids Photo */}
          <div className="w-[200px] mt-[1rem] lg:mt-[0] -ml-24 transform rotate-[-12deg]  shadow-[8px_8px_25px_rgba(0,0,0,0.75)] shadow-black/80 ">
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
                        md:right-[-10px] md:bottom-[-50px] w-[180px]">
          <Image
            src="/images/characters/Space Character 9.png"
            width={200}
            height={200}
            alt="Astronaut Rocket"
            className="object-contain"
          />
        </div>

        </div>

      </div>
    </section>
  );
}
