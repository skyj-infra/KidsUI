import React from 'react'
import EnquiryForm from '../../../Components/birthday/EnquiryForm'
import HeroSection from '../../../Components/HeroSection'
import BirthdayBash from '../../../Components/birthday/BirthdayBash'
import WhyPartyWithSkyjumper from '../../../Components/birthday/WhyPartyWithSkyjumper'
import ExclusivePrice from '../../../Components/birthday/ExclusivePrice'
import TrampolinePark from '../../../Components/birthday/TrampolinePark'
import HostMemorable from '../../../Components/birthday/HostMemorable'
import HearFromKids from '../../../Components/HearFromKids'
import WhyShouldChose from '../../../Components/birthday/WhyShouldChose'
import ParkAttractionsbday from '../../../Components/birthday/ParkAttractionsBday'
import BirthdayPartyGallery from '../../../Components/birthday/BirthdayPartyGallery'
import FAQBday from '../../../Components/birthday/FaqBday'
import CelebrationSpread from '../../../Components/birthday/CelebrationSpread'

export default function BirthdayPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div
        className="h-[1000px] lg:h-[550px] lg:pt-0 pt-[8rem] lg:mt-0 mt-[-8rem] bg-[url('/images/bg-cloud-mobile-trans.png')] bg-cover bg-center bg-no-repeat"
       >    
       <EnquiryForm hideAstro={true} />
       </div>
      <BirthdayBash />
      <WhyPartyWithSkyjumper />
      <ExclusivePrice />
      <CelebrationSpread />
      <HostMemorable />
      <HearFromKids />
      <WhyShouldChose />
      <ParkAttractionsbday />
      <TrampolinePark />
      <BirthdayPartyGallery />
      <FAQBday />

      {/* ✅ FIXED SECTION */}
      <div
        className="h-[1000px] lg:h-full pt-[100px] lg:py-10 bg-[url('/images/bg-cloud-mobile-upper11.png')] md:bg-[url('/images/bg-event.jpg')] bg-cover bg-center bg-no-repeat"
       >
        <EnquiryForm textColor="white" /> 
      </div>
    </div>
  );
}
