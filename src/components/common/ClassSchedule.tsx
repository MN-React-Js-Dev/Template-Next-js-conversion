import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { fadeInUp, animationWrapper } from '../../utilities/animations';

import 'swiper/css';
import 'swiper/css/navigation';

import CalendarIcon from '../../../public/icons/calendar-week.svg';
import ClockIcon from '../../../public/icons/clock-circle-filled.svg';

/* eslint react/jsx-one-expression-per-line: "off" */
interface ClassScheduleProps {
  sliderId: string;
}

const ClassSchedule = ({ sliderId }: ClassScheduleProps) => {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div className="relative pt-20">
      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeInUp}
            className="pb-8 text-center text-[22px] font-bold leading-tight md:text-[36px]"
          >
            Available Class Schedule
          </motion.h2>

          <div className={`${sliderId} relative px-2`}>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: `.${sliderId} .swiper-button-prev`,
                nextEl: `.${sliderId} .swiper-button-next`,
              }}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                // when window width is >= 768px
                1200: {
                  spaceBetween: 15,
                  slidesPerView: 4,
                },
                1024: {
                  spaceBetween: 20,
                  slidesPerView: 3,
                },
                768: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
              }}
              className="flex"
            >
              {data &&
                data.map((item) => (
                  <SwiperSlide key={item} className="px-2 py-2">
                    <motion.div variants={fadeInUp}>
                      <div className="relative rounded-2xl bg-white px-5 pt-14 pb-2 shadow-spread">
                        <div className="absolute right-0 top-4 flex h-[28px] w-[125px] items-center justify-center bg-[#1569E8] pl-3 text-[10px] font-extrabold text-white before:absolute before:-left-[5px] before:border-[20px] before:border-transparent before:border-l-white">
                          09:00 AM Morning
                        </div>
                        <div className="text-center font-bold text-[#9b9b9b]">
                          Class Starts
                        </div>
                        <div className="mb-5 text-center text-base font-bold text-[#33CD86] lg:text-lg">
                          Wed, 13 September
                        </div>
                        <div className="mb-3 flex">
                          <div className="svg_icon mr-2 w-5 text-[#878585]">
                            <CalendarIcon />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#878585]">
                              10 Nov 2021 - 10 Jan 2022
                            </p>
                            <p className="text-xs font-semibold text-[#FEB325]">
                              Tu, We, Th, Fri, Mo
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="svg_icon mr-2 w-5 text-[#878585]">
                            <ClockIcon />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#878585]">
                              08:00 PM - 09:00 PM (IST)
                            </p>
                          </div>
                        </div>
                        <div className="mx-auto my-4 flex h-[38px] w-40 items-center justify-center rounded-md bg-[#D7FFEC] text-sm text-[#180A08]">
                          Batch Size 1:10
                        </div>
                        <p className="text-center text-xs font-semibold text-[#1AB56E]">
                          Only One spot remaining
                        </p>
                        <button
                          type="button"
                          className="mt-5 mb-2 h-11 w-full rounded-md border-2 border-black bg-black text-sm font-bold uppercase text-white hover:bg-transparent hover:text-black"
                        >
                          Join Class
                        </button>
                        <button
                          type="button"
                          className="mb-2 h-11 w-full rounded-md border-2 border-black bg-transparent text-sm font-bold uppercase text-black hover:bg-black hover:text-white"
                        >
                          Show All 10 Meetings
                        </button>
                      </div>
                      <div className="mx-auto mt-4 flex h-[34px] w-full max-w-[244px] items-center justify-center rounded-[4px] bg-[#EFD86D] text-center text-xs font-bold text-black">
                        Enrollment closes in 8d 3h 57m 9s
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev !-left-[1px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
            <div className="swiper-button-next !-right-[1px] !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <h4 className="mb-6 text-lg font-bold text-[#737373] xl:text-[28px]">
              Don’t see a time that works for you?
            </h4>
            <Link href="/">
              <a className='class="focus-green green_btn lg:text-lg" inline-block rounded-[5px] px-8 py-[13px] text-[13px] font-bold text-white transition-shadow hover:shadow-lg focus-visible:ring-offset-0'>
                Request Another Time
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default ClassSchedule;
