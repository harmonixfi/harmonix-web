import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function PoweredByHarmonix() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pb-36 space-y-8 h-150 flex flex-col items-center justify-center relative">
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
          className=""
        />
        <Image
          width={56}
          height={56}
          loading="eager"
          src="/images/icons/hyperbeat-logo.png"
          alt="dream logo"
          className=""
        />
        <Image
          width={56}
          height={56}
          loading="eager"
          src="/images/icons/hyperlend-logo.png"
          alt="hyperlend logo"
          className=""
        />
        <Image
          width={56}
          height={56}
          loading="eager"
          src="/images/icons/matkets-xyz.png"
          alt="matkets xyz logo"
          className=""
        />
      </div>
    </div>
  );
}
