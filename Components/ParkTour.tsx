"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ParkTour() {

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
      style={{ backgroundImage: "url('/images/cloud-bg.png')" }}
    >
            {/* ---------------- Title ---------------- */}
      <div className="text-center px-4">
        <h2 className="text-black text-3xl font-bold tracking-wide">
          OUR
        </h2>
        <h3 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Park Tour
        </h3>
        <div className="h-1 w-24 bg-black mx-auto mt-3 rounded-full" />
      </div>

      <div className="max-w-[1500px] mx-auto mt-16">

        {/* Swiper */}
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
              <div className="w-full h-[450px] lg:h-[650px] rounded-3xl overflow-hidden shadow-xl border-2 border-orange-400 bg-white/5 p-1">
                <img src={item.img} className="w-full h-full object-cover rounded-3xl"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>
  );
}
