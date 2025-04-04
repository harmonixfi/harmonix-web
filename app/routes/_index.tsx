import { Button } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { GetVaultOverviewResponse } from "~/@types/vault";
import BlendBackground from "~/components/common/BlendBackground";
import AuditSection from "~/components/common/home/AuditSection";
import CoreTechnology from "~/components/common/home/CoreTechnologySection";
import FAQSection from "~/components/common/home/FAQSection";
import MetaBadge from "~/components/common/home/MetaBadge";
import Partner from "~/components/common/home/PartnerSection";
import RewardSection from "~/components/common/home/RewardSection";
import Earn from "~/components/common/home/earn/Earn";
import { SubtractIcon } from "~/components/icons";
import { METADATA } from "~/constants/metadata";
import { EXTERNAL_LINKS } from "~/constants/url";

const metaTitle =
  "Welcome to Harmonix Finance: Building the next generation of TradFi yield onchain";
const metaDescription =
  "The leading DeFi platform offering automated vault strategies to maximize returns and minimize risks.";

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

export default function Index() {
  const { data } = useQuery({
    queryKey: ["GET_VAULT_STATISTICS"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.harmonix.fi/api/v1/statistics/"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: GetVaultOverviewResponse = await response.json();

      return data;
    },
    staleTime: 60 * 60 * 1000, // Invalidate after 1 hour
  });

  const vaults = data?.vaults || [];

  const apyList = [
    ...vaults
      .filter((x) => !x.slug.toLowerCase().includes("option"))
      .map((x) => x.apy_1y),
    10.68,
  ];

  const deltaNeutralVaultApy = Math.max(...apyList);

  return (
    <div className={"font-poppins"}>
      <div
        className={
          "relative h-[calc(100vh)] blend-bg overflow-hidden -translate-y-[64px] lg:-translate-y-[72px]"
        }
      >
        <BlendBackground />
        <div className="relative w-[calc(100%-16px)] sm:w-3/4 xl:w-4/5 2xl:w-[1060px] mx-auto flex flex-col items-center space-y-6 pt-40 text-dark-green z-30">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-semibold leading-tight">
              Reshaping Yield Optimization
            </h1>
            <h1 className="text-2xl lg:text-xl font-light mt-2">
              Minimize Risk, Maximize Yield
            </h1>
          </div>
          <Button
            as={Link}
            color="primary"
            size="lg"
            className="rounded-full bg-light-yellow shadow-sm text-dark-green"
            to={EXTERNAL_LINKS.App}
            target="_blank"
            rel="noreferrer"
          >
            Launch App
          </Button>
        </div>

        <div
          className={
            "absolute left-1/2 -translate-x-1/2 bottom-4 lg:bottom-6 z-30"
          }
        >
          <MetaBadge apy={deltaNeutralVaultApy} />
        </div>
        <SubtractIcon className="absolute bottom-0 right-1/2 translate-x-1/2 w-2/3 sm:w-3/4 xl:w-2/3 h-auto translate-y-2" />
        <div
          className="absolute -top-1/2 -right-1/2 w-3/4 aspect-[1.3] rotate-12 opacity-10"
          style={{
            backgroundImage: "url('bg2.png')",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "soft-light",
          }}
        />
        <div
          className="absolute bottom-0 right-1/2 translate-x-1/2 w-full aspect-[1.2] sm:aspect-[1.5] xl:aspect-[2] bg-center bg-cover mix-blend-overlay z-10"
          style={{
            backgroundImage: "url('blur-logo.png')",
          }}
        />
        <div
          className="w-full h-40 absolute bottom-0 right-0 z-20"
          style={{
            background:
              "linear-gradient(258deg, rgba(227, 244, 225, 0.00) 28.95%, #CDEECE 81.39%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <Earn />
      <CoreTechnology />
      <RewardSection deltaNeutralVaultApy={deltaNeutralVaultApy} />
      <Partner />
      <AuditSection />
      <FAQSection />
    </div>
  );
}
