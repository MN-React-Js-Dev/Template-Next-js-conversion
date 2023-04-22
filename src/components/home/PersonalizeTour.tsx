import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  fadeInUp,
  animationWrapper,
  fadeInLeft,
  fadeInRight,
} from '../../utilities/animations';

import ChatIcon from '../../../public/icons/chat.png';
import VideoCallIcon from '../../../public/icons/digital-campaign.png';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const PersonalizeTour = () => (
  <div className="relative bg-[#1c1c25] pt-20 pb-10 lg:pb-28">
    <div className="container">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pb-7 text-center md:pb-14"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase text-[#17A966] md:text-lg"
        >
          ONE MONTH. PERFECTLY STRUCTURED.
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="text-[24px] font-bold leading-tight text-white md:text-[42px]"
        >
          I can personalize this tour for you
        </motion.h2>
      </motion.div>

      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap items-center pb-16 md:flex-nowrap md:pb-24"
      >
        <div className="pb-7 md:w-1/2 md:pb-0">
          <motion.div
            variants={fadeInLeft}
            className="flex justify-center overflow-hidden md:justify-start"
          >
            <Image
              src="/personalize-left-thumb.jpg"
              width={545}
              height={356}
              className="rounded-[14px]"
            />
          </motion.div>
        </div>

        <div className="md:w-1/2 md:pl-10 lg:pl-16">
          <div className="text-white md:max-w-[450px]">
            <motion.p
              variants={fadeInUp}
              className="flex items-center pb-1 text-base font-bold leading-tight md:text-lg"
            >
              <span className="svg_icon mr-2 inline-block w-[36px] text-transparent md:mr-3 md:w-[47px]">
                <Image src={ChatIcon} />
              </span>
              CHAT
            </motion.p>
            <motion.h3
              variants={fadeInUp}
              className="pb-3 text-xl font-bold leading-tight md:text-[22px] lg:text-[28px]"
            >
              Experts guidance. Right when you need it most.
            </motion.h3>
            <motion.p variants={fadeInUp} className="pb-6 text-xs font-medium">
              Work with leading tech mentors and gain access to personalized
              guidance to reach your potential. Ongoing sessions and expert
              advice, on your terms, all for a flat monthly price.Work with
              leading tech mentors and gain access to personalized guidance to
              reach your potential. Ongoing sessions and expert advice, on your
              terms, all for a flat monthly price.Work with leading tech mentors
              and gain access to personalized guidance to reach your potential.
              Ongoing sessions and expert advice, on your terms, all for a flat
              monthly price.Work with leading tech mentors and gain access to
              personalized guidance to reach your potential. Ongoing sessions
              and expert advice, on your terms, all for a flat monthly price.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-5">
              <Link href="/">
                <a className="green_btn block w-full max-w-[145px] rounded-md px-1 py-[11px] text-center transition-shadow hover:shadow-lg">
                  Join Now
                </a>
              </Link>
              <Link href="/">
                <a className="block text-xs font-bold underline">
                  Become a Mentor
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap-reverse items-center md:flex-nowrap"
      >
        <div className="md:w-1/2">
          <div className="text-white md:max-w-[440px]">
            <motion.p
              variants={fadeInUp}
              className="flex items-center pb-1 text-base font-bold leading-tight md:text-lg"
            >
              <span className="svg_icon mr-2 inline-block w-[36px] text-transparent md:mr-3 md:w-[47px]">
                <Image src={VideoCallIcon} />
              </span>
              VIDEO CALLS
            </motion.p>
            <motion.h3
              variants={fadeInUp}
              className="pb-3 text-xl font-bold leading-tight md:text-[22px] lg:text-[28px]"
            >
              Talk it out. Face-to-face.
            </motion.h3>
            <motion.p variants={fadeInUp} className="pb-6 text-xs font-medium">
              Work with leading tech mentors and gain access to personalized
              guidance to reach your potential. Ongoing sessions and expert
              advice, on your terms, all for a flat monthly price.Work with
              leading tech mentors and gain access to personalized guidance to
              reach your potential. Ongoing sessions and expert advice, on your
              terms, all for a flat monthly price.Work with leading tech mentors
              and gain access to personalized guidance to reach your potential.
              Ongoing sessions and expert advice, on your terms, all for a flat
              monthly price.Work with leading tech mentors and gain access to
              personalized guidance to reach your potential. Ongoing sessions
              and expert advice, on your terms, all for a flat monthly price.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-5">
              <Link href="/">
                <a className="green_btn block w-full max-w-[145px] rounded-md px-1 py-[11px] text-center transition-shadow hover:shadow-lg">
                  Join Now
                </a>
              </Link>
              <Link href="/">
                <a className="block text-xs font-bold underline">
                  Become a Mentor
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="pb-7 md:w-1/2 md:pb-0 md:pl-10 lg:pl-16">
          <motion.div
            variants={fadeInRight}
            className="flex justify-center overflow-hidden md:justify-start"
          >
            <Image
              src="/face-to-face.png"
              width={545}
              height={356}
              className="rounded-[14px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);
export default PersonalizeTour;
