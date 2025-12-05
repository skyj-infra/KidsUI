import React from 'react'
import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/home/About-Us";
import WhySkyjumperKids from "../Components/WhySkyjumperKids";
import KidsBirthdaySection from "../Components/home/KidsBirthdaySection";
import EventSection from "../Components/EventSection";
import ParkAttractions from "../Components/ParkAttractions";
import SafeSection from "../Components/home/SafekidSection";
import ParentsZone from "../Components/home/ParentsZone";
import BlogsSection from "../Components/home/BlogsSection";
import GallerySection from "../Components/GallerySection";
import HearFromKids from "../Components/HearFromKids";
import BrandSection from "../Components/home/BrandSection";

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
