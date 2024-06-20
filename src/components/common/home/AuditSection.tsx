'use client';

import { Link } from '@nextui-org/react';
import { motion } from 'framer-motion';

import { FooterLineIcon, VerichainIcon } from '@/components/icons';
import { EXTERNAL_LINKS } from '@/constants/url';

const AuditSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-[#EDF9F2] px-8 sm:px-24 lg:px-0 pt-24 pb-32">
      <div className="w-full flex flex-col items-center gap-2">
        <p className="text-5xl font-light capitalize text-primary">Audits</p>
        <p className="text-lg font-light text-primary text-center opacity-70">
          Ensuring the security of Harmonix is our top priority. Discover more in our security
          reports.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="relative flex flex-col items-center gap-8 w-5/6 sm:w-2/3 lg:w-1/3 xl:w-[30%] 2xl:w-1/4 bg-gradient-to-r from-[#6B9D8E] to-[#173132] p-6 sm:p-10 rounded-3xl shadow-lg overflow-hidden"
      >
        <VerichainIcon className="w-5/6 xl:w-3/4 h-auto text-white" />
        <Link
          isExternal
          href={EXTERNAL_LINKS.VerichainReport}
          className="text-off-white font-light underline opacity-90 z-20"
        >
          See full report
        </Link>
        <FooterLineIcon className="absolute w-auto h-2/3 bottom-0 right-0 z-10" />
      </motion.div>
    </div>
  );
};

export default AuditSection;
