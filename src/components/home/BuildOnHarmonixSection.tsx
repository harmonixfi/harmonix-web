import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
import { HARMONIX_CONFIG_LINK } from "@/constants/common";
import { ScrollReveal } from "../common/ScrollReveal";

const features = [
  {
    icon: Rocket,
    title: "Developer-First Experience",
    description:
      "Clear documentation, SDKs, and quickstart guides to help you ship faster.",
  },
  {
    icon: Rocket,
    title: "Reliable & Scalable Infrastructure",
    description:
      "Handle growth with confidence using a system built for performance and uptime.",
  },
];

export default function BuildOnHarmonixSection() {
  return (
    <section className="bg-muted">
      <div className="mx-auto py-10 lg:py-36 px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <ScrollReveal
          direction="right"
          duration={700}
          delay={100}
          distance={100}
          className="hidden lg:block bg-linear-to-t from-[#C8EBD3] to-[#F4FAF1] rounded-3xl h-149 relative"
        >
          <Image
            width={490}
            height={510}
            loading="eager"
            src="/images/harmonix-docs.png"
            alt="harmonix docs"
            className="w-122 h-auto object-cover absolute bottom-0 right-0 rounded-br-3xl"
          />
        </ScrollReveal>
        <ScrollReveal
          direction="left"
          duration={700}
          delay={100}
          distance={100}
          className="space-y-4 lg:space-y-8"
        >
          <Typography variant={"h1"} className="text-center lg:text-left">
            Build on Harmonix with{" "}
            <span className="bg-title-gradient bg-clip-text text-transparent">
              confidence
            </span>
          </Typography>
          <Typography
            variant={"bodyLarge"}
            className="text-muted-foreground text-center lg:text-left"
          >
            Everything you need to design, launch, and scale financial products
            — from APIs to secure infrastructure.
          </Typography>

          <div className="grid grid-cols-2 gap-3">
            {features.map((v, i) => (
              <ScrollReveal
                direction="up"
                duration={600}
                delay={100 * (i + 1)}
                threshold={0.2}
                key={`index-feature-${i}`}
                className="space-y-1"
              >
                <v.icon className="size-12 p-3 border rounded-lg shadow-md mb-3" />
                <Typography
                  align={"left"}
                  variant={"body"}
                  className="font-semibold"
                >
                  {v.title}
                </Typography>
                <Typography
                  align={"left"}
                  variant={"bodySmall"}
                  className="text-muted-foreground"
                >
                  {v.description}
                </Typography>
              </ScrollReveal>
            ))}
          </div>

          <Link
            href={HARMONIX_CONFIG_LINK.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className={
                "w-full lg:w-auto rounded-full text-base p-6 cursor-pointer"
              }
            >
              Read the docs
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
