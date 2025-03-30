import { Button } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { GetVaultOverviewResponse } from "~/@types/vault";
import BlendBackground from "~/components/common/BlendBackground";
import AuditSection2 from "~/components/common/home/AuditSection";
import CoreTechnology from "~/components/common/home/CoreTechnologySection";
import FAQSection from "~/components/common/home/FAQSection";
import Partner from "~/components/common/home/PartnerSection";
import RewardSection2 from "~/components/common/home/RewardSection";
import Verichain from "~/components/common/home/Verichain";
import Earn from "~/components/common/home/earn/Earn";
import Navbar from "~/components/common/navbar/Navbar";
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

  const deltaNeutralVaultApy =
    Math.max(
      ...vaults
        .filter((x) => !x.slug.toLowerCase().includes("option"))
        .map((x) => x.apy_1y)
    ) || 27;

  return (
    <div className={"font-poppins"}>
      <div className={"relative h-screen lg:pt-10 blend-bg overflow-hidden"}>
        <BlendBackground />
        <Navbar />
        <div className="relative w-[calc(100%-16px)] sm:w-3/4 xl:w-4/5 2xl:w-[1060px] mx-auto flex flex-col items-center space-y-6 text-dark-green mt-16 z-30">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-semibold">
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
          <Verichain />
        </div>
        <SubtractIcon className="absolute bottom-0 right-1/2 translate-x-1/2 w-full aspect-[2] translate-y-2" />
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
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-full aspect-[2] bg-[url('blur-logo.png')] bg-center bg-cover mix-blend-overlay z-10" />
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
      <RewardSection2 deltaNeutralVaultApy={deltaNeutralVaultApy} />
      <Partner />
      <AuditSection2 />
      <FAQSection />
    </div>
  );
}
