import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { animationWrapper, fadeIn } from '../../utilities/animations';
import IntroVideoPopup from '../common/popups/IntroVideoPopup';

import PersonWorkspaceIcon from '../../../public/icons/person-workspace.svg';
import VerifiedIcon from '../../../public/icons/shield.svg';
import MailIcon from '../../../public/icons/mail-filled.svg';
import PlayIcon from '../../../public/icons/play-button-filled.svg';
import StarIcon from '../../../public/icons/star.svg';
/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const CourseDetails = () => {
  const [openVideoIntro, setOpenVideoIntro] = useState(false);

  return (
    <div className="relative py-10 md:py-14 lg:py-20">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <div className="flex flex-wrap justify-between gap-14 lg:flex-nowrap">
          <div className="w-full">
            <div className="flex w-full flex-wrap items-start sm:flex-nowrap">
              <div className="relative mb-3 flex shrink-0 sm:mb-0">
                <div className="absolute top-0 left-12 z-[2] h-4 w-4 rounded-full border border-white bg-[#1DBF73]" />
                <div className="relative z-[1] flex items-center overflow-hidden rounded-full">
                  <Image
                    src="/mentor-card-1.jpg"
                    width={68}
                    height={68}
                    alt="Mentor 1"
                  />
                </div>
                <motion.div
                  variants={{
                    initial: { opacity: 0, x: -20 },
                    animate: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: 1,
                      },
                    },
                  }}
                  className="-ml-6 flex items-center overflow-hidden rounded-full"
                >
                  <Image
                    src="/mentor-card-2.jpg"
                    width={68}
                    height={68}
                    alt="Mentor 1"
                  />
                </motion.div>
              </div>
              <motion.div variants={fadeIn} className="w-full sm:ml-4">
                <div className="flex flex-wrap items-center gap-y-2 sm:flex-nowrap">
                  <div className="mr-3 flex w-full items-center sm:w-auto">
                    <div className="svg_icon mr-2 w-[18px] text-[#393939]">
                      <PersonWorkspaceIcon />
                    </div>
                    <div className="text-sm font-bold text-[#393939]">
                      Prime Pack Gigs
                    </div>
                  </div>
                  <div className="flex w-full items-center sm:w-auto">
                    <div className="svg_icon mr-1 w-4 text-[#1875FF]">
                      <VerifiedIcon />
                    </div>
                    <div className="text-sm font-bold text-[#1875FF]">
                      Identity Verified
                    </div>
                  </div>
                </div>
                <div className="pt-2 pb-1 text-base font-bold text-[#8796A0] md:text-[18px]">
                  <span className="text-black">Martin Alexa</span>{' '}
                  <span className="font-normal text-[#C7C7C7]">|</span> B.A
                  Child & Adolescent Development
                </div>
                <div className="text-xs font-bold text-[#575757] md:text-sm">
                  The Traveling Painters
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-between md:mt-0 lg:mt-2 xl:mt-0">
                  <div className="text-sm text-[#1c1c1c]">
                    <strong>I Speak:</strong> English, Indonesia, Germany
                  </div>
                  <div className="mt-3 flex gap-1 md:mt-0 lg:mt-3 xl:mt-0">
                    <button
                      type="button"
                      className="flex h-[32px] w-full max-w-[132px] items-center justify-center rounded-full border-2 border-[#8796A0] bg-[#8796A0] text-[11px] text-white transition hover:bg-transparent hover:text-[#8796A0]"
                    >
                      <div className="svg_icon mr-[3px] w-[17px]">
                        <MailIcon />
                      </div>
                      Ask a question
                    </button>
                    <button
                      type="button"
                      className="flex h-[32px] w-[185px] items-center justify-center rounded-full border-2 border-[#8796A0] bg-transparent pr-1 text-[11px] text-[#8796A0] transition hover:bg-[#8796A0] hover:text-white"
                      onClick={() => setOpenVideoIntro(true)}
                    >
                      <div className="svg_icon mr-[3px] w-[17px]">
                        <PlayIcon />
                      </div>
                      Watch My video intro
                    </button>

                    <IntroVideoPopup
                      status={openVideoIntro}
                      onClose={() => {
                        setOpenVideoIntro(false);
                      }}
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center">
                  <div className="flex items-center gap-[2px] text-[#50EA1A]">
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
                  <span className="mt-[2px] ml-2 text-xs font-semibold text-[#969696] lg:text-[16px]">
                    (920 Review for this Teacher)
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center sm:mt-4">
                  <div className="flex items-center gap-[2px] text-[#50EA1A]">
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
                  <span className="mt-[2px] ml-2 text-xs font-semibold text-[#969696] lg:text-[16px]">
                    (42 Review for this Class)
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn}
              className="mt-3 text-sm text-black lg:mt-6 lg:text-base"
            >
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit
              sed eu lectus mi amet egestas massa. Nunc enim eleifend tellus
              tincidunt pharetra sagittis volutpat. Ut donec vitae ut viverra
              lacus lectus orci. Amet, consequat volutpat magna risus risus.{' '}
              <a href="#" className="font-bold">
                Read More
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-y-10 border-t-2 border-t-[#EBEBEB] pt-10">
          <div className="w-full md:w-1/2">
            <h4 className="mb-4 text-2xl font-bold">Description</h4>
            <div className="text-sm leading-snug md:text-[15px]">
              <p className="mb-4">
                Welcome to the course PHP Programming from Beginner to Advanced.
                Here we will learn PHP Programming from basic to advanced level,
                accompanied by case studies. There will be a lot of material
                that will be discussed in this course such as:
              </p>
              <ul className="list-outside list-disc pl-5">
                <li className="mb-3">
                  Basic PHP, discusses the basics of PHP programming, data
                  types, variables, functions, data type conversions, and others
                </li>
                <li className="mb-3">
                  PHP Object Oriented Programming, discuss object-oriented
                  programming in PHP, create classes, create interfaces, create
                  traits, discuss inheritance and polymorphism, discuss error
                  handling and others
                </li>
                <li className="mb-3">
                  New Features of PHP version 8, discusses the new features
                  available in PHP version 8
                </li>
                <li className="mb-3">
                  PHP Database, discusses PHP Data Objects, how to connect to
                  MySQL databases, learns Repository patterns, inserts updates,
                  deletes and selects to MySQL, database transactions, and
                  others
                </li>
                <li className="mb-3">
                  PHP Web, discusses how to create a web using PHP, perform GET
                  queries, perform POST queries, create sessions, learn cookies,
                  http headers, and others
                </li>
              </ul>
              <p>
                The material will always be updated regularly, and when the
                material is updated, the course price will also be updated with
                the new price. So make sure to buy this course as soon as
                possible, the sooner, the cheaper the purchase price of this
                course.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-14 xl:pl-20">
            <Image
              src="/creativity-thumb.png"
              width={360 * 2}
              height={250 * 2}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default CourseDetails;
