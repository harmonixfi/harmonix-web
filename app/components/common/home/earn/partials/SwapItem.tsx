import { motion } from "framer-motion";
import ArrowDown from "~/components/icons/ArrowDown";
import Dai from "~/components/icons/Dai";
import Usdc from "~/components/icons/Usdc";
import Usdt from "~/components/icons/Usdt";

export default function SwapItem() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className={
        "rounded-3xl bg-bg-grey flex items-center p-4 lg:px-28 lg:py-[97px]"
      }
    >
      <div className={"relative mr-6"}>
        <div className={"p-4 lg:py-7 lg:px-9 bg-white rounded-3xl mb-1"}>
          <div className={"text-sm opacity-50"}>You pay</div>
          <h1 className={"text-4xl lg:text-7xl font-normal text-sub-title"}>
            1000
          </h1>
        </div>
        <div className={"p-4 lg:py-7 lg:px-9 bg-white rounded-3xl"}>
          <div className={"text-sm opacity-50"}>You pay</div>
          <h1 className={"text-4xl lg:text-7xl font-normal"}>1028</h1>
        </div>
        <div
          className={
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl lg:rounded-3xl text-center bg-white border-5 border-solid border-light-yellow w-10 h-10 lg:w-16 lg:h-16 flex justify-center items-center"
          }
        >
          <ArrowDown className={"w-4 h-4"} />
        </div>
      </div>
      <div className={"p-[12px] lg:p-[25px] bg-white lg:space-y-3 rounded-3xl"}>
        <div className={"flex space-x-1 lg:justify-between items-center"}>
          <div className={"w-10 h-10"}>
            <Usdc className={"w-8 h-8"} />
          </div>
          <span>USDC</span>
        </div>
        <div className={"flex space-x-1 lg:justify-between items-center"}>
          <div className={"w-10 h-10"}>
            <Usdt className={"w-8 h-8"} />
          </div>
          <span>USDT</span>
        </div>
        <div className={"flex space-x-1 lg:justify-between items-center"}>
          <div className={"w-10 h-10"}>
            <Dai className={"w-8 h-8"} />
          </div>
          <span>DAI</span>
        </div>
      </div>
    </motion.div>
  );
}
