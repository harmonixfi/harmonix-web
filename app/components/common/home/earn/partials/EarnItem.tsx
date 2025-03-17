import { motion } from "framer-motion";
import { HarmonixPointIcon, KernelIcon } from "~/components/icons";

export default function EarnItem() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className={"rounded-3xl bg-grey-01 p-4 lg:p-10 space-y-6 text-dark-green"}
    >
      <div
        className={
          "py-6 px-10 text-center bg-[#ffffffb3] w-full rounded-3xl shadow-[30px_30px_60px_0px_rgba(229, 241, 231, 0.50)]"
        }
      >
        <p className={"text-[15px] font-medium"}>Your Position</p>
        <div className={"mt-2 relative"}>
          <p className={"text-5xl lg:text-[78px]"}>
            63.59 <span className={"text-lg lg:text-[32px]"}>USDC</span>
          </p>
          <span
            className={
              "absolute bg-[#67FCC2] text-xs lg:text-sm top-0 -right-[25px] lg:right-0 py-1 px-1 lg:px-3 rounded-3xl -rotate-6"
            }
          >
            PnL(+3 33 USDC)
          </span>
        </div>
      </div>
      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-2 text-center"}>
        <div
          className={"bg-white rounded-3xl px-4 py-6 space-y-2 text-main-green"}
        >
          <div
            className={
              "flex items-center justify-center bg-yellow-y20 rounded-[64px]"
            }
          >
            <p className={"text-sm"}>Initial deposit</p>
          </div>
          <p className={"text-lg font-medium"}>30 USDC</p>
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
          <p className={"text-lg font-medium"}>10 USDC</p>
        </div>
      </div>
      <div className={"px-4 py-6 bg-gradient-earn2 text-center rounded-3xl"}>
        <div className={"flex justify-between lg:justify-around items-center"}>
          <div className={"space-y-1"}>
            <div
              className={
                "flex items-center justify-center space-x-1 lg:space-x-2"
              }
            >
              <HarmonixPointIcon className={"w-6 h-6 lg:w-8 lg:h-8"} />
              <span className={"text-main-green text-sm font-normal"}>
                Harmonix points
              </span>
            </div>
            <p className={"text-2xl lg:text-[36px] font-bold"}>2,207.9</p>
          </div>
          <div className={"space-y-1"}>
            <div className={"flex items-center justify-center space-x-2"}>
              <KernelIcon className={"w-6 h-6 lg:w-8 lg:h-8"} />
              <span className={"text-main-green text-sm font-normal"}>
                Kernel Points
              </span>
            </div>
            <p className={"text-2xl lg:text-[36px] font-bold"}>33.48K</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
