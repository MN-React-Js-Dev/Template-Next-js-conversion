/* eslint react/no-array-index-key: "off" */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeInUp } from '../../utilities/animations';

import 'swiper/css';
import 'swiper/css/navigation';

import RocketIcon from '../../../public/icons/rocket.svg';

const BannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  const sliderContents = [
    {
      id: 0,
      title: 'All Days Trips Worldwide',
      subtitle:
        'Take a break from the city and hit the road on a day trip. Travel through scenic trails that lead to some of the most beautiful treasures outsides of your next destination. Of course, with your favorite local by your side!',
    },
    {
      id: 1,
      title: 'Two Days Trips',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui, hic, deleniti molestias nam ducimus quas, aliquid temporibus tempora natus sint. Ratione deleniti veritatis inventore fuga',
    },
    {
      id: 2,
      title: 'Seven Days Trips',
      subtitle:
        'Take a break from the city and hit the road on a day trip. Travel through scenic trails that lead to some of the most beautiful treasures outsides of your next destination. Of course, with your favorite local by your side!',
    },
    {
      id: 3,
      title: 'Monthly Trips Worldwide',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum qui, hic, deleniti molestias nam ducimus quas, aliquid temporibus tempora natus sint. Ratione deleniti veritatis inventore fuga',
    },
  ];

  return (
    <div className="position-center relative bg-cover pt-16">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <div className="relative">
          <div className="flex flex-wrap-reverse items-stretch lg:flex-nowrap">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <div className="min-h-[150px] md:min-h-[100px] lg:min-h-[180px] xl:min-h-[230px]">
                <AnimatePresence exitBeforeEnter>
                  {textVisible && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={0}
                    >
                      <h1 className="mb-3 text-xl font-bold !leading-tight text-[#1C1C25] md:text-2xl lg:mb-4 lg:text-3xl xl:mb-5 xl:text-[40px]">
                        {sliderContents[activeIndex].title}
                      </h1>
                      <div className="text-sm text-[#5B5B63] md:text-base lg:text-lg lg:leading-snug xl:text-[22px]">
                        {sliderContents[activeIndex].subtitle}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 sm:mt-7 sm:flex-nowrap">
                <button
                  type="button"
                  className="purple_btn_2 flex h-[50px] w-full items-center rounded-full pl-2 pr-6 sm:w-auto"
                >
                  <div className="mr-2 flex h-[35px] w-[35px] shrink-0 rounded-full bg-white">
                    <Image
                      src="/icons/purple-play.png"
                      width={35}
                      height={35}
                    />
                  </div>
                  <span className="block w-full text-base font-bold text-white">
                    About MentorOcean
                  </span>
                </button>
                <button
                  type="button"
                  className="group flex h-[50px] w-full items-center rounded-full border-2 border-[#27AA5E] px-4 hover:shadow-lg sm:w-auto xl:px-7"
                >
                  <div className="mr-2 flex h-[18px] w-[18px] shrink-0 rounded-full text-[#27AA5E]">
                    <RocketIcon />
                  </div>
                  <span className="block w-full text-base font-bold text-[#27AA5E]">
                    Post Request
                  </span>
                </button>
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="banner_review_slider relative mb-5 w-full md:mb-7 lg:mb-0 lg:w-1/2"
            >
              <div className="overflow-hidden rounded-xl">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: '.banner_review_slider .swiper-button-prev',
                    nextEl: '.banner_review_slider .swiper-button-next',
                  }}
                  slidesPerView={1}
                  spaceBetween={30}
                  onSlideChangeTransitionStart={() => {
                    setTextVisible(false);
                  }}
                  onSlideChangeTransitionEnd={(swiper) => {
                    setTextVisible(true);
                    setActiveIndex(swiper.activeIndex);
                  }}
                >
                  {[...Array(4)].map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex overflow-hidden rounded-xl">
                        <Image
                          src="/list-page-slider.jpg"
                          width={533 * 2}
                          height={333 * 2}
                          alt="Slider"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="swiper-button-prev !-left-[17px] !-mt-[13px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
              <div className="swiper-button-next !-right-[17px] !-mt-[13px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default BannerSection;
