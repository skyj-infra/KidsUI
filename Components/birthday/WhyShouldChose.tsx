"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function WhyShouldChose() {
  const items = [
    {
      img: "/images/birthday-img/trampoline-jumping.png",
      desc: "A dedicated world designed exclusively for young children.",
    },
    {
      img: "/images/birthday-img/Safety.png",
      desc: "International safety standards with trained staff.",
    },
    {
      img: "/images/birthday-img/trampoline-jumping.png",
      desc: "The perfect place to celebrate unforgettable birthdays.",
    },
    {
      img: "/images/birthday-img/Safety.png",
      desc: "The perfect place to celebrate unforgettable birthdays.",
    },
    {
      img: "/images/birthday-img/trampoline-jumping.png",
      desc: "The perfect place to celebrate unforgettable birthdays.",
    },
  ];

  return (
    <section
      className="
        relative
        h-[920px]  
        pt-[9rem]
        mb-16
        lg:mb-0
        md:pt-[4rem]
        lg:h-full  
        py-12 
        px-5 
        text-center  
        bg-[url('/images/bg-cloud-mobile-110.png')]
        md:bg-[url('/images/bg-whykids.jpg')] 
        bg-cover bg-center bg-no-repeat
      "
    >

    {/* ========== TOP ASTRONAUT (conditional) ========== */}
    <div
        className="w-[185px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 lg:top-10 lg:left-10 lg:translate-x-0 lg:-translate-y-0"
            >
        <Image
            src="/images/characters/Space Character 9.png"
            alt="astronaut"
            width={185}
            height={220}
            className="-mt-10"
        />
    </div>


      {/* ========== HEADING ========== */}
      <div className="mt-3">
        <h1
          className="
            text-white 
            text-[32px] 
            leading-tight
            md:text-[46px] 
            font-extrabold 
            uppercase 
            tracking-wide
          "
        >
          WHY YOU <br /> SHOULD CHOOSE
        </h1>

        <h2
          className="
            text-[#ff6a34] 
            text-[40px] 
            md:text-[44px] 
            font-extrabold 
            -mt-1 
            tracking-wide
          "
        >
          Skyjumper Kids
        </h2>

        <div className="w-24 h-[4px] bg-white mx-auto mt-3 rounded-full" />
      </div>

      {/* ========== MOBILE CAROUSEL ========== */}
      <div className="mt-16 max-w-[1500px] mx-auto block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1.3}
          centeredSlides={true}
          loop={true}
          className="pb-12"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="w-full h-[300px] relative rounded-3xl bg-[#39226b] border-2 border-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden p-3 items-center gap-4">
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_40px_10px_rgba(255,255,255,0.18)] pointer-events-none"></div>

                    {/* White circle image background like screenshot */}
                    <div className="flex justify-center pt-5">
                    <div className="w-[130px] h-[130px] bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Image
                        src={item.img}
                        alt=""
                        width={90}
                        height={90}
                        className="object-contain"
                        />
                    </div>
                    </div>

                {/* ✔ Only Description */}
                <div className="px-6 -mt-4 pt-6">
                  <div className="p-4">
                    <p className="text-gray-200 text-sm mt-2 text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-115px] w-[230px] md:hidden">
          <Image
            src="/images/characters/Space Character 10.png"
            alt="Astronaut"
            width={230}
            height={250}
          />
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block mt-14 w-full">
        <div className="max-w-[1500px] mx-auto px-6 lg:ml-[5.5rem]">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={3}
            spaceBetween={40}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {items.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center">
            <div
                className="
                relative 
                rounded-3xl 
                w-[330px] 
                h-[380px]
                bg-[#2f1b5a] 
                border border-white p-12
                overflow-hidden
                "
            >
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_40px_10px_rgba(255,255,255,0.08)]"></div>

                {/* White Circle like screenshot */}
                <div className="flex justify-center">
                <div className="w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center shadow-xl">
                    <Image
                    src={item.img}
                    alt=""
                    width={120}
                    height={120}
                    className="object-contain"
                    />
                </div>
                </div>

                {/* Description */}
                <p className="text-white text-sm text-center mt-10 leading-tight px-3">
                {item.desc}
                </p>
            </div>
            </SwiperSlide>


            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
