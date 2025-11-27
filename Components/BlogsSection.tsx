"use client";

import Image from "next/image";

export default function BlogsSection() {
  const blogImage = "/images/bloglaptop-img.png";

  const blogs = [
    {
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "LOREM IPSUM",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  return (
    <section
      className="w-full py-12 py-20 px-5 h-[1050px] pt-[10rem] lg:pt-8 lg:h-full py-12 text-center  bg-[url('/images/bg-cloud-mobile.png')]        
   /* desktop default */  md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-white text-2xl font-bold">OUR</h2>
        <h3 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Blogs
        </h3>
        <div className="h-1 w-20 bg-white mx-auto mt-2 rounded-full" />
      </div>

      {/* Blog Cards (Responsive Grid) */}
      <div
        className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-3 shadow-xl flex gap-3"
          >
            {/* Blog Image */}
            <div className="relative w-24 h-24 lg:w-54 lg:h-54 rounded-2xl overflow-hidden shrink-0">
              <Image
                src={blogImage}
                alt="Blog Image"
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="flex flex-col justify-center">
              <div>
                <h4 className="text-black text-lg font-bold">{item.title}</h4>
                <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
              </div>

              <button className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full mt-3 w-fit flex items-center gap-1">
                READ MORE →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-7">
        <button className="bg-orange-500 text-white px-8 py-2 rounded-full font-semibold shadow-lg">
          VIEW ALL →
        </button>
      </div>

      {/* ========== BOTTOM ASTRONAUT (hide on /locations) ========== */}
        <div
          className="w-[190px]
            absolute left-1/2 -translate-x-1/2 translate-y-10
            lg:bottom-10 lg:right-10 lg:left-auto lg:translate-x-0 lg:translate-y-0
          "
        >
          <Image
            src="/images/characters/Space Character 2.png"
            alt="astronaut"
            width={250}
            height={250}
            className="-mt-4"
          />
        </div>
    </section>
  );
}
