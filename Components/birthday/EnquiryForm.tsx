"use client";
import React, { useRef } from "react";

export default function EnquiryForm({ textColor = "black" }) {
  const dateRef = useRef<HTMLInputElement>(null);

  const openCalendar = () => {
    if (dateRef.current) {
      const input = dateRef.current as HTMLInputElement;
      if (typeof input.showPicker === "function") input.showPicker();
      else input.click();
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-12 px-4">

      {/* DESKTOP GRID: 2 COLUMNS */}
      <div className="w-full max-w-[1500px] lg:pt-[24px] lg:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-15 gap-8 items-center">

        {/* LEFT SIDE — HEADINGS */}
        <div className="text-center md:text-left">
          <h1
            className={`text-3xl md:text-4xl font-black text-${textColor} leading-tight`}
          >
            FILL THE FORM TO <br /> ENQUIRE ABOUT
          </h1>

          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mt-2">
            Birthday Party
          </h2>

          <div className={`w-16 md:w-20 h-1 bg-${textColor} mt-3 mb-8 md:mx-0 mx-auto`}></div>
        
          <p className={`hidden md:block pr-[12rem] text-sm md:text-base text-${textColor}`}>
            Our team will get back to you within 24 hours to discuss your
            requirements and help you plan an unforgettable birthday party for
            your child!
          </p>

        </div>

        {/* RIGHT SIDE — FORM CARD */}
        <div className="w-full max-w-sm md:max-w-full bg-white rounded-2xl shadow-xl p-6 md:p-15 border mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NAME */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Phone
              </label>
              <input
                type="text"
                placeholder="+91-9876543210"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Date
              </label>

              <div className="relative">
                <input
                  ref={dateRef}
                  type="date"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-500"
                />

                <button
                  type="button"
                  onClick={openCalendar}
                  className="absolute right-3 top-3 text-gray-500 text-xl cursor-pointer"
                >
                  📅
                </button>
              </div>
            </div>

            {/* LOCATION */}
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">
                Location
              </label>
              <input
                type="text"
                placeholder="City / Venue"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>
          </div>

          {/* TERMS */}
          <div className="flex items-start gap-2 mt-6">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs md:text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-orange-500 font-semibold">Terms</a> and{" "}
              <a href="#" className="text-orange-500 font-semibold">Condition</a>
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-6 flex justify-center md:justify-end">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
              Send Enquiry →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
