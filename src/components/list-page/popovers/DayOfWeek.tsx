/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint react/no-array-index-key: "off" */
import { useContext, useState } from 'react';
import { Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import MultiRangeSlider from '../../common/multi-range-slider/MultiRangeSlider';
import useViewport from '../../../hooks/useViewport';
import { OverflowContext } from '../../../context/overflowContext';

import AllDayIcon from '../../../../public/icons/calendar-ltr-24.svg';
import MorningIcon from '../../../../public/icons/snow-shower.svg';
import AfternoonIcon from '../../../../public/icons/sun-horizon.svg';
import EveningIcon from '../../../../public/icons/moon-stars.svg';
import CloseIcon from '../../../../public/icons/xmark.svg';

const DayOfWeek = () => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const [weekdays, setWeekdays] = useState([
    { id: 1, name: 'Monday', letter: 'M', selected: false },
    { id: 2, name: 'Tuesday', letter: 'T', selected: false },
    { id: 3, name: 'Wednesday', letter: 'W', selected: false },
    { id: 4, name: 'Thursday', letter: 'T', selected: false },
    { id: 5, name: 'Friday', letter: 'F', selected: false },
    { id: 6, name: 'Saturday', letter: 'S', selected: false },
    { id: 7, name: 'Sunday', letter: 'S', selected: false },
  ]);
  const [specialTime, setSpecialTime] = useState([
    { id: 1, name: 'Week days', selected: false },
    { id: 2, name: 'Weekend', selected: false },
  ]);
  const [timeOfDay, setTimeOfDay] = useState([
    {
      id: 0,
      label: 'All Day',
      time: '9 am - 12 pm',
      icon: AllDayIcon,
      selected: false,
    },
    {
      id: 1,
      label: 'Morning',
      time: '9 am - 12 pm',
      icon: MorningIcon,
      selected: false,
    },
    {
      id: 2,
      label: 'Afternoon',
      time: '9 am - 12 pm',
      icon: AfternoonIcon,
      selected: false,
    },
    {
      id: 3,
      label: 'Evening',
      time: '9 am - 12 pm',
      icon: EveningIcon,
      selected: false,
    },
  ]);

  const handleWeeksClick = (id: number) => {
    setWeekdays(
      weekdays.map((weekday) => {
        if (weekday.id === id) {
          return { ...weekday, selected: !weekday.selected };
        }
        return weekday;
      }),
    );
  };

  const handleSpecialTimeClick = (id: number) => {
    setSpecialTime(
      specialTime.map((time) => ({ ...time, selected: time.id === id })),
    );
  };

  const handleTimeOfDayClick = (id: number) => {
    setTimeOfDay(
      timeOfDay.map((time) => ({ ...time, selected: time.id === id })),
    );
  };

  // const rangeOnChange = ({ min, max }: { min: number; max: number }) => {
  //   console.log(`min = ${min}, max = ${max}`);
  // };

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
            Day of Week
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
                          Day of Week
                        </h4>
                        <div className="flex justify-between">
                          {weekdays.map((day) => (
                            <button
                              key={day.id}
                              type="button"
                              className={`flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 text-sm font-semibold hover:border-black hover:bg-black hover:text-white md:h-[46px] md:w-[46px] md:text-lg ${
                                day.selected
                                  ? 'border-black bg-black text-white'
                                  : 'border-[#E1E1E1] text-black'
                              }`}
                              onClick={() => {
                                handleWeeksClick(day.id);
                              }}
                            >
                              {day.letter}
                            </button>
                          ))}
                        </div>
                        <div className="mt-5 flex gap-x-3 md:mt-4">
                          {specialTime.map((time) => (
                            <button
                              key={time.id}
                              type="button"
                              className={`flex h-[36px] items-center justify-center rounded-full border-2 px-5 text-xs font-semibold hover:border-black hover:bg-black hover:text-white md:h-[36px] md:px-4 md:text-[15px] ${
                                time.selected
                                  ? 'border-black bg-black text-white'
                                  : 'border-[#E1E1E1] text-black'
                              }`}
                              onClick={() => {
                                handleSpecialTimeClick(time.id);
                              }}
                            >
                              {time.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-0 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Time of Day (IST)
                        </h4>
                        <div className="flex flex-wrap justify-between gap-y-5 md:flex-nowrap md:gap-x-0">
                          {timeOfDay.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              className={`group flex w-[47%] flex-col items-center gap-y-[1px] rounded-lg border-2 px-2 py-2 text-center text-[15px] font-semibold hover:border-black md:mx-0 md:w-auto md:py-[10px] md:px-3
                              ${
                                item.selected
                                  ? 'border-black bg-gray-100'
                                  : 'border-[#E1E1E1]'
                              }
                              `}
                              onClick={() => {
                                handleTimeOfDayClick(item.id);
                              }}
                            >
                              <div className="svg_icon mx-auto mb-1 w-[30px] text-[#444] md:w-[28px]">
                                <item.icon />
                              </div>
                              <div className="text-base font-semibold text-black group-hover:text-black md:text-xs">
                                {item.label}
                              </div>
                              <div className="text-sm text-black group-hover:text-black md:text-[11px]">
                                {item.time}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-0 md:pt-4">
                        <h4 className="mb-2 text-[18px] font-bold text-black md:mb-1 md:text-lg">
                          <span>Start Time</span>
                          <span className="ml-2 font-medium text-[#828282]">
                            12:00 AM - 11:59 PM
                          </span>
                        </h4>
                        <div className="mb-5 text-xs text-[#828282] sm:text-[13px] md:mb-3">
                          Times are shown in India Standard Time
                        </div>
                        <div className="pt-1">
                          <MultiRangeSlider
                            min={0}
                            max={4}
                            // onChange={rangeOnChange}
                          />
                        </div>
                        <div className="flex pt-4 text-xs text-[#828282]">
                          <div className="flex-1 ">06:00 AM</div>
                          <div className="flex-1">10:00 AM</div>
                          <div className="flex-1 text-center">Noon</div>
                          <div className="flex-1 text-right">05:00 PM</div>
                          <div className="flex-1 text-right">10:00 PM</div>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:border-t-0 md:pt-4">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Duration
                        </h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-5 md:flex-nowrap md:gap-y-2 md:gap-x-12">
                          {['Less than 3 hours', 'Half day', 'Full day'].map(
                            (item) => (
                              <div
                                key={item}
                                className="flex w-full flex-row-reverse items-center md:w-auto md:flex-row"
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

                    <div className="flex justify-between border-t border-t-[#EAEAEA] px-5 py-3 md:py-4">
                      <button
                        type="button"
                        onClick={() => {
                          if (width < 768) {
                            setGlobalOverflow(false);
                          }
                        }}
                        className="text-sm font-semibold text-[#959595] md:text-base"
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => {
                          if (width < 768) {
                            setGlobalOverflow(false);
                          }
                        }}
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
export default DayOfWeek;
