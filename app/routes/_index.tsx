import { Button } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { GetVaultOverviewResponse } from "~/@types/vault";
import AuditSection from "~/components/common/home/AuditSection";
import BackerSection from "~/components/common/home/BackerSection";
import MainBanner from "~/components/common/home/MainBanner";
import PlusPartnerSection from "~/components/common/home/PlusPartnerSection";
import RewardSection from "~/components/common/home/RewardSection";
import { METADATA } from "~/constants/metadata";
import { EXTERNAL_LINKS } from "~/constants/url";

const metaTitle = "Welcome to Harmonix Finance: Crypto Investment On Autopilot";
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
      <div className="w-[calc(100%-16px)] sm:w-3/4 xl:w-4/5 2xl:w-[1060px] mx-auto flex flex-col items-center gap-12">
        <h1 className="text-6xl lg:text-7xl font-light capitalize text-center">
          Building Efficient{" "}
          <span className="whitespace-nowrap">Hedge Fund</span>{" "}
          <span className="whitespace-nowrap">On-Chain</span> Derivatives Pools
        </h1>
        <Button
          as={Link}
          color="primary"
          size="lg"
          className="rounded-full text-secondary px-6"
          to={EXTERNAL_LINKS.App}
          target="_blank"
          rel="noreferrer"
        >
          Launch App
        </Button>
      </div>

      <MainBanner />
      <RewardSection
        optionsVaultApy={optionsVaultApy}
        deltaNeutralVaultApy={deltaNeutralVaultApy}
      />
      <PlusPartnerSection />
      <AuditSection />
      <BackerSection />
    </div>
  );
}
