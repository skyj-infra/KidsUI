"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { usePathname } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";

export default function GallerySection() {
  const img = "/images/kidsbday.png";

  const pathname = usePathname();
  const isLocations = pathname === "/locations";


  return (
    <section className={
    isLocations
      ? "relative w-full px-5 py-20 h-[890px] pt-[6rem] lg:pt-8 lg:h-full py-12 text-center bg-[url('/images/bg-cloud-mobile-sm.png')] md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
      : "w-full py-20 lg:mt-8 lg:mb-8 mb-20 px-5 bg-white"
  }>
      {/* Heading */}
      <div className="text-center mt-24 mb-6">
        <h2 className="text-black text-2xl font-extrabold tracking-wide">
          OUR
        </h2>
        <h3 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Gallery
        </h3>
        <div className="h-1 w-20 bg-black mx-auto mt-2 rounded-full" />
      </div>

      {/* ========================================================= */}
      {/* ===================   MOBILE SWIPER   =================== */}
      {/* ========================================================= */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-10"
        >
          <SwiperSlide>
            {/* ROW 1 */}
            <div className="flex gap-3">
              <div className="relative w-1/2 h-54 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} fill alt="" className="object-cover" />
              </div>

              <div className="relative w-1/2 h-36 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} fill alt="" className="object-cover" />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="flex gap-3 mt-3">
              <div className="relative w-1/2 h-36 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} fill alt="" className="object-cover" />
              </div>

              <div className="relative w-1/2 h-54 -mt-18 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} fill alt="" className="object-cover" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex gap-3">
              <div className="relative w-1/2 h-54 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} fill alt="" className="object-cover" />
              </div>

              <div className="relative w-1/2 h-36 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} fill alt="" className="object-cover" />
              </div>
            </div>

            <div className="flex gap-3 mt-3">
              <div className="relative w-1/2 h-36 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} fill alt="" className="object-cover" />
              </div>

              <div className="relative w-1/2 h-54 -mt-18 rounded-2xl overflow-hidden shadow-md">
                <Image src={img} fill alt="" className="object-cover" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    {/* ===================   DESKTOP 3 COLUMN GRID   ==================== */}
    <div className="hidden lg:grid grid-cols-3 gap-6 max-w-[1500px] mx-auto">

      {/* Column 1 */}
      <div className="flex flex-col gap-6">
        <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
          <Image src={img} fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
          <Image src={img} fill alt="" className="object-cover" />
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-6">
        <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
          <Image src={img} fill alt="" className="object-cover" />
        </div>
        <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
          <Image src={img} fill alt="" className="object-cover" />
        </div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-6">
        <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
          <Image src={img} fill alt="" className="object-cover" />
        </div>
         <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-md">
          <Image src={img} fill alt="" className="object-cover" />
        </div>
      </div>

    </div>

    </section>
  );
}
