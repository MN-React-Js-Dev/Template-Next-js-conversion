/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint react/no-array-index-key: "off" */
/* eslint @typescript-eslint/no-explicit-any: "off" */
import { useState, useContext } from 'react';
import { Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import { formatDate } from '../../../utilities/helpers';
import useViewport from '../../../hooks/useViewport';
import { OverflowContext } from '../../../context/overflowContext';

import 'react-datepicker/dist/react-datepicker.css';

import CloseIcon from '../../../../public/icons/xmark.svg';

const DayOrTime = () => {
  const { setGlobalOverflow } = useContext(OverflowContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
            Day or Time
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
                      <div className="flex flex-wrap sm:flex-nowrap">
                        <div className="relative w-full sm:mr-[5%] sm:w-[40%] sm:pr-[5%] sm:before:absolute sm:before:right-0 sm:before:top-[5%] sm:before:h-[90%] sm:before:w-[2px] sm:before:bg-[#EAEAEA]">
                          <div className="mb-4 flex flex-wrap">
                            <div className="w-full md:mt-6">
                              <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                                Classes Starting
                              </h4>
                              <div className="flex flex-col gap-y-5 md:gap-y-2">
                                {[
                                  'Today',
                                  'Next 7 Days',
                                  'Next 14 Days',
                                  'All Upcoming Dates',
                                  'Custom Dates',
                                ].map((day) => (
                                  <div
                                    key={day}
                                    className="flex flex-row-reverse items-center md:flex-row"
                                  >
                                    <input
                                      type="radio"
                                      id={day}
                                      name="classStarting"
                                      className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                                    />
                                    <label
                                      htmlFor={day}
                                      className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                                    >
                                      {day}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="mt-6 w-full border-t border-t-[#EAEAEA] pt-6 md:border-t-0 md:pt-4">
                              <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                                Duration
                              </h4>
                              <div className="flex flex-col gap-y-5 md:gap-y-2">
                                {[
                                  'Less than 3 hours',
                                  'Half day',
                                  'Full Day',
                                ].map((day) => (
                                  <div
                                    key={day}
                                    className="flex flex-row-reverse items-center md:flex-row"
                                  >
                                    <input
                                      type="radio"
                                      id={day}
                                      name="duration"
                                      className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                                    />
                                    <label
                                      htmlFor={day}
                                      className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                                    >
                                      {day}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full sm:w-[55%]">
                          <div className="class_starting_calendar mt-3 mb-7 md:my-0">
                            <DatePicker
                              selected={startDate}
                              onChange={onChange}
                              startDate={startDate}
                              endDate={endDate}
                              selectsRange
                              inline
                            />
                            <div className="mt-3 flex items-center gap-x-3 md:mt-2">
                              <input
                                type="text"
                                className="h-10 min-w-[100px] flex-1 rounded-[4px] border border-[#CFCFCF] text-center text-sm text-black md:h-8 md:text-xs"
                                value={formatDate(startDate)}
                                readOnly
                              />
                              <span>-</span>
                              <input
                                type="text"
                                className="h-10 min-w-[100px] flex-1 rounded-[4px] border border-[#CFCFCF] text-center text-sm text-black md:h-8 md:text-xs"
                                value={formatDate(endDate)}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mt-4 flex flex-col gap-y-5 md:mt-4 md:gap-y-2">
                            {[
                              'Selected dates only',
                              'Selected date and later',
                            ].map((day) => (
                              <div
                                key={day}
                                className="flex flex-row-reverse items-center md:flex-row"
                              >
                                <input
                                  type="radio"
                                  id={day}
                                  name="calendar"
                                  className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                                />
                                <label
                                  htmlFor={day}
                                  className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                                >
                                  {day}
                                </label>
                              </div>
                            ))}
                          </div>
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
export default DayOrTime;
