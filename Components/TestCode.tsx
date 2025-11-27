"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function HearFromKids() {

  // 🔥 replacing videos with your images
  const slides = [
    { img: "/images/parkatrack-img/slider-img4.png" },
    { img: "/images/parkatrack-img/slider-img5.png" },
    { img: "/images/parkatrack-img/slider-img4.png" },
    { img: "/images/parkatrack-img/slider-img5.png" },
  ];

  return (
    <section
      className="w-full py-12 px-5 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-whykids.jpg')" }}
    >
            {/* ---------------- Title ---------------- */}
      <div className="text-center px-4">
        <h2 className="text-white text-3xl font-bold tracking-wide">
          FUN IS SAFE AT
        </h2>
        <h3 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Skyjumper Kids
        </h3>
        <div className="h-1 w-24 bg-white mx-auto mt-3 rounded-full" />
      </div>

      {/* ---------------- Paragraph ---------------- */}
      <p className="text-white text-center mt-6 text-sm leading-relaxed max-w-md mx-auto opacity-90">
        At Skyjumper Kids, safety comes first. All equipment is sanitized,
        trampolines are safe & supervised so kids enjoy worry-free fun.
      </p>

      {/* ---------------- Button ---------------- */}
      <div className="text-center mt-6">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition">
          Read More About Safety
        </button>
      </div>

      <div className="max-w-[1500px] mx-auto mt-16">

        {/* Swiper */}

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}

        pagination={{
          clickable: true,
          el: ".kids-pagination",  // LINKED BELOW
        }}

        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}

        className="pb-14"  // MUST for visibility
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[450px] lg:h-[650px] rounded-3xl overflow-hidden shadow-xl bg-black border border-orange-400 bg-white/5 p-3">
              <img src={item.img} className="w-full h-full object-cover rounded-3xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 Pagination bullets MUST be outside + styled */}
      <div className="kids-pagination flex justify-center mt-6 !relative z-50"></div>

      </div>
    </section>
  );
}
