import { PlusIcon } from "@heroicons/react/16/solid";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import {
  ChainLinkIcon,
  EigenLayerIcon,
  EtherfiIcon,
  FlatLogoIcon,
  KelpdaoIcon,
  PufferIcon,
  RenzoIcon,
  SwellIcon,
  VerichainIcon,
  ZircuitIcon,
} from "~/components/icons";
import { EXTERNAL_LINKS } from "~/constants/url";

type RewardSectionProps = {
  optionsVaultApy: number;
  deltaNeutralVaultApy: number;
};

const RewardSection = (props: RewardSectionProps) => {
  const { optionsVaultApy, deltaNeutralVaultApy } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-[#EDF9F2] px-8 sm:px-12 lg:px-24 xl:px-0 pt-24 pb-32 mx-auto">
      <p className="text-5xl font-light capitalize text-primary mb-10">
        Rewards
      </p>
      <div className="flex flex-col items-center justify-center gap-6 w-full xl:w-4/5 2xl:w-3/5">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full grid grid-cols-2 gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-1 sm:gap-2 bg-[#D2E9E9] rounded-lg px-6 lg:px-16 py-1.5 sm:py-2.5">
            <p className="text-base lg:text-lg font-medium">Stablecoin APY</p>
            <p className="bg-gradient-to-r from-[#4BB4B1] to-[#171918] text-transparent bg-clip-text text-2xl lg:text-4xl font-bold">
              {optionsVaultApy.toLocaleString("en-US", {
                maximumFractionDigits: 2,
              })}
              %
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-1 sm:gap-2 bg-[#D2E9E9] rounded-lg px-6 lg:px-16 py-1.5 sm:py-2.5">
            <p className="text-base lg:text-lg font-medium">Audited by</p>
            <Link
              target="_blank"
              rel="noreferrer"
              to={EXTERNAL_LINKS.VerichainReport}
            >
              <VerichainIcon className="w-auto h-10 lg:h-14 text-primary" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full bg-[#D2E9E9] px-8 sm:px-12 lg:px-24 pt-12 rounded-lg"
        >
          <div className="flex flex-col justify-center items-center gap-14 2xl:gap-24">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 2xl:gap-24">
              <div className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-4">
                <p className="text-lg font-medium">Vault APY</p>
                <p className="bg-gradient-to-r from-[#4BB4B1] to-[#171918] text-transparent bg-clip-text text-3xl md:text-5xl font-bold">
                  {deltaNeutralVaultApy.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                  %
                </p>
              </div>

              <PlusIcon className="w-5 h-5" />

              <div className="flex flex-col items-center gap-4">
                <p className="text-lg font-medium capitalize text-primary">
                  LRT points
                </p>
                <ul className="flex items-center">
                  <li
                    className="-mx-2 relative w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:z-20"
                    title="Renzo"
                  >
                    <RenzoIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12" />
                  </li>
                  <li
                    className="-mx-2 relative transition-all duration-300 ease-in-out hover:scale-110 hover:z-20"
                    title="Kelpdao"
                  >
                    <KelpdaoIcon className="w-12 h-12 sm:w-16 sm:h-16" />
                  </li>
                  <li
                    className="-mx-2 relative w-12 h-12 sm:w-16 sm:h-16 bg-[#19163b] rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:z-20"
                    title="Etherfi"
                  >
                    <EtherfiIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16" />
                  </li>
                  <li
                    className="-mx-2 relative w-12 h-12 sm:w-16 sm:h-16 bg-[#FEFBF6] rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:z-20"
                    title="Puffer"
                  >
                    <PufferIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12" />
                  </li>
                  <li
                    className="-mx-2 relative w-12 h-12 sm:w-16 sm:h-16 bg-gray-900 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:z-20"
                    title="Swell"
                  >
                    <SwellIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start justify-around gap-4 md:gap-16">
              <div className="flex flex-col items-center gap-2">
                <span className="block relative w-12 h-12 sm:w-16 sm:h-16 bg-[#F8F6F4] rounded-full">
                  <EigenLayerIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-12 sm:h-12" />
                </span>
                <p className="text-sm sm:text-base capitalize text-primary text-center">
                  EigenLayer points
                </p>
              </div>
              <PlusIcon className="w-5 h-5 translate-y-4" />
              <div className="flex flex-col items-center gap-2">
                <ZircuitIcon className="w-12 h-12 sm:w-16 sm:h-16" />
                <p className="text-sm sm:text-base capitalize text-primary text-center">
                  Zircuit points
                </p>
              </div>
              <PlusIcon className="w-5 h-5 translate-y-4" />
              <div className="flex flex-col items-center gap-2">
                <span className="block relative w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full">
                  <FlatLogoIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-12 sm:h-12" />
                </span>
                <p className="text-sm sm:text-base capitalize text-primary text-center">
                  Harmonix points
                </p>
              </div>
            </div>
          </div>
          <Link
            to={EXTERNAL_LINKS.TwitterChainLinkPost}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-3 mt-16 mb-6"
          >
            <span className="text-sm">Powered by</span>{" "}
            <ChainLinkIcon className="w-auto h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default RewardSection;
