'use client';

import { motion } from 'framer-motion';

const SlidePoc = () => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="bg-blue-200 h-[600px] rounded-2xl">
        <p>Slide 1</p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1, y: 0 }}
        whileInView={{ opacity: 1, scale: 0.8, y: 80 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="bg-green-200 h-[600px] rounded-2xl"
      >
        <p>Slide 2</p>
      </motion.div>

      <div className="bg-pink-200 h-[600px] rounded-2xl">
        <p>Slide 3</p>
      </div>
    </div>
  );
};

export default SlidePoc;
