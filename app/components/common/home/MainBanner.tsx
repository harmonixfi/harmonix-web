import { motion } from "framer-motion";
import {
  Ellipse1Icon,
  Ellipse2Icon,
  Ellipse3Icon,
  Ellipse4Icon,
  Ellipse5Icon,
  Ellipse6Icon,
  Ellipse7Icon,
  HomeGridIcon,
} from "~/components/icons";

const MainBanner = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[760px] sm:mt-12 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-4/5 sm:w-3/5 h-auto absolute top-[10%] sm:top-0 left-[13%] sm:left-[22%]"
      >
        <source src="/motion.mp4" type="video/mp4" />
      </video>

      <HomeGridIcon className="absolute -bottom-[5%] sm:-bottom-[16%] 2xl:-bottom-[28%] w-full h-auto" />

      <motion.div
        className="absolute top-0 left-[25%]"
        animate={{
          y: [0, 3, 6, 3, 0, -3, -6, -3, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
          },
        }}
      >
        <Ellipse1Icon className="w-4 h-4" />
      </motion.div>

      <motion.div
        className="absolute top-[8%] right-[12%]"
        animate={{
          y: [0, 4, 8, 4, 0, -4, -8, -4, 0],
        }}
        transition={{
          y: {
            duration: 7,
            repeat: Infinity,
          },
        }}
      >
        <Ellipse2Icon className="w-8 h-8 lg:w-10 lg:h-10" />
      </motion.div>

      <motion.div
        className="absolute top-[20%] left-[13%]"
        animate={{
          y: [0, -5, -10, -5, 0, 5, 10, 5, 0],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
          },
        }}
      >
        <Ellipse3Icon className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32" />
      </motion.div>

      <motion.div
        className="absolute top-[38%] left-[6%]"
        animate={{
          y: [0, 5, 12, 5, 0, -5, -12, -5, 0],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
          },
        }}
      >
        <Ellipse4Icon className="w-6 h-6 lg:w-8 lg:h-8" />
      </motion.div>

      <motion.div
        className="absolute top-[40%] right-[15%]"
        animate={{
          y: [0, 3, 6, 3, 0, -3, -6, -3, 0],
        }}
        transition={{
          y: {
            duration: 4.5,
            repeat: Infinity,
          },
        }}
      >
        <Ellipse5Icon className="w-10 h-10 sm:w-16 sm:h-16 lg:w-28 lg:h-28" />
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[20%]"
        animate={{
          y: [0, 6, 12, 6, 0, -6, -12, -6, 0],
        }}
        transition={{
          y: {
            duration: 8,
            repeat: Infinity,
          },
        }}
      >
        <Ellipse6Icon className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24" />
      </motion.div>

      <motion.div
        className="absolute top-[70%] right-[12%]"
        animate={{
          y: [0, -4, -8, -4, 0, 4, 8, 4, 0],
        }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
          },
        }}
      >
        <Ellipse7Icon className="w-5 h-5" />
      </motion.div>
    </div>
  );
};

export default MainBanner;
