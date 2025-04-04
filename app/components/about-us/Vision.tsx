import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Vision = () => {
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
      className="grid grid-cols-1 lg:grid-cols-2 p-8 sm:p-12 md:p-16 pb-8 rounded-3xl bg-[#DAF4EC]"
    >
      <div className="lg:pr-10 xl:pr-16">
        <span className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
          <DocumentTextIcon className="w-6 h-6 text-white" />
        </span>
        <h3 className="text-primary text-4xl font-medium capitalize mt-6">
          Our vision
        </h3>
        <p className="text-primary text-lg font-light mt-6 lg:mt-12">
          We envision a world where anyone can participate in high-yield
          investment opportunities without the barriers of traditional finance.
          Harmonix aims to lead by example, showcasing the potential of DeFi to
          create equitable and lucrative investment opportunities for people
          around the globe.
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
          <source src="/team-vision-motion.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Vision;
