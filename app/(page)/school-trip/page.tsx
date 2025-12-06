import React from 'react'
import Image from 'next/image'
import HeroSection from '../../../Components/HeroSection'
import EnquiryForm from '../../../Components/birthday/EnquiryForm'
import WhyPartyWithSkyjumper from '../../../Components/birthday/WhyPartyWithSkyjumper'
import HostMemorable from '../../../Components/birthday/HostMemorable'
import SchoolSkyjumerkid from '../../../Components/school/SchoolSkyjumerkid'
import HearFromKids from '../../../Components/HearFromKids'
import WhyShouldChose from '../../../Components/birthday/WhyShouldChose'
import ParkAttractionsbday from '../../../Components/birthday/ParkAttractionsBday'
import TrampolinePark from '../../../Components/birthday/TrampolinePark'
import FunCurriculum from '../../../Components/school/FunCurriculum'
import BirthdayPartyGallery from '../../../Components/birthday/BirthdayPartyGallery'
import FAQBday from '../../../Components/birthday/FaqBday'



export default function SchoolTripPage() {

  return (
    <div className='min-h-screen'>
        <HeroSection />
        <div
        className="h-[1000px] lg:h-[550px] lg:pt-0 pt-[8rem] lg:mt-0 mt-[-8rem] bg-[url('/images/bg-cloud-mobile-trans.png')] bg-cover bg-center bg-no-repeat"
        >    
        <EnquiryForm hideAstro={true} />
        </div>
        <SchoolSkyjumerkid />
        <WhyPartyWithSkyjumper />
        <HostMemorable />
        <HearFromKids />
        <WhyShouldChose />
        <ParkAttractionsbday />
        <TrampolinePark />
        <BirthdayPartyGallery />
        <FunCurriculum />
              <FAQBday />
        
              {/* ✅ FIXED SECTION */}
              <div
                className="h-[1000px] lg:h-full pt-[100px] lg:py-10 bg-[url('/images/bg-cloud-mobile-upper11.png')] md:bg-[url('/images/bg-event.jpg')] bg-cover bg-center bg-no-repeat"
               >
                <EnquiryForm textColor="white" /> 
              </div>

    </div>
  )
}
