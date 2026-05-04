import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { HARMONIX_CONFIG_LINK } from "@/constants/common";

export default function HeroSection() {
  return (
    <section className="mt-10 lg:mt-36 space-y-6 lg:space-y-8 mx-auto pb-6 lg:pb-10 px-4 max-w-7xl">
      <Typography align={"center"} variant={"h1"} className="">
        The future of{" "}
        <span className="bg-title-gradient bg-clip-text text-transparent">
          yield
        </span>{" "}
        is here
      </Typography>
      <Typography
        align={"center"}
        variant={"bodyLarge"}
        className="text-muted-foreground"
      >
        Earn 7% APY with delta neutral yield bearing stablecoins.
        <br className="hidden lg:block" />
        Secure, automated, institutional-grade.
      </Typography>
      <div className="flex gap-3 justify-center">
        <Link
          href={HARMONIX_CONFIG_LINK.launchApp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className={"rounded-full text-base p-6 cursor-pointer"}>
            Launch App
          </Button>
        </Link>
        <Link
          href={HARMONIX_CONFIG_LINK.docs}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className={"rounded-full text-base p-6 cursor-pointer"}
            variant={"outline"}
          >
            Learn More
          </Button>
        </Link>
      </div>
      <Image
        width={1100}
        height={600}
        loading="eager"
        src="/images/heroSection/harmonix-dashboard.png"
        alt="harmonix dashboard"
        className="w-full"
      />
    </section>
  );
}
