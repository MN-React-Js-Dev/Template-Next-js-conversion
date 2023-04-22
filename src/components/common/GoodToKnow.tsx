import { motion } from 'framer-motion';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {
  animationWrapper,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
} from '../../utilities/animations';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CancelMark from '../../../public/icons/round-cancel.svg';
import Checkmark from '../../../public/icons/circle-check.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const GoodToKnow = () => {
  const sliderItems = [
    {
      id: 1,
      title: 'Transport',
      imgUrl: 'bus.svg',
    },
    {
      id: 2,
      title: 'Private Group',
      imgUrl: 'group.svg',
    },
    {
      id: 3,
      title: 'Transport',
      imgUrl: 'bus.svg',
    },
    {
      id: 4,
      title: 'Private Group',
      imgUrl: 'group.svg',
    },
    {
      id: 5,
      title: 'Transport',
      imgUrl: 'bus.svg',
    },
    {
      id: 6,
      title: 'Private Group',
      imgUrl: 'group.svg',
    },
  ];

  return (
    <div className="relative pt-10 pb-10 md:pt-14 md:pb-14  lg:pt-20 lg:pb-20">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="pb-7 text-2xl font-bold text-black md:text-[28px] lg:text-[32px]"
        >
          Good to know
        </motion.h2>
        <div className="flex flex-wrap items-center pb-6">
          <motion.div variants={fadeInLeft} className="w-1/2">
            <h2 className="flex items-center text-base font-bold text-black md:text-[20px]">
              Whats Included
            </h2>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            className="flex w-1/2 justify-end gap-5 md:pt-0"
          >
            <div className="relative flex w-[140px] items-center gap-2">
              <div className="good_to_know_slider swiper-pagination !relative !top-0 !bottom-0 !w-[50px] text-[#666]" />

              <div className="good_to_know_slider swiper-button-prev !relative !top-0 !bottom-0 !-left-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
              <div className="good_to_know_slider swiper-button-next !relative !top-0 !bottom-0 !-right-0 !mt-0 !h-[32px] !w-[32px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[10px]" />
            </div>
          </motion.div>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.good_to_know_slider.swiper-button-prev',
              nextEl: '.good_to_know_slider.swiper-button-next',
            }}
            pagination={{
              type: 'fraction',
              el: '.good_to_know_slider.swiper-pagination',
            }}
            breakpoints={{
              // when window width is >= 768px
              1200: {
                spaceBetween: 20,
                slidesPerView: 5,
              },
              1024: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              768: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
            }}
            className="flex"
          >
            {sliderItems.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  variants={fadeInUp}
                  className="rounded-lg border-2 border-[#E1E1E1] bg-white p-[15px]"
                >
                  <div className="relative flex">
                    <Image
                      src={`/icons/${item.imgUrl}`}
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="pb-2 pt-2 text-base font-semibold text-black md:text-[20px]">
                    {item.title}
                  </p>
                  <p className="text-[13px]">
                    Tortor pellentesque nec sit nulla volutpat curabitur mattis
                    fusce condimentum. Nulla orci congue praesent nullam vitae
                    nibh. Sed sit sed eu lectus mi amet egestas{' '}
                    <a href="#" className="font-semibold">
                      Read More
                    </a>
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 border-t-2 border-[#EBEBEB] pt-10"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <h3 className="pb-3 font-bold text-[#262626] lg:text-2xl">
              Whats not Included
            </h3>
            <p className="mb-1 flex text-sm text-[#484848] md:text-base lg:text-lg">
              <span className="mr-2 inline-block w-[22px] flex-shrink-0 xl:pt-1">
                <CancelMark />
              </span>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum.. Nulla Orci congue prasent
            </p>
            <p className="mb-1 flex text-sm text-[#484848] md:text-base lg:text-lg">
              <span className="mr-2 inline-block w-[22px] flex-shrink-0 xl:pt-1">
                <CancelMark />
              </span>
              Tortor pellentesque nec sit nulla volutpat
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="mb-6">
            <h3 className="pb-3 font-bold text-[#262626] lg:text-2xl">
              Where we will meet?
            </h3>
            <p className="mb-1 flex text-sm text-[#484848] md:text-base lg:text-lg">
              <span className="mr-2 inline-block w-[22px] flex-shrink-0 xl:pt-1">
                <Checkmark />
              </span>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum.. Nulla Orci congue prasent
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="pb-3 font-bold text-[#262626] lg:text-2xl">
              Cancelation
            </h3>
            <p className="mb-1 flex text-sm text-[#484848] md:text-base lg:text-lg">
              <span className="mr-2 inline-block w-[22px] flex-shrink-0 xl:pt-1">
                <CancelMark />
              </span>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum.. Nulla Orci congue prasent
            </p>
            <p className="mb-1 flex text-sm text-[#484848] md:text-base lg:text-lg">
              <span className="mr-2 inline-block w-[22px] flex-shrink-0 xl:pt-1">
                <CancelMark />
              </span>
              Tortor pellentesque nec sit nulla volutpat
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default GoodToKnow;
