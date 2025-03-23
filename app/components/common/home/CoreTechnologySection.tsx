import { motion } from "framer-motion";
import {
  CircleIcon,
  Light1Icon,
  Light2Icon,
  Light3Icon,
  Light4Icon,
  Light5Icon,
  Light6Icon,
} from "~/components/icons";
import BearMarketYield from "~/components/icons/BearMarketYield";
import PreciseExecution from "~/components/icons/PreciseExecution";
import YieldOptimization from "~/components/icons/YieldOptimization";

export default function CoreTechnologySection() {
  return (
    <div
      className={
        "px-8 py-[60px] lg:py-[120px] lg:px-60 space-y-16"
      }
      style={{
        backgroundImage:
          "linear-gradient(300deg, rgba(241, 240, 235, 0.50) 7.75%, rgba(226, 246, 161, 0.50) 92.25%), url('/bg.png') lightgray 50% / cover no-repeat",
        backgroundBlendMode: "color, normal",
      }}
    >
      <h1
        className={
          "text-[32px] lg:text-[64px] font-medium text-dark-green text-center"
        }
      >
        Core Technology
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={"lg:grid lg:grid-cols-3 lg:gap-x-12 space-y-5 lg:space-y-0"}
      >
        <div className={"px-8 py-[46px] rounded-3xl bg-bg-grey"}>
          <div
            className={
              "relative bg-[#EDF9F2] py-[35px] rounded-3xl  flex justify-center items-center"
            }
          >
            <YieldOptimization />
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light1Icon />
            </div>
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light2Icon />
            </div>
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light3Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light4Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light5Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light6Icon />
            </div>
            <div className={"absolute left-[12px] top-[12px]"}>
              <CircleIcon />
            </div>
            <div className={"absolute right-[12px] top-[12px]"}>
              <CircleIcon />
            </div>
          </div>
          <div className={"mt-[46px] text-center"}>
            <div className={"text-2xl font-bold"}>Yield Optimization</div>
            <div className={"mt-4 font-normal text-sub-title-2"}>
              Maximizing returns while preserving upside potential by using
              sophisticated yield optimizer.
            </div>
          </div>
        </div>
        <div
          className={"px-8 py-[46px] rounded-3xl bg-bg-grey lg:-translate-y-7"}
        >
          <div
            className={
              "relative bg-[#EDF9F2] py-[15px] rounded-3xl  flex justify-center items-center"
            }
          >
            <BearMarketYield />
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light1Icon />
            </div>
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light2Icon />
            </div>
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light3Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light4Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light5Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light6Icon />
            </div>
            <div className={"absolute left-[12px] top-[12px]"}>
              <CircleIcon />
            </div>
            <div className={"absolute right-[12px] top-[12px]"}>
              <CircleIcon />
            </div>
          </div>
          <div className={"mt-[46px] text-center"}>
            <div className={"text-2xl font-bold"}>Bear Market Yield</div>
            <div className={"mt-4 font-normal text-sub-title-2"}>
              Harmonix's key differentiator - generating consistent yield even
              in bearish markets.
            </div>
          </div>
        </div>
        <div className={"px-8 py-[46px] rounded-3xl bg-white"}>
          <div
            className={
              "relative bg-[#EDF9F2] py-[15px] rounded-3xl  flex justify-center items-center"
            }
          >
            <PreciseExecution />
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light1Icon />
            </div>
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light2Icon />
            </div>
            <div className={"absolute right-[0px] bottom-[0px]"}>
              <Light3Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light4Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light5Icon />
            </div>
            <div className={"absolute left-[0px] bottom-[0px]"}>
              <Light6Icon />
            </div>
            <div className={"absolute left-[12px] top-[12px]"}>
              <CircleIcon />
            </div>
            <div className={"absolute right-[12px] top-[12px]"}>
              <CircleIcon />
            </div>
          </div>
          <div className={"mt-[46px] text-center"}>
            <div className={"text-2xl font-bold"}>Precise Execution</div>
            <div className={"mt-4 font-normal text-sub-title-2"}>
              Minimizing slippage and optimizing transaction efficiency for
              on-chain orders.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
