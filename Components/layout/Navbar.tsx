"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, MapPin, ChevronDown, Cake, Home, Info } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0b0b14] lg:bg-transparent px-5 py-3 flex items-center justify-between lg:py-5 lg:px-10 fixed top-0 left-0 z-[100]">

      {/* Logo */}
      <div className="relative w-28 h-10 lg:w-40 lg:h-12">
        <Image
          src="/images/Skyjumper-kids-Logo-V2.png"
          alt="Skyjumper Kids Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10 text-white font-medium">

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
          <Info size={20} />
          <span>About us</span>
          <ChevronDown size={16} />
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
          <MapPin size={20} />
          <span>Locations</span>
          <ChevronDown size={16} />
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
          <Home size={20} />
          <span>School Trip</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
          <Cake size={20} />
          <span>Birthday Party</span>
        </div>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        <Menu size={32} />
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#0b0b14] text-white flex flex-col gap-4 px-6 py-4 lg:hidden shadow-lg">

          <div className="flex items-center gap-2 border-b border-gray-700 pb-3">
            <Info size={20} />
            <span className="text-lg">About us</span>
            <ChevronDown size={16} />
          </div>

          <div className="flex items-center gap-2 border-b border-gray-700 pb-3">
            <MapPin size={20} />
            <span className="text-lg">Locations</span>
            <ChevronDown size={16} />
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



