"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function WhyPartyTable() {

    const pathname = usePathname();
    const isschool = pathname === "/school-trip";
    

  const rows = [
    {
      feature: "LOCATION & VENUE",
      sky: "Air conditioned dedicated party room with decor",
      trip: "Outdoor sites that require weather-based planning",
    },
    {
      feature: "ACTIVITIES",
      sky: "High-energy olympic-level trampoline arena",
      trip: "Focused mostly on textbook-linked exposure or sightseeing",
    },
    {
      feature: "SUPERVISION",
      sky: "Dedicated party host and supervised instructor",
      trip: "Varied locations can make supervision harder",
    },
    {
      feature: "FOOD & BEVERAGES",
      sky: "Delicious munchies prepared fresh",
      trip: "Third-party vendors managed meals",
    },
    {
      feature: "TRAVEL & LOGISTICS",
      sky: "Easily accessible with ample parking spaces for School Buses",
      trip: "Involves long travel and unpredictable conditions",
    },
  ];

  return (
    <section className={`w-full max-w-[1500px] ${isschool ? "py-16" : "py-24"} mx-auto lg:px-15 lg:py-18 flex flex-col items-center`}>

      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-4xl lg:text-[46px] font-extrabold uppercase text-[#001C44]">
          WHY PARTY WITH
        </h2>
        <h1 className="text-5xl lg:text-[44px] font-extrabold text-[#FF6A1A]">
          Skyjumper Kids
        </h1>
        <div className="w-16 h-[3px] bg-[#001C44] mx-auto mt-2"></div>
      </div>

      {/* Table */}
      <div className="w-full p-5 mt-8 bg-[#e5e7eb] mx-auto overflow-hidden">
        <table className="w-full border-collapse table-fixed">

          <thead>
            <tr>
              <th className="bg-[#001C44] w-1/3 text-white py-3 px-4 lg:p-8 text-left font-bold text-sm">
                FEATURE
              </th>

              {/* SKYJUMPER HEADER */}
              <th className="relative bg-white w-1/3 py-3 px-4 lg:p-8 text-left font-bold text-sm text-[#001C44]">

                {/* TOP TILT */}
                <span className="absolute top-0 left-0 w-full h-[3px] mt-[-10px] bg-[#FF7A00] rotate-[-3deg] lg:rotate-[-2deg]"></span>

                {/* LEFT BORDER */}
                <span className="absolute top-0 left-0 w-[3px] h-[94px] mt-[-7px] lg:mt-[0px] bg-[#FF7A00]"></span>

                {/* RIGHT BORDER */}
                <span className="absolute top-0 right-0 w-[3.5px] h-[104px] mt-[-10px] lg:mt-[-15px] bg-[#FF7A00]"></span>

                 {/* ✅ BOTTOM TILT (NEW) */}
                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-[#e5e7eb]"></span>
                
                SKYJUMPER
              </th>

              <th className="bg-[#001C44] w-1/3 text-white py-3 px-4 lg:p-8 text-left font-bold text-sm">
                NORMAL SCHOOL TRIPS
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">

            {rows.map((row, index) => {
              const isLast = index === rows.length - 1;

              return (
                <tr key={index}>

                  {/* LEFT COLUMN */}
                  <td className="bg-[#001C44] text-white py-4 px-4 lg:p-8 font-semibold border-t border-gray-300 align-top">
                    {row.feature}
                  </td>

                  {/* SKYJUMPER COLUMN */}
                  <td className="relative bg-white py-4 px-4 lg:p-8 text-[#001C44] align-top">

                    {/* LEFT BORDER */}
                    <span className="absolute top-0 left-0 w-[3px] h-[184px] lg:h-[120px] bg-[#FF7A00]"></span>

                    {/* RIGHT BORDER */}
                    <span className="absolute top-0 right-0 w-[3px] h-[178px] lg:h-[104px] bg-[#FF7A00]"></span>
                        
                    {/* GRAY BOTTOM LINE for all rows EXCEPT last */}
                    {!isLast && (
                      <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gray-300"></span>
                    )}

                    {/* 🔥 ADD BOTTOM TILTED BORDER ONLY FOR LAST ROW */}
                    {isLast && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] mb-[-10px] bg-[#FF7A00] -rotate-[3deg] lg:rotate-[-2deg]"></span>
                    )}

                    <span className="relative block">{row.sky}</span>
                  </td>

                  {/* RIGHT COLUMN */}
                  <td className="bg-[#001C44] text-white py-4 px-4 lg:p-8 border border-gray-300 align-top">
                    {row.trip}
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>
      </div>
    </section>
  );
}
