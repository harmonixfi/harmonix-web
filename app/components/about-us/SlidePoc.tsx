import { motion } from "framer-motion";

const SlidePoc = () => {
  return (
    <div className="w-2/3 mx-auto">
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 0.8 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-200 h-[600px] rounded-2xl"
      >
        <p>Slide 1</p>
      </motion.div>

      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 0.8 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ duration: 0.5 }}
        className="bg-green-200 h-[600px] rounded-2xl"
      >
        <p>Slide 2</p>
      </motion.div>

      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 0.8 }}
        viewport={{ once: false, amount: 0.9 }}
        transition={{ duration: 0.5 }}
        className="bg-pink-200 h-[600px] rounded-2xl"
      >
        <p>Slide 3</p>
      </motion.div>
    </div>
  );
};

export default SlidePoc;
