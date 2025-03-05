import { Button } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { GetVaultOverviewResponse } from "~/@types/vault";
import AuditSection from "~/components/common/home/AuditSection";
import CoreTechnology from "~/components/common/home/CoreTechnologySection";
import FAQ from "~/components/common/home/FAQ";
// import BackerSection from "~/components/common/home/BackerSection";
import MainBanner from "~/components/common/home/MainBanner";
import PlusPartnerSection from "~/components/common/home/PlusPartnerSection";
import RewardSection from "~/components/common/home/RewardSection";
import RewardSection2 from "~/components/common/home/RewardSection2";
import Verichain from "~/components/common/home/Verichain";
// import What from "~/components/common/home/What";
// import WhatWeSolve from "~/components/common/home/WhatWeSolve";
import WhatYouCanDo from "~/components/common/home/WhatYouCanDo";
import Earn from "~/components/common/home/earn/Earn";
import { VerichainIcon } from "~/components/icons";
// import Why from "~/components/common/home/Why";
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
        "https://api.rockonyx.xyz/api/v1/statistics/"
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

  const optionsVaultApy =
    vaults.find((x) => x.slug.toLowerCase().includes("option"))?.apy_1y || 119;

  const deltaNeutralVaultApy =
    Math.max(
      ...vaults
        .filter((x) => !x.slug.toLowerCase().includes("option"))
        .map((x) => x.apy_1y)
    ) || 27;

  return (
    <div className="pt-16 sm:pt-28">
      <div className="w-[calc(100%-16px)] sm:w-3/4 xl:w-4/5 2xl:w-[1060px] mx-auto flex flex-col items-center space-y-6 text-primary">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold">
            Reshaping Yield Optimization
          </h1>
          <h1 className="text-2xl sm:text-3xl lg:text-2xl font-light mt-2">
            Minimize Risk, Maximize Yield
          </h1>
        </div>
        <Button
          as={Link}
          color="primary"
          size="lg"
          className="rounded-full bg-secondary text-primary shadow-sm border border-solid border-primary"
          to={EXTERNAL_LINKS.App}
          target="_blank"
          rel="noreferrer"
        >
          Launch App
        </Button>
      </div>

      <MainBanner />

      <div className={"mt-24"}>
        <Verichain />
      </div>

      <Earn />
      <CoreTechnology />
      <RewardSection2 />
      <div className="flex flex-col gap-20 py-24">
        {/* <What />
        <Why /> */}
        {/* <WhatWeSolve /> */}
        <WhatYouCanDo />
      </div>

      <RewardSection
        optionsVaultApy={optionsVaultApy}
        deltaNeutralVaultApy={deltaNeutralVaultApy}
      />
      <PlusPartnerSection />
      <AuditSection />
      <div className="py-24">
        <FAQ />
      </div>
      {/* <BackerSection /> */}
    </div>
  );
}
