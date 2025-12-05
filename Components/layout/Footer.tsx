"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Listing", href: "#" },
    { name: "Agents", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-conditions" },
    { name: "social", href: "#", icon: <Instagram size={20} />, type: "social" },
    { name: "social", href: "#", icon: <Facebook size={20} />, type: "social" },
    { name: "social", href: "#", icon: <Twitter size={20} />, type: "social" },
    { name: "social", href: "#", icon: <Youtube size={20} />, type: "social" },
    { name: "social", href: "#", icon: <Linkedin size={20} />, type: "social" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] text-gray-300 py-8 sm:py-12">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-16 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 ">
        {/* Column 1: Brand */}
        <motion.div
          className="col-span-1 sm:col-span-2 lg:col-span-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" aria-label="Home" className="block mb-4">
            <Image
              src="/images/Skyjumper-kids-Logo-V2.png"
              alt="Skyjumper logo"
              width={180}
              height={48}
              className="h-16 w-auto object-contain -mt-2 -mb-2"
              priority
            />
          </Link>
          <p className="text-sm sm:text-base lg:text-sm leading-relaxed max-w-md">
            Welcome to SkyJumper Trampoline Park — where fun hits different.
            We’ve taken family entertainment, spiced it up with serious vibes,
            and packed it all under one roof.
          </p>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-sm">
            <p className="flex items-center gap-2 sm:gap-3">
              <MapPin size={16} className="flex-shrink-0" /> 
              <span>India</span>
            </p>
            <p className="flex items-center gap-2 sm:gap-3">
              <Phone size={16} className="flex-shrink-0" />
              <span className="break-all sm:break-normal">1800-SKY-JUMP (1800-759-5867)</span>
            </p>
            <p className="flex items-center gap-2 sm:gap-3">
              <Mail size={16} className="flex-shrink-0" /> 
              <span className="break-all sm:break-normal">info@skyjumper.com</span>
            </p>
          </div>
        </motion.div>

          {/* Reusable Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              className="col-span-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4 capitalize">
                {title === "legal" ? "Legal & Social" : title}
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {/* Legal Links */}
                <ul className="text-sm sm:text-base lg:text-sm space-y-2 sm:space-y-3">
                  {links.filter(link => !("type" in link) || link.type !== "social").map((link, i) => (
                    <li key={`legal-${i}`}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-all duration-300 flex items-center gap-2 py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Social Icons */}
                {links.some(link => "type" in link && link.type === "social") && (
                  <div className="pt-2">
                    <h3 className="text-white text-sm sm:text-base font-medium mb-2">Follow Us</h3>
                    <ul className="flex flex-wrap gap-3 sm:gap-4 items-center">
                      {links.filter(link => "type" in link && link.type === "social").map((link, i) => (
                        <li key={`social-${i}`}>
                          <Link
                            href={link.href}
                            className="hover:text-white transition-all duration-300 hover:scale-110 inline-flex items-center p-1"
                          >
                            {"icon" in link ? (link as any).icon : link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6 text-xs sm:text-sm text-gray-500">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              
              <div className="text-center sm:text-left">
                © Skyline Inc. All Rights Reserved. 
              </div>
               <div className="text-center sm:text-center">
                <span className="block sm:inline">Powered by </span>
                <Link 
                  href="https://www.exponentsolutions.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
                >
                  ExponentSolution.ai
                </Link>
              </div>
            </div>
          </div>

        
        </div>
      </motion.div>
    </footer>
  );
}
