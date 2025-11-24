"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import styles
import "swiper/css";
import "swiper/css/pagination";

export default function WhySkyjumperKids() {
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
  ];

  return (
    <section
      className="py-12 px-5 text-center"
      style={{
        backgroundImage: "url('/images/bg-whykids.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <h2 className="text-white text-4xl font-extrabold">WHY</h2>
      <h3 className="text-[#ff6a34] text-4xl font-extrabold -mt-2">
        Skyjumper Kids
      </h3>
      <div className="w-24 h-[3px] bg-white mx-auto mt-2"></div>

      {/* MOBILE CAROUSEL */}
      <div className="mt-10 block md:hidden">
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
              <div className="bg-[#1a0033]/70 backdrop-blur-xl rounded-3xl w-[280px] border border-white/80 shadow-xl">

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
      </div>

      {/* DESKTOP — 3 COLUMN CAROUSEL */}

    <div className="hidden md:block mt-12 w-full max-w-7xl mx-auto px-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div className="bg-[#1a0033]/70 backdrop-blur-xl rounded-3xl w-[280px] border border-white/80 shadow-xl">

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
    </div>

    </section>
  );
}
