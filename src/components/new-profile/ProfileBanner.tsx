/* eslint react/jsx-one-expression-per-line: "off" */
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  animationWrapper,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from '../../utilities/animations';
import ReportPopup from '../common/popups/report-popups/ReportPopup';

import LocationIcon from '../../../public/icons/location.svg';
import IndonesiaIcon from '../../../public/icons/indonesia-flag.svg';
import LanguageIcon from '../../../public/icons/language-solid.svg';
import StarIcon from '../../../public/icons/star.svg';
import ProIcon from '../../../public/icons/pro-verified.svg';
import ShareIcon from '../../../public/icons/share-arrow.svg';
import HeartIcon from '../../../public/icons/heart-outline.svg';
import FlagIcon from '../../../public/icons/flag.svg';

const ProfileBanner = () => {
  const [openReport, setOpenReport] = useState(false);

  return (
    <div
      className="position-center relative bg-cover pt-16 pb-16"
      style={{ backgroundImage: 'url(/new-profile-banner-bg.jpg)' }}
    >
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <div className="">
          <div className="relative rounded-xl bg-white px-6 pb-6 pt-10 shadow-spread lg:pb-10">
            <div className="absolute top-2 right-4 flex items-center gap-x-2 sm:right-6 sm:top-4">
              <button
                type="button"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3EB451] bg-opacity-10"
              >
                <div className="svg_icon w-[14px] text-[#1DBF73]">
                  <ShareIcon />
                </div>
              </button>
              <button
                type="button"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3EB451] bg-opacity-10"
              >
                <div className="svg_icon w-[14px] text-transparent">
                  <HeartIcon />
                </div>
              </button>
              <button
                type="button"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3EB451] bg-opacity-10"
                onClick={() => setOpenReport(true)}
              >
                <div className="svg_icon w-[14px] text-transparent">
                  <FlagIcon />
                </div>
              </button>
              <ReportPopup
                status={openReport}
                onClose={() => {
                  setOpenReport(false);
                }}
              />
            </div>
            <div className="flex flex-wrap items-start lg:flex-nowrap">
              <div className="flex flex-wrap items-start sm:flex-nowrap">
                <motion.div
                  variants={fadeInLeft}
                  className="mb-3 flex max-w-[160px] items-center overflow-hidden rounded-[10px] sm:mb-0"
                >
                  <Image
                    src="/new-profile-banner-avatar.jpg"
                    width={470}
                    height={470}
                    alt="avatar"
                  />
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col gap-y-2 sm:gap-y-3 sm:pl-5 lg:border-r lg:border-r-[#D8D8D8] xl:pl-8 xl:pr-10"
                >
                  <h1 className="text-2xl font-bold text-[#202124]">
                    Muhamad Fadilah
                  </h1>
                  <p className="text-sm font-bold text-[#202124]">
                    MSC MATH, Web Developer, Puna
                  </p>
                  <div className="flex items-center gap-x-2">
                    <div className="svg_icon w-5 text-[#70757A]">
                      <LocationIcon />
                    </div>
                    <div className="w-6">
                      <IndonesiaIcon />
                    </div>
                    <div className="text-xs font-bold text-[#70757A]">
                      Jakarta, IDN
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="svg_icon w-5 text-[#70757A]">
                      <LanguageIcon />
                    </div>
                    <div className="text-xs font-bold text-[#70757A]">
                      English (Basic), Urdu (Intermediate)
                    </div>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    <span className="svg_icon inline-block w-[15px] text-[#FFCE31]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[15px] text-[#FFCE31]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[15px] text-[#FFCE31]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[15px] text-[#FFCE31]">
                      <StarIcon />
                    </span>
                    <span className="svg_icon inline-block w-[15px] text-[#DADADA]">
                      <StarIcon />
                    </span>
                    <span className="mt-[2px] ml-1 text-xs text-[#4D5156]">
                      (20 Reviews)
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[#4D5156]">
                    This course covers the UK curriculum aims for maths for year
                    4 and 5 children. It would suit strong 8 year old
                    mathematicians who need stretch, up to 11 year olds who
                    would benefit from recapping place value, mental & written
                    methodologies.
                  </div>
                  <div className="mt-3 flex items-center gap-x-2 sm:gap-x-5">
                    <button
                      type="button"
                      className="purple_btn sm:text-md h-8 w-full max-w-[90px] rounded-md text-xs font-bold text-white transition-shadow hover:shadow-lg sm:h-10 sm:max-w-[120px]"
                    >
                      Schedule
                    </button>
                    <button
                      type="button"
                      className="purple_btn sm:text-md h-8 w-full max-w-[90px] rounded-md text-xs font-bold text-white transition-shadow hover:shadow-lg sm:h-10 sm:max-w-[120px]"
                    >
                      Subscribe
                    </button>
                    <div className="svg_icon w-[80px] text-[#202124] sm:w-[100px]">
                      <ProIcon />
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                variants={fadeInRight}
                className="mt-10 w-full shrink-0 text-center lg:ml-7 lg:w-auto xl:ml-10"
              >
                <Image
                  src="/creativity-thumb.png"
                  width={335}
                  height={232}
                  alt="Creativity"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ProfileBanner;
