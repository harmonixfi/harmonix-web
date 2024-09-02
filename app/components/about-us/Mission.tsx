import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Mission = () => {
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
      className="grid grid-cols-1 lg:grid-cols-2 p-8 sm:p-12 md:p-16 pb-8 rounded-3xl bg-[#F8FEDA]"
    >
      <div className="lg:pr-10 xl:pr-16">
        <span className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
          <DocumentTextIcon className="w-6 h-6 text-white" />
        </span>
        <h3 className="text-primary text-4xl font-medium capitalize mt-6">
          Our mission
        </h3>
        <p className="text-primary text-lg font-light mt-6 lg:mt-12">
          Our mission is to empower investors by providing a decentralized
          platform that offers high-yield, sophisticated trading strategies. We
          strive to make high-level investment opportunities accessible to a
          broader audience, thereby democratizing the financial landscape and
          offering greater financial freedom.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="xl:-translate-y-6"
        >
          <source src="/team-mission-motion.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Mission;
