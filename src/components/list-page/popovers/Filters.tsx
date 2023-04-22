/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint react/no-array-index-key: "off" */
/* eslint implicit-arrow-linebreak: "off" */
/* eslint react/jsx-curly-newline: "off" */
/* eslint @typescript-eslint/no-shadow: "off" */
import { useState, useContext } from 'react';
import { Dialog, Listbox } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import useViewport from '../../../hooks/useViewport';
import { OverflowContext } from '../../../context/overflowContext';

import CloseIcon from '../../../../public/icons/xmark.svg';
import SettingsIcon from '../../../../public/icons/settings-horizontal.svg';
import ProIcon from '../../../../public/icons/pro-text.svg';
import DiamondIcon from '../../../../public/icons/diamond.svg';
import CelebrityIcon from '../../../../public/icons/celebrity-text.svg';
import OnlineIcon from '../../../../public/icons/online.svg';
import ListIcon from '../../../../public/icons/list.svg';
import StarIcon from '../../../../public/icons/star-outline.svg';
import FormNewIcon from '../../../../public/icons/form-new.svg';
import TickIcon from '../../../../public/icons/tick.svg';

const Filters = () => {
  const searchOptions = [
    { name: 'Mentors' },
    { name: 'Online Classes' },
    { name: 'Workshop' },
    { name: 'Experiences' },
    { name: 'Prime Packs' },
  ];
  const [selected, setSelected] = useState(searchOptions[0]);
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          if (width < 768) {
            setGlobalOverflow(true);
          }
        }}
        className="flex rounded-full border border-[#C2C2C2] py-[6px] px-2 text-xs text-[#70757A] hover:border-[#17A966] hover:text-[#17A966] xl:py-[7px] xl:px-4"
      >
        <div className="svg_icon mr-2 w-4 text-[#fff]">
          <SettingsIcon />
        </div>
        Filters
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            as={motion.div}
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
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-30 md:flex md:items-center md:justify-center"
          >
            <Dialog.Overlay
              onClick={() => {
                if (width < 768) {
                  setGlobalOverflow(false);
                }
              }}
              className="absolute top-0 left-0 h-full w-full bg-black opacity-40"
            />

            <Dialog.Panel
              as={motion.div}
              variants={{
                initial: { opacity: 0, y: width > 767 ? 300 : 100 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.2,
                    ease: 'linear',
                  },
                },
                exit: { opacity: 0 },
              }}
              className="fixed bottom-0 z-10 w-full md:relative md:w-11/12 md:max-w-[500px]"
            >
              <div className="relative rounded-tl-lg rounded-tr-lg bg-white md:rounded-lg md:shadow-xl">
                <div className="flex h-12 items-center justify-center border-b border-b-[#E8E8E8] md:h-14">
                  <button
                    type="button"
                    className="group absolute right-4 top-2 p-2 md:top-3"
                    onClick={() => {
                      setIsOpen(false);
                      if (width < 768) {
                        setGlobalOverflow(false);
                      }
                    }}
                  >
                    <div className="svg_icon w-4 text-[#BCBCBC] group-hover:text-[#76F4BA]">
                      <CloseIcon />
                    </div>
                  </button>
                  <h4 className="text-center text-lg font-bold text-black">
                    Filters
                  </h4>
                </div>

                <div
                  className="custom_scrollbar overflow-y-auto bg-white px-6 pb-6 pt-3 md:max-h-[70vh]"
                  style={{
                    height: width < 767 ? window.innerHeight - 120 : 'auto',
                  }}
                >
                  <div className="bg-white pt-1 pb-4">
                    <div>
                      <h4 className="mb-3 text-[18px] font-bold text-black md:text-lg">
                        Keywords
                      </h4>
                      <div className="relative">
                        <div className="absolute">
                          <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <Listbox.Button
                                  className="relative h-12 w-24 pr-4 pl-3 text-center text-xs sm:w-36 sm:pl-3 sm:pr-5 md:h-10 md:w-28"
                                  onClick={() => {
                                    if (width < 768) {
                                      setGlobalOverflow(true);
                                    }
                                  }}
                                >
                                  <span className="block truncate text-gray-400">
                                    {selected.name}
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 -right-0 flex items-center border-r border-r-[#E8E8E8] sm:-right-1 sm:pr-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                      className="h-5 w-5 text-gray-400"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </Listbox.Button>

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
                                        // onClick={() => {
                                        //   if (width < 768) {
                                        //     setGlobalOverflow(false);
                                        //   }
                                        // }}
                                      />

                                      <Listbox.Options
                                        static
                                        as={motion.ul}
                                        variants={{
                                          initial: {
                                            opacity: 0,
                                            y: width > 767 ? 10 : 100,
                                          },
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
                                        className="fixed bottom-0 left-0 z-40 mt-1 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm md:absolute md:bottom-auto md:w-36"
                                      >
                                        <div className="relative">
                                          <div className="flex h-12 w-full items-center justify-end border-b border-b-[#ebebeb] bg-white px-6 md:hidden">
                                            <Listbox.Button
                                              // onClick={() => {
                                              //   if (width < 768) {
                                              //     setGlobalOverflow(false);
                                              //   }
                                              // }}
                                              className="svg_icon right-6 top-5 w-[14px] text-[#666]"
                                            >
                                              <CloseIcon />
                                            </Listbox.Button>
                                          </div>
                                        </div>
                                        {searchOptions.map(
                                          (option, optionIdx) => (
                                            <Listbox.Option
                                              key={optionIdx}
                                              // onClick={() => {
                                              //   if (width < 768) {
                                              //     setGlobalOverflow(false);
                                              //   }
                                              // }}
                                              className={({ active }) =>
                                                `relative cursor-default select-none py-3 pl-6 pr-4 ${
                                                  active
                                                    ? 'bg-gray-700 text-white'
                                                    : 'text-gray-900'
                                                }`
                                              }
                                              value={option}
                                            >
                                              {({ selected }) => (
                                                <span
                                                  className={`block truncate ${
                                                    selected
                                                      ? 'font-medium'
                                                      : 'font-normal'
                                                  }`}
                                                >
                                                  {option.name}
                                                </span>
                                              )}
                                            </Listbox.Option>
                                          ),
                                        )}
                                      </Listbox.Options>
                                    </>
                                  )}
                                </AnimatePresence>
                              </>
                            )}
                          </Listbox>
                        </div>
                        <input
                          type="text"
                          className="h-12 w-full rounded-md border border-[#E8E8E8] pl-[104px] pr-3 text-base text-black placeholder:text-[#A9A9A9] sm:pl-40 md:h-10 md:pl-32 md:text-xs"
                          placeholder="Search any Topic or Mentor"
                        />
                      </div>
                    </div>

                    <div className="mt-7 border-t border-t-[#eaeaea] pt-5 md:mt-4 md:border-t-0 md:pt-0">
                      <h4 className="mb-4 border-b-[#EAEAEA] text-[18px] font-bold text-black md:mt-6 md:border-b md:pb-2 md:text-lg">
                        Sort By
                      </h4>

                      <div className="mb-5 flex items-center justify-between border-b border-b-[#EAEAEA] pr-2 pb-5 md:mb-3 md:pb-2">
                        <div className="flex">
                          <div className="svg_icon mr-3 flex w-6 items-center text-[#9D9FA2] md:w-5">
                            <ProIcon />
                          </div>
                          <p className="text-sm font-semibold">
                            Show Pro Gigs first
                          </p>
                        </div>
                        <div>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <div className="mb-5 flex items-center justify-between border-b border-b-[#EAEAEA] pr-2 pb-5 md:mb-3 md:pb-2">
                        <div className="flex">
                          <div className="svg_icon mr-3 flex w-6 items-center text-[#9D9FA2] md:w-5">
                            <DiamondIcon />
                          </div>
                          <div className="svg_icon mr-3 flex w-16 items-center text-[#2B2828]">
                            <CelebrityIcon />
                          </div>
                        </div>
                        <div>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <div className="mb-5 flex items-center justify-between border-b border-b-[#EAEAEA] pr-2 pb-5 md:mb-3 md:pb-2">
                        <div className="flex">
                          <div className="svg_icon mr-3 flex w-6 items-center text-[#9D9FA2] md:w-5">
                            <OnlineIcon />
                          </div>
                          <p className="text-sm font-semibold">
                            Online sellers
                          </p>
                        </div>
                        <div>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="group mb-5 flex w-full items-center justify-between border-b border-b-[#EAEAEA] pr-2 pb-5 md:mb-3 md:pb-3"
                      >
                        <div className="flex">
                          <div className="mr-3 flex w-6 items-center md:w-5">
                            <ListIcon />
                          </div>
                          <p className="text-sm font-semibold group-hover:text-[#17A966]">
                            Recommended
                          </p>
                        </div>
                        <div className="w-4 opacity-0 group-hover:opacity-100">
                          <TickIcon />
                        </div>
                      </button>
                      <button
                        type="button"
                        className="group mb-5 flex w-full items-center justify-between border-b border-b-[#EAEAEA] pr-2 pb-5 md:mb-3 md:pb-3"
                      >
                        <div className="flex">
                          <div className="svg_icon mr-3 flex w-6 items-center text-transparent md:w-5">
                            <StarIcon />
                          </div>
                          <p className="text-sm font-semibold group-hover:text-[#17A966]">
                            Best selling
                          </p>
                        </div>
                        <div className="w-4 opacity-0 group-hover:opacity-100">
                          <TickIcon />
                        </div>
                      </button>
                      <button
                        type="button"
                        className="group mb-5 flex w-full items-center justify-between border-b border-b-[#EAEAEA] pr-2 pb-5 md:mb-4 md:pb-3"
                      >
                        <div className="flex">
                          <div className="svg_icon mr-3 flex w-6 items-center text-[#9D9FA2] md:w-5">
                            <FormNewIcon />
                          </div>
                          <p className="text-sm font-semibold group-hover:text-[#17A966]">
                            New arrivals
                          </p>
                        </div>
                        <div className="w-4 opacity-0 group-hover:opacity-100">
                          <TickIcon />
                        </div>
                      </button>

                      <div className="flex flex-wrap gap-y-5 px-2 md:gap-y-2">
                        {['Instantly Confirmed', 'Family Friendly'].map(
                          (item) => (
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
                              </label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap border-t border-t-[#EAEAEA] pt-6 md:mt-4 md:flex-nowrap md:pt-3">
                      <div className="w-full md:w-1/2">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Activity Type
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
                              className="flex w-full flex-row-reverse items-center md:flex-row"
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
                      <div className="mt-6 w-full border-t border-t-[#eaeaea] pt-6 md:mt-0 md:w-1/2 md:border-t-0 md:pt-0">
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Transport Mode
                        </h4>
                        <div className="flex flex-col gap-y-5 md:gap-y-2">
                          {['Live online Meetings', 'Flexible schedule'].map(
                            (item) => (
                              <div
                                key={item}
                                className="flex w-full flex-row-reverse items-center md:flex-row"
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

                    <div className="mt-6 border-t border-t-[#EAEAEA] pt-6 md:mt-4 md:pt-2">
                      <h4 className="mb-5 text-[18px] font-bold text-black md:mb-2 md:text-lg">
                        Price range / Person
                      </h4>
                      <div className="flex items-center justify-between">
                        <div className="relative w-[47%]">
                          <label
                            htmlFor="minPrice"
                            className="mb-2 block cursor-pointer text-base md:text-[13px]"
                          >
                            Minimum
                          </label>
                          <input
                            type="text"
                            id="minPrice"
                            name="minPrice"
                            placeholder="Any"
                            className="h-12 w-full rounded-md border border-[#DCDCDC] px-4 placeholder:text-[#A9A9A9] md:h-10 md:placeholder:text-xs"
                          />
                          <span className="absolute right-3 bottom-3 text-[#838383] md:bottom-2">
                            ₹
                          </span>
                        </div>

                        <div className="relative w-[47%]">
                          <label
                            htmlFor="minPrice"
                            className="mb-2 block cursor-pointer text-base md:text-[13px]"
                          >
                            Maximum
                          </label>
                          <input
                            type="text"
                            id="minPrice"
                            name="minPrice"
                            placeholder="Any"
                            className="h-12 w-full rounded-md border border-[#DCDCDC] px-4 placeholder:text-[#A9A9A9] md:h-10 md:placeholder:text-xs"
                          />
                          <span className="absolute right-3 bottom-3 text-[#838383] md:bottom-2">
                            ₹
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between border-t border-t-[#EAEAEA] px-5 py-3 md:py-3">
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
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Filters;
