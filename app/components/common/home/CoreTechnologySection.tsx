import { motion } from "framer-motion";
import { Light1Icon, Light2Icon, Light3Icon } from "~/components/icons";
import BearMarketYield from "~/components/icons/BearMarketYield";
import PreciseExecution from "~/components/icons/PreciseExecution";
import YieldOptimization from "~/components/icons/YieldOptimization";

export default function CoreTechnologySection() {
  return (
    <div
      className={"px-8 py-[60px] lg:py-[120px] lg:px-60 bg-primary space-y-16"}
    >
      <h1
        className={
          "text-[32px] lg:text-[64px] font-medium text-white text-center"
        }
      >
        Core Technology
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={"lg:grid lg:grid-cols-3 lg:gap-x-10 space-y-5 lg:space-y-0"}
      >
        <div className={"px-8 py-[46px] rounded-3xl bg-white"}>
          <div
            className={
              "relative bg-[#EDF9F2] py-[35px] rounded-3xl  flex justify-center items-center"
            }
          >
            <YieldOptimization />
            <div className={"absolute -right-[8px] -bottom-[10px]"}>
              <Light1Icon />
            </div>
            <div className={"absolute -right-[8px] -bottom-[40px]"}>
              <Light2Icon />
            </div>
            <div className={"absolute -right-[8px] -bottom-[10px]"}>
              <Light3Icon />
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
        <div className={"px-8 py-[46px] rounded-3xl bg-white"}>
          <BearMarketYield />
          <div className={"mt-[46px]"}>
            <div className={"text-2xl font-bold"}>Bear Market Yield</div>
            <div className={"mt-4 font-normal text-sub-title-2"}>
              Harmonix's key differentiator - generating consistent yield even
              in bearish markets.
            </div>
          </div>
        </div>
        <div className={"px-8 py-[46px] rounded-3xl bg-white"}>
          <PreciseExecution />
          <div className={"mt-[46px]"}>
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
