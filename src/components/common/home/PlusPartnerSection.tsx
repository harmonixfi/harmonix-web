'use client';

import { motion } from 'framer-motion';

import { BsxIcon, PendleWithTextIcon } from '@/components/icons';

const PlusPartnerSection = () => {
  return (
    <div className="flex flex-col items-center gap-12 bg-primary px-8 sm:px-24 lg:px-0 pt-24 pb-32">
      <p className="text-5xl font-light capitalize text-[#FEFBF6]">Plus partner</p>
      <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-12 md:gap-28 2xl:gap-40 mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <BsxIcon className="w-auto h-20" />
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PendleWithTextIcon className="w-auto h-52" />
          <p className="absolute top-36 left-1/2 -translate-x-1/2 inline-block text-sm bg-secondary opacity-80 rounded-2xl px-3 py-0.5">
            Coming soon
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PlusPartnerSection;
