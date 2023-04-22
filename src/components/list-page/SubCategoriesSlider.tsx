import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeInUp } from '../../utilities/animations';

import VideoEditor from '../../../public/icons/editor-video.svg';

import 'swiper/css';
import 'swiper/css/navigation';

const SubCategoriesSlider = () => (
  <div className="relative md:pt-14">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <div className="pb-7">
        <h3 className="pb-2 text-xl font-bold text-black lg:text-2xl">
          Select Sub Categories
        </h3>
        <p className="text-xs text-[#70757A]">
          Stand out from the crowd with a logo that fits your brand personality.
        </p>
      </div>

      <div className="sub_category_slider rounded-md border-2 border-[#F7F7F7] px-10 py-5 sm:px-14">
        <div className="relative">
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            modules={[Navigation]}
            navigation={{
              prevEl: '.sub_category_slider .swiper-button-prev',
              nextEl: '.sub_category_slider .swiper-button-next',
            }}
            breakpoints={{
              // when window width is >= 768px
              1200: {
                slidesPerView: 7,
              },
              1024: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 3,
              },
            }}
            className=""
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
              <SwiperSlide key={item} className="">
                <motion.div
                  variants={fadeInUp}
                  className="w-full px-4 pt-2 pb-5 md:px-2 md:pb-3"
                >
                  <div
                    className="rounded-md py-7 text-center"
                    style={{
                      boxShadow: '0 3px 10px -1px rgba(0,0,0,.2)',
                    }}
                  >
                    <div className="svg_icon mx-auto w-[50px]">
                      <VideoEditor />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-black">
                      Video Courses
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev !-left-8 !-mt-[10px] !h-[20px] !w-[20px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[8px]" />
          <div className="swiper-button-next !-right-8 !-mt-[10px] !h-[20px] !w-[20px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[8px]" />
        </div>
      </div>
    </motion.div>
  </div>
);
export default SubCategoriesSlider;
