import { motion } from 'framer-motion';
import Image from 'next/image';

const GreenBlueGradient = () => (
  <div className="bg-[#17A966]">
    <motion.div
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="pointer-events-none flex"
    >
      <Image
        src="/green-blue-gradient-bg.jpg"
        width={1500 * 2}
        height={110 * 2}
      />
    </motion.div>
  </div>
);

export default GreenBlueGradient;
