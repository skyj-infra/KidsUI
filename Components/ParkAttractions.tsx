"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// -----------------------------------------
// SLIDER ROW COMPONENT
// -----------------------------------------
interface SliderItem {
  image: string;
  title: string;
}

interface SliderRowProps {
  items: SliderItem[];
  direction?: "left" | "right" | "up" | "down";
}

function SliderRow({ items, direction = "left" }: SliderRowProps) {
  return (
    <Marquee
      direction={direction}
      speed={30}
      pauseOnHover={true}
      gradient={false}
      className="py-2"
    >
      {items.map((item: SliderItem, i: number) => (
        <div
          key={i}
          className="mx-3 rounded-3xl overflow-hidden shadow-lg bg-white"
          style={{ width: 260 }}
        >
          {/* Image */}
          <div className="relative w-full h-40">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Title */}
          <div className="bg-black py-2 text-white text-center font-semibold text-lg">
            {item.title}
          </div>
        </div>
      ))}
    </Marquee>
  );
}

// -----------------------------------------
// MAIN COMPONENT
// -----------------------------------------
export default function ParkAttractions() {
  // First row images
  const sliderItems = [
    {
      title: "Sky Lounge Cafe",
      image: "/images/parkatrack-img/slider-img1.png",
    },
    {
      title: "Laser War",
      image: "/images/parkatrack-img/slider-img2.png",
    },
     {
      title: "Sky Lounge Cafe",
      image: "/images/parkatrack-img/slider-img1.png",
    },
    {
      title: "3D Art",
      image: "/images/parkatrack-img/slider-img3.png",
    },
    {
      title: "Laser War",
      image: "/images/parkatrack-img/slider-img2.png",
    },
    {
      title: "Laser War",
      image: "/images/parkatrack-img/slider-img2.png",
    },
  ];

  // Second row images
  const sliderItems2 = [
    {
      title: "Kids Zone",
      image: "/images/parkatrack-img/slider-img4.png",
    },
    {
      title: "Trampoline",
      image: "/images/parkatrack-img/slider-img5.png",
    },
    {
      title: "Birthday Arena",
      image: "/images/parkatrack-img/slider-img6.png",
    },
    {
      title: "Trampoline",
      image: "/images/parkatrack-img/slider-img5.png",
    },
    {
      title: "Kids Zone",
      image: "/images/parkatrack-img/slider-img4.png",
    },
    {
      title: "Trampoline",
      image: "/images/parkatrack-img/slider-img5.png",
    },
  ];

  return (
    <section className="w-full pt-20 lg:px-10 pb-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="font-tungsten text-4xl text-black tracking-wide">
          PARK
        </h1>
        <h2 className="font-joyful text-5xl text-orange-500 -mt-2">
          Attractions
        </h2>
        <div className="h-1 w-24 bg-gray-900 mx-auto mt-3 rounded-full" />
      </div>

      {/* Slider Section */}
      <div className="w-full max-w-[1500px] mx-auto flex flex-col justify-center py-6 md:pt-12 overflow-hidden relative">
        <div className="space-y-6 relative">

          {/* First Row */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <SliderRow items={sliderItems} direction="left" />
          </motion.div>

          {/* Second Row */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <SliderRow items={sliderItems2} direction="right" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
