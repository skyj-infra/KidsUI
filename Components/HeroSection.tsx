"use client";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] z-[-1] md:h-screen overflow-hidden">

      {/* Background Video */}
      <video
        src="https://skyjumperstoragemedia.b-cdn.net/videos/1decb7d3-517c-4562-af93-05c5318eac45-tpcp7ioweka64nnpqvdx.mp4?sv=2025-11-05&st=2025-11-01T07%3A27%3A35Z&se=2026-11-01T07%3A27%3A35Z&sr=b&sp=r&sig=rewmjcB5eriYMU%2BRaWWt6ACIVoQf%2BszNIEnx%2FjAWVAU%3D"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight uppercase">
          INDIA'S BIGGEST <br />
          <span className="text-[#ff6a34]">Trampoline Park</span> Chain
        </h1>

        <button className="mt-6 px-8 py-3 border border-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition">
          Select Your Park
        </button>
      </div>
    </section>
  );
}
