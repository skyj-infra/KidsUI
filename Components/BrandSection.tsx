"use client";

import Image from "next/image";

export default function OtherBrands() {
  const logo = "/images/skyjup-logo.png";

  return (
    <section className="w-full py-12 px-5 bg-white">

      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-black text-2xl font-extrabold tracking-wide">
          OUR OTHER
        </h2>
        <h3 className="text-orange-500 text-4xl font-extrabold -mt-1">
          Brands
        </h3>
        <div className="h-1 w-20 bg-black mx-auto mt-2 rounded-full" />
      </div>

      {/* LOGO GRID */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {/* Box 1 */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex items-center justify-center">
          <div className="relative w-28 h-28">
            <Image
              src={logo}
              alt="Skyjumper Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex items-center justify-center">
          <div className="relative w-28 h-28">
            <Image
              src={logo}
              alt="Skyjumper Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex items-center justify-center">
          <div className="relative w-28 h-28">
            <Image
              src={logo}
              alt="Skyjumper Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-white rounded-3xl shadow-md p-4 flex items-center justify-center">
          <div className="relative w-28 h-28">
            <Image
              src={logo}
              alt="Skyjumper Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
