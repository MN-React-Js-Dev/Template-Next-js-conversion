import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, animationWrapper } from '../../utilities/animations';

import BoxIcon from '../../../public/icons/box.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const EducationCategories = () => {
  const wrapperAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };
  const logoItemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="pt-14 pb-14 md:pb-20">
      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="pb-3 text-2xl font-bold text-black md:text-3xl lg:text-4xl"
          >
            Education Categories
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium text-[#585858]"
          >
            Stop guessing Full-walkthrought on how to grow like crazy
          </motion.p>
        </motion.div>
        <motion.div
          variants={wrapperAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 pt-10 sm:gap-y-10 sm:gap-x-10 md:justify-start lg:pt-14 xl:gap-y-14 xl:gap-x-[4.165rem]"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Link href="/category" key={item}>
              <motion.a
                variants={logoItemAnimation}
                className="flex h-[120px] w-full max-w-[140px] items-center justify-center rounded-xl bg-[#DDFFEF] transition-shadow hover:shadow-lg sm:h-[140px] sm:max-w-[200px] sm:max-w-[216px] xl:max-w-[240px]"
              >
                <div className="text-center">
                  <div className="svg_icon mx-auto mb-1 w-[32px] text-transparent sm:w-[40px]">
                    <BoxIcon />
                  </div>
                  <p className="font-semibold text-black sm:text-xl">
                    Movement
                  </p>
                </div>
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default EducationCategories;
