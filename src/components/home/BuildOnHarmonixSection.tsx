import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";

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
      <div className="mx-auto py-36 px-4 max-w-7xl grid grid-cols-2 gap-14 items-center">
        <div className="bg-linear-to-t from-[#C8EBD3] to-[#F4FAF1] rounded-3xl h-149 relative">
          <Image
            width={490}
            height={510}
            loading="eager"
            src="/images/harmonix-docs.png"
            alt="harmonix docs"
            className="w-122 h-auto object-cover absolute bottom-0 right-0 rounded-br-3xl"
          />
        </div>
        <div className="space-y-8">
          <Typography align={"left"} variant={"h1"} className="">
            Build on Harmonix with{" "}
            <span className="bg-title-gradient bg-clip-text text-transparent">
              confidence
            </span>
          </Typography>

          <Typography
            align={"left"}
            variant={"bodyLarge"}
            className="text-muted-foreground"
          >
            Everything you need to design, launch, and scale financial products
            — from APIs to secure infrastructure.
          </Typography>

          <div className="grid grid-cols-2 gap-3">
            {features.map((v, i) => (
              <div key={`index-feature-${i}`} className="space-y-1">
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
              </div>
            ))}
          </div>

          <Button className={"rounded-full text-base p-6 cursor-pointer"}>
            Read the docs
          </Button>
        </div>
      </div>
    </section>
  );
}
