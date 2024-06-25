'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const BackerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-[#EDF9F2] px-8 lg:px-24 pt-24 pb-40">
      <p className="text-5xl font-light capitalize text-primary">Backed By</p>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="flex items-center justify-center flex-wrap gap-12 sm:gap-16 md:gap-24"
      >
        <span className="relative aspect-[1.8] h-24 sm:h-30 lg:h-36 transition-all duration-400 ease-in-out hover:scale-105">
          <Image
            src="/solanium-ventures.png"
            fill
            sizes="100%"
            alt="Solanium Ventures"
            className="object-cover"
          />
        </span>
        <span className="relative aspect-[1.2] h-20 sm:h-28 lg:h-36 transition-all duration-400 ease-in-out hover:scale-105">
          <Image src="/sqrdao-black.png" fill sizes="100%" alt="sqrDAO" className="object-cover" />
        </span>
      </motion.div>
    </div>
  );
};

export default BackerSection;
