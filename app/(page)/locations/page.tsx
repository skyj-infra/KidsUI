import HeroSection from '../../../Components/HeroSection'
import TicketPrices from '../../../Components/locations/TicketPrices'
import React from 'react'
import EventSection from "../../../Components/EventSection";
import KidsOffers from '../../../Components/locations/OfferSection';
import GallerySection from '../../../Components/GallerySection';
import ParkTour from '../../../Components/locations/ParkTour';
import SpotUsSection from '../../../Components/locations/SpotUs';
import FAQSection from '../../../Components/Faq';
import HearFromKids from '../../../Components/HearFromKids';
import WhySkyjumperKids from '../../../Components/WhySkyjumperKids';


export default function Locations() {
  return (
    <div className='min-h-screen'>
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
