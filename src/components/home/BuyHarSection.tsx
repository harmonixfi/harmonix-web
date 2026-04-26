import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";

export default function BuyHarSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-36">
        <div className="bg-primary-700 rounded-4xl h-150 flex justify-center items-center gap-40 px-20">
          <Image
            src="/images/buyHar/buy-har.png"
            alt="Harmonix"
            width={480}
            height={280}
            className="w-120 h-auto"
          />
          <div className="space-y-8">
            <Typography
              align={"left"}
              variant={"small"}
              className="text-white bg-primary-100 px-3.5 py-1 rounded-full uppercase"
            >
              HAR TOKEN
            </Typography>
            <Typography
              align={"left"}
              variant={"h1"}
              className="text-white mt-8"
            >
              Buy HAR.
            </Typography>
            <Typography
              align={"left"}
              variant={"bodyLarge"}
              className="text-muted-foreground"
            >
              Governance and rewards token for Harmonix Finance. 50% airdropped
              to the community. Trade HAR/USDC on Hyperliquid.
            </Typography>
            <Button
              className={
                "rounded-full text-base p-6 cursor-pointer bg-accent text-accent-foreground"
              }
            >
              Buy HAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
