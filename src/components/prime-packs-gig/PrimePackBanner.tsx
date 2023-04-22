/* eslint react/jsx-one-expression-per-line: "off" */
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animationWrapper, fadeIn } from '../../utilities/animations';
import PrimePackInfoPopup from './popups/PrimePackInfoPopup';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import StarIcon from '../../../public/icons/star.svg';
import ShareIcon from '../../../public/icons/share-arrow.svg';
import HeartIcon from '../../../public/icons/heart-outline.svg';
import FlagIcon from '../../../public/icons/flag.svg';
import BoxIcon from '../../../public/icons/box.svg';
import ReportPopup from '../common/popups/report-popups/ReportPopup';

const PrimePackBanner = () => {
  const [primePackInfoPopup, setPrimePackInfoPopup] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [openReport, setOpenReport] = useState(false);

  const handlePrimePackInfoPopup = () => {
    setPrimePackInfoPopup(!primePackInfoPopup);
  };

  return (
    <div className="relative pt-14 pb-10 lg:pt-7">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <div className="flex flex-wrap justify-between gap-14 lg:flex-nowrap">
          <div className="w-full lg:max-w-[550px] xl:max-w-[700px]">
            <div className="flex flex-wrap items-center justify-between gap-y-2 sm:flex-nowrap">
              <div className="flex items-center">
                <div className="svg_icon mr-2 w-6 text-transparent">
                  <BoxIcon />
                </div>
                <h4 className="text-lg font-bold text-[#17A966]">
                  Prime Packs Gig
                </h4>
                <button
                  type="button"
                  className="ml-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3EB451] bg-opacity-10 font-bold text-[#17A966]"
                  onClick={handlePrimePackInfoPopup}
                >
                  ?
                </button>
                <PrimePackInfoPopup
                  status={primePackInfoPopup}
                  onClose={handlePrimePackInfoPopup}
                />
              </div>

              <div className="flex items-center gap-x-2">
                <button
                  type="button"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3EB451] bg-opacity-10"
                >
                  <div className="svg_icon w-[14px] text-[#1DBF73]">
                    <ShareIcon />
                  </div>
                </button>
                <button
                  type="button"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3EB451] bg-opacity-10"
                >
                  <div className="svg_icon w-[14px] text-transparent">
                    <HeartIcon />
                  </div>
                </button>
                <button
                  type="button"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3EB451] bg-opacity-10"
                  onClick={() => setOpenReport(true)}
                >
                  <div className="svg_icon w-[14px] text-transparent">
                    <FlagIcon />
                  </div>
                </button>

                <ReportPopup
                  status={openReport}
                  onClose={() => {
                    setOpenReport(false);
                  }}
                />
              </div>
            </div>

            <h1 className="py-4 text-lg font-bold leading-tight md:text-2xl">
              I will design creative and unqiue website or app UI design
            </h1>

            <div className="flex w-full items-center pb-7 sm:flex-nowrap">
              <div className="relative flex shrink-0">
                <div className="absolute top-0 left-12 z-[2] h-4 w-4 rounded-full border border-white bg-[#1DBF73]" />
                <div className="relative z-[1] flex items-center overflow-hidden rounded-full">
                  <Image
                    src="/mentor-card-1.jpg"
                    width={68}
                    height={68}
                    alt="Mentor 1"
                  />
                </div>
              </div>
              <motion.div variants={fadeIn} className="ml-2 sm:ml-4">
                <div className="pb-1 text-sm font-bold text-black md:pb-2 md:text-[18px]">
                  <span>Martin Youro</span>{' '}
                  <span className="font-normal text-[#C7C7C7]">|</span>{' '}
                  <span className="text-[#4579FF]">
                    B.A Child & Adolsent Development
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-y-[1px] gap-x-2 sm:flex-nowrap">
                  <div className="flex w-full flex-wrap items-center sm:w-auto">
                    <div className="flex items-center gap-[6px] text-[12px] text-[#50EA1A] xl:text-[15px]">
                      <span className="svg_icon inline-block w-4 xl:w-5">
                        <StarIcon />
                      </span>
                      <span className="mt-[3px]">5.0</span>
                      <span className="mt-[2px] text-[#9F9F9F]">
                        (920 Review for this Teacher)
                      </span>
                    </div>
                  </div>
                  <span className="hidden font-normal text-[#C7C7C7] sm:block">
                    |
                  </span>
                  <div className="flex w-full flex-wrap items-center sm:w-auto">
                    <div className="flex items-center gap-[6px] text-[12px] text-[#50EA1A] xl:text-[15px]">
                      <span className="svg_icon inline-block w-4 xl:w-5">
                        <StarIcon />
                      </span>
                      <span className="mt-[3px]">5.0</span>
                      <span className="mt-[2px] text-[#9F9F9F]">
                        (42 Review for this Class)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="prime_pack_main_slider relative">
              <Swiper
                loop
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                slidesPerView={1}
                navigation={{
                  prevEl: '.prime_pack_main_slider .swiper-button-prev',
                  nextEl: '.prime_pack_main_slider .swiper-button-next',
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <SwiperSlide key={item}>
                    <div className="flex overflow-hidden rounded-md">
                      <Image
                        src={`/prime-gig-slider-${item}.jpg`}
                        width={910}
                        height={500}
                        alt={`prime-gig-slider-${item}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev !-left-5 !mt-0 !h-[34px] !w-[34px] -translate-y-[50%] transform rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
              <div className="swiper-button-next !-right-5 !mt-0 !h-[34px] !w-[34px] -translate-y-[50%] transform rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs" />
            </div>
            <div className="prime_pack_slider_thumb relative mt-[10px]">
              <Swiper
                /* eslint @typescript-eslint/ban-ts-comment: "off" */
                // @ts-ignore:next-line
                onSwiper={setThumbsSwiper}
                loop
                spaceBetween={10}
                slidesPerView={6}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                navigation={{
                  prevEl: '.prime_pack_slider_thumb .swiper-button-prev',
                  nextEl: '.prime_pack_slider_thumb .swiper-button-next',
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <SwiperSlide key={`thumb-${item}`}>
                    <button
                      type="button"
                      className="flex overflow-hidden rounded-[4px] shadow-md"
                    >
                      <Image
                        src={`/prime-gig-slider-${item}.jpg`}
                        width={910}
                        height={500}
                        alt={`prime-gig-slider-${item}`}
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev !-left-[6px] !mt-0 !h-[16px] !w-[16px] -translate-y-[50%] transform rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[8px]" />
              <div className="swiper-button-next !-right-[6px] !mt-0 !h-[16px] !w-[16px] -translate-y-[50%] transform rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-[8px]" />
            </div>
          </div>

          <div className="lg:shrink-0">
            <div>
              <Image src="/dummy-gig-frame.jpg" width={375} height={615} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default PrimePackBanner;
