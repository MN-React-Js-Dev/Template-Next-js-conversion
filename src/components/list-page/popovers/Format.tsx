/* eslint jsx-a11y/label-has-associated-control: "off" */
import { useContext } from 'react';
import { Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import useViewport from '../../../hooks/useViewport';
import { OverflowContext } from '../../../context/overflowContext';

import CloseIcon from '../../../../public/icons/xmark.svg';

const Format = () => {
  const { setGlobalOverflow } = useContext(OverflowContext);
  const { width } = useViewport();
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
            Format
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
                  className="fixed bottom-0 right-0 z-40 mt-2 w-full overflow-hidden rounded-2xl rounded-br-none rounded-bl-none shadow-spread md:absolute md:bottom-auto md:w-[510px] md:rounded-br-2xl md:rounded-bl-2xl"
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
                      <div className="flex flex-wrap md:flex-wrap">
                        <div className="w-full md:w-1/2">
                          <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                            Format
                          </h4>
                          <div className="flex flex-col gap-y-5 md:gap-y-2">
                            {[
                              'One-on-one class',
                              'One-time class',
                              'Ongoing class',
                              'Workshop',
                              'Short Course',
                              'Camp',
                              'Group',
                            ].map((item) => (
                              <div
                                key={item}
                                className="flex flex-row-reverse items-center md:flex-row"
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
                        <div className="mt-6 w-full border-t border-t-[#EAEAEA] pt-6 md:mt-0 md:w-1/2 md:border-t-0 md:pt-0">
                          <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                            Class Type
                          </h4>
                          <div className="flex flex-col gap-y-5 md:gap-y-2">
                            {['Live online Meetings', 'Flexible schedule'].map(
                              (item) => (
                                <div
                                  key={item}
                                  className="flex flex-row-reverse items-center md:flex-row"
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
                              ),
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-2 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Age Group
                        </h4>
                        <div className="flex flex-wrap justify-between gap-y-5 md:justify-start md:gap-y-2">
                          {[
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12,
                            13,
                            14,
                            15,
                            16,
                            17,
                            '18+',
                          ].map((item) => (
                            <div
                              key={item}
                              className="flex w-[30%] items-center md:w-1/4 md:flex-row"
                            >
                              <input
                                type="checkbox"
                                id={`'${item}'`}
                                name={`'${item}'`}
                                className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                              />
                              <label
                                htmlFor={`'${item}'`}
                                className="ml-2 w-full cursor-pointer text-base md:w-auto md:text-[13px]"
                              >
                                {item}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-2 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Or Select Age Range
                        </h4>
                        <div className="flex flex-wrap gap-y-3 gap-x-3">
                          {[
                            '2 - 5',
                            '6 - 8',
                            '9 - 12',
                            '13 - 14',
                            '15 - 18',
                            '18 - 21',
                          ].map((item) => (
                            <div
                              className="flex w-[48%] items-center md:w-[23%]"
                              key={item}
                            >
                              <button
                                type="button"
                                className="h-[44px] w-full rounded-lg border border-[#DCDCDC] text-sm font-semibold text-[#444] hover:border-[#17A966] hover:bg-[#17A966] hover:text-white md:text-[15px]"
                              >
                                {item}
                              </button>
                            </div>
                          ))}
                        </div>
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
export default Format;
