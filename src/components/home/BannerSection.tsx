import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  animationWrapper,
  fadeInUp,
  fadeIn,
  zoomIn,
} from '../../utilities/animations';
import styles from '../../assets/scss/Home.module.scss';

import ShareIcon from '../../../public/icons/share.svg';
import PersonIcon from '../../../public/icons/person-alt.svg';
import TeachIcon from '../../../public/icons/teach.svg';
import PlaceholderIcon from '../../../public/icons/circle-bar-placeholder.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const BannerSection = () => (
  <div
    className={`${styles.home_banner_section} relative overflow-hidden bg-[#FAFAFF]`}
  >
    <div className="pointer-events-none absolute -left-12 -top-12">
      <Image src="/icons/decorator-square.png" width={130} height={130} />
    </div>
    <div className="pointer-events-none absolute left-0 top-[50%]">
      <Image src="/icons/decorator-rectangle.png" width={37} height={68} />
    </div>
    <div className="pointer-events-none absolute left-10 bottom-[5%] lg:bottom-[5%] xl:bottom-[10%]">
      <Image src="/icons/leaf-green.png" width={59} height={59} />
    </div>
    <div className="container">
      <div className="flex flex-wrap items-end lg:flex-nowrap">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative w-full pt-16 pb-10 md:pb-16 md:pt-20 lg:w-3/5 lg:pt-[180px] lg:pb-[120px] xl:pb-[230px]"
        >
          {/* eslint react/jsx-one-expression-per-line : "off" */}
          <motion.h1
            variants={fadeInUp}
            className="w-full text-[32px] font-bold leading-[1.2] text-[#1C1C25] sm:text-[42px] lg:max-w-[520px] lg:text-[44px] xl:max-w-[620px] xl:text-[54px] xl:leading-[60px]"
          >
            We Suffer In Life Because We Don’t Have The Right{' '}
            <span className="relative inline-block">
              Guide
              <span className="absolute -right-4 text-xs">TM</span>
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-md sm:text-md py-4 leading-snug text-[#6E6E7B] sm:py-5 md:py-6 md:text-lg md:leading-snug lg:max-w-[550px] lg:py-5 xl:max-w-[600px]"
          >
            Mentor Ocean.com is A Platform Where You Will Find The Best Mentor,
            Coaches, Trainers and Tutors Who Will Lead You To Your Success. Find
            the perfect mentor for yourself, because to lead a successful life,
            you require a true Guide
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/courses">
              <a className="focus-green blue_btn block w-full max-w-[260px] rounded-[5px] px-3 py-4 text-center font-bold text-white transition-shadow duration-300 ease-in-out hover:shadow-lg">
                Explore Courses
              </a>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative w-full lg:w-2/5"
        >
          <motion.div
            variants={fadeIn}
            transition={{ duration: 1 }}
            className={`${styles.banner_girl_img} pointer-events-none flex transform items-center justify-center lg:-translate-x-7 lg:justify-end xl:translate-x-[20%]`}
          >
            <Image
              src="/home-banner-girl.png"
              width={480}
              height={725}
              alt="We Suffer In Life"
            />
          </motion.div>
          <motion.div
            variants={zoomIn}
            className={`${styles.banner_popup_1} absolute top-[40%] -left-4 flex max-w-[170px] items-center gap-2 rounded-[10px] bg-white p-2 shadow-lg sm:top-16 sm:max-w-[210px] sm:p-3`}
          >
            <div className="flex h-9 w-9 flex-auto items-center justify-center rounded-md bg-[#B6FFDF] text-[#35B87F] sm:h-12 sm:w-12">
              <span className="svg_icon w-[18px] sm:w-[26px]">
                <ShareIcon />
              </span>
            </div>
            <p className="w-[80px] text-left text-[11px] font-semibold leading-tight text-[#35B87F] sm:w-[120px] sm:text-[15px]">
              Network with Best People
            </p>
          </motion.div>
          <motion.div
            variants={zoomIn}
            className={`${styles.banner_popup_2} absolute bottom-[10%] left-12 flex max-w-[105px] flex-row flex-wrap justify-center gap-2 rounded-[10px] bg-white p-2 shadow-lg sm:max-w-[145px] sm:py-4 sm:px-3 lg:bottom-32 lg:-left-8 xl:bottom-40 xl:-left-4`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#C7EBFF] text-[#1682BD] sm:h-12 sm:w-12">
              <span className="svg_icon w-[18px] sm:w-[26px]">
                <PersonIcon />
              </span>
            </div>
            <p className="text-center text-[11px] font-semibold leading-tight text-[#1682BD] sm:text-[15px]">
              Reshape your Leadership
            </p>
          </motion.div>
          <motion.div
            variants={zoomIn}
            className={`${styles.banner_popup_3} absolute -right-2 top-[10%] flex max-w-[110px] flex-row flex-wrap justify-center gap-2 rounded-[10px] bg-white p-2 shadow-lg sm:max-w-[176px] sm:py-4 sm:px-3 lg:top-40 lg:-right-[10px] xl:top-32 xl:-right-36`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#D8EEF2] text-[#03748C] sm:h-12 sm:w-12">
              <span className="svg_icon w-[18px] sm:w-[26px]">
                <TeachIcon />
              </span>
            </div>
            <p className="text-center text-[11px] font-semibold leading-tight text-[#1682BD] sm:text-[15px]">
              Learn from Expert Mentors
            </p>
            <div className="svg_icon">
              <PlaceholderIcon />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);
export default BannerSection;
