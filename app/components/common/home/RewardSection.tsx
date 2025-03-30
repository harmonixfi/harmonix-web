import { motion } from "framer-motion";
import {
  ChainLinkIcon,
  EthIcon,
  HarmonixPointIcon,
  KernelIcon,
  PlusIcon,
  ReEthIcon,
  Swell2Icon,
  VerichainIcon,
  ZircuitPointIcon,
} from "~/components/icons";
import FishPoint from "~/components/icons/FishPoint";
import Renzo2 from "~/components/icons/Renzo2";

type RewardSectionProps = {
  deltaNeutralVaultApy: number;
};

export default function RewardSection2(props: RewardSectionProps) {
  const { deltaNeutralVaultApy } = props;

  return (
    <div
      className={
        "px-8 py-[60px] lg:py-[120px] lg:px-8 xl:px-60 2xl:px-60 text-primary space-y-16 bg-[#F9FBF8]"
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
              <VerichainIcon
                className={"w-28 h-[35px] lg:w-full lg:h-[70px]"}
              />
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
              <p className={"text-4xl xl:text-7xl 2xl:text-7xl font-bold font-outfit"}>
                {deltaNeutralVaultApy.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
                %
              </p>
            </div>
          </div>
          <div>
            <PlusIcon className={"w-[38px] h-[38px] "} />
          </div>
          <div className={"flex-1"}>
            <p className={"text-center text-2xl text-sub-title"}>LRT points</p>
            <div className={"mt-6 flex justify-center"}>
              <div className={"flex items-center space-x-1"}>
                <ReEthIcon className={"w-10 h-10 lg:w-16 lg:h-16"} />
                <EthIcon className={"w-10 h-10 lg:w-16 lg:h-16"} />
                <Renzo2 className={"w-10 h-10 lg:w-16 lg:h-16"} />
                <div
                  className={
                    "w-10 h-10 lg:w-16 lg:h-16 bg-white rounded-full flex justify-center items-center"
                  }
                >
                  <FishPoint />
                </div>
                <Swell2Icon className={"w-10 h-10 lg:w-16 lg:h-16"} />
              </div>
            </div>
          </div>
        </div>
        <div className={"flex justify-center"}>
          <div className={"flex items-center"}>
            <div className={"flex flex-col items-center"}>
              <KernelIcon className={"w-10 h-10 lg:w-16 lg:h-16"} />
              <p className={"mt-2 text-sm text-center lg:text-2xl font-normal"}>
                Kernel Points
              </p>
            </div>
            <div className={"mx-3 lg:mx-16"}>
              <PlusIcon className={"w-3 h-3 lg:w-8 lg:h-8"} />
            </div>
            <div className={"flex flex-col items-center"}>
              <div
                className={
                  "w-10 h-10 lg:w-16 lg:h-16 flex justify-center items-center bg-[#2E8040] rounded-full"
                }
              >
                <ZircuitPointIcon />
              </div>
              <p className={"mt-2 text-sm text-center lg:text-2xl font-normal"}>
                Zircuit points
              </p>
            </div>
            <div className={"mx-3 lg:mx-16"}>
              <PlusIcon className={"w-3 h-3 lg:w-8 lg:h-8"} />
            </div>
            <div className={"flex flex-col items-center"}>
              <HarmonixPointIcon className={"w-10 h-10 lg:w-16 lg:h-16"} />
              <p className={"mt-2 text-sm text-center lg:text-2xl font-normal"}>
                Harmonix points
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
