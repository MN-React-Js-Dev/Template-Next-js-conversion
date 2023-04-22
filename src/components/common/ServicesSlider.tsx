import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeInLeft } from '../../utilities/animations';
import MentorCard from './cards/Mentor';

import 'swiper/css';
import 'swiper/css/navigation';
import LiveClass from './cards/LiveClass';
import Workshop from './cards/Workshop';
import PrimePacks from './cards/PrimePacks';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */

interface ServicesSliderProps {
  sliderId: string;
  title: JSX.Element;
  data?: { id: number; type: string; imgUrl: string }[];
  useLine?: boolean;
}

const ServicesSlider = ({
  sliderId,
  title,
  data,
  useLine = true,
}: ServicesSliderProps) => (
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
          {title}
          {useLine && (
            <div className="hidden h-[1px] flex-auto bg-[#D8D8D8] md:block" />
          )}
        </motion.div>
      </div>

      <div className={`${sliderId} relative px-4`}>
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          modules={[Navigation]}
          navigation={{
            prevEl: `.${sliderId} .swiper-button-prev`,
            nextEl: `.${sliderId} .swiper-button-next`,
          }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              spaceBetween: 20,
            },
          }}
          className="flex"
        >
          {data &&
            data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-full md:!w-[48.5%] lg:!w-[27%]"
              >
                {item.type === 'mentor' ? <MentorCard {...item} /> : null}
                {item.type === 'live-class' ? <LiveClass {...item} /> : null}
                {item.type === 'workshop' ? <Workshop {...item} /> : null}
                {item.type === 'prime-pack' ? <PrimePacks {...item} /> : null}
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-button-prev !-left-5 !-mt-[14px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
        <div className="swiper-button-next !-right-5 !-mt-[14px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
      </div>
    </motion.div>
  </div>
);
export default ServicesSlider;
