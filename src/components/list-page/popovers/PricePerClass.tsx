/* eslint jsx-a11y/label-has-associated-control: "off" */
import { useContext } from 'react';
import { Popover } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import useViewport from '../../../hooks/useViewport';
import { OverflowContext } from '../../../context/overflowContext';

import CloseIcon from '../../../../public/icons/xmark.svg';

const PricePerClass = () => {
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
            Price
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

                    <div className="custom_scrollbar max-h-popover overflow-y-auto overflow-x-hidden px-6 pt-4 pb-7 md:px-5 md:py-7">
                      <div>
                        <h4 className="mb-5 text-[18px] font-bold text-black md:mb-3 md:text-lg">
                          Price per Class (INR)
                        </h4>

                        <div
                          key="anyPrice"
                          className="flex flex-row-reverse items-center md:flex-row"
                        >
                          <input
                            type="checkbox"
                            id="anyPrice"
                            name="anyPrice"
                            className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                          />
                          <label
                            htmlFor="anyPrice"
                            className="w-full cursor-pointer text-base md:ml-2 md:w-auto md:text-[13px]"
                          >
                            Any
                          </label>
                        </div>

                        <div className="mt-5 flex items-center justify-between">
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
                              className="h-[42px] w-full rounded-md border-2 border-[#DCDCDC] px-4 placeholder:text-sm placeholder:font-semibold placeholder:text-[#cbcbcb] md:placeholder:text-base"
                            />
                            <span className="absolute right-3 bottom-[9px] text-[#838383]">
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
                              className="h-[42px] w-full rounded-md border-2 border-[#DCDCDC] px-4 placeholder:text-sm placeholder:font-semibold placeholder:text-[#cbcbcb] md:placeholder:text-base"
                            />
                            <span className="absolute right-3 bottom-[9px] text-[#838383]">
                              ₹
                            </span>
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
export default PricePerClass;
