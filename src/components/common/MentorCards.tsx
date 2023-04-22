import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, animationWrapper } from '../../utilities/animations';

import StarIcon from '../../../public/icons/star.svg';
import LocationIcon from '../../../public/icons/location.svg';
import USFlag from '../../../public/icons/flag-united-states.png';
import VerifiedIcon from '../../../public/icons/verified-user-rounded.svg';
import MailIcon from '../../../public/icons/mail-filled.svg';
import PlayIcon from '../../../public/icons/play-button-filled.svg';
import ProtectIcon from '../../../public/icons/shield.png';
import IntroVideoPopup from './popups/IntroVideoPopup';

/* eslint react/jsx-one-expression-per-line: "off" */
const MentorCards = () => {
  const [openIntro, setOpenIntro] = useState(false);

  return (
    <div className="relative pt-20">
      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="pb-6 md:pb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="pb-8 text-center text-[22px] font-bold leading-tight md:text-[36px]"
          >
            Meet your Mentor
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="mx-auto w-full rounded-[18px] px-3 py-3 shadow-spread md:px-4 md:py-4 lg:max-w-[936px]"
          >
            <div className="flex flex-wrap justify-between gap-3 lg:gap-4">
              <div className="mx-auto mb-2 flex w-full flex-shrink-0 overflow-hidden rounded-[10px] text-center md:mb-0 md:h-[120px] md:w-[120px] md:shadow-md lg:h-[162px] lg:w-[162px]">
                <Image
                  src="/mentor-card-1.jpg"
                  width={162 * 2}
                  height={162 * 2}
                  alt="Mentor 1"
                  className="w-full"
                />
              </div>
              <div className="flex-auto">
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-wrap items-center">
                    <h4 className="text-[16px] font-bold leading-tight xl:text-[22px]">
                      Nathalia Angie
                    </h4>
                    <div className="ml-3 flex items-center gap-[2px] text-[#50EA1A] lg:ml-3">
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="mt-[3px] ml-1 text-xs font-semibold lg:text-[17px]">
                        5.0
                      </span>
                    </div>
                    <span className="mt-[2px] text-xs font-semibold text-[#969696] md:ml-2 lg:text-[16px]">
                      (62 Classes Completed)
                    </span>
                    <div className="ml-1 flex items-center rounded-full border-2 border-[#17A966] px-2 py-[3px] text-[9px] font-semibold text-[#17A966] md:ml-2 lg:text-[13px]">
                      <div className="mr-1 h-[6px] w-[6px] rounded-full bg-[#17A966]" />
                      Online
                    </div>
                  </div>
                  <div className="flex items-center rounded-full bg-[#326647] px-5 py-[5px] text-[9px] font-semibold text-white sm:ml-2 lg:text-[13px]">
                    Lead
                  </div>
                </div>
                <div className="flex items-center py-3 md:py-1 lg:py-3">
                  <div className="svg_icon mr-2 w-5 text-[#33CD86] lg:w-6">
                    <LocationIcon />
                  </div>
                  <div className="svg_icon mr-2 flex w-5 lg:w-6">
                    <Image src={USFlag} />
                  </div>
                  <p className="text-xs text-[#585858] lg:text-base">
                    United States, NY
                  </p>
                  <div className="svg_icon ml-3 w-4 text-[#1875FF] lg:w-6">
                    <VerifiedIcon />
                  </div>
                  <p className="text-xs font-bold text-[#1875FF] lg:text-base">
                    Identity Verified
                  </p>
                </div>
                <div className="text-sm text-[#929292] md:text-base">
                  Head of data science, Prenien Data Inc
                </div>
                <div className="mt-2 flex flex-wrap gap-3 lg:mt-5">
                  <button
                    type="button"
                    className="flex h-[36px] w-full items-center justify-center rounded-md border-2 border-[#8796A0] bg-[#8796A0] text-xs text-white transition hover:bg-transparent hover:text-[#8796A0] md:w-[140px] lg:h-[40px] lg:w-[162px] lg:text-[15px]"
                  >
                    <div className="svg_icon mr-2 w-5">
                      <MailIcon />
                    </div>
                    Ask a question
                  </button>
                  <button
                    type="button"
                    className="flex h-[36px] w-full items-center justify-center rounded-md border-2 border-[#8796A0] bg-transparent text-xs text-[#8796A0] transition hover:bg-[#8796A0] hover:text-white md:w-[180px] lg:h-[40px] lg:w-[218px] lg:text-[15px]"
                    onClick={() => setOpenIntro(true)}
                  >
                    <div className="svg_icon mr-2 w-5">
                      <PlayIcon />
                    </div>
                    Watch My video intro
                  </button>
                  <IntroVideoPopup
                    status={openIntro}
                    onClose={() => {
                      setOpenIntro(false);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="text-[585858] pt-4 text-xs leading-snug lg:text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation{' '}
              <a href="#" className="font-semibold text-[#33CD86]">
                Read More
              </a>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-16 pb-8 text-center text-[22px] font-bold leading-tight md:text-[36px]"
          >
            Co-Hosts
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="mx-auto w-full rounded-[18px] px-3 py-3 shadow-spread md:px-4 md:py-4 lg:max-w-[936px]"
          >
            <div className="flex flex-wrap justify-between gap-3 lg:gap-4">
              <div className="mx-auto mb-2 flex w-full flex-shrink-0 overflow-hidden rounded-[10px] text-center md:mb-0 md:h-[120px] md:w-[120px] md:shadow-md lg:h-[162px] lg:w-[162px]">
                <Image
                  src="/mentor-card-2.jpg"
                  width={162 * 2}
                  height={162 * 2}
                  alt="Mentor 2"
                  className="w-full"
                />
              </div>
              <div className="flex-auto">
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-wrap items-center">
                    <h4 className="text-[16px] font-bold leading-tight xl:text-[22px]">
                      Nathalia Angie
                    </h4>
                    <div className="ml-3 flex items-center gap-[2px] text-[#50EA1A] lg:ml-3">
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-[13px] lg:w-[18px]">
                        <StarIcon />
                      </span>
                      <span className="mt-[3px] ml-1 text-xs font-semibold lg:text-[17px]">
                        5.0
                      </span>
                    </div>
                    <span className="mt-[2px] text-xs font-semibold text-[#969696] md:ml-2 lg:text-[16px]">
                      (62 Classes Completed)
                    </span>
                    <div className="ml-1 flex items-center rounded-full border-2 border-[#17A966] px-2 py-[3px] text-[9px] font-semibold text-[#17A966] md:ml-2 lg:text-[13px]">
                      <div className="mr-1 h-[6px] w-[6px] rounded-full bg-[#17A966]" />
                      Online
                    </div>
                  </div>
                  <div className="flex items-center rounded-full bg-[#326647] px-5 py-[5px] text-[9px] font-semibold text-white sm:ml-2 lg:text-[13px]">
                    Lead
                  </div>
                </div>
                <div className="flex items-center py-3 md:py-1 lg:py-3">
                  <div className="svg_icon mr-2 w-5 text-[#33CD86] lg:w-6">
                    <LocationIcon />
                  </div>
                  <div className="svg_icon mr-2 flex w-5 lg:w-6">
                    <Image src={USFlag} />
                  </div>
                  <p className="text-xs text-[#585858] lg:text-base">
                    United States, NY
                  </p>
                  <div className="svg_icon ml-3 w-4 text-[#1875FF] lg:w-6">
                    <VerifiedIcon />
                  </div>
                  <p className="text-xs font-bold text-[#1875FF] lg:text-base">
                    Identity Verified
                  </p>
                </div>
                <div className="text-sm text-[#929292] md:text-base">
                  Head of data science, Prenien Data Inc
                </div>
                <div className="mt-2 flex flex-wrap gap-3 lg:mt-5">
                  <button
                    type="button"
                    className="flex h-[36px] w-full items-center justify-center rounded-md border-2 border-[#8796A0] bg-[#8796A0] text-xs text-white transition hover:bg-transparent hover:text-[#8796A0] md:w-[140px] lg:h-[40px] lg:w-[162px] lg:text-[15px]"
                  >
                    <div className="svg_icon mr-2 w-5">
                      <MailIcon />
                    </div>
                    Ask a question
                  </button>
                  <button
                    type="button"
                    className="flex h-[36px] w-full items-center justify-center rounded-md border-2 border-[#8796A0] bg-transparent text-xs text-[#8796A0] transition hover:bg-[#8796A0] hover:text-white md:w-[180px] lg:h-[40px] lg:w-[218px] lg:text-[15px]"
                    onClick={() => setOpenIntro(true)}
                  >
                    <div className="svg_icon mr-2 w-5">
                      <PlayIcon />
                    </div>
                    Watch My video intro
                  </button>

                  <IntroVideoPopup
                    status={openIntro}
                    onClose={() => {
                      setOpenIntro(false);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="text-[585858] pt-4 text-xs leading-snug lg:text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation{' '}
              <a href="#" className="font-semibold text-[#33CD86]">
                Read More
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-9 flex items-center justify-center text-xs lg:text-base"
          >
            <div className="svg_icon mr-2 flex w-5 lg:w-6">
              <Image src={ProtectIcon} />
            </div>
            To protect your payment, never transfer money or communicate outside
            of MentorOcean websitel.
            <a className="ml-2 font-semibold underline" href="#">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default MentorCards;
