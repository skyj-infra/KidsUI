import HeroSection from '@/Components/HeroSection'
import TicketPrices from '@/Components/TicketPrices'
import React from 'react'
import EventSection from "@/Components/EventSection";
import KidsOffers from '@/Components/OfferSection';
import GallerySection from '@/Components/GallerySection';


export default function Locations() {
  return (
    <div>
      <HeroSection />
          <TicketPrices />
          <EventSection />
          <KidsOffers />
          <GallerySection />
    </div>
  )
}
