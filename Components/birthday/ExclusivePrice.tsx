"use client";
import Image from "next/image";


export default function ExclusivePrice() {


  return (
    <section
      className ="relative w-full py-20 lg:py-10 lg:px-10 h-[1150px] pt-[6rem] lg:pt-8 lg:h-full text-center  bg-[url('/images/bg-cloud-mobile-bday11.png')] /* desktop default */  md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
   >

      {/* ========== TOP ASTRONAUT (conditional) ========== */}
      <div
        className="w-[220px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 lg:top-10 lg:left-10 lg:translate-x-0 lg:-translate-y-0"
           >
        <Image
          src="/images/characters/Space Character 8.png"
          alt="astronaut"
          width={250}
          height={250}
          className="mt-4"
        />
      </div>

      {/* ========= HEADING ========= */}
      <div className="text-center mt-32 lg:mt-10">
        <h1 className="text-white uppercase text-4xl lg:text-[46px] font-extrabold tracking-widest">
          Exclusive
        </h1>
        <h2 className="text-orange-500 text-5xl lg:text-[44px] font-extrabold -mt-2">
          Prices
        </h2>
        <div className="w-24 lg:w-20 h-1 bg-white mx-auto mt-3"></div>

        <p className="px-20 py-10">
            Ready to throw a birthday party bash that your child will never forget?
        </p>
        <p className="px-20">
            SkyJumper offers incredible party packages at unbeatable prices.
        </p>
      </div>

      {/* ========= CARDS GRID ========= */}
      <div
        className="
          mt-4 pt-20 lg:pt-12 mb-14 px-6 gap-12 
          grid grid-cols-1 
          md:grid-cols-2 
          max-w-4xl md:max-w-6xl mx-auto
          lg:gap-12
        "
      >

        {/* CARD 1 */}
        <div
          className="
            rounded-3xl 
            bg-[#39226b]/90 
            border-2 border-white/80 
            backdrop-blur-xl 
            shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
            relative overflow-hidden
            p-3 flex items-center gap-4
            lg:p-8 lg:gap-8 lg:h-[260px]
          "
        >

          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_25px_10px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white uppercase text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              buffet special
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 leading-tight drop-shadow-md">
             <span className="text-primary">Rs 700</span> For non-jumpers/adults without activities
            </p>
          </div>

          <Image
            src="/images/birthday-img/Buffet.png"
            alt="buffet"
            width={140}
            height={160}
            className="
              rounded-xl p-[20px]
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[200px] lg:h-[210px]
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]
            "
          />
        </div>


        {/* CARD 2 */}
        <div
          className="
            rounded-3xl 
            bg-[#39226b]/90 
            border-2 border-white/80 
            backdrop-blur-xl 
            shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
            relative overflow-hidden
            p-3 flex items-center gap-4
            lg:p-8 lg:gap-8 lg:h-[260px]
          "
        >

          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_8px_8px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white uppercase text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              activity special
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 drop-shadow-md">
             Additional activity at <br/> <span className="text-primary">20% discount</span>
          </p>
            </div>

          <Image
            src="/images/birthday-img/Activity.png"
            alt="activity"
            width={140}
            height={160}
            className="
              rounded-xl p-[20px]
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[200px] lg:h-[210px]
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]
            "
          />
        </div>

      </div>


    </section>
  );
}
