"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function WhySkyjumperKids() {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1590845947670-c009801ffa74?auto=format&fit=crop&w=600&q=80",
      title: "KIDS-ONLY SPACE",
      age: "(1–13 YRS)",
      desc: "A dedicated world designed exclusively for young children.",
    },
    {
      img: "https://images.unsplash.com/photo-1629385703143-9acb33c364a1?auto=format&fit=crop&w=600&q=80",
      title: "SAFE PLAY AREA",
      age: "(CERTIFIED)",
      desc: "International safety standards with trained staff.",
    },
    {
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
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

      {/* Carousel */}
      <div className="mt-10">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          className="pb-10"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="bg-[#1a0033]/70 backdrop-blur-xl rounded-3xl p-4 w-[280px] border border-white/20 shadow-xl">
                
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-4 border border-white/20">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-[180px] object-cover"
                  />
                </div>

                {/* Text */}
                <h4 className="text-white text-lg font-extrabold leading-tight">
                  {item.title}
                </h4>

                <p className="text-[#ff6a34] text-sm font-bold mt-1">
                  {item.age}
                </p>

                <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
