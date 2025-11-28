"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQSection() {
  const faqData = [
    {
      id: 1,
      question: "All your answers await you below —take a look",
      answer:
        "Explore solutions and direct answers customized for your needs. Our resources simplify complex topics with everything from brief advice to thorough guidance, helping you find answers easily.",
    },
    {
      id: 2,
      question: "Explore our detailed solutions and answers below.",
      answer:
        "We provide clear steps, easy instructions, and quick information to guide you at every step.",
    },
    {
      id: 3,
      question: "Looking for answers? Find everything you need below.",
      answer:
        "Your answer is just a click away — browse, read & solve instantly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full py-12 mb-24 px-6 bg-cover bg-center"
    //   style={{ backgroundImage: "url('/images/bg-whykids.jpg')" }}
    >

      {/* ----------------- Heading ----------------- */}
      <div className="text-center max-w-[1500px] mx-auto">
        <h2 className="text-orange-500 text-4xl font-extrabold">FAQs</h2>
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
      <div className="mt-10 max-w-[1500px] mx-auto space-y-4">

        {faqData.map((faq, i) => (
          <div 
            key={i}
            className="border-b border-gray-400 pb-4"
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

              <p className="text-black font-semibold text-[15px] flex-1 ml-3">
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
             {/* 🚀 Bottom Astronaut — changes based on location */}
            <div className="w-[180px] absolute left-1/2 -translate-x-1/2 translate-y-10 lg:hidden">
              <Image
                src="/images/characters/Space Character 7.png"
                alt="astronaut"
                width={250}
                height={250}
                className="-mt-10"
              />
            </div>

    </section>
  );
}
