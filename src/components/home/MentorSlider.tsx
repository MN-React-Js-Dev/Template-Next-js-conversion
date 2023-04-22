import { motion } from 'framer-motion';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  animationWrapper,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from '../../utilities/animations';

const MentorSlider = () => {
  const sliderItems = [1, 2, 3, 4, 5, 6];

  return (
    <div className="relative pt-14 pb-5 lg:pb-14">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          className="welcome_slider"
        >
          {sliderItems.map((item) => (
            <SwiperSlide key={item}>
              <motion.div
                variants={animationWrapper}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-wrap-reverse items-center pb-7 lg:flex-nowrap"
              >
                <div className="w-full md:w-1/2">
                  <motion.div
                    variants={fadeInLeft}
                    className="flex items-end gap-4"
                  >
                    <Image
                      src="/mentor-ocean-logo.svg"
                      width={190}
                      height={34}
                      alt="Mentor Ocean"
                    />
                    <span className="text-xl font-semibold text-[#8383FF]">
                      Welcomes
                    </span>
                  </motion.div>
                  <motion.h5
                    variants={fadeInUp}
                    className="pb-3 pt-6 text-xl font-bold leading-tight text-black sm:text-2xl lg:pb-5 lg:pt-9 lg:text-3xl xl:text-4xl"
                  >
                    Mr. Ashish Vidyarthi as Investor & Mentor
                  </motion.h5>
                  <motion.p
                    variants={fadeInUp}
                    className="text-sm text-[#585858] lg:text-base"
                  >
                    Mentors play a keyrole in the success of individuals. I am
                    really happy to be associated with MentorOcean which has
                    great set of Mentors, and Mentorship Programs with a long
                    term vision. They are doing a wonderfull job in mentoring
                    students, working professionals and early-stage entrepeneurs
                  </motion.p>
                </div>
                <div className="w-full md:w-1/2 lg:pl-10">
                  <div className="flex flex-auto justify-center pb-6 sm:pb-7 lg:justify-end lg:pb-3">
                    <motion.div
                      variants={fadeInRight}
                      className="flex overflow-hidden rounded-[14px] shadow-lg"
                    >
                      <Image
                        src="/ashish.jpg"
                        width={500}
                        height={322}
                        alt="Mr. Ashish Vidyarthi"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default MentorSlider;
