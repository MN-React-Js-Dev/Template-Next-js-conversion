import Image from 'next/image';
import { motion } from 'framer-motion';
import { animationWrapper, fadeIn, fadeInUp } from '../../utilities/animations';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const CollegeLogos = () => (
  <div className="pb-10 md:pb-14 md:pt-8">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <motion.h2
        variants={fadeInUp}
        className="pb-8 text-center text-xl font-semibold text-[#686868] md:lg:text-2xl"
      >
        Our Prences in Colleges/Universities
      </motion.h2>

      <motion.div
        variants={fadeIn}
        className="flex w-full justify-center text-center"
      >
        <Image
          src="/college-logos.jpg"
          width={1097}
          height={71}
          alt="Planday"
        />
      </motion.div>
    </motion.div>
  </div>
);
export default CollegeLogos;
