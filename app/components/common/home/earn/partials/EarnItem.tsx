import { motion } from "framer-motion";
import { HarmonixPointIcon } from "~/components/icons";

export default function EarnItem() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className={"rounded-3xl bg-bg-grey p-4 lg:p-10 space-y-6 text-dark-green"}
    >
      <div
        className={"py-6 px-10 text-center bg-gradient-earn w-full rounded-3xl"}
      >
        <p className={"text-[15px] font-medium"}>
          Your Position
        </p>
        <div className={"mt-2 relative"}>
          <p className={"text-5xl lg:text-[78px]"}>
            30.63 <span className={"text-lg lg:text-[32px]"}>USDC</span>
          </p>
          <span
            className={
              "absolute text-green text-lg lg:text-2xl top-[1px] -right-[3px] lg:top-[8px] lg:right-[20px]"
            }
          >
            (+0.63%)
          </span>
        </div>
      </div>
      <div className={"grid grid-cols-2 lg:grid-cols-3 gap-2 text-center"}>
        <div
          className={"bg-white rounded-3xl px-4 py-6 space-y-2 text-main-green"}
        >
          <div
            className={
              "flex items-center justify-center bg-yellow-y20 rounded-[64px]"
            }
          >
            <p className={'text-sm'}>Initial deposit</p>
          </div>
          <p className={"text-lg font-medium"}>30 USDC</p>
        </div>
        <div
          className={"bg-white rounded-3xl px-4 py-6 space-y-2 text-main-green lg:-rotate-12"}
        >
          <div
            className={
              "flex items-center justify-center bg-light-yellow rounded-[64px]"
            }
          >
            <p className={'text-sm'}>Total share</p>
          </div>
          <p className={"text-lg font-bold"}>19.63 roUSD</p>
        </div>
        <div
          className={"bg-white rounded-3xl px-4 py-6 space-y-2 text-main-green"}
        >
          <div
            className={
              "flex items-center justify-center bg-yellow-y20 rounded-[64px]"
            }
          >
            <p className={"text-sm"}>Pending withdrawal</p>
          </div>
          <p className={"text-lg font-medium"}>10 roUSD</p>
        </div>
      </div>
      <div className={"px-4 py-6 bg-gradient-earn2 text-center"}>
        <div className={"flex items-center justify-center space-x-2"}>
          <HarmonixPointIcon className={"w-8 h-8"} />
          <span className={"text-main-green"}>Total Vault Earn</span>
        </div>
        <p
          className={
            "bg-clip-text bg-gradient-text text-[36px] font-bold text-transparent"
          }
        >
          217.84
        </p>
      </div>
    </motion.div>
  );
}
