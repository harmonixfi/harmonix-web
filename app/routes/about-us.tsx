import type { MetaFunction } from "@remix-run/node";
import CoreValues from "~/components/about-us/CoreValues";
import JoinUs from "~/components/about-us/JoinUs";
import Mission from "~/components/about-us/Mission";
import Vision from "~/components/about-us/Vision";
import BlendBackground from "~/components/common/BlendBackground";
import What from "~/components/common/home/What";
import Why from "~/components/common/home/Why";
import { HomeGridIcon } from "~/components/icons";
import { METADATA } from "~/constants/metadata";

const metaTitle = "About Harmonix Team";
const metaDescription =
  "Learn about the experienced and passionate team behind Harmonix. Our experts in DeFi, blockchain, and finance are dedicated to providing top-notch investment solutions";

export const meta: MetaFunction = () => {
  return [
    { title: metaTitle },
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: metaTitle,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: METADATA.openGraphType,
    },
    {
      property: "og:image",
      content: METADATA.imageUrl,
    },
    {
      name: "twitter:title",
      content: metaTitle,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
    {
      name: "twitter:site",
      content: METADATA.twitterSite,
    },
    {
      name: "twitter:card",
      content: METADATA.twitterCard,
    },
    {
      name: "twitter:image",
      content: METADATA.imageUrl,
    },
  ];
};

export default function AboutUs() {
  return (
    <div className="blend-bg -translate-y-[64px] lg:-translate-y-[72px]">
      <BlendBackground />
      <div className="relative w-full flex flex-col gap-32 pt-28 sm:pt-40">
        <What />
        <Why />
        <div className="space-y-16 px-6 sm:px-12 lg:px-24">
          <Mission />
          <Vision />
          <CoreValues />
        </div>
        <JoinUs />
        <HomeGridIcon className="absolute -bottom-[1%] sm:-bottom-[2%] 2xl:-bottom-[10%] right-0 w-full h-auto" />
      </div>
    </div>
  );
}
