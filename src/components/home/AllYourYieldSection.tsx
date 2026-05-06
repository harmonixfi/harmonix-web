import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollReveal } from "../common/ScrollReveal";

const TabYieldComponent = () => {
  return (
    <div className="bg-muted-100 rounded-4xl h-auto lg:h-150 flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-20 py-4 lg:py-0 overflow-hidden">
      <div className="space-y-4 lg:space-y-6">
        <Typography
          align={"left"}
          variant={"h1"}
          className="mt-8 text-primary lg:text-5xl"
        >
          Deposit and earn.
        </Typography>
        <Typography
          align={"left"}
          variant={"bodyLarge"}
          className="text-primary font-normal"
        >
          Shortly describe how this feature solves a specific user problem.
          Focus on benefits not on technical details.
        </Typography>
        <Button
          className={
            "rounded-full w-full lg:w-auto text-base p-6 cursor-pointer"
          }
        >
          Get access
        </Button>
      </div>
      <Image
        src="/images/dashboard/web-dashboard.png"
        alt="Dashboard Harmonix"
        width={570}
        height={400}
        className="w-276 h-auto"
        loading="eager"
      />
    </div>
  );
};

export default function AllYourYieldSection() {
  return (
    <section className="bg-white">
      <ScrollReveal
        direction="up"
        duration={800}
        delay={100}
        className="mx-auto max-w-7xl pb-10 lg:pb-36 space-y-4 lg:space-y-8 px-4"
      >
        <Typography
          align={"center"}
          variant={"h1"}
          className="leading-10 lg:leading-18"
        >
          All your yield.
          <br />
          <span className="bg-title-gradient bg-clip-text text-transparent">
            One place.
          </span>
        </Typography>
        <Typography
          align={"center"}
          variant={"bodyLarge"}
          className="text-muted-foreground"
        >
          Earn automated yield across stablecoin, HYPE, and delta-neutral
          vaults. All ERC-4626 compliant.
        </Typography>

        <Tabs defaultValue="yield-market" className="">
          <div className="w-full h-11 overflow-x-scroll flex items-center">
            <TabsList className="mx-auto w-max rounded-full p-5 gap-2 lg:gap-5 px-1 lg:px-2">
              <TabsTrigger
                value="yield-market"
                className={
                  "text-base cursor-pointer h-8 px-3 data-active:bg-white data-active:px-3 data-active:rounded-full data-active:shadow-xl data-active:border data-active:border-white"
                }
              >
                Yield Markets
              </TabsTrigger>
              <TabsTrigger
                value="yield-and-analytics"
                className={
                  "text-base cursor-pointer h-8 px-3 data-active:bg-white data-active:px-3 data-active:rounded-full data-active:shadow-xl data-active:border data-active:border-white"
                }
              >
                Yield and Analytics
              </TabsTrigger>
              <TabsTrigger
                value="points-and-cross-chain"
                className={
                  "text-base cursor-pointer h-8 px-3 data-active:bg-white data-active:px-3 data-active:rounded-full data-active:shadow-xl data-active:border data-active:border-white"
                }
              >
                Points and Cross-chain
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="yield-market">
            1 ne
            <TabYieldComponent />
          </TabsContent>
          <TabsContent value="yield-and-analytics">
            2 ne
            <TabYieldComponent />
          </TabsContent>
          <TabsContent value="points-and-cross-chain">
            3 ne
            <TabYieldComponent />
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </section>
  );
}
