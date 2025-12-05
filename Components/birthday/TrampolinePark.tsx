"use client";
import Image from "next/image";


export default function TrampolinePark() {


  return (
    <section
      className ="relative w-full py-20 lg:px-10 h-[1400px] pt-[6rem] lg:pt-8 lg:h-full text-center  bg-[url('/images/bg-cloud-mobile-bday14.png')] /* desktop default */  md:bg-[url('/images/bg-whykids.jpg')] bg-cover bg-center bg-no-repeat"
   >

      {/* ========== TOP ASTRONAUT (conditional) ========== */}
      <div
        className="w-[200px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 lg:top-10 lg:left-10 lg:translate-x-0 lg:-translate-y-0"
           >
        <Image
          src="/images/characters/Space Character 7.png"
          alt="astronaut"
          width={250}
          height={250}
          className="mt-4 lg:-mt-4"
        />
      </div>

      {/* ========= HEADING ========= */}
      <div className="text-center mt-28 lg:mt-6">
        <h1 className="text-white uppercase text-4xl lg:text-[46px] font-extrabold tracking-widest">
         benefits of 
        </h1>
        <h2 className="text-orange-500 text-5xl lg:text-[44px] font-extrabold -mt-2">
          Trampoline park
        </h2>
        <div className="w-24 lg:w-20 h-1 bg-white mx-auto mt-3"></div>

      </div>

      {/* ========= CARDS GRID ========= */}
      <div
        className="
          mt-16 mb-14 px-6 gap-12 
          grid grid-cols-1 
          md:grid-cols-2 
          md:max-w-7xl mx-auto
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
            lg:p-8 lg:gap-8 lg:h-[210px]
          "
        >

          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_25px_10px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white uppercase text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              builds strenth & fitness
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 leading-tight drop-shadow-md">
              Trampoline jumping enhances core stability, muscle tone, and bone density — promoting a healthier, stronger body.
            </p>
          </div>

          <Image
            src="/images/birthday-img/win-boy-img-n.png"
            alt="kids"
            width={170}
            height={200}
            className="
              rounded-xl 
              -mb-12 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[220px] lg:h-[210px]
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
            lg:p-8 lg:gap-8 lg:h-[210px]
          "
        >

          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_8px_8px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white uppercase text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
             Improves Balance and Coordination
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 drop-shadow-md">
              Each jump refines motor skills, posture, and body control, helping improve agility and coordination.
            </p>
          </div>

          <Image
            src="/images/birthday-img/school-kids-n.png"
            alt="kids"
            width={170}
            height={200}
            className="
              rounded-xl 
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[220px] lg:h-[210px]
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
            p-3 flex items-center gap-4
            lg:p-8 lg:gap-8 lg:h-[210px]
          "
        >

          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_8px_8px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white uppercase text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Boosts Confidence and Well-Being
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 drop-shadow-md">
              Mastering trampoline moves builds self-assurance, reduces stress, and supports overall emotional health.
            </p>
          </div>

          <Image
            src="/images/birthday-img/boy-handup-n.png"
            alt="kids"
            width={130}
            height={200}
            className="
              rounded-xl p-2 lg:p-0
              -mb-14 lg:-mb-4 lg:-mr-8 
              lg:w-[220px] lg:h-[210px]
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]
            "
          />
        </div>

        {/* CARD 4 */}
        <div
          className="
            rounded-3xl 
            bg-[#39226b]/90 
            border-2 border-white/80 
            backdrop-blur-xl 
            shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
            relative overflow-hidden
            p-3 flex items-center gap-4
            lg:p-8 lg:gap-8 lg:h-[210px]
          "
        >

          <div className="absolute inset-0 rounded-3xl pointer-events-none
            shadow-[inset_0_0_8px_8px_rgba(255,255,255,0.15)]" ></div>

          <div className="flex-1 text-left">
            <h5 className="text-white uppercase text-[32px] lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Encourages Active Social Play
            </h5>
            <p className="text-white/80 text-sm lg:text-lg mt-2 drop-shadow-md">
              Mastering trampoline moves builds self-assurance, reduces stress, and supports overall emotional health.
            </p>
          </div>

          <Image
            src="/images/birthday-img/two-girls-n.png"
            alt="kids"
            width={140}
            height={200}
            className="
              rounded-xl 
              -mb-4 lg:mb-1 -mr-4 lg:-mr-8 
              lg:w-[220px] lg:h-[210px]
              drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)]
            "
          />
        </div>

      </div>


      {/* ========== BOTTOM ASTRONAUT (hide on /locations) ========== */}
        <div
          className="w-[200px]
            absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10
            lg:bottom-2 lg:right-2 lg:left-auto lg:translate-x-0 lg:translate-y-0
          "
        >
          <Image
            src="/images/characters/Space Character 6.png"
            alt="astronaut"
            width={250}
            height={250}
            className="mt-8 lg:-mb-[2rem]"
          />
        </div>

    </section>
  );
}
