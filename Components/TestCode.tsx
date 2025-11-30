"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HearFromKids() {

  const videos = [
    "https://skyjumperstoragemedia.b-cdn.net/videos/b982d88e-f149-48a3-a637-bcb324b8a878-Pune_tales_3.mp4",
    "https://skyjumperstoragemedia.b-cdn.net/videos/c8ffe71f-81ce-46d7-9b1b-7dbf04c70a72-Ambernath01.mp4",
    "https://skyjumperstoragemedia.b-cdn.net/videos/cf48d741-c015-497c-8ce4-0885364c3e90-IMG_0294.MOV",
    "https://skyjumperstoragemedia.b-cdn.net/videos/c8ffe71f-81ce-46d7-9b1b-7dbf04c70a72-Ambernath01.mp4",
  ];

  const [i, setI] = useState(0);

  // autoplay
  useEffect(() => {
    const x = setInterval(() => setI(p => (p + 1) % videos.length), 2400);
    return ()=> clearInterval(x);
  },[]);

  // ===== REAL REELS FRAME =====
  const CARD = 60;  // main width
  const GAP  = 8;
  const SHIFT = CARD + GAP - 25; // MOST IMPORTANT → creates center zoom look

  return (
    <section className="w-full pt-[9rem] pb-20 bg-[url('/images/bg-whykids.jpg')] bg-cover text-center">

      <h2 className="text-white text-lg font-bold">HEAR FROM</h2>
      <h3 className="text-orange-500 text-4xl font-extrabold -mt-1">Skyjumper Kids</h3>
      <div className="h-1 w-20 bg-white mx-auto mt-1 rounded-full" />

      {/* CENTERED CAROUSEL */}
      <div className="relative w-full flex justify-center mt-10 overflow-hidden">

        <motion.div
          className="flex"
          animate={{ x: `-${i * SHIFT}%` }}
          transition={{ duration: 0.8, ease:"easeInOut" }}
        >
          {videos.map((vid, index) => (
            <motion.div key={index}
              style={{ width:`${CARD}%`, marginRight:`${GAP}%` }}
              animate={{
                scale: index===i ? 1 : 0.88,
                opacity:index===i ? 1 : 0.5
              }}
              className="overflow-hidden rounded-3xl h-[420px] md:h-[600px] bg-black"
            >
              <video src={vid} autoPlay muted loop playsInline
                className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* PAGINATION SAME AS YOUR SCREENSHOT */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2 px-6 py-2 bg-white/80 rounded-full">
          {videos.map((_, x)=>(
            <button key={x} onClick={()=>setI(x)}
              className={`rounded-full transition-all ${i===x?"w-5 h-3 bg-orange-500":"w-3 h-3 bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
