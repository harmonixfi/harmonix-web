import AllYourYieldSection from "@/components/home/AllYourYieldSection";
import BlogsSection from "@/components/home/BlogsSection";
import BoxStats from "@/components/home/BoxStats";
import BuildOnHarmonixSection from "@/components/home/BuildOnHarmonixSection";
import BuyHarSection from "@/components/home/BuyHarSection";
import ContactUsSection from "@/components/home/ContactUsSection";
import HeroSection from "@/components/home/HeroSection";
import PoweredByHarmonix from "@/components/home/PoweredByHarmonix";
import SecureDesignSection from "@/components/home/SecureDesignSection";
import StartEarningSection from "@/components/home/StartEarningSection";
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
      <AllYourYieldSection />
      <PoweredByHarmonix />
      <BlogsSection />
      <BuildOnHarmonixSection />
      <SecureDesignSection />
      <ContactUsSection />
      <StartEarningSection />
    </div>
  );
}
