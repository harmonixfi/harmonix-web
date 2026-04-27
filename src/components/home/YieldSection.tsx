import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function YieldSection() {
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
        <div className="grid grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="">
              <Card className="p-8 shadow-md rounded-3xl">
                <CardHeader className="p-0">
                  <CardTitle className="space-y-4">
                    <Typography
                      align={"left"}
                      variant={"bodySmall"}
                      className="text-muted-foreground font-medium uppercase"
                    >
                      Stablecoin Vault
                    </Typography>
                    <Typography
                      align={"left"}
                      variant={"body"}
                      className="font-semibold text-2xl lg:text-4xl"
                    >
                      haUSD
                    </Typography>
                    <Typography
                      align={"left"}
                      variant={"body"}
                      className="font-medium leading-6"
                    >
                      Delta-neutral yield on stablecoins. Deposit and earn
                      automated yield with zero directional exposure.
                    </Typography>
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-8 px-6 rounded-3xl bg-linear-to-t from-[#F4FAF1] via-[#C8EBD3] to-[#F4FAF1] space-y-6">
                  <div className="flex justify-center items-center">
                    <div className="size-16 bg-gray-300 rounded-full"></div>
                  </div>
                  <Typography
                    align={"center"}
                    variant={"body"}
                    className="font-extrabold"
                  >
                    HyperEVM USD Vault
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
                        44,740 KHYPE
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
                        7.0%
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
                    <div className="flex justify-center gap-2">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div
                          key={`${index}-reward`}
                          className="size-8 bg-gray-300 rounded-full"
                        ></div>
                      ))}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
