"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FAQBday() {
    const pathname = usePathname();
    const isschool = pathname === "/school-trip";


  const faqData = [
    {
      id: 1,
      question: "How far in advance should I book a birthday party?",
      answer: "We recommend booking at least 15 days in advance to ensure availability.",
    },
    {
      id: 2,
      question: "What themes are available for birthday events?",
      answer: "We provide multiple customized themes based on your preference.",
    },
    {
      id: 3,
      question: "Do you offer cake and decoration services?",
      answer: "Yes! We handle setup, decoration, cake, and entertainment.",
    },
    {
      id: 4,
      question: "What's the minimum and maximum guest count allowed for events?",
      answer: "We accommodate a minimum of 10 guests and a maximum of 50 guests for birthday events.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative w-full py-16 pb-20 lg:pb-20 px-6 h-full lg:pt-8 lg:h-full text-center"
>
    {/* ========== TOP ASTRONAUT (conditional) ========== */} 
    {!isschool && (
    <div
        className="w-[220px] mt-6 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 
                lg:top-10 lg:left-10 lg:translate-x-0 lg:-translate-y-0"
    >
        <Image
        src="/images/characters/Space Character 3.png"
        alt="astronaut"
        width={250}
        height={250}
        className="-mt-8"
        />
    </div>
    )}


      {/* ----------------- Heading ----------------- */}
      <div className={`text-center lg:mt-0 pt-10 ${isschool ? "mt-0" : "mt-24"} max-w-[1500px] mx-auto`}>
        <h2 className="text-orange-500 text-4xl md:text-[46px] font-extrabold">FAQs</h2>
        <div className="h-1 w-24 bg-black mx-auto mt-2 rounded-full" />

        <p className="text-black text-sm opacity-90 mt-4 max-w-md mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit.
        </p>

        <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full mt-6">
          VIEW ALL
        </button>
      </div>

      {/* ----------------- FAQ BLOCK ----------------- */}
      <div className="mt-10 max-w-[1500px] lg:px-20 mx-auto space-y-4">

        {faqData.map((faq, i) => (
          <div 
            key={i}
            className="border-b border-gray-400 pb-4 text-left"
          >
            {/* Top row → Number + Question */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {/* number box */}
              <div className="bg-orange-500 text-white text-sm font-semibold w-7 h-7 flex items-center justify-center rounded-md">
                {faq.id}
              </div>

              <p className="text-black font-semibold text-[15px] lg:text-[20px] flex-1 ml-3">
                {faq.question}
              </p>

              <span className="text-black text-2xl font-bold">
                {openIndex === i ? "—" : "+"}
              </span>
            </div>

            {/* Dropdown Answer */}
            {openIndex === i && (
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>

    </section>
  );
}
