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

export default function PoweredByHarmonix() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pb-36 space-y-8 h-175 flex flex-col items-center justify-center relative">
        <Typography align={"center"} variant={"h1"} className="leading-18">
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
          className="size-14 absolute rounded-full top-0 right-96 animate-float-1"
        />
        <Image
          width={56}
          height={56}
          loading="eager"
          src="/images/icons/hyperbeat-logo.png"
          alt="hyperbeat logo"
          className="size-14 absolute rounded-full top-20 right-48 animate-float-2"
        />
        <Image
          width={56}
          height={56}
          loading="eager"
          src="/images/icons/matkets-xyz.png"
          alt="matkets xyz logo"
          className="size-14 object-scale-down bg-gray-400 absolute rounded-full bottom-42 right-88 animate-float-4"
        />
        <HyperlendLogo className="size-14 absolute rounded-full bottom-72 right-28 animate-float-3" />
        <HypurrfiLogo className="size-14 absolute rounded-full top-0 left-2/5 animate-float-2" />
        <FelixLogo className="size-14 absolute rounded-full bottom-72 left-33 animate-float-3" />
        <HarmonixLogo className="size-14 absolute rounded-full bottom-40 left-88 animate-float-1" />
        <HyperliquidLogo className="size-14 absolute rounded-full bottom-45 left-144 animate-float-4" />
        <UsdcAsset className="size-14 absolute rounded-full top-50 right-66 animate-float-1" />
        <HyEnaLogo className="size-14 absolute rounded-full top-45 left-80 animate-float-3" />
        <TradeXYZLogo className="size-14 absolute rounded-full top-8 left-60 animate-float-2" />
      </div>
    </div>
  );
}
