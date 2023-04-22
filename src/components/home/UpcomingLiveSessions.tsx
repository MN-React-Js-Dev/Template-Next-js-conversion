import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  animationWrapper,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
} from '../../utilities/animations';
import 'swiper/css';
import 'swiper/css/navigation';

import LeftArrowIcon from '../../../public/icons/arrow-left.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const UpcomingLiveSessions = () => {
  const sliderItems = [
    {
      id: 1,
      imgUrl: 'live-session-1.jpg',
    },
    {
      id: 2,
      imgUrl: 'live-session-2.jpg',
    },
    {
      id: 3,
      imgUrl: 'live-session-3.jpg',
    },
    {
      id: 4,
      imgUrl: 'live-session-1.jpg',
    },
    {
      id: 5,
      imgUrl: 'live-session-2.jpg',
    },
    {
      id: 6,
      imgUrl: 'live-session-3.jpg',
    },
  ];

  return (
    <div className="relative py-14">
      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap items-center pb-6"
        >
          <motion.div variants={fadeInLeft} className="w-full lg:w-1/2">
            <h2 className="flex items-center pb-2 text-[20px] font-bold text-black md:text-[26px]">
              Upcoming
              <span className="ml-2 inline-flex h-[22px] w-[54px] items-center justify-center rounded bg-[#8383FF] text-xs font-semibold text-white">
                Free
              </span>
              <span className="mx-2 font-normal text-[#E2E2E2] sm:mx-3">|</span>
              <span className="mr-2 text-[#8383FF]">LIVE</span>
              sessions
            </h2>
            <p className="text-xs font-medium leading-tight text-[#585858] lg:text-[15px]">
              Attend Live Sessions on Industry and Future Ready Skills by Top 1%
              which can help you to grow and excel in your career
            </p>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            className="flex w-full justify-between gap-5 pt-8 lg:w-1/2 lg:justify-end lg:pt-0"
          >
            <Link href="/explore-all">
              <a className="flex h-[36px] w-[120px] items-center justify-center rounded-md bg-black px-2 py-1 text-xs font-semibold text-white transition-shadow hover:shadow-lg lg:h-[54px] lg:w-[172px] lg:rounded-lg lg:text-lg">
                Explore All
              </a>
            </Link>
            <div className="flex gap-2">
              <button
                type="button"
                className="upcoming_slider_arrow arrow-left flex h-[36px] w-[36px] items-center justify-center rounded-md border-2 border-black text-center transition-shadow hover:shadow-lg lg:h-[52px] lg:w-[52px] lg:rounded-lg"
              >
                <span className="svg_icon inline-block w-[16px] rotate-180 transform text-transparent lg:w-[23px]">
                  <LeftArrowIcon />
                </span>
              </button>
              <button
                type="button"
                className="upcoming_slider_arrow arrow-right flex h-[36px] w-[36px] items-center justify-center rounded-md border-2 border-black text-center transition-shadow hover:shadow-lg lg:h-[52px] lg:w-[52px] lg:rounded-lg"
              >
                <span className="svg_icon inline-block w-[16px] text-transparent lg:w-[23px]">
                  <LeftArrowIcon />
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <motion.div variants={fadeInUp}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            modules={[Navigation]}
            navigation={{
              prevEl: '.upcoming_slider_arrow.arrow-left',
              nextEl: '.upcoming_slider_arrow.arrow-right',
            }}
            breakpoints={{
              // when window width is >= 768px
              768: {
                spaceBetween: 20,
              },
            }}
            className="flex"
          >
            {sliderItems.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-full md:!w-[48.5%] lg:!w-[27%]"
              >
                <div className="relative flex justify-center overflow-hidden rounded-lg">
                  <div
                    className="absolute top-3 left-0 z-[1] flex h-[20px] w-[60px] items-center justify-center text-[10px] font-bold"
                    style={{ backgroundImage: 'url(/icons/yellow-ribbon.png)' }}
                  >
                    Free
                  </div>
                  <Image
                    src={`/${item.imgUrl}`}
                    width={62 * 7}
                    height={35 * 7}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default UpcomingLiveSessions;
