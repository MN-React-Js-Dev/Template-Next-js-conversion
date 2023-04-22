import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  animationWrapper,
  fadeInRight,
} from '../../utilities/animations';

import CalenderIcon from '../../../public/icons/calender-month.svg';
import MessageIcon from '../../../public/icons/message.svg';
import ShareChartIcon from '../../../public/icons/share-chart.svg';
import WebIcon from '../../../public/icons/web.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const Creativity = () => (
  <div className="relative pt-14 pb-10 lg:pb-14">
    <div className="pointer-events-none absolute top-52 -left-64 max-w-[300px] rotate-[33deg] transform md:-left-96 md:max-w-none">
      <Image
        src="/icons/decorator-rectangle-green.png"
        width={465}
        height={568}
      />
    </div>
    <div className="pointer-events-none absolute top-52 -right-56 max-w-[300px] -rotate-[27deg] transform md:max-w-none">
      <Image
        src="/icons/decorator-rectangle-green.png"
        width={465}
        height={568}
      />
    </div>
    <div className="container">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap-reverse items-center border-t-2 border-[#EBEBEB] pt-14 md:flex-nowrap md:pt-20"
      >
        <div className="md:w-5/12">
          <motion.div variants={fadeInUp} className="pb-5">
            <h4 className="flex items-center pb-1 text-base font-bold leading-tight text-black md:text-lg">
              <span className="svg_icon mr-2 inline-block w-[24px] text-[#17A966] md:mr-3 md:w-[27px]">
                <CalenderIcon />
              </span>
              Commit to your creativity for 30 days
            </h4>
            <p className="pl-8 text-xs font-medium text-[#585858] md:max-w-[295px] md:pl-10">
              Enroll in immersive, month-long classes with the world’s best
              instructors. Unlock your creative potential.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="pb-5">
            <h4 className="flex items-center pb-1 text-base font-bold leading-tight text-black md:text-lg">
              <span className="svg_icon mr-2 inline-block w-[24px] text-transparent md:mr-3 md:w-[27px]">
                <MessageIcon />
              </span>
              Many Languages Support
            </h4>
            <p className="pl-8 text-xs font-medium text-[#585858] md:max-w-[295px] md:pl-10">
              Courses contains subtitles with all the most used languages.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="pb-5">
            <h4 className="flex items-center pb-1 text-base font-bold leading-tight text-black md:text-lg">
              <span className="svg_icon mr-2 inline-block w-[24px] text-[#17A966] md:mr-3 md:w-[27px]">
                <ShareChartIcon />
              </span>
              Shareable Certification
            </h4>
            <p className="pl-8 text-xs font-medium text-[#585858] md:max-w-[295px] md:pl-10">
              Sed habitant diam massa id egestas ante. Feugiat ullamcorper.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="flex items-center pb-1 text-base font-bold leading-tight text-black md:text-lg">
              <span className="svg_icon mr-2 inline-block w-[24px] text-[#17A966] md:mr-3 md:w-[27px]">
                <WebIcon />
              </span>
              100% Online and Offline
            </h4>
            <p className="pl-8 text-xs font-medium text-[#585858] md:max-w-[295px] md:pl-10">
              Sed habitant diam massa id egestas ante. Feugiat ullamcorper.
            </p>
          </motion.div>
        </div>
        <div className="pb-10 md:w-7/12 md:pb-0">
          <motion.div
            variants={fadeInRight}
            className="flex justify-center md:justify-end"
          >
            <Image src="/creativity-thumb.png" width={600} height={420} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);
export default Creativity;
