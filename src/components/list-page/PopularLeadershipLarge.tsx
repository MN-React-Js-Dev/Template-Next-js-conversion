import { motion } from 'framer-motion';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

import StarIcon from '../../../public/icons/star.svg';
import {
  animationWrapper,
  fadeInLeft,
  fadeInUp,
} from '../../utilities/animations';

const PopularLeadershipLarge = () => {
  const sliderItems = [
    {
      id: 1,
      title: 'Highlights & Hidden Gems of Paris',
      place: 'Paris',
      star: 5,
    },
    {
      id: 2,
      title: 'Highlights & Hidden Gems of Paris',
      place: 'London',
      star: 5,
    },
    {
      id: 3,
      title: 'Highlights & Hidden Gems of Paris',
      place: 'Italy',
      star: 5,
    },
    {
      id: 4,
      title: 'Highlights & Hidden Gems of Paris',
      place: 'Paris',
      star: 5,
    },
    {
      id: 5,
      title: 'Highlights & Hidden Gems of Paris',
      place: 'London',
      star: 5,
    },
    {
      id: 6,
      title: 'Highlights & Hidden Gems of Paris',
      place: 'Italy',
      star: 5,
    },
  ];

  return (
    <div className="relative pt-14 pb-5 md:py-14">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h3
          variants={fadeInUp}
          className="pb-5 text-[20px] font-bold text-black md:text-[26px]"
        >
          Popular Leadership Programs
        </motion.h3>
      </motion.div>
      <div className="pl-2 md:container md:pl-3">
        <motion.div
          variants={fadeInUp}
          className="popular_leadership_slider slider__id_2 relative"
        >
          <Swiper
            modules={[Navigation, FreeMode]}
            slidesPerView="auto"
            freeMode
            navigation={{
              prevEl:
                '.popular_leadership_slider.slider__id_2 .swiper-button-prev',
              nextEl:
                '.popular_leadership_slider.slider__id_2 .swiper-button-next',
            }}
            spaceBetween={0}
          >
            {sliderItems.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[105%] md:!w-[68.5%] lg:!w-[44%]"
              >
                <div
                  className="m-2 mb-3 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat px-3 py-2"
                  style={{
                    backgroundImage: 'url(/leadership-bg.jpg)',
                    boxShadow:
                      '0 1px 1px rgba(0, 0, 0, .05), 0 2px 2px rgba(0, 0, 0, .05), 0 4px 4px rgba(0, 0, 0, .05), 0 6px 8px rgba(0, 0, 0, .05), 0 8px 16px rgba(0, 0, 0, .05)',
                  }}
                >
                  <div>
                    <p className="text-[11px] font-bold text-white">
                      {item.place}
                    </p>
                    <div className="flex text-white">
                      <span className="svg_icon inline-block w-4">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-4">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-4">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-4">
                        <StarIcon />
                      </span>
                      <span className="svg_icon inline-block w-4">
                        <StarIcon />
                      </span>
                      <span className="ml-2 text-xs font-normal">(231)</span>
                    </div>
                    <h4 className="mt-16 max-w-[220px] text-xl font-extrabold leading-tight text-white md:mt-[80px]">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center">
                        {/* !Todo: Need to animate here */}
                        <span className="relative z-[1] flex rounded-full border border-white">
                          <Image
                            src="/user-1.png"
                            width={45}
                            height={45}
                            alt="user-1"
                          />
                        </span>
                        <motion.span
                          variants={fadeInLeft}
                          className="-ml-4 flex rounded-full border border-white"
                        >
                          <Image
                            src="/user-2.png"
                            width={45}
                            height={45}
                            alt="user-2"
                          />
                        </motion.span>
                        <p className="pl-2 text-[10px] font-bold leading-tight text-white">
                          Choose one of our
                          <br />
                          Mentors
                        </p>
                      </div>
                      <a
                        href="/explore"
                        className="bold rounded-full border border-white px-3 py-1 text-center text-xs font-extrabold text-white hover:bg-white hover:text-black"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev !hidden md:!flex" />
          <div className="swiper-button-next !hidden md:!flex" />
        </motion.div>
      </div>
    </div>
  );
};
export default PopularLeadershipLarge;
