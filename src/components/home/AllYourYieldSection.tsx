import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabYieldComponent = () => {
  return (
    <section className="bg-muted-100 rounded-4xl h-150 flex justify-center items-center gap-10 px-20 overflow-hidden">
      <div className="space-y-6">
        <Typography
          align={"left"}
          variant={"h1"}
          className="mt-8 text-primary  lg:text-5xl"
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
        <Button className={"rounded-full text-base p-6 cursor-pointer"}>
          Get access
        </Button>
      </div>
      <Image
        src="/images/dashboard/web-dashboard.png"
        alt="Dashboard Harmonix"
        width={570}
        height={400}
        className="w-276 h-auto"
      />
    </section>
  );
};

export default function AllYourYieldSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pb-36 space-y-8">
        <Typography align={"center"} variant={"h1"} className="leading-18">
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

        <Tabs
          defaultValue="yield-market"
          className="flex justify-center items-center"
        >
          <TabsList className={"p-5 space-x-4 rounded-full"}>
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
      </div>
    </div>
  );
}
