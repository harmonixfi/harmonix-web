import { motion } from "framer-motion";
import {
  BsxIcon,
  KelpdaoLogoIcon,
  KyberNetworkIcon,
  NodeKitIcon,
  PendleWithTextIcon,
} from "~/components/icons";

const PlusPartnerSection = () => {
  return (
    <div className="flex flex-col items-center gap-12 bg-primary px-8 sm:px-24 lg:px-0 pt-24 pb-32">
      <p className="text-5xl font-light capitalize text-[#FEFBF6]">
        Plus partner
      </p>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-2 gap-y-16 lg:gap-y-12 w-full md:w-[90%] lg:w-9/12 2xl:w-[1000px] sm:gap-x-12 md:gap-x-16 lg:gap-x-24 2xl:gap-x-40 mt-8 mx-auto">
          <BsxIcon className="w-auto h-[72px] sm:h-20" />

          <KelpdaoLogoIcon className="w-auto h-[72px] sm:h-[86px]" />
          <KyberNetworkIcon className="w-auto h-20 sm:h-24" />
          <NodeKitIcon className="w-auto h-20 sm:h-24" />

          <div className="relative">
            <PendleWithTextIcon className="w-auto h-24 sm:h-32" />
            <p className="absolute top-[72px] sm:top-24 left-1/2 -translate-x-1/2 inline-block text-sm bg-secondary opacity-80 rounded-2xl px-3 py-0.5">
              Coming soon
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlusPartnerSection;
