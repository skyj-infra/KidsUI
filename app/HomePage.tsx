import React from 'react'
import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/About-Us";
import WhySkyjumperKids from "../Components/WhySkyjumperKids";
import KidsBirthdaySection from "../Components//KidsBirthdaySection";
import EventSection from "../Components/EventSection";
import ParkAttractions from "../Components/ParkAttractions";
import SafeSection from "../Components/SafekidSection";
import ParentsZone from "../Components/ParentsZone";
import BlogsSection from "../Components/BlogsSection";
import GallerySection from "../Components/GallerySection";
import HearFromKids from "../Components/HearFromKids";
import BrandSection from "../Components/BrandSection";

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
