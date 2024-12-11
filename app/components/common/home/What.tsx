import { WhatLineIcon, WhatShapeIcon } from "../../icons";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
          Harmonix is a yield platform that empowers anyone to participate in
          automated hedge fund strategies without intermediaries. We break down
          complex hedge fund strategies into easy-to-use, automated vaults
          accessible to everyone. By leveraging on-chain technology, Harmonix
          enables non-custodial, permissionless participation and allows users
          to maintain full control of assets, ensuring transparency and security
          at every step.
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
