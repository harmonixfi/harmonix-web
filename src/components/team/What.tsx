import { WhatLineIcon, WhatShapeIcon } from '../icons';

const What = () => {
  return (
    <div className="relative grid grid-cols-2 gap-4 bg-primary rounded-[64px] py-40 overflow-hidden">
      <div className="space-y-12 pl-32 pr-20 z-30">
        <div className="space-y-2 text-off-white text-8xl font-light">
          <p className="">What is</p>
          <p className="">
            <span className="text-secondary">Harmonix</span>?
          </p>
        </div>

        <p className="text-off-white opacity-80 text-lg font-light">
          Harmonix is a sophisticated platform that brings hedge fund strategies on-chain to
          generate high yields for investors. Using the latest decentralized finance (DeFi)
          technologies, Harmonix provides a secure and transparent environment where both seasoned
          traders and newcomers can invest with confidence.
        </p>
      </div>

      <div>
        <video autoPlay loop muted playsInline className="">
          <source src="/team-what-motion.mp4" type="video/mp4" />
        </video>
      </div>

      <WhatShapeIcon className="absolute w-auto h-full top-0 left-0 z-10" />
      <WhatLineIcon className="absolute w-auto h-full bottom-0 right-0 opacity-20 z-10" />
    </div>
  );
};

export default What;
