import { motion } from "framer-motion";
import {
  ChainLinkIcon,
  EthIcon,
  HarmonixPointIcon,
  PlusIcon,
  ReEthIcon,
  Swell2Icon,
  VaultValueIcon,
  ZircuitPointIcon,
} from "~/components/icons";
import EigenLayerPoint from "~/components/icons/EigenLayerPoint";
import Renzo2 from "~/components/icons/Renzo2";
import RewardPercent from "~/components/icons/RewardPercent";
import Verichain from "~/components/icons/Verichain";

export default function RewardSection2() {
  return (
    <div
      className={"lg:px-60 py-[120px] bg-white text-primary space-y-16  px-8"}
    >
      <div className={"text-[32px] lg:text-[64px] space-y-6 mb-16 text-center"}>
        <h1 className={"font-medium"}>Reward</h1>
        <h1 className={"text-2xl font-normal"}>
          Dolor sit morbi nunc. Consequat in sit at iaculis. Turpis nibh
          pellentesque turpis ac interdum ut.
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={"space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 gap-5"}
      >
        <div
          className={
            "px-8 lg:px-20 py-[46px] bg-bg-grey rounded-[24px] text-2xl space-y-6 text-center"
          }
        >
          <div>Stablecoin APY</div>
          <div className={"flex justify-center"}>
            <RewardPercent />
          </div>
        </div>
        <div
          className={
            "px-8 py-[46px] bg-bg-grey rounded-[24px] text-2xl space-y-6 text-center"
          }
        >
          <div>Audited by</div>
          <div className={"flex justify-center"}>
            <Verichain className={"w-[223px] h-[70px]"} />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={"mt-10 p-6 lg:p-[46px] bg-bg-grey space-y-6 rounded-3xl"}
      >
        <div
          className={
            "bg-light-yellow py-8 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between items-center rounded-3xl"
          }
        >
          <div className={"flex-1"}>
            <p className={"text-center text-base font-normal"}>Vault APY</p>
            <div className={"mt-6 flex justify-center"}>
              <VaultValueIcon className={"w-32 h-10 lg:w-64 lg:h-16"} />
            </div>
          </div>
          <div>
            <PlusIcon className={"w-[40px] h-[40px] lg:w-[76px] lg:h-[76px]"} />
          </div>
          <div className={"flex-1"}>
            <p className={"text-center text-base font-normal"}>LRT points</p>
            <div className={"mt-6 flex justify-center"}>
              <div className={"flex items-center space-x-1"}>
                <ReEthIcon className={"w-10 h-10 lg:w-16 lg:h-16"} />
                <EthIcon className={"w-10 h-10 lg:w-16 lg:h-16"} />
                <Renzo2 className={"w-10 h-10 lg:w-16 lg:h-16"} />
                <Swell2Icon className={"w-10 h-10 lg:w-16 lg:h-16"} />
                <Swell2Icon className={"w-10 h-10 lg:w-16 lg:h-16"} />
              </div>
            </div>
          </div>
        </div>
        <div className={"flex justify-center"}>
          <div className={"flex items-center"}>
            <div className={"flex flex-col items-center"}>
              <EigenLayerPoint className={"w-10 h-10 lg:w-16 lg:h-16"} />
              <p className={"mt-2 text-sm text-center lg:text-2xl font-normal"}>
                EigenLayer points
              </p>
            </div>
            <div className={"mx-3 lg:mx-16"}>
              <PlusIcon className={"w-3 h-3 lg:w-8 lg:h-8"} />
            </div>
            <div className={"flex flex-col items-center"}>
              <ZircuitPointIcon className={"w-10 h-10 lg:w-16 lg:h-16"} />
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
