'use client';

import { useEffect, useRef } from 'react';

import { useInView } from 'framer-motion';

import { WhatLineIcon, WhatShapeIcon } from '../icons';

const What = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && videoRef.current?.paused) {
      videoRef.current?.play();
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative grid lg:grid-cols-2 gap-16 lg:gap-4 bg-primary rounded-3xl lg:rounded-[64px] py-16 lg:py-28 2xl:py-40 overflow-hidden"
    >
      <div className="space-y-6 lg:space-y-12 pl-8 sm:pl-16 xl:pl-24 2xl:pl-32 pr-8 sm:pr-16 lg:pr-0 2xl:pr-20 z-30">
        <div className="2xl:space-y-2 text-off-white text-5xl sm:text-6xl xl:text-8xl font-light">
          <p>What is</p>
          <p>
            <span className="text-secondary">Harmonix</span>?
          </p>
        </div>

        <p className="text-off-white opacity-80 text-base 2xl:text-lg font-light">
          Harmonix is a sophisticated platform that brings hedge fund strategies on-chain to
          generate high yields for investors. Using the latest decentralized finance (DeFi)
          technologies, Harmonix provides a secure and transparent environment where both seasoned
          traders and newcomers can invest with confidence.
        </p>
      </div>

      <div>
        <video ref={videoRef} loop muted playsInline className="">
          <source src="/team-what-motion.mp4" type="video/mp4" />
        </video>
      </div>

      <WhatShapeIcon className="absolute w-auto h-full top-0 left-0 z-10" />
      <WhatLineIcon className="hidden lg:block absolute w-auto h-full bottom-0 right-0 opacity-20 z-10" />
    </div>
  );
};

export default What;
