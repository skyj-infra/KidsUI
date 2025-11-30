import HeroSection from '@/components/HeroSection'
import TicketPrices from '@/components/TicketPrices'
import React from 'react'
import EventSection from "@/components/EventSection";
import KidsOffers from '@/components/OfferSection';
import GallerySection from '@/components/GallerySection';
import ParkTour from '@/components/ParkTour';
import SpotUsSection from '@/components/SpotUs';
import FAQSection from '@/components/Faq';
import HearFromKids from '@/components/HearFromKids';
import WhySkyjumperKids from '@/components/WhySkyjumperKids';


export default function Locations() {
  return (
    <div>
      <HeroSection />
          <TicketPrices />
          <EventSection />
          <KidsOffers />
          <GallerySection />
          <ParkTour />
          <SpotUsSection />
          <HearFromKids />
          <WhySkyjumperKids />
          <FAQSection />
    </div>
  )
}
