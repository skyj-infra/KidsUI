import React from 'react'
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/About-Us";
import WhySkyjumperKids from "../components/WhySkyjumperKids";
import KidsBirthdaySection from "../components//KidsBirthdaySection";
import EventSection from "../components/EventSection";
import ParkAttractions from "../components/ParkAttractions";
import SafeSection from "../components/SafekidSection";
import ParentsZone from "../components/ParentsZone";
import BlogsSection from "../components/BlogsSection";
import GallerySection from "../components/GallerySection";
import HearFromKids from "../components/HearFromKids";
import BrandSection from "../components/BrandSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutUs />
      <WhySkyjumperKids />
      <KidsBirthdaySection />
      <EventSection />
      <ParkAttractions/>
      <SafeSection />
      <ParentsZone />
      <BlogsSection />
      <GallerySection />
      <HearFromKids />
      <BrandSection />
    </div>
  )
}
