"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, MapPin, ChevronDown, Cake, Home, Info } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0b0b14] lg:bg-transparent fixed top-0 left-0 z-[100] px-5 py-3 lg:px-14 lg:py-5 flex items-center justify-between">

      {/* BACKGROUND BAR (DESKTOP ONLY) */}
      <div className="
        hidden lg:block absolute top-2 left-1/2 -translate-x-1/2 
        w-[95%] h-[70px] rounded-[30px]
        bg-gradient-to-r from-[#2a2a2a]/80 via-[#1a1a1a]/70 to-[#0b0b0b]/60
        backdrop-blur-xl shadow-[0px_0px_15px_rgba(0,0,0,0.4)]
        border border-white/10
      ">
      </div>

      {/* Logo */}
      <div className="relative w-28 h-10 lg:w-40 lg:h-12 z-[200]">
        <Image
          src="/images/Skyjumper-kids-Logo-V2.png"
          alt="Skyjumper Kids Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10 text-white font-medium z-[200]">

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
          <Info size={20} />
          <span>About us</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
          <MapPin size={20} />
          <span>Locations</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
          <Home size={20} />
          <span>School Trip</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
          <Cake size={20} />
          <span>Birthday Party</span>
        </div>

        {/* Orange Button */}
        <button className="
          bg-orange-500 px-6 py-3 rounded-full font-semibold shadow-lg
          hover:bg-orange-600 transition
        ">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white z-[200]"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <span className="text-3xl font-bold leading-none">×</span>
        ) : (
          <Menu size={32} />
        )}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#0b0b14] text-white flex flex-col gap-4 px-6 py-4 lg:hidden shadow-lg">
          <div className="flex items-center gap-2 border-b border-gray-700 pb-3">
            <Info size={20} />
            <span className="text-lg">About us</span>
          </div>
          <div className="flex items-center gap-2 border-b border-gray-700 pb-3">
            <MapPin size={20} />
            <span className="text-lg">Locations</span>
          </div>
          <div className="flex items-center gap-2 border-b border-gray-700 pb-3">
            <Home size={20} />
            <span className="text-lg">School Trip</span>
          </div>
          <div className="flex items-center gap-2">
            <Cake size={20} />
            <span className="text-lg">Birthday Party</span>
          </div>
        </div>
      )}
    </nav>
  );
}
