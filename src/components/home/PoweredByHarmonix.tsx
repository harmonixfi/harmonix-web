import { Typography } from "@/components/ui/typography";
import Image from "next/image";

import HarmonixLogo from "../icons/HarmonixLogo";
import HyperliquidLogo from "../icons/HyperliquidLogo";
import UsdcAsset from "../icons/UsdcAsset";
import HyEnaLogo from "../icons/HyEnaLogo";
import TradeXYZLogo from "../icons/TradeXYZLogo";
import FelixLogo from "../icons/FelixLogo";
import HypurrfiLogo from "../icons/HypurrfiLogo";
import HyperlendLogo from "../icons/HyperlendLogo";
import { ScrollReveal } from "../common/ScrollReveal";

export default function PoweredByHarmonix() {
  return (
    <section className="bg-white">
      <ScrollReveal
        direction="up"
        duration={800}
        delay={200}
        className="mx-auto max-w-7xl pb-10 lg:pb-36 space-y-4 lg:space-y-8 h-175 flex flex-col items-center justify-center relative"
      >
        <Typography
          align={"center"}
          variant={"h1"}
          className="leading-10 lg:leading-18"
        >
          Powered by
          <br />
          <span className="bg-title-gradient bg-clip-text text-transparent">
            Harmonix
          </span>
        </Typography>
        <Typography
          align={"center"}
          variant={"bodyLarge"}
          className="text-muted-foreground"
        >
          Integrated with leading protocols across the Hyperliquid ecosystem.
        </Typography>
        <Image
          width={56}
          height={56}
          loading="eager"
          src="/images/icons/dream-logo.png"
          alt="dream logo"
          className="size-14 absolute rounded-full top-5 lg:top-0 right-10 md:right-30 lg:right-96 animate-float-1"
        />
        <Image
          width={56}
          height={56}
          loading="eager"
          src="/images/icons/hyperbeat-logo.png"
          alt="hyperbeat logo"
          className="size-14 absolute rounded-full top-20 lg:top-20 right-30 md:right-60 lg:right-48 animate-float-2"
        />
        <Image
          width={56}
          height={56}
          loading="eager"
          src="/images/icons/matkets-xyz.png"
          alt="matkets xyz logo"
          className="size-14 absolute rounded-full bottom-5 lg:bottom-10 xl:bottom-42 right-25 md:right-40 lg:right-60 xl:right-88 animate-float-4"
        />
        <HyperlendLogo className="size-14 absolute rounded-full bottom-40 lg:bottom-50 xl:bottom-72 right-16 md:right-40 lg:right-50 xl:right-28 animate-float-3" />
        <HypurrfiLogo className="size-14 absolute rounded-full top-0 left-2/5 animate-float-2" />
        <FelixLogo className="size-14 absolute rounded-full bottom-40 lg:bottom-50 xl:bottom-72 left-15 md:left-30 lg:left-50 xl:left-33 animate-float-3" />
        <HarmonixLogo className="size-14 absolute rounded-full bottom-5 lg:bottom-10 xl:bottom-40 left-20 md:left-40 lg:left-88 animate-float-1" />
        <HyperliquidLogo className="size-14 absolute rounded-full bottom-25 lg:bottom-45 left-45 md:left-90 lg:left-130 xl:left-144 animate-float-4" />
        <UsdcAsset className="size-14 absolute rounded-full top-40 md:top-50 lg:top-50 right-10 md:right-40 lg:right-40 xl:right-66 animate-float-1" />
        <HyEnaLogo className="size-14 absolute rounded-full top-35 md:top-40 lg:top-45 left-24 md:left-50 lg:left-50 xl:left-80 animate-float-3" />
        <TradeXYZLogo className="size-14 absolute rounded-full top-8 md:top-12 lg:top-8 left-10 md:left-30 lg:left-60 animate-float-2" />
      </ScrollReveal>
    </section>
  );
}
