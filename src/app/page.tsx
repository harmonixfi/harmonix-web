import { ScrollReveal } from "@/components/common/ScrollReveal";
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
      <div className="relative min-h-auto lg:min-h-[min(100svh,72rem)] lg:pb-24">
        <HeroSection />
        <Image
          width={1000}
          height={418}
          loading="eager"
          src="/images/blur-line.png"
          alt="blur line"
          className="pointer-events-none hidden lg:block absolute top-full left-0 right-0 w-full lg:-translate-y-[70%] xl:-translate-y-[68%] 2xl:-translate-y-[60%]"
        />

        <ScrollReveal
          direction="up"
          duration={800}
          delay={100}
          className="relative mx-auto mb-10 w-full px-4 lg:absolute lg:top-full lg:left-1/2 lg:mb-0 lg:w-2/3 lg:-translate-x-1/2 lg:-translate-y-[80%] xl:w-1/2"
        >
          <BoxStats />
        </ScrollReveal>
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
