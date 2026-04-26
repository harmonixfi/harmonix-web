import BoxStats from "@/components/home/BoxStats";
import BuyHarSection from "@/components/home/BuyHarSection";
import HeroSection from "@/components/home/HeroSection";
import LandingSections from "@/components/home/LandingSections";
import YieldSection from "@/components/home/YieldSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="relative min-h-screen">
        <HeroSection />
        <Image
          width={1000}
          height={418}
          loading="eager"
          src="/images/blur-line.png"
          alt="blur line"
          className="absolute -bottom-72 left-0 right-0 w-full"
        />
        <div className="absolute -bottom-28 left-0 right-0 w-1/2 mx-auto">
          <BoxStats />
        </div>
      </div>
      <YieldSection />
      <BuyHarSection />
      <LandingSections />
    </div>
  );
}
