"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HearFromKids() {

  const slides = [
    { img: "/images/parkatrack-img/slider-img4.png" },
    { img: "/images/parkatrack-img/slider-img5.png" },
    { img: "/images/parkatrack-img/slider-img4.png" },
    { img: "/images/parkatrack-img/slider-img5.png" },
  ];

  return (
    <section
      className="
      relative  
      w-full h-[1300px] pt-[15rem] text-center 
      bg-[url('/images/bg-cloud-mobile.png')]
      md:bg-[url('/images/bg-whykids.jpg')]
      bg-cover bg-center bg-no-repeat
      px-5 py-12 lg:pt-20 lg:h-full
      "
    >

      {/* 🔥 Astronaut — exact position like screenshot 1 */}
      <div className=" w-[250px] transform rotate-[14deg]
          absolute top-[-54px] left-1/2 -translate-x-1/2   /* mobile center over cloud */
          md:top-6 md:left-10 md:-translate-x-0            /* desktop corner */
        ">
        <Image
          src="/images/characters/Space Character 11.png"
          width={250}
          height={250}
          alt="astronaut"
          className="drop-shadow-xl select-none pointer-events-none"
        />
      </div>


      {/* ---------- Title ---------- */}
      <div className="text-center px-4">
        <h1 className="text-white text-3xl md:text-[46px] font-bold tracking-wide">
          FUN IS SAFE AT
        </h1>
        <h2 className="text-orange-500 text-4xl md:text-[44px] font-extrabold -mt-1">
          Skyjumper Kids
        </h2>
        <div className="h-1 w-24 bg-white mx-auto mt-3 rounded-full" />
      </div>

      {/* ---------- Paragraph ---------- */}
      <p className="text-white text-center mt-6 px-8 text-sm leading-relaxed max-w-md mx-auto opacity-90">
        At Skyjumper Kids, safety comes first. All equipment is sanitized,
        trampolines are safe & supervised so kids enjoy worry-free fun.
      </p>

      {/* ---------- Button ---------- */}
      <div className="text-center mt-10">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
          Read More About Safety
        </button>
      </div>


      {/* ---------- Carousel ---------- */}
      <div className="max-w-[1500px] mx-auto mt-16">
        
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction:false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}

          pagination={{ clickable: true, dynamicBullets:false }}


          breakpoints={{
            640:{slidesPerView:1},
            768:{slidesPerView:2},
            1024:{slidesPerView:3},
          }}

          className="pb-14"
        >
          {slides.map((item,i)=>(
            <SwiperSlide key={i}>
              <div className="w-full h-[450px] lg:h-[650px] rounded-3xl overflow-hidden shadow-xl border border-orange-400 bg-white/5 p-3">
                <img src={item.img} className="w-full h-full object-cover rounded-3xl"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* bullets visible below (fixed) */}
        {/* <div className="kids-pagination flex justify-center mt-6 z-50"></div> */}
      </div>

      {/* ========== BOTTOM ASTRONAUT ========== */}
      <div
        className="
          absolute left-1/2 bottom-[-58px]    
          -translate-x-1/2                    
          md:bottom-[-60px]
          w-[220px] md:w-[230px]
          rotate-[22deg]                      
          z-20 lg:right-10 lg:left-auto                                
        "
      >
        <Image
          src="/images/characters/Space Character 1.png"
          alt="astronaut"
          width={250}
          height={250}
          className=""
        />
      </div>

    </section>
  );
}
