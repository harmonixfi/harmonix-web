"use client";

import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEarningVaultsV2 } from "@/api/home";
import { VaultTag } from "@/types/home";
import useSWR from "swr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import DepositAssets from "./DepositAssets";
import { toFixedNumber, withCommas } from "@/lib/number";
import useAppConfigAPY from "@/hooks/useAppConfigAPY";
import { CategoryUI } from "@/constants/vault";
import { getRewardIcon } from "@/lib/vault";
import Image from "next/image";
import YieldSectionSkeleton from "./YieldSectionSkeleton";

const getDescription = (category: string) => {
  switch (category.toLowerCase()) {
    case CategoryUI.Hip3:
      return "Increase your yield by converting half of your fund deposit into HyperLiquid and purchasing $HYPE. Simultaneously, open a 1x short HYPE-USD position to hedge your exposure and earn funding fees.";
    case CategoryUI.Hyperliquid:
      return "Deposit your KHYPE to earn optimized yield across market-neutral strategies. We diversify into multiple delta-neutral positions and dynamically allocate spot KHYPE across leading HyperEVM protocols to maximize your returns with minimized risk.";
    default:
      return "";
  }
};

export default function YieldSection() {
  const { getVaultApyValue } = useAppConfigAPY();

  const { data: vaultsResponse, isLoading: loadingVaults } = useSWR(
    ["get-earning-vaults-v2", VaultTag.Popular],
    () =>
      getEarningVaultsV2({
        tags: VaultTag.Popular,
      }),
  );

  return (
    <section className="pt-60 bg-white">
      <div className="space-y-12 mx-auto pb-10 px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Typography align={"left"} variant={"h1"} className="lg:text-5xl">
              Maximize{" "}
              <span className="bg-title-gradient bg-clip-text text-transparent">
                Your Yield
              </span>
            </Typography>
          </div>
          <div className="space-y-3">
            <Typography
              align={"left"}
              variant={"bodyLarge"}
              className="text-muted-foreground"
            >
              Deposit your assets into automated vaults to earn optimized
              returns with institutional-grade strategies.
            </Typography>
            <Button className={"rounded-full text-base p-6 cursor-pointer"}>
              Explore all vaults
            </Button>
          </div>
        </div>
        <Carousel
          opts={{
            dragFree: true,
          }}
        >
          <CarouselContent className="p-1">
            {loadingVaults ? (
              <YieldSectionSkeleton />
            ) : (
              vaultsResponse?.data?.map((item, index) => (
                <CarouselItem
                  key={`index-${index}-${item.id}`}
                  className="px-4 basis-lg"
                >
                  <Card className="p-8 shadow-md rounded-3xl">
                    <CardHeader className="p-0">
                      <CardTitle className="space-y-4">
                        <Typography
                          align={"left"}
                          variant={"bodySmall"}
                          className="text-muted-foreground font-medium uppercase"
                        >
                          {item.attributes.ui_category}
                        </Typography>
                        <Typography
                          align={"left"}
                          variant={"body"}
                          className="font-semibold text-2xl lg:text-4xl"
                        >
                          {item.attributes.vault_currency}
                        </Typography>
                        <Typography
                          align={"left"}
                          variant={"body"}
                          className="font-medium leading-6 line-clamp-3"
                        >
                          {getDescription(item.attributes.ui_category ?? "")}
                        </Typography>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-8 px-6 rounded-3xl bg-linear-to-t from-[#F4FAF1] via-[#C8EBD3] to-[#F4FAF1] space-y-6">
                      <DepositAssets
                        depositTokens={item.attributes.deposit_asset}
                        classes={{ icon: "w-16 h-16 rounded-full" }}
                      />

                      <Typography
                        align={"center"}
                        variant={"body"}
                        className="font-extrabold"
                      >
                        {item.attributes.name}
                      </Typography>
                      <div className="bg-green-50 p-6 flex justify-between rounded-3xl">
                        <div>
                          <Typography
                            align={"left"}
                            variant={"bodySmall"}
                            className=""
                          >
                            TVL
                          </Typography>
                          <Typography
                            align={"left"}
                            variant={"bodyLarge"}
                            className="font-bold"
                          >
                            {`${withCommas(toFixedNumber(item.attributes.tvl || 0, 4))} ${item.attributes.vault_currency}`}
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            align={"right"}
                            variant={"bodySmall"}
                            className=""
                          >
                            APY
                          </Typography>
                          <Typography
                            align={"right"}
                            variant={"bodyLarge"}
                            className="font-bold text-green-600"
                          >
                            {toFixedNumber(
                              getVaultApyValue({
                                id: item.id,
                                apy: item.attributes.apy || 0,
                                apy15d: item.attributes.apy_15d || 0,
                                apy45d: item.attributes.apy_45d || 0,
                              }),
                            )}
                            %
                          </Typography>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Typography
                          align={"center"}
                          variant={"bodySmall"}
                          className="text-muted-foreground font-medium"
                        >
                          Rewards
                        </Typography>
                        <div className="flex justify-center flex-wrap gap-2">
                          {item.attributes.rewards?.map((element, index) => {
                            const rewardIcon = getRewardIcon(element);

                            if (!rewardIcon) {
                              return (
                                <div
                                  key={`${index}-reward-${element}`}
                                  className="size-8 bg-gray-300 rounded-full"
                                ></div>
                              );
                            }

                            if (rewardIcon.kind === "component") {
                              return (
                                <rewardIcon.Component
                                  key={`${index}-reward-${element}`}
                                  className="size-8 rounded-full text-[9px] lg:text-[9px]"
                                />
                              );
                            }

                            if (rewardIcon.kind === "image") {
                              return (
                                <Image
                                  key={`${index}-reward-${element}`}
                                  width={32}
                                  height={32}
                                  loading="eager"
                                  src={rewardIcon.src}
                                  alt={rewardIcon.alt}
                                  className="size-8 rounded-full"
                                />
                              );
                            }
                          })}
                        </div>
                      </div>
                      <Button
                        className={
                          "rounded-full text-base p-6 cursor-pointer w-full"
                        }
                      >
                        Deposit
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
