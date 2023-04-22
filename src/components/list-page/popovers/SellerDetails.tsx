/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint @next/next/no-img-element: "off" */
import { useContext, useState } from 'react';
import { Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import useViewport from '../../../hooks/useViewport';
import { OverflowContext } from '../../../context/overflowContext';

import CelebrityIcon from '../../../../public/icons/celebrity-text.svg';
import CloseIcon from '../../../../public/icons/xmark.svg';
import { decrementItem, incrementItem } from '../../../utilities/helpers';

const SellerDetails = () => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const [experience, setExperience] = useState<number>(0);

  const handleIncrement = () => {
    const value = incrementItem(experience);
    setExperience(value);
  };

  const handleDecrement = () => {
    const value = decrementItem(experience);
    setExperience(value);
  };

  return (
    <Popover className="shrink-0 md:relative">
      {({ open }) => (
        <>
          <Popover.Button
            onClick={() => {
              if (width < 768) {
                setGlobalOverflow(true);
              }
            }}
            className="shrink-0 rounded-[5px] border border-[#17A966] bg-[#F7F7F7] py-[6px] px-2 text-xs text-[#17A966] hover:bg-[#17A966] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#17A966] xl:py-[7px] xl:px-3"
          >
            Seller Details
          </Popover.Button>

          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                      },
                    },
                    exit: { opacity: 0 },
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="fixed inset-0 z-30 h-full w-full bg-black bg-opacity-50 md:hidden"
                  onClick={() => {
                    if (width < 768) {
                      setGlobalOverflow(false);
                    }
                  }}
                />

                <Popover.Panel
                  static
                  as={motion.div}
                  variants={{
                    initial: { opacity: 0, y: width > 767 ? 10 : 100 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: width > 767 ? 0.1 : 0.3,
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: width > 767 ? 10 : 100,
                      transition: {
                        duration: width > 767 ? 0.1 : 0.3,
                      },
                    },
                  }}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="fixed bottom-0 left-0 z-40 mt-2 w-full overflow-hidden rounded-2xl rounded-br-none rounded-bl-none shadow-spread md:absolute md:bottom-auto md:w-[510px] md:rounded-br-2xl md:rounded-bl-2xl"
                >
                  <div className="relative bg-white">
                    <div className="flex h-12 w-full items-center justify-end border-b border-b-[#ebebeb] bg-white px-6 md:hidden">
                      <Popover.Button
                        onClick={() => {
                          if (width < 768) {
                            setGlobalOverflow(false);
                          }
                        }}
                        className="svg_icon right-6 top-5 w-[14px] text-[#666]"
                      >
                        <CloseIcon />
                      </Popover.Button>
                    </div>

                    <div
                      className="custom_scrollbar overflow-y-auto overflow-x-hidden px-6 pt-4 pb-7 md:px-5 md:py-7"
                      style={{
                        height: width < 767 ? window.innerHeight - 120 : 'auto',
                      }}
                    >
                      <div>
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Seller Level
                        </h4>
                        <div className="flex flex-wrap items-center justify-between gap-y-5 md:flex-nowrap md:gap-y-2">
                          <div
                            key="topRatedSeller"
                            className="flex w-full flex-row-reverse items-center md:w-auto md:flex-row"
                          >
                            <input
                              type="checkbox"
                              id="topRatedSeller"
                              name="classStarting"
                              className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                            />
                            <label
                              htmlFor="topRatedSeller"
                              className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:max-w-[160px] md:text-[13px]"
                            >
                              <span className="mr-1">Top Rated Seller</span>
                              <span className="text-[#A1A1A1]">(1,321)</span>
                            </label>
                          </div>
                          <div className="flex items-center gap-x-7 md:gap-x-4">
                            <div className="flex items-center">
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                              </label>
                              <span className="svg_icon ml-1 mt-[2px] w-[60px] text-[13px] font-bold text-[#444] md:w-[50px]">
                                <CelebrityIcon />
                              </span>
                            </div>
                            <div className="flex items-center">
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                              </label>
                              <span className="ml-1 text-base font-bold text-[#444] md:text-[13px]">
                                Pro
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-2 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Gender
                        </h4>
                        <div className="flex flex-wrap gap-y-5 md:flex-nowrap md:gap-y-0">
                          {['Male', 'Female'].map((item) => (
                            <div
                              key={item}
                              className="flex w-full flex-row-reverse items-center md:w-1/2 md:flex-row"
                            >
                              <input
                                type="checkbox"
                                id={item}
                                name={item}
                                className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                              />
                              <label
                                htmlFor={item}
                                className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                              >
                                {item}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-2 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Experience
                        </h4>
                        <div className="flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <button
                              type="button"
                              onClick={handleDecrement}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E] disabled:opacity-50"
                              disabled={experience === 0}
                            >
                              <img
                                src="https://img.icons8.com/material-outlined/96/000000/minus.png"
                                alt="-"
                                width={18}
                              />
                            </button>
                            <div className="min-w-[35px] text-center font-medium text-[#222]">
                              {experience}
                            </div>
                            <button
                              type="button"
                              onClick={handleIncrement}
                              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ddd] text-2xl text-[#5E5E5E]"
                            >
                              <img
                                src="https://img.icons8.com/android/96/000000/plus.png"
                                alt="+"
                                width={18}
                              />
                            </button>
                          </div>
                          <p className="text-base font-semibold leading-none text-[#222]">
                            Years
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-2 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Seller Speaks
                        </h4>
                        <div className="flex flex-wrap gap-y-5 md:gap-y-2">
                          {[
                            'English',
                            'Spanish',
                            'Urdu',
                            'French',
                            'German',
                            'Hindi',
                          ].map((item) => (
                            <div
                              className="flex w-full flex-row-reverse items-center md:w-1/2 md:flex-row"
                              key={item}
                            >
                              <input
                                type="checkbox"
                                id={item}
                                name={item}
                                className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                              />
                              <label
                                htmlFor={item}
                                className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                              >
                                <span className="mr-1">{item}</span>
                                <span className="text-[#A1A1A1]">(1,321)</span>
                              </label>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="mt-5 text-sm font-semibold text-[#17A966] md:mt-2 md:text-[13px]"
                        >
                          Show less
                        </button>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-2 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Seller Lives
                        </h4>
                        <div className="flex flex-wrap gap-y-5 md:gap-y-2">
                          {[
                            'United States',
                            'United Kingdom',
                            'Canada',
                            'Germany',
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex w-full flex-row-reverse items-center md:w-1/2 md:flex-row"
                            >
                              <input
                                type="checkbox"
                                id={item}
                                name={item}
                                className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                              />
                              <label
                                htmlFor={item}
                                className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                              >
                                <span className="mr-1">{item}</span>
                                <span className="text-[#A1A1A1]">(1,321)</span>
                              </label>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="mt-5 text-sm font-semibold text-[#17A966] md:mt-2 md:text-[13px]"
                        >
                          +185 More
                        </button>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-2 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Seller City
                        </h4>
                        <div className="flex flex-wrap gap-y-5 md:gap-y-2">
                          {[
                            'United States',
                            'United Kingdom',
                            'Canada',
                            'Germany',
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex w-full flex-row-reverse items-center md:w-1/2 md:flex-row"
                            >
                              <input
                                type="checkbox"
                                id={item}
                                name={item}
                                className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                              />
                              <label
                                htmlFor={item}
                                className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                              >
                                <span className="mr-1">{item}</span>
                                <span className="text-[#A1A1A1]">(1,321)</span>
                              </label>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="mt-5 text-sm font-semibold text-[#17A966] md:mt-2 md:text-[13px]"
                        >
                          +15 More
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between border-t border-t-[#EAEAEA] px-5 py-3 md:py-4">
                      <button
                        type="button"
                        className="text-sm font-semibold text-[#959595] md:text-base"
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        className="rounded-full bg-[#288890] px-8 py-2 text-sm font-semibold text-white md:text-base"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
};
export default SellerDetails;
