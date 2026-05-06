import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import { HARMONIX_CONFIG_LINK } from "@/constants/common";
import Link from "next/link";
import { ScrollReveal } from "../common/ScrollReveal";

export default function BuyHarSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl pb-10 lg:pt-20 lg:pb-36 px-4">
        <ScrollReveal
          direction="up"
          duration={800}
          delay={100}
          className="bg-primary-700 rounded-4xl lg:h-150 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10 xl:gap-40 py-4 lg:py-0 px-4 lg:px-20"
        >
          <Image
            src="/images/buyHar/buy-har.png"
            alt="Buy Harmonix"
            width={480}
            height={280}
            className="w-120 h-auto"
          />
          <div className="space-y-5 lg:space-y-8">
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
              className="text-white mt-4 lg:mt-8"
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
            <Link
              href={HARMONIX_CONFIG_LINK.buyHamonix}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={
                  "w-full lg:w-auto rounded-full text-base p-6 cursor-pointer bg-accent text-accent-foreground"
                }
              >
                Buy HAR
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
