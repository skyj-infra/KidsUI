"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { usePathname } from "next/navigation";

export default function HearFromKids() {
  const pathname = usePathname();
  const isLocations = pathname === "/locations";

  const videos = [
    "https://skyjumperstoragemedia.b-cdn.net/videos/b982d88e-f149-48a3-a637-bcb324b8a878-Pune_tales_3.mp4?sv=2025-11-05&st=2025-11-07T17%3A50%3A06Z&se=2026-11-07T17%3A50%3A06Z&sr=b&sp=r&sig=9SEOFYM9ClpImksXzVlH20JZN9DALVPeElsAzyZrF%2FU%3D&rscd=inline&rsct=video%2Fmp4",
    "https://skyjumperstoragemedia.b-cdn.net/videos/c8ffe71f-81ce-46d7-9b1b-7dbf04c70a72-Ambernath%2001.mp4?sv=2025-11-05&st=2025-11-05T07%3A21%3A32Z&se=2026-11-05T07%3A21%3A32Z&sr=b&sp=r&sig=Tccfezs26jzLV8S6%2FUaSPWy1hVxUudoZQFFRkudyl2U%3D",
    "https://skyjumperstoragemedia.b-cdn.net/videos/cf48d741-c015-497c-8ce4-0885364c3e90-IMG_0294.MOV?sv=2025-11-05&st=2025-11-08T12%3A36%3A11Z&se=2026-11-08T12%3A36%3A11Z&sr=b&sp=r&sig=sSTvrnf6mcB%2Fnd347WgVvhAC9FB3BKszXO1W%2Foagl8Q%3D&rscd=inline&rsct=video%2Fmp4",
    "https://skyjumperstoragemedia.b-cdn.net/videos/c8ffe71f-81ce-46d7-9b1b-7dbf04c70a72-Ambernath%2001.mp4?sv=2025-11-05&st=2025-11-05T07%3A21%3A32Z&se=2026-11-05T07%3A21%3A32Z&sr=b&sp=r&sig=Tccfezs26jzLV8S6%2FUaSPWy1hVxUudoZQFFRkudyl2U%3D",
  ];

  return (
    <section
      className={
        isLocations
          ? "w-full py-8 px-5 mb-20 bg-white"
          : "w-full lg:px-5 pt-[12rem] lg:pt-16 pb-20 h-[1050px] text-center bg-[url('/images/bg-cloud-mobile.png')] md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
      }
    >
      {/* 🔥 Top Astronaut */}
      {!isLocations && (
        <div className="w-[250px] mt-[-18rem] rotate-[90deg] scale-x-[-1] absolute left-1/2 -translate-x-1/2 md:top-6 md:left-10 md:-translate-x-0">
          <Image
            src="/images/characters/Space Character 4.png"
            width={250}
            height={250}
            alt="astronaut"
            className="drop-shadow-xl pointer-events-none"
          />
        </div>
      )}

      {/* ---------- Heading ---------- */}
      <div className="text-center mb-12">
        <h1
          className={`text-3xl md:text-[46px] font-bold ${
            isLocations ? "text-black md:text-[46px]" : "text-white"
          }`}
        >
          {isLocations ? "HAPPY TALES OF" : "HEAR FROM"}
        </h1>
        <h2 className="text-orange-500 text-4xl md:text-[44px] font-extrabold -mt-1">
          Skyjumper Kids
        </h2>
        <div className="h-1 w-24 bg-white mx-auto mt-2 rounded-full" />
      </div>

      {/* ---------- SLIDER ---------- */}
      <div className="max-w-[1500px] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
           pagination={{
            clickable: true,
            dynamicBullets: false
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // desktop 3 slides
          }}
          className="pb-20"
        >
          {videos.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[450px] lg:h-[650px] rounded-3xl overflow-hidden shadow-xl bg-black">
                <video src={url} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BULLETS BELOW */}
        {/* <div className="kids-pagination mt-6 flex justify-center"></div> */}
      </div>

      {/* ---------- Bottom Astronaut ---------- */}
      <div 
        className={`w-[230px] absolute z-10 -translate-x-1/2 translate-y-10 lg:hidden
         ${isLocations ? "left-[12rem]" : "left-[6rem]"}`}
        >
        <Image
          src={
            isLocations
              ? "/images/characters/Space Character 13.png"
              : "/images/characters/Space Character 7.png"
          }
          alt="astronaut"
          width={230}
          height={230}
          className="mt-2"
        />
      </div>
    </section>
  );
}
