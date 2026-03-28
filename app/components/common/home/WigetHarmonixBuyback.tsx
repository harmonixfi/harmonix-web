"use client";

import SegmentedGradientProgress from "./SegmentedGradientProgress";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button, Divider, Skeleton, cn } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { formatInTimeZone } from "date-fns-tz";
import { useEffect, useState } from "react";
import { getTokenDetailByTokenId } from "~/api/hyperliquid";
import { toFixedNumber, withCommas } from "~/utils/number";

type WidgetHarmonixProps = {
  className?: string;
};

const WidgetHarmonix = ({ className }: WidgetHarmonixProps) => {
  const [updateTime, setUpdateTime] = useState<Date | null>(null);

  const {
    data: priceHar,
    isLoading: loadingGetPriceHar,
    isSuccess: isSuccessGetPriceHar,
  } = useQuery({
    queryKey: ["get-price-har"],
    queryFn: () =>
      getTokenDetailByTokenId("0x9325025f805731935c1df7f97e654cda"),
    staleTime: 1000 * 60 * 3, // Invalidate after 3 minutes
  });

  useEffect(() => {
    if (isSuccessGetPriceHar) {
      setUpdateTime(new Date());
    }
  }, [isSuccessGetPriceHar]);

  const harBuybackAmount = Number(
    import.meta.env.VITE_BUYBACK_CONFIG_HAR_AMOUNT ?? 0,
  );
  const harTargetCampaignAmount = Number(
    import.meta.env.VITE_BUYBACK_CONFIG_HAR_TARGET_CAMPAIGN_AMOUNT ?? 1,
  );
  const hypeBuybackAmount = Number(
    import.meta.env.VITE_BUYBACK_CONFIG_HYPE_BUYBACK_AMOUNT ?? 0,
  );
  const hypeTargetCampaignAmount = Number(
    import.meta.env.VITE_BUYBACK_CONFIG_HYPE_TARGET_CAMPAIGN_AMOUNT ?? 1,
  );
  const harSoldAmount = Number(
    import.meta.env.VITE_BUYBACK_CONFIG_HAR_SOLD_AMOUNT ?? 0,
  );

  const harStats = {
    net: harBuybackAmount - harSoldAmount,
    bought: harBuybackAmount,
    sold: harSoldAmount,
    progress: (harBuybackAmount / harTargetCampaignAmount) * 100,
  };

  const hypeStats = {
    bought: hypeBuybackAmount,
    progress: (hypeBuybackAmount / hypeTargetCampaignAmount) * 100,
  };

  const harPriceText = loadingGetPriceHar
    ? null
    : Number(priceHar?.midPx) >= 0.01
    ? withCommas(toFixedNumber(Number(priceHar?.midPx ?? "0")))
    : priceHar?.midPx ?? "0";

  return (
    <section
      className={cn(
        "relative bg-white dark:bg-primary border-b border-solid border-gray-300 dark:border-primary-500 text-primary",
        className,
      )}
    >
      <p className="text-[32px] lg:text-[64px] font-medium text-dark-green text-center">
        Treasury buyback overview
      </p>
      <p className="text-sm mt-1 opacity-60 dark:text-foreground text-center">
        Simple homepage block for HAR price, Buy HAR CTA, HAR buyback, and HYPE
        buyback.
      </p>

      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <div className="rounded-2xl bg-background/40 dark:bg-[#0C191A]/30 border border-gray-300 dark:border-white/10 p-3 lg:p-6">
            <p className="text-lg font-semibold dark:text-foreground">
              Treasury stats
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-primary-900/40 border border-gray-300 dark:border-white/10 p-6">
                <div className="absolute hidden lg:block -right-6 -top-10 text-[120px] font-bold opacity-10 dark:opacity-60 select-none">
                  HAR
                </div>

                <p className="text-sm opacity-60 dark:text-foreground">
                  Net HAR
                </p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-semibold dark:text-foreground">
                    {withCommas(harStats.net)}
                  </p>
                  <p className="text-xl font-semibold opacity-80 dark:text-foreground">
                    $HAR
                  </p>
                </div>

                <div className="mt-4">
                  <SegmentedGradientProgress
                    value={harStats.progress}
                    gradient="linear-gradient(90deg, #9BE22D 0%, #5FE3C6 55%, #B59A61 100%)"
                    inactiveClassName="bg-black/10 dark:bg-white/10"
                    className="h-10"
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-sm opacity-60 dark:text-foreground">
                        Bought
                      </p>
                      <p className="font-semibold dark:text-foreground">
                        {withCommas(harStats.bought)} HAR
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-red-500" />
                    <div>
                      <p className="text-sm opacity-60 dark:text-foreground">
                        Sold (operations only)
                      </p>
                      <p className="font-semibold dark:text-foreground">
                        {withCommas(harStats.sold)} HAR
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-teal-400" />
                    <div>
                      <p className="text-sm opacity-60 dark:text-foreground">
                        Progress
                      </p>
                      <p className="font-semibold dark:text-foreground">
                        {withCommas(toFixedNumber(harStats.progress))}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-primary-900/40 border border-gray-300 dark:border-white/10 p-6">
                <div className="absolute hidden lg:block -right-6 -top-10 text-[120px] font-bold opacity-10 dark:opacity-60 select-none">
                  HYPE
                </div>

                <p className="text-sm opacity-60 dark:text-foreground">
                  HYPE bought
                </p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-semibold dark:text-foreground">
                    {withCommas(hypeStats.bought)}
                  </p>
                  <p className="text-xl font-semibold opacity-80 dark:text-foreground">
                    $HYPE
                  </p>
                </div>

                <div className="mt-4">
                  <SegmentedGradientProgress
                    value={hypeStats.progress}
                    gradient="linear-gradient(90deg, #173132 0%, #1FB8AE 50%, #AEE7E2 100%)"
                    inactiveClassName="bg-black/10 dark:bg-white/10"
                    className="h-10"
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#173132] dark:bg-white/80" />
                    <div>
                      <p className="text-sm opacity-60 dark:text-foreground">
                        Amount
                      </p>
                      <p className="font-semibold dark:text-foreground">
                        {withCommas(hypeStats.bought)} HYPE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-teal-400" />
                    <div>
                      <p className="text-sm opacity-60 dark:text-foreground">
                        Progress
                      </p>
                      <p className="font-semibold dark:text-foreground">
                        {withCommas(toFixedNumber(hypeStats.progress))}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1">
          <div className="rounded-2xl bg-background/40 dark:bg-[#0C191A]/30 border border-gray-300 dark:border-white/10 p-3 lg:p-6 h-full flex flex-col">
            <p className="text-sm opacity-60 dark:text-foreground">HAR price</p>

            {loadingGetPriceHar ? (
              <Skeleton className="h-10 w-28 rounded mt-1" />
            ) : (
              <p className="text-4xl font-semibold dark:text-foreground">
                ${harPriceText}
              </p>
            )}

            <p className="text-sm mt-1 opacity-60 dark:text-foreground">
              Placeholder realtime value from API.
            </p>

            <div className="mt-4">
              <Button
                as={Link}
                href="https://app.hyperliquid.xyz/trade/HAR/USDC"
                target="_blank"
                className="w-full rounded-2xl font-semibold bg-gradient-to-r from-[#228F63] to-[#66D292] text-white"
                endContent={<ArrowTopRightOnSquareIcon className="w-4 h-4" />}
              >
                Buy HAR
              </Button>
            </div>

            <Divider className="my-4" />

            <div className="flex items-center justify-between text-sm">
              <span className="opacity-60 dark:text-foreground">Source</span>
              <span className="font-semibold dark:text-foreground">
                HyperCore
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="opacity-60 dark:text-foreground">Updated</span>
              <span className="font-semibold dark:text-foreground">
                {formatInTimeZone(
                  updateTime || new Date(),
                  "UTC",
                  "dd MMM yyyy, HH:mm",
                )}{" "}
                UTC
              </span>
            </div>

            <div className="mt-5 rounded-2xl bg-white/60 dark:bg-primary-900/40 border border-gray-300 dark:border-white/10 p-4">
              <p className="font-semibold dark:text-foreground">
                Earn More rewards with $HAR
              </p>

              <div className="mt-3 flex flex-col gap-3">
                <a
                  href="https://app.harmonix.fi/harmonix-staking"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/70 dark:bg-primary-900/30 border border-gray-300 dark:border-white/10 p-4 hover:bg-gray-100 dark:hover:bg-primary-900/80"
                >
                  <p className="text-xs opacity-60 dark:text-foreground">
                    Staking
                  </p>
                  <p className="text-sm font-semibold dark:text-foreground">
                    Use $HAR for staking to earn more rewards
                  </p>
                </a>

                <a
                  href="https://app.hyperswap.exchange/#/explore/explore-pools?search=HAR&page=0"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white/70 dark:bg-primary-900/30 border border-gray-300 dark:border-white/10 p-4 hover:bg-gray-100 dark:hover:bg-primary-900/80"
                >
                  <p className="text-xs opacity-60 dark:text-foreground">
                    Liquidity
                  </p>
                  <p className="text-sm font-semibold dark:text-foreground">
                    Add liquidity on HyperSwap
                  </p>
                </a>
              </div>

              <p className="text-xs mt-3 opacity-60 dark:text-foreground">
                Quick actions for HAR utility and ecosystem participation.
              </p>
            </div>

            <div className="mt-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WidgetHarmonix;
