"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function HearFromKids() {
   const videos = [
    "https://skyjumperstoragemedia.b-cdn.net/videos/b982d88e-f149-48a3-a637-bcb324b8a878-Pune_tales_3.mp4?sv=2025-11-05&st=2025-11-07T17%3A50%3A06Z&se=2026-11-07T17%3A50%3A06Z&sr=b&sp=r&sig=9SEOFYM9ClpImksXzVlH20JZN9DALVPeElsAzyZrF%2FU%3D&rscd=inline&rsct=video%2Fmp4",
    "https://skyjumperstoragemedia.b-cdn.net/videos/c8ffe71f-81ce-46d7-9b1b-7dbf04c70a72-Ambernath%2001.mp4?sv=2025-11-05&st=2025-11-05T07%3A21%3A32Z&se=2026-11-05T07%3A21%3A32Z&sr=b&sp=r&sig=Tccfezs26jzLV8S6%2FUaSPWy1hVxUudoZQFFRkudyl2U%3D",
    "https://skyjumperstoragemedia.b-cdn.net/videos/cf48d741-c015-497c-8ce4-0885364c3e90-IMG_0294.MOV?sv=2025-11-05&st=2025-11-08T12%3A36%3A11Z&se=2026-11-08T12%3A36%3A11Z&sr=b&sp=r&sig=sSTvrnf6mcB%2Fnd347WgVvhAC9FB3BKszXO1W%2Foagl8Q%3D&rscd=inline&rsct=video%2Fmp4",
    "https://skyjumperstoragemedia.b-cdn.net/videos/c8ffe71f-81ce-46d7-9b1b-7dbf04c70a72-Ambernath%2001.mp4?sv=2025-11-05&st=2025-11-05T07%3A21%3A32Z&se=2026-11-05T07%3A21%3A32Z&sr=b&sp=r&sig=Tccfezs26jzLV8S6%2FUaSPWy1hVxUudoZQFFRkudyl2U%3D",
  ];

  return (
    <section
      className="w-full py-12 px-5 py-20 h-[1050px] pt-[12rem] lg:pt-8 lg:h-full py-12 text-center  bg-[url('/images/bg-cloud-mobile.png')]        
   /* desktop default */  md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
    >

            {/* 🔥 Astronaut — exact position like screenshot 1 */}
            <div className=" w-[250px] mt-[-18rem] transform rotate-[90deg]  scale-x-[-1]
                absolute left-1/2 -translate-x-1/2   /* mobile center over cloud */
                md:top-6 md:left-10 md:-translate-x-0            /* desktop corner */
              ">
              <Image
                src="/images/characters/Space Character 4.png"
                width={250}
                height={250}
                alt="astronaut"
                className="drop-shadow-xl select-none pointer-events-none"
              />
            </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-white text-2xl font-bold">HEAR FROM</h2>
        <h3 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Skyjumper Kids
        </h3>
        <div className="h-1 w-24 bg-white mx-auto mt-2 rounded-full" />
      </div>

<div className="max-w-[1500px] mx-auto">

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".kids-pagination",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        centeredSlides={false}
        slidesPerView={1.2} // mobile

        /* DESKTOP FIXES */
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, // desktop = 3 cards
        }}
        className="pb-20"
      >
        {videos.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[450px] lg:h-[650px] rounded-3xl overflow-hidden shadow-xl bg-black">
              <video
                src={url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination bullets */}
      <div className="kids-pagination mt-6 flex justify-center"></div>
      </div>

      {/* ========== BOTTOM ASTRONAUT (hide on /locations) ========== */}
              <div
                className="w-[250px]
                  absolute left-1/2 -translate-x-1/2 translate-y-10
                  lg:bottom-10 lg:right-10 lg:left-auto lg:translate-x-0 lg:translate-y-0
                "
              >
                <Image
                  src="/images/characters/Space Character 7.png"
                  alt="astronaut"
                  width={250}
                  height={250}
                  className="mt-8"
                />
              </div>
    </section>
  );
}
