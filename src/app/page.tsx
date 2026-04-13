import BoxStats from "@/components/home/BoxStats";
import HeroSection from "@/components/home/HeroSection";
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
          className="absolute -bottom-40 left-0 right-0 w-full"
        />
        <div className="absolute bottom-3 left-0 right-0 w-1/2 mx-auto">
          <BoxStats />
        </div>
      </div>
    </div>
  );
}
