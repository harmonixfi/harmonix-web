import { motion } from "framer-motion";
import {
  ChainLinkIcon,
  HarmonixPointIcon,
  HyperliquidLogoIcon,
  NansenLogoIcon,
  PlusIcon,
  ValidaoLogoIcon,
  VerichainIcon,
} from "~/components/icons";

type RewardSectionProps = {
  deltaNeutralVaultApy: number;
};

export default function RewardSection2(props: RewardSectionProps) {
  const { deltaNeutralVaultApy } = props;

  return (
    <div
      className={
        "px-0 sm:px-8 py-[60px] lg:py-[120px] lg:px-8 xl:px-40 2xl:px-60 text-primary space-y-16 bg-[#F9FBF8]"
      }
    >
      <div className={"text-[32px] lg:text-[64px] space-y-6 mb-16 text-center"}>
        <h1 className={"font-medium"}>Reward</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={
          "bg-white rounded-3xl space-y-[46px] py-8 px-7 lg:py-16 lg:px-[46px]"
        }
      >
        <div className={"flex justify-center"}>
          <div className={"flex items-center space-x-6"}>
            <p className={"text-lg lg:text-2xl font-normal"}>Audited by</p>
            <div>
              <VerichainIcon className={"w-28 h-9 lg:w-full lg:h-20"} />
            </div>
          </div>
        </div>
        <div
          className={
            "bg-[#F9FBF8] py-8 flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between lg:space-y-0 lg:flex-row lg:justify-between items-center rounded-3xl"
          }
        >
          <div className={"flex-1"}>
            <p className={"text-center text-2xl text-sub-title"}>Vault APY</p>
            <div className={"mt-6 flex justify-center"}>
              <p
                className={
                  "text-5xl xl:text-6xl 2xl:text-7xl font-bold font-outfit"
                }
              >
                {deltaNeutralVaultApy.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
                %
              </p>
            </div>
          </div>
          <div>
            <PlusIcon className="w-6 h-6 sm:w-9 sm:h-9" />
          </div>
          <div className={"flex-1"}>
            <p className={"text-center text-2xl text-sub-title"}>Staking APR</p>
            <div className={"mt-6 flex justify-center"}>
              <p
                className={
                  "text-5xl xl:text-6xl 2xl:text-7xl font-bold font-outfit"
                }
              >
                2.28%
              </p>
            </div>
          </div>
        </div>
        <div className={"flex justify-center"}>
          <div className={"flex items-center gap-1 sm:gap-3 lg:gap-12"}>
            <div className={"flex flex-col items-center"}>
              <HarmonixPointIcon
                className={"w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16"}
              />
              <p className={"mt-2 text-sm text-center lg:text-2xl font-normal"}>
                Harmonix points
              </p>
            </div>

            <div>
              <PlusIcon className={"w-2 h-2 sm:w-3 sm:h-3 lg:w-8 lg:h-8"} />
            </div>
            <div className={"flex flex-col items-center"}>
              <HyperliquidLogoIcon
                className={"w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16"}
              />
              <p className={"mt-2 text-sm text-center lg:text-2xl font-normal"}>
                Hyperliquid points
              </p>
            </div>
            <div>
              <PlusIcon className={"w-2 h-2 sm:w-3 sm:h-3 lg:w-8 lg:h-8"} />
            </div>
            <div className="flex flex-col items-center">
              <div
                className={
                  "w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 flex justify-center items-center bg-primary rounded-full"
                }
              >
                <ValidaoLogoIcon className="w-auto h-6 lg:h-9" />
              </div>
              <p className={"mt-2 text-sm text-center lg:text-2xl font-normal"}>
                ValiDAO points
              </p>
            </div>
            <div>
              <PlusIcon className={"w-2 h-2 sm:w-3 sm:h-3 lg:w-8 lg:h-8"} />
            </div>
            <div className={"flex flex-col items-center"}>
              <div
                className={
                  "w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 flex justify-center items-center bg-primary rounded-full"
                }
              >
                <NansenLogoIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />
              </div>
              <p className={"mt-2 text-sm text-center lg:text-2xl font-normal"}>
                Nansen points
              </p>
            </div>
          </div>
        </div>
        <div className={"flex justify-center"}>
          <div className={"flex items-center space-x-4"}>
            <span className={"text-base"}>Powered by</span>
            <ChainLinkIcon className={"w-28 h-9"} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
