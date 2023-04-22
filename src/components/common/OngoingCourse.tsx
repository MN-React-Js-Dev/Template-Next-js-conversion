import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp } from '../../utilities/animations';

import ClockIcon from '../../../public/icons/time.svg';
import CalendarIcon from '../../../public/icons/calendar.svg';
import BirthdayIcon from '../../../public/icons/birthday-cake.svg';
import GroupIcon from '../../../public/icons/users-three.svg';
import QuestionIcon from '../../../public/icons/patch-question.svg';

/* eslint react/jsx-one-expression-per-line: "off" */
const OngoingCourse = () => (
  <div className="relative pt-20">
    <div className="container">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative mx-auto flex w-full flex-wrap rounded-[10px] shadow-2xl md:flex-nowrap lg:max-w-[936px]"
      >
        <div className="flex w-full flex-shrink-0 overflow-hidden rounded-[10px] md:max-w-[240px] lg:max-w-[343px]">
          <Image
            src="/ongoing-course.jpg"
            width={343 * 2}
            height={229 * 2}
            alt="Mentor 1"
            className="w-full"
          />
        </div>
        <div className="py-4 pr-3 pl-4 lg:pr-4 lg:pl-6">
          <div className="absolute right-0 top-0 flex h-9 w-[140px] items-center justify-center rounded-lg bg-[#17A966] text-[17px] font-semibold text-white">
            $45 / Person
          </div>
          <h3 className="text-lg font-bold text-black md:text-xl lg:text-2xl">
            On going course
          </h3>
          <div className="flex flex-wrap justify-between gap-y-4 pt-4 md:gap-y-2 lg:gap-y-5 lg:pt-7">
            <div className="flex w-full items-center md:w-[49%] lg:w-[48%]">
              <div className="svg_icon mr-[6px] w-6 text-[#17A966] lg:mr-[10px]">
                <ClockIcon />
              </div>
              <p className="text-base xl:text-[17px]">
                <strong>55 minutes</strong> per class
              </p>
            </div>
            <div className="flex w-full items-center md:w-[49%] lg:w-[48%]">
              <div className="svg_icon mr-[6px] w-6 text-[#17A966] lg:mr-[10px]">
                <CalendarIcon />
              </div>
              <p className="text-base xl:text-[17px]">
                <strong>3x per week</strong> every week
              </p>
            </div>
            <div className="flex w-full items-center md:w-[49%] lg:w-[48%]">
              <div className="svg_icon mr-[6px] w-6 text-[#17A966] lg:mr-[10px]">
                <BirthdayIcon />
              </div>
              <p className="text-base xl:text-[17px]">
                <strong>3-6 Year</strong> olds
              </p>
            </div>
            <div className="flex w-full items-center md:w-[49%] lg:w-[48%]">
              <div className="svg_icon mr-[6px] w-6 text-[#17A966] lg:mr-[10px]">
                <GroupIcon />
              </div>
              <p className="text-base xl:text-[17px]">
                <strong>3-7</strong> learners per class
              </p>
            </div>
            <div className="flex w-full items-center md:w-[49%] lg:w-[48%]">
              <div className="svg_icon mr-[6px] w-6 text-[#17A966] lg:mr-[10px]">
                <QuestionIcon />
              </div>
              <p className="text-base xl:text-[17px]">
                <strong>multi course</strong> question
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
export default OngoingCourse;
