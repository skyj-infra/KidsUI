"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";

// Import styles
import "swiper/css";
import "swiper/css/pagination";

export default function WhySkyjumperKids() {

  const pathname = usePathname();
  const isLocations = pathname === "/locations";
    
  const items = [
    {
      img: "/images/2kids-imgnew.png",
      title: "KIDS-ONLY SPACE",
      age: "(1–13 YRS)",
      desc: "A dedicated world designed exclusively for young children.",
    },
    {
      img: "/images/2kids-imgnew.png",
      title: "SAFE PLAY AREA",
      age: "(CERTIFIED)",
      desc: "International safety standards with trained staff.",
    },
    {
      img: "/images/2kids-imgnew.png",
      title: "BIRTHDAY PARTIES",
      age: "(FUN & UNIQUE)",
      desc: "The perfect place to celebrate unforgettable birthdays.",
    },
     {
      img: "/images/2kids-imgnew.png",
      title: "BIRTHDAY PARTIES",
      age: "(FUN & UNIQUE)",
      desc: "The perfect place to celebrate unforgettable birthdays.",
    },
     {
      img: "/images/2kids-imgnew.png",
      title: "BIRTHDAY PARTIES",
      age: "(FUN & UNIQUE)",
      desc: "The perfect place to celebrate unforgettable birthdays.",
    },
    
  ];

  return (
    <section
      className={
      isLocations
        ? "w-full py-8 lg:mt-8 lg:mb-8 px-5 h-[950px] pt-[14rem] lg:pt-8 lg:h-full py-12 px-5  text-center  bg-[url('/images/bg-cloud-mobile-sm.png')] /* desktop default */  md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
        : "h-[1200px] pt-[18rem] lg:pt-8 lg:h-full py-12 px-5  text-center  bg-[url('/images/bg-cloud-mobile.png')]  /* desktop default */  md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
    }
    >
      
      
      <div className="mt-8">
        {/* Heading */}
        <h2 className="text-white text-4xl font-extrabold">WHY</h2>
        <h3 className="text-[#ff6a34] text-4xl font-extrabold -mt-2">
          Skyjumper Kids
        </h3>
        <div className="w-24 h-[3px] bg-white mx-auto mt-2"></div>
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="mt-10 max-w-[1500px] mx-auto block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          className="pb-10"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="ackdrop-blur-xl 
            rounded-3xl 
            w-[280px] 
            border-2 border-white/80 
            shadow-xl
            bg-[url('/images/kids-bg-img.png')]
            bg-cover bg-center bg-no-repeat
            ">

                {/* Image */}
                <div className="overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={350}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                </div>

                {/* Text Box */}
                <div className="p-3 -mt-7">
                  <div className="border border-white/40 rounded-2xl p-4">
                    <h4 className="text-white text-lg font-extrabold leading-tight">
                      {item.title}
                    </h4>

                    <p className="text-[#ff6a34] text-sm font-bold mt-1">
                      {item.age}
                    </p>

                    <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* 🚀 ASTRONAUT — Added Only for Mobile */}
        <div className={`${isLocations ? "hidden" : "block"} absolute w-[350px] left-1/2 -translate-x-1/2 block md:hidden`}>
          <Image
            src="/images/characters/Space Character 12.png"
            alt="Astronaut"
            width={350}
            height={400}
            className="mt-28 -ml-6"
          />
        </div>

      </div>

      {/* DESKTOP — 3 COLUMN CAROUSEL */}
      
      <div className="hidden md:block mt-12 w-full">
        <div className="max-w-[1500px] mx-auto px-6">

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={3}
            spaceBetween={40}

            pagination={{
              clickable: true,
              el: ".why-pagination",
            }}
            className="pb-16"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <div
                  className="
                    backdrop-blur-xl 
                    rounded-3xl 
                    w-[390px] h-[430px]
                    border-2 border-white/80 
                    shadow-xl
                    bg-[url('/images/kids-bg-img.png')]
                    bg-cover bg-center bg-no-repeat
                  "
                >
                  {/* Image */}
                  <div className="overflow-hidden mb-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={350}
                      height={200}
                      className="w-full h-[280px] object-cover"
                    />
                  </div>

                  {/* Text Box */}
                  <div className="p-3 -mt-7">
                    <div className="border border-white/40 rounded-2xl p-4 bg-black/20">
                      <h4 className="text-white text-lg font-extrabold leading-tight">
                        {item.title}
                      </h4>

                      <p className="text-[#ff6a34] text-sm font-bold mt-1">
                        {item.age}
                      </p>

                      <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination bullets BELOW slider */}
          <div className="why-pagination mt-6 flex justify-center"></div>
        </div>
      </div>


    </section>
  );
}
