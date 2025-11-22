import HeroSection from "@/Components/HeroSection";
import AboutUs from "@/Components/About-Us";
import WhySkyjumperKids from "@/Components/WhySkyjumperKids";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutUs />
      <WhySkyjumperKids />
      <h1 className="font-joyful text-4xl">Skyjumper Kids</h1>
      <p className="font-poppins">This is Poppins text</p>
      <h2 className="font-tungsten text-5xl">WHY SKYJUMPER KIDS</h2>

    </div>
  );
}
