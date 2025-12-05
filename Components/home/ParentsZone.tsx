"use client";

import Image from "next/image";

export default function ParentsZone() {
  const kidsImage = "/images/2kids-imgnew.png";
  const astronaut = "/images/characters/Space Character 8.png";

  return (
    <section className="w-full bg-white py-20 px-5 relative">

      {/* HEADING */}
      <div className="text-center mb-10 ">
        <h1 className="text-black text-3xl md:text-[46px] font-extrabold tracking-wide">
          PARENTS
        </h1>
        <h2 className="text-orange-500 text-4xl md:text-[44px] font-extrabold -mt-1">
          Zone
        </h2>
        <div className="h-1 w-20 bg-black mx-auto mt-2 rounded-full" />
      </div>

      {/* MOBILE LAYOUT (YOUR DRAWING) */}
      <div className="block lg:hidden max-w-md mx-auto relative">

        <div className="grid grid-cols-2 gap-3">

          {/* LEFT COLUMN → 2 CARDS */}
          <div className="flex flex-col gap-4">

            {/* CARD 1 */}
            <div className="bg-orange-500 rounded-3xl shadow-lg text-white h-[220px] flex flex-col justify-between">
              <div className="p-4">
                <h5 className="text-[22px] lg:text-[50px] font-bold leading-tight">THE PLAY BUDDY</h5>
                <p className="!text-[13px] font-tungsten tracking-widest mt-1 opacity-90 leading-tight">
                  JUMP IN AND ROLL WITH THE LITTLE ONES.
                </p>
              </div>

              <div className="relative w-full h-[190px] rounded-3xl overflow-hidden">
                <Image
                  src={kidsImage}
                  alt="Kids"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-orange-500 rounded-3xl shadow-lg text-white h-[220px] flex flex-col justify-between">
              <div className="p-4">
                <h5 className="text-[22px] lg:text-[50px] font-bold leading-tight">THE FREE BIRD</h5>
                <h6 className="!text-[13px] font-tungsten tracking-widest mt-1 opacity-90 leading-tight">
                  DROP THEM, STEP OUT, ENJOY THE MALL. WE’VE GOT THE KIDS COVERED.
                </h6>
              </div>

              <div className="relative w-full h-[190px] rounded-3xl overflow-hidden">
                <Image
                  src={kidsImage}
                  alt="Kids"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN → 1 CENTER CARD */}
          <div className="flex items-center">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 h-[220px] w-full flex flex-col justify-between">
              <div className="p-4">
                <h5 className="text-[22px] lg:text-[50px] font-bold text-black leading-tight">THE CHILL MODE</h5>
                <h6 className="!text-[13px] font-tungsten tracking-widest mt-1 text-gray-700 leading-tight">
                  SIT BACK IN OUR CAFÉ — COFFEE, WORK, GOSSIP… YOUR CHOICE.
                </h6>
              </div>

              <div className="relative w-full h-[190px] rounded-3xl overflow-hidden">
                <Image
                  src={kidsImage}
                  alt="Kids"
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DESKTOP LAYOUT (3 COLUMNS) */}
      <div className="hidden lg:grid grid-cols-3 gap-8 max-w-[1500px] mx-auto mt-10">

        {/* CARD 1 */}
        <div className="bg-orange-500 rounded-3xl p-5 shadow-lg text-white h-[430px] flex flex-col justify-between">
          <div>
            <h5 className="text-[22px] lg:text-[50px] font-bold leading-tight">THE PLAY BUDDY</h5>
            <h6 className="text-sm mt-1 opacity-90 leading-tight">
              JUMP IN AND ROLL WITH THE LITTLE ONES.
            </h6>
          </div>
          <div className="relative w-full mb-[-1.2rem] ml-[1.3rem] h-[290px] rounded-3xl overflow-hidden">
            <Image src={kidsImage} alt="Kids" fill className="object-cover object-bottom" />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-3xl p-5 shadow-lg border border-gray-200 h-[430px] flex flex-col justify-between">
          <div>
            <h5 className="text-[22px] lg:text-[50px] font-bold text-black leading-tight">THE CHILL MODE</h5>
            <h6 className="text-sm mt-1 text-gray-700 leading-tight">
              SIT BACK IN OUR CAFÉ — COFFEE, WORK, GOSSIP… YOUR CHOICE.
            </h6>
          </div>
          <div className="relative w-full mb-[-1.2rem] ml-[1.3rem] h-[290px] rounded-3xl overflow-hidden">
            <Image src={kidsImage} alt="Kids" fill className="object-cover object-bottom" />
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-orange-500 rounded-3xl p-5 shadow-lg text-white h-[430px] flex flex-col justify-between">
          <div>
            <h5 className="text-[22px] lg:text-[50px] font-bold leading-tight">THE FREE BIRD</h5>
            <h6 className="text-sm mt-1 opacity-90 leading-tight">
              DROP THEM, STEP OUT, ENJOY THE MALL. WE’VE GOT THE KIDS COVERED.
            </h6>
          </div>
          <div className="relative w-full mb-[-1.2rem] ml-[1.3rem] h-[290px] rounded-3xl overflow-hidden">
            <Image src={kidsImage} alt="Kids" fill className="object-cover object-bottom" />
          </div>
        </div>

      </div>

      {/* BOTTOM ASTRONAUT */}
      <div className="absolute -bottom-4 -mb-24 right-0 lg:right-5 w-[230px]">
        <Image
          src={astronaut}
          alt="Astronaut"
          width={230}
          height={230}
          className="object-contain"
        />
      </div>
    </section>
  );
}
