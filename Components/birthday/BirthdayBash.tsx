"use client";
import Image from "next/image";


export default function BirthdayBash() {


  return (
    <section
      className ="relative w-full py-20 lg:py-24 lg:px-10 h-[1290px] pt-[5rem] lg:pt-8 lg:h-full text-center  bg-[url('/images/bg-cloud-mobile-bday.png')] /* desktop default */  md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
   >

         {/* ========== TOP ASTRONAUT (conditional) ========== */}
         <div
             className="w-[200px] lg:w-[180px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 lg:top-10 lg:left-10 lg:translate-x-0 lg:-translate-y-0"
                 >
             <Image
                 src="/images/characters/Space Character 9.png"
                 alt="astronaut"
                 width={200}
                 height={220}
                 className="mt-[-3rem]"
             />
         </div>

      {/* ========= HEADING ========= */}
      <div className="text-center mt-24 lg:mt-10">
        <h1 className="text-white uppercase text-4xl lg:text-[46px] font-extrabold tracking-widest">
          the ultimate
        </h1>
        <h2 className="text-orange-500 text-5xl lg:text-[44px] font-extrabold -mt-2">
          Birthday Bash
        </h2>
        <div className="w-24 lg:w-20 h-1 bg-white mx-auto mt-3"></div>

        <p className="px-18 py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan 
            lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
            viverra maecenas accumsan lacus vel facilisis. 
        </p>
      </div>

      {/* ========= CARDS GRID ========= */}
      <div
        className="
          mt-4 mb-14 lg:mb-5 px-6 gap-12 
          grid grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3  
          max-w-[1500px] mx-auto
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
            p-3 flex items-center gap-1
            lg:p-3 lg:gap-4 lg:h-[210px]
          "
        >

          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_25px_10px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              PLAY 
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 leading-tight drop-shadow-md">
              Trampoline jumping enhances core stability, muscle tone, and bone density — promoting a healthier, stronger body.
            </p>
          </div>

          <Image
            src="/images/birthday-img/play.png"
            alt="kids"
            width={170}
            height={200}
            className="
              rounded-xl 
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[250px] lg:h-[210px]
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
            p-3 flex items-center gap-1
            lg:p-3 lg:gap-4 lg:h-[210px]
          "
        >

          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_8px_8px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            PARTY
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 drop-shadow-md">
              Each jump refines motor skills, posture, and body control, helping improve agility and coordination.
            </p>
          </div>

          <Image
            src="/images/birthday-img/Party.png"
            alt="kids"
            width={170}
            height={200}
            className="
              rounded-xl 
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[250px] lg:h-[210px]
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]
            "
          />
        </div>

        {/* CARD 3 */}
        <div
          className="
            rounded-3xl 
            bg-[#39226b]/90 
            border-2 border-white/80 
            backdrop-blur-xl 
            shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
            relative overflow-hidden
            p-3 flex items-center gap-1
            lg:p-3 lg:gap-4 lg:h-[210px]
          "
        >

          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_8px_8px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              FOOD
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 drop-shadow-md">
              Mastering trampoline moves builds self-assurance, reduces stress, and supports overall emotional health.
            </p>
          </div>

          <Image
            src="/images/birthday-img/Food.png"
            alt="kids"
            width={170}
            height={200}
            className="
              rounded-xl 
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[250px] lg:h-[210px]
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]
            "
          />
        </div>

      </div>


      {/* ========== BOTTOM ASTRONAUT (hide on /locations) ========== */}
        <div
          className="w-[250px] lg:w-[180px]
            absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10
            lg:bottom-2 lg:right-2 lg:left-auto lg:translate-x-0 lg:translate-y-0
          "
        >
          <Image
            src="/images/characters/Space Character 13.png"
            alt="astronaut"
            width={290}
            height={250}
            className="-mb-8 lg:mb-[-6rem]"
          />
        </div>

    </section>
  );
}
