'use client';

import { PlusIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  ChainLinkIcon,
  EigenLayerIcon,
  EtherfiIcon,
  FlatLogoIcon,
  KelpdaoIcon,
  PendleIcon,
  PufferIcon,
  RenzoIcon,
  SwellIcon,
  ZircuitIcon,
} from '@/components/icons';

type RewardSectionProps = {
  optionsVaultApy: number;
  deltaNeutralVaultApy: number;
};

const RewardSection = (props: RewardSectionProps) => {
  const { optionsVaultApy, deltaNeutralVaultApy } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-[#EDF9F2] px-8 sm:px-12 lg:px-24 xl:px-0 pt-24 pb-32">
      <p className="text-5xl font-light capitalize text-primary">Rewards</p>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-fit bg-[#D2E9E9] px-8 sm:px-12 lg:px-24 pt-12 rounded-lg"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 2xl:gap-24">
          <div className="flex flex-col justify-center gap-16">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-xl font-medium">Options Vault APY</p>
              <p className="bg-gradient-to-r from-[#4BB4B1] to-[#171918] text-transparent bg-clip-text text-5xl sm:text-7xl font-bold">
                {optionsVaultApy.toLocaleString('en-US', { maximumFractionDigits: 2 })}%
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-xl font-medium">Delta Neutral Vault APY</p>
              <p className="bg-gradient-to-r from-[#4BB4B1] to-[#171918] text-transparent bg-clip-text text-5xl sm:text-7xl font-bold">
                {deltaNeutralVaultApy.toLocaleString('en-US', { maximumFractionDigits: 2 })}%
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl font-medium capitalize text-primary">LRT points</p>
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
                  className="-mx-2 relative w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:z-20"
                  title="Pendle"
                >
                  <PendleIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12" />
                </li>
                <li
                  className="-mx-2 relative w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:z-20"
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

            <PlusIcon className="w-8 h-8" />

            <div className="flex items-center justify-around md:gap-24">
              <div className="flex flex-col items-center gap-2">
                <span className="block relative w-12 h-12 sm:w-16 sm:h-16 bg-[#F8F6F4] rounded-full">
                  <EigenLayerIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-12 sm:h-12" />
                </span>
                <p className="text-sm sm:text-base capitalize text-primary text-center">
                  EigenLayer points
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ZircuitIcon className="w-12 h-12 sm:w-16 sm:h-16" />
                <p className="text-sm sm:text-base capitalize text-primary text-center">
                  Zircuit points
                </p>
              </div>
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
        </div>
        <Link
          href="https://x.com/harmonixfi/status/1800143725232013353?s=46"
          target="_blank"
          className="w-full flex items-center justify-center gap-3 mt-16 mb-6"
        >
          <span className="text-sm">Powered by</span> <ChainLinkIcon className="w-auto h-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default RewardSection;
