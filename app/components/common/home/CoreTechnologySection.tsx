import TechnologyItem from "./TechnologyItem";
import { motion } from "framer-motion";
import BearMarketYield from "~/components/icons/BearMarketYield";
import PreciseExecution from "~/components/icons/PreciseExecution";
import YieldOptimization from "~/components/icons/YieldOptimization";

export default function CoreTechnologySection() {
  return (
    <div
      className={
        "px-8 md:px-8 sm:px-8 py-[60px] lg:py-[120px] lg:px-8 xl:px-60 2xl:px-60 space-y-20"
      }
      style={{
        backgroundImage: `
          linear-gradient(300deg, rgba(241, 240, 235, 0.5) 7.75%, rgba(226, 246, 161, 0.5) 92.25%),
          url('bg.png')
        `,
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgray",
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
        className={
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 lg:gap-12"
        }
      >
        <TechnologyItem
          title="Yield Optimization"
          description="Maximizing returns while preserving upside potential by using
              sophisticated yield optimizer."
          icon={<YieldOptimization className="w-auto h-16" />}
        />
        <div className={"lg:-translate-y-7"}>
          <TechnologyItem
            title="Bear Market Yield"
            description={`Harmonix's key differentiator - generating consistent yield even
              in bearish markets.`}
            icon={<BearMarketYield className="w-auto h-24" />}
          />
        </div>
        <TechnologyItem
          title="Precise Execution"
          description="Minimizing slippage and optimizing transaction efficiency for
              on-chain orders."
          icon={<PreciseExecution className="w-auto h-24" />}
        />
      </motion.div>
    </div>
  );
}
