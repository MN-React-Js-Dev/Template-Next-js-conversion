/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint @typescript-eslint/no-shadow: "off" */
import { useContext } from 'react';
import { Popover, Disclosure } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import useViewport from '../../../hooks/useViewport';
import { OverflowContext } from '../../../context/overflowContext';
import { categoryMenuItems } from '../../../utilities/dummy-api';

import TriangleIcon from '../../../../public/icons/triangle.svg';
import CloseIcon from '../../../../public/icons/xmark.svg';

const Categories = () => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);

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
            Categories
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
                  className="fixed bottom-0 left-0 z-40 mt-2 w-full overflow-hidden rounded-2xl rounded-br-none rounded-bl-none shadow-spread md:absolute md:bottom-auto md:w-[370px] md:rounded-br-2xl md:rounded-bl-2xl"
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
                          Categories
                        </h4>

                        <div className="flex flex-col gap-y-4 md:gap-y-3">
                          {categoryMenuItems.map((category) => (
                            <Disclosure key={category.title} as="div">
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="relative flex h-[50px] w-full items-center justify-between rounded-lg border border-[#DCDCDC] bg-white px-4 py-2 text-left text-base font-semibold text-[#444444] hover:bg-[#F9F9F9] focus:outline-none focus-visible:ring focus-visible:ring-green-400 focus-visible:ring-opacity-75 md:h-[42px] md:text-sm">
                                    <span>{category.title}</span>
                                    <div
                                      className={`svg_icon w-3 transform text-[#DAD1D1] ${
                                        open
                                          ? '-translate-y-[2px]'
                                          : 'rotate-180'
                                      }`}
                                    >
                                      <TriangleIcon />
                                    </div>
                                  </Disclosure.Button>
                                  <Disclosure.Panel className="-mt-2 flex flex-col gap-y-5 rounded-br-lg rounded-bl-lg border border-[#DCDCDC] bg-[#F9F9F9] px-4 pt-7 pb-6 text-base md:gap-y-3 md:pb-4 md:text-sm">
                                    {category.submenuItems.map(
                                      (submenuItem) => (
                                        <div
                                          key={`${category.id}_${submenuItem.title}`}
                                          className="flex flex-row-reverse items-center md:flex-row"
                                        >
                                          <input
                                            type="checkbox"
                                            id={`${category.id}_${submenuItem.title}`}
                                            name={`${category.id}_${submenuItem.title}`}
                                            className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                                          />
                                          <label
                                            htmlFor={`${category.id}_${submenuItem.title}`}
                                            className="w-full cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-[15px] md:ml-2 md:w-auto md:text-[13px]"
                                          >
                                            {submenuItem.title}
                                          </label>
                                        </div>
                                      ),
                                    )}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          ))}
                        </div>

                        <button
                          type="button"
                          className="mt-5 text-sm font-semibold text-[#17A966] md:mt-4 md:text-[13px]"
                        >
                          +Show less
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
export default Categories;
