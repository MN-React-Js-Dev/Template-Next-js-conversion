/* eslint react/no-array-index-key: "off" */
/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint implicit-arrow-linebreak: "off" */
/* eslint react/jsx-curly-newline: "off" */
/* eslint @typescript-eslint/no-shadow: "off" */

// import { useState, useContext } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Listbox } from '@headlessui/react';
import ReactPaginate from 'react-paginate';
import Sticky from 'react-stickynode';

import { animationWrapper } from '../../utilities/animations';
// import { OverflowContext } from '../../context/overflowContext';
import useViewport from '../../hooks/useViewport';
import DayOfWeek from './popovers/DayOfWeek';
import DayOrTime from './popovers/DayOrTime';
import SellerDetails from './popovers/SellerDetails';
import PricePerClass from './popovers/PricePerClass';
import Categories from './popovers/Categories';
import Format from './popovers/Format';
import Filters from './popovers/Filters';
import MentorCard from '../common/cards/Mentor';

// import SearchIcon from '../../../public/icons/charm_search.svg';
import WhiteSearchIcon from '../../../public/icons/search.svg';
import CelebrityIcon from '../../../public/icons/celebrity-text.svg';
import ProIcon from '../../../public/icons/pro-text.svg';
import CloseIcon from '../../../public/icons/xmark.svg';
import PopularLeadership from './PopularLeadership';

const ListFilters = () => {
  // const { setGlobalOverflow } = useContext(OverflowContext);
  const { width } = useViewport();
  const searchOptions = [
    { name: 'Mentors' },
    { name: 'Online Classes' },
    { name: 'Workshop' },
    { name: 'Experiences' },
    { name: 'Prime Packs' },
  ];

  const [selected, setSelected] = useState(searchOptions[0]);

  return (
    <>
      <Sticky
        enabled
        top={width > 1023 ? 0 : 0}
        bottomBoundary="#pagination_wrapper"
        enableTransforms={false}
        className="relative z-[30] bg-white"
        innerClass="bg-white md:transition-none transition-[padding] duration-300 ease-in-out"
        innerActiveClass="pt-16 md:pt-0 border-b border-b-[#efefef]"
      >
        <div className="relative">
          <motion.div
            variants={animationWrapper}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="container"
          >
            <div className="bg-white md:pt-7">
              <div className="hidden md:block md:px-10">
                <div className="relative">
                  <div className="absolute">
                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <Listbox.Button
                            className="relative h-12 w-24 pr-4 pl-3 text-center text-xs sm:w-36 sm:pl-3 sm:pr-5 md:h-16 md:w-44 md:text-base"
                            // onClick={() => {
                            //   if (width < 768) {
                            //     setGlobalOverflow(true);
                            //   }
                            // }}
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
                                  className="fixed bottom-0 left-0 z-40 mt-1 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm md:absolute md:bottom-auto"
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
                                  {searchOptions.map((option, optionIdx) => (
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
                                  ))}
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
                    className="h-12 w-full rounded-full border-2 border-[#E8E8E8] pl-[100px] text-xs text-black placeholder:font-semibold placeholder:text-[#A9A9A9] focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-green-400 sm:pl-40 md:h-16 md:pl-52 md:text-base"
                    placeholder="Search any topic"
                  />
                  <button
                    type="button"
                    className="absolute top-[6px] right-[6px] flex h-9 w-full max-w-[36px] items-center justify-center rounded-full bg-[#288890] text-xs text-white sm:max-w-[80px] md:h-[52px] md:max-w-[140px] md:text-base"
                  >
                    <div className="w-5 sm:mr-1 sm:w-3 md:w-[22px]">
                      <WhiteSearchIcon />
                    </div>
                    <span className="hidden md:block">Search</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 pb-3 md:pt-8 md:pb-5">
                <div className="flex flex-wrap justify-between gap-y-3 lg:flex-nowrap">
                  <div className="scrollbar-hidden flex gap-x-3 overflow-x-scroll md:overflow-x-visible lg:gap-x-1 xl:gap-x-2">
                    <DayOfWeek />
                    <DayOrTime />
                    <SellerDetails />
                    <Categories />
                    <PricePerClass />
                    <Format />
                    <Filters />
                    <button
                      type="button"
                      className="shrink-0 text-xs text-[#17A966]"
                    >
                      Reset Filters
                    </button>
                  </div>

                  <div className="hidden items-center gap-x-1 md:flex xl:gap-x-4">
                    <div className="flex items-center">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                      <span className="svg_icon ml-2 mt-[2px] w-[50px] text-[13px] font-bold text-[#444]">
                        <CelebrityIcon />
                      </span>
                    </div>
                    <div className="flex items-center">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                      <div className="svg_icon ml-2 w-5 text-[#444]">
                        <ProIcon />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                      <span className="ml-2 text-[12px] text-[#70757A]">
                        Online Sellers
                      </span>
                    </div>
                  </div>
                </div>
                <div className="scrollbar-hidden mt-4 flex gap-x-3 overflow-x-auto lg:mt-3">
                  {[
                    '1-on-1 Class',
                    'Art and Culture',
                    'Entertainment',
                    'Food & Drink',
                    'Sports',
                    'Tours',
                    'Sightseeing',
                    'Wellness',
                    'Nature and Outdoors',
                  ].map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className="shrink-0 rounded-full border border-[#C2C2C2] py-[5px] px-[11px] text-xs text-[#70757A] hover:border-[#17A966] hover:bg-[#17A966] hover:text-white xl:py-[7px] xl:px-3"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="mt-3 hidden text-xs text-[#70757A] md:block">
                  10.000 Services Available
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Sticky>

      <div className="pb-14">
        <PopularLeadership />

        <div className="container">
          <div className="relative z-[1] -ml-3 -mr-3 flex flex-wrap items-center justify-center gap-y-2 pt-5 lg:justify-between">
            {[...Array(16)].map((item, index) => (
              <div
                key={index}
                className="w-full px-2 sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <MentorCard />
              </div>
            ))}
          </div>
          <div id="pagination_wrapper" className="mt-12">
            <ReactPaginate
              breakLabel="..."
              nextLabel="ᐅ"
              previousLabel="ᐊ"
              // onPageChange={handlePaginationLinkClick}
              pageRangeDisplayed={1}
              pageCount={10}
              // renderOnZeroPageCount={null}
              className="mx-auto flex h-10 w-max items-stretch justify-center overflow-hidden rounded-full border-2 border-[#17A966] sm:h-11"
              pageClassName="flex items-stretch border-r-2 border-[#17A966]"
              pageLinkClassName="px-2 sm:px-5 py-1 flex items-center text-[#17A966] hover:bg-[#17A966] hover:text-white"
              activeLinkClassName="bg-[#17A966] text-white"
              breakClassName="flex items-stretch border-r-2 border-[#17A966]"
              breakLinkClassName="px-2 sm:px-4 pb-1 flex items-center text-[#17A966] text-[#17A966] hover:bg-[#17A966] hover:text-white"
              previousClassName="flex items-stretch border-r-2 border-[#17A966]"
              previousLinkClassName="flex items-center px-2 sm:px-5 py-1 text-[#17A966] text-[#17A966] hover:bg-[#17A966] hover:text-white"
              nextClassName="flex items-stretch hover:bg-[#17A966] hover:text-white"
              nextLinkClassName="flex items-center px-2 sm:px-5 py-1 text-[#17A966] text-[#17A966] hover:bg-[#17A966] hover:text-white"
              disabledLinkClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ListFilters;
