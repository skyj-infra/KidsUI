"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SafeSection() {
  const slides = [
    {
      img: "/images/parkatrack-img/slider-img4.png",
    },
    {
      img: "/images/parkatrack-img/slider-img5.png",
    },
    {
      img: "/images/parkatrack-img/slider-img4.png",
    },
  ];

  return (
    <section
      className="w-full py-16 bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/images/bg-whykids.jpg')" }}
    >
      {/* Title */}
      <div className="text-center px-4">
        <h2 className="text-white text-3xl font-bold tracking-wide">
          FUN IS SAFE AT
        </h2>

        <h3 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Skyjumper Kids
        </h3>

        <div className="h-1 w-24 bg-white mx-auto mt-3 rounded-full" />
      </div>

      {/* Paragraph */}
      <p className="text-white text-center mt-6 text-sm leading-relaxed max-w-md mx-auto opacity-90">
        At Skyjumper Kids, safety comes first. All equipment is thoroughly 
        sanitized. Age-appropriate trampolines ensure that kids stay safe while 
        having fun. All rules are followed under strict supervision to ensure 
        a safe and enjoyable environment.
      </p>

      {/* Button */}
      <div className="text-center mt-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
          Read More About Safety
        </button>
      </div>

      {/* Carousel */}
      <div className="mt-10 w-full flex justify-center">
        <div className="w-[300px] bg-white/5 rounded-3xl p-2 shadow-xl border border-orange-400">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="rounded-2xl"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-98 rounded-2xl overflow-hidden">
                  <Image
                    src={item.img}
                    alt="slider image"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
