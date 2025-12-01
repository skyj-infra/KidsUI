import HeroSection from '../../../Components/HeroSection'
import TicketPrices from '../../../Components/TicketPrices'
import React from 'react'
import EventSection from "../../../Components/EventSection";
import KidsOffers from '../../../Components/OfferSection';
import GallerySection from '../../../Components/GallerySection';
import ParkTour from '../../../Components/ParkTour';
import SpotUsSection from '../../../Components/SpotUs';
import FAQSection from '../../../Components/Faq';
import HearFromKids from '../../../Components/HearFromKids';
import WhySkyjumperKids from '../../../Components/WhySkyjumperKids';


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
