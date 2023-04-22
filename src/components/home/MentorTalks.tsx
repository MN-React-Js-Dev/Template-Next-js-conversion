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
const MentorTalks = () => {
  const sliderItems = [
    {
      id: 1,
      imgUrl: 'mentor-talks-1.jpg',
    },
    {
      id: 2,
      imgUrl: 'mentor-talks-2.jpg',
    },
    {
      id: 3,
      imgUrl: 'mentor-talks-3.jpg',
    },
    {
      id: 4,
      imgUrl: 'mentor-talks-4.jpg',
    },
    {
      id: 5,
      imgUrl: 'mentor-talks-1.jpg',
    },
    {
      id: 6,
      imgUrl: 'mentor-talks-2.jpg',
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
              Mentor Talks
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
                className="mentor_slider_arrow arrow-left flex h-[36px] w-[36px] items-center justify-center rounded-md border-2 border-black text-center transition-shadow hover:shadow-lg lg:h-[52px] lg:w-[52px] lg:rounded-lg"
              >
                <span className="svg_icon inline-block w-[16px] rotate-180 transform text-transparent lg:w-[23px]">
                  <LeftArrowIcon />
                </span>
              </button>
              <button
                type="button"
                className="mentor_slider_arrow arrow-right flex h-[36px] w-[36px] items-center justify-center rounded-md border-2 border-black text-center transition-shadow hover:shadow-lg lg:h-[52px] lg:w-[52px] lg:rounded-lg"
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
              prevEl: '.mentor_slider_arrow.arrow-left',
              nextEl: '.mentor_slider_arrow.arrow-right',
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
                  <Image
                    src={`/${item.imgUrl}`}
                    width={612 * 2}
                    height={408 * 2}
                  />
                  <button
                    className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transform"
                    type="button"
                  >
                    <Image
                      src="/icons/play-blur.png"
                      width={58}
                      height={58}
                      alt="play"
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default MentorTalks;
