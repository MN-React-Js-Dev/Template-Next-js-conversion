import { motion } from 'framer-motion';
import Link from 'next/link';
import SpinningUsers from '../../../public/spinning-users.svg';
import {
  animationWrapper,
  fadeInRight,
  fadeInUp,
} from '../../utilities/animations';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const PersonalCareer = () => (
  <div className="pb-14 md:pb-20 md:pt-8">
    <div className="container">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap items-center"
      >
        <div className="mb-7 w-full md:mb-0 md:w-1/2 md:pr-8 lg:pr-16">
          <motion.h2
            variants={fadeInUp}
            className="pb-2 text-xl font-bold leading-tight text-black md:pb-5 md:text-2xl lg:text-[28px] xl:text-[32px]"
          >
            Accessing a personal career coach has never been simpler.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="pb-5 text-sm font-medium text-[#585858] lg:text-base"
          >
            Mentors play a keyrole in the success of individuals. I am really
            happy to be associated with MentorOcean which has great set of
            Mentors, and Mentorship Programs with a long term vision. They are
            doing a wonderfull job in mentoring students, working professionals
            and early-stage entrepeneurs
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="rounded-[10px] bg-[#F4F4F4] px-4 py-5 text-lg font-semibold text-black md:text-xl lg:text-2xl"
          >
            Find learn from <i className="font-bold">expert</i> guides who will
            catapult you to new{' '}
            <i className="font-bold text-[#D7BC3F]">majestic heights</i>
          </motion.div>
          <motion.div variants={fadeInUp} className="pt-5 text-center">
            <Link href="/mentors">
              <a className="inline-block w-full max-w-[194px] rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white transition-shadow hover:shadow-lg md:text-base">
                Ask the Experts
              </a>
            </Link>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <motion.div variants={fadeInRight} className="svg_icon">
            <SpinningUsers />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);
export default PersonalCareer;
