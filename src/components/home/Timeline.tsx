import Image from 'next/image';
import { motion } from 'framer-motion';

import TimeLineIcon from '../../../public/timeline.svg';
import {
  fadeInUp,
  animationWrapper,
  fadeInLeft,
  fadeInRight,
} from '../../utilities/animations';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const Timeline = () => (
  <div className="relative overflow-hidden pt-14 pb-10 lg:pb-14">
    <div className="pointer-events-none absolute -right-[375px] -top-[70px] -rotate-[30deg] transform">
      <Image
        src="/icons/decorator-rectangle-large.png"
        width={368}
        height={515}
      />
    </div>
    <div className="container">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeInUp}
          className="mx-auto max-w-none text-center text-[24px] font-bold leading-tight text-black sm:text-[32px] md:max-w-[600px] lg:max-w-[670px] lg:text-[36px] xl:max-w-[800px] xl:text-[42px]"
        >
          A better kind of Learning and Leadership Development Platform
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mx-auto max-w-none py-5 text-center text-sm leading-tight text-[#585858] md:max-w-[710px]"
        >
          Monthly classes go beyond a playlist of videos. The classroom has been
          fully digitzied, allowing you to get a hands-on learning experience
          and community from anywhere
        </motion.p>
      </motion.div>
      <div className="flex flex-wrap items-center pt-8">
        <div className="w-full pb-7 md:w-1/2 md:pb-0 md:pr-9 xl:pr-[60px]">
          <motion.div
            variants={animationWrapper}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex items-center justify-between"
          >
            <div className="flex w-full max-w-none flex-row flex-wrap gap-8 pr-4 sm:pr-6 md:max-w-[260px] md:pr-0 lg:max-w-[370px] lg:gap-20 xl:max-w-[432px]">
              <motion.div
                variants={fadeInLeft}
                className="flex w-full flex-wrap justify-center rounded-[14px] border border-[#EAEAEA] bg-white py-2 px-3 shadow-md lg:flex-nowrap lg:justify-start xl:py-3 xl:px-5"
              >
                <div className="mb-2 flex h-[70px] w-[70px] rounded-full border-[3px] border-[#17A966] p-[2px] lg:mb-0 xl:h-[86px] xl:w-[86px]">
                  <Image
                    src="/alex-headshot.png"
                    width={76}
                    height={76}
                    alt="Alex Dan"
                  />
                </div>
                <div className="max-w-[275px] pl-2 xl:max-w-[295px] xl:pl-5">
                  <h4 className="pt-0 pb-1 font-bold xl:pt-1 xl:pb-2 xl:text-[17px]">
                    <span className="text-[#1C1C25]">Alex Dan</span>
                    <span className="px-2 font-light text-[#CFCFCF]">|</span>
                    <span className="text-[#17A966]">Student</span>
                  </h4>
                  <p className="text-[11px] font-medium leading-tight text-[#585858]">
                    Monthly classes go beyond a playlist of videos. The
                    classroom has been fully digitzied, allowing you to get a
                    hands-on learning experience and
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInLeft}
                className="flex w-full flex-wrap justify-center rounded-[14px] border border-[#EAEAEA] bg-white py-2 px-3 shadow-md lg:flex-nowrap lg:justify-start xl:py-3 xl:px-5"
              >
                <div className="mb-2 flex h-[70px] w-[70px] rounded-full border-[3px] border-[#17A966] p-[2px] lg:mb-0 xl:h-[86px] xl:w-[86px]">
                  <Image
                    src="/barak-headshot.png"
                    width={76}
                    height={76}
                    alt="Alex Dan"
                  />
                </div>
                <div className="max-w-[275px] pl-2 xl:max-w-[295px] xl:pl-5">
                  <h4 className="pt-0 pb-1 font-bold xl:pt-1 xl:pb-2 xl:text-[17px]">
                    <span className="text-[#1C1C25]">Barak Lino</span>
                    <span className="px-2 font-light text-[#CFCFCF]">|</span>
                    <span className="text-[#17A966]">Instructor</span>
                  </h4>
                  <p className="text-[11px] font-medium leading-tight text-[#585858]">
                    Monthly classes go beyond a playlist of videos. The
                    classroom has been fully digitzied, allowing you to get a
                    hands-on learning experience and
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInRight}
              className="svg_icon w-[60px] text-transparent"
            >
              <TimeLineIcon />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-xl font-bold leading-tight text-black md:text-[20px] lg:text-[26px] xl:text-[32px]"
          >
            Create alongside experts from start to finish
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="pt-3 text-sm leading-tight lg:text-[#585858] xl:pt-4"
          >
            During class, Monthly instructors share their entire creative
            process as they produce original works and do what they do best.
            From idea to finished product, follow along with their process and
            create by their side
          </motion.p>
        </motion.div>
      </div>
    </div>
  </div>
);
export default Timeline;
