import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeInLeft } from '../../utilities/animations';

import 'swiper/css';
import 'swiper/css/navigation';

import DesignText from '../../../public/icons/design-text.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
/* eslint react/no-array-index-key: "off" */

const PopularCategorySlider = () => (
  <div className="relative pb-14">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <div className="pb-5">
        <motion.div
          variants={fadeInLeft}
          className="flex items-center justify-between pb-2"
        >
          <h2 className="mr-7 inline-flex flex-wrap items-center text-[20px] font-bold text-black md:flex-nowrap md:text-[24px]">
            <span className="mr-2">Experiences for</span>
            <span className="text-[#1589C1]">Popular Categories</span>
          </h2>
        </motion.div>
      </div>

      <div className="popular_category_slider relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation]}
          navigation={{
            prevEl: '.popular_category_slider .swiper-button-prev',
            nextEl: '.popular_category_slider .swiper-button-next',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {[...Array(15)].map((item, index) => (
            <SwiperSlide key={index} className="w-full">
              <div
                style={{
                  backgroundImage: 'url(/popular-category-slider.jpg)',
                }}
                className="relative flex min-h-[330px] flex-col justify-between overflow-hidden rounded-2xl bg-cover bg-center py-6 text-white before:absolute before:inset-0 before:bg-black before:bg-opacity-30"
              >
                <div className="relative w-full text-center">
                  <p className="mb-1 text-xs font-bold">MentorOcean for</p>
                  <div className="svg_icon mx-auto w-[137px]">
                    <DesignText />
                  </div>
                </div>
                <div className="relative mx-auto max-w-[180px] text-center">
                  <p className="mb-3 text-xs font-bold">
                    Learn Design with Best Mentor in MentorOcean
                  </p>
                  <button
                    type="button"
                    className="rounded-full border border-white px-4 py-[5px] text-sm font-bold"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev !-left-5 !-mt-[14px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
        <div className="swiper-button-next !-right-5 !-mt-[14px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
      </div>
    </motion.div>
  </div>
);
export default PopularCategorySlider;
