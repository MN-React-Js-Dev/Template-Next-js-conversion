import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { slideToggle, fadeIn } from '../../../utilities/animations';

/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @typescript-eslint/no-shadow: "off" */
const IntermediateTab = () => (
  <AnimatePresence exitBeforeEnter>
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="pb-7 text-center md:pb-14">
        <p className="text-sm uppercase text-[#17A966] md:text-lg">
          ONE MONTH. PERFECTLY STRUCTURED.
        </p>
        <h2 className="pb-3 text-[24px] font-bold leading-tight md:text-[42px]">
          More Steps From Intermediate
        </h2>
        <p className="mx-auto text-xs text-black opacity-70 md:max-w-[670px]">
          Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
          condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit sed
          eu lectus mi amet egestas massa. Nunc enim eleifend tellus tincidunt
          pharetra sagittis volutpat.
        </p>
      </div>
      <div className="relative rounded-[10px] bg-white px-4 pb-4 pt-16 shadow-spread md:px-11 md:pb-10 md:pt-[100px]">
        <div className="absolute left-0 top-6 w-[150px] bg-[#17A966] py-[2px] pr-5 text-center text-sm uppercase text-white after:absolute after:top-0 after:right-0 after:border-[12px] after:border-l-[#17A966] after:border-b-white after:border-r-white after:border-t-[#17A966] md:top-12 md:w-[185px] md:text-lg after:md:border-[16px]">
          60 DAYS PLAN
        </div>
        <Disclosure>
          {({ open }) => (
            <div className="mb-3 ml-2 md:mb-5 md:ml-4">
              <Disclosure.Button className="focus-green relative flex w-full justify-between pt-2 pb-2 text-left text-base font-bold leading-tight before:absolute before:top-[14px] before:-left-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#17A966] focus-visible:ring-offset-0 md:text-xl before:md:top-5 before:md:-left-5 lg:text-2xl">
                Pre-class: Onboarding and Introduction
                <div className="flex shrink-0 items-center text-[10px] font-semibold text-[#17A966] md:text-base lg:text-lg">
                  <span className="mr-1 md:mr-2">5 Lessons</span>
                  {open ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#17A966] pb-[2px] text-lg md:h-6 md:w-6 md:text-2xl">
                      -
                    </span>
                  ) : (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#17A966] text-lg md:h-6 md:w-6 md:text-xl">
                      +
                    </span>
                  )}
                </div>
              </Disclosure.Button>

              <AnimatePresence>
                {open && (
                  <Disclosure.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={slideToggle}
                    className=""
                  >
                    <div className="text-[13px]">
                      Tortor pellentesque nec sit nulla volutpat curabitur
                      mattis fusce condimentum. Nulla orci congue praesent
                      nullam vitae nibh. Sed sit sed eu lectus mi amet egestas
                      massa. Nunc enim eleifend tellus tincidunt pharetra
                      sagittis volutpat. Ut donec vitae ut viverra lacus lectus
                      orci. Amet, consequat volutpat magna risus risus. Sed sed
                      aliquet a pretium molestie
                    </div>

                    <Disclosure>
                      {({ open }) => (
                        <div className="mb-4">
                          <Disclosure.Button className="focus-green text-[10px] font-bold text-[#17A966]">
                            {open ? <span>+</span> : <span>-</span>}
                            <span className="ml-1">SHOW DETAILS</span>
                          </Disclosure.Button>

                          <AnimatePresence>
                            {open && (
                              <Disclosure.Panel
                                static
                                as={motion.div}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={slideToggle}
                                className=""
                              >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                  <div
                                    key={item}
                                    className="max-w-[590px] pt-3"
                                  >
                                    <div className="flex flex-wrap justify-center overflow-hidden rounded-lg shadow-spread sm:flex-nowrap">
                                      <div className="mt-3 flex w-[73px] shrink-0 sm:mt-0">
                                        <Image
                                          src="/plan-1.jpg"
                                          width={73}
                                          height={63}
                                          alt="plan 1"
                                          className="rounded-lg"
                                        />
                                      </div>
                                      <div className="px-3 py-2">
                                        <p className="mb-[2px] flex justify-between text-xs font-bold text-black">
                                          {item}. This is the plan
                                          <span className="text-[8px] font-bold uppercase text-[#17A966]">
                                            DAY {item}
                                          </span>
                                        </p>
                                        <div className="text-[11px]">
                                          Tortor pellentesque nec sit nulla
                                          volutpat curabitur mattis fusce
                                          condimentum. Nulla orci praesent
                                          nullam vitae nibh. Sed sit sed eu
                                          lectus mi a
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </Disclosure.Panel>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </Disclosure>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="mb-3 ml-2 md:mb-5 md:ml-4">
              <Disclosure.Button className="focus-green relative flex w-full justify-between pt-2 pb-2 text-left text-base font-bold leading-tight before:absolute before:top-[14px] before:-left-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#17A966] focus-visible:ring-offset-0 md:text-xl before:md:top-5 before:md:-left-5 lg:text-2xl">
                Day 1-12: Class Calture
                <div className="flex shrink-0 items-center text-[10px] font-semibold text-[#17A966] md:text-base lg:text-lg">
                  <span className="mr-1 md:mr-2">7 Lessons</span>
                  {open ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#17A966] pb-[2px] text-lg md:h-6 md:w-6 md:text-2xl">
                      -
                    </span>
                  ) : (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#17A966] text-lg md:h-6 md:w-6 md:text-xl">
                      +
                    </span>
                  )}
                </div>
              </Disclosure.Button>

              <AnimatePresence>
                {open && (
                  <Disclosure.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={slideToggle}
                    className=""
                  >
                    <div className="text-[13px]">
                      Tortor pellentesque nec sit nulla volutpat curabitur
                      mattis fusce condimentum. Nulla orci congue praesent
                      nullam vitae nibh. Sed sit sed eu lectus mi amet egestas
                      massa. Nunc enim eleifend tellus tincidunt pharetra
                      sagittis volutpat. Ut donec vitae ut viverra lacus lectus
                      orci. Amet, consequat volutpat magna risus risus. Sed sed
                      aliquet a pretium molestie
                    </div>

                    <Disclosure>
                      {({ open }) => (
                        <div className="mb-4">
                          <Disclosure.Button className="focus-green text-[10px] font-bold text-[#17A966]">
                            {open ? <span>+</span> : <span>-</span>}
                            <span className="ml-1">SHOW DETAILS</span>
                          </Disclosure.Button>

                          <AnimatePresence>
                            {open && (
                              <Disclosure.Panel
                                static
                                as={motion.div}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={slideToggle}
                                className=""
                              >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                  <div
                                    key={item}
                                    className="max-w-[590px] pt-3"
                                  >
                                    <div className="flex flex-wrap justify-center overflow-hidden rounded-lg shadow-spread sm:flex-nowrap">
                                      <div className="mt-3 flex w-[73px] shrink-0 sm:mt-0">
                                        <Image
                                          src="/plan-1.jpg"
                                          width={73}
                                          height={63}
                                          alt="plan 1"
                                          className="rounded-lg"
                                        />
                                      </div>
                                      <div className="px-3 py-2">
                                        <p className="mb-[2px] flex justify-between text-xs font-bold text-black">
                                          {item}. This is the plan
                                          <span className="text-[8px] font-bold uppercase text-[#17A966]">
                                            DAY {item}
                                          </span>
                                        </p>
                                        <div className="text-[11px]">
                                          Tortor pellentesque nec sit nulla
                                          volutpat curabitur mattis fusce
                                          condimentum. Nulla orci praesent
                                          nullam vitae nibh. Sed sit sed eu
                                          lectus mi a
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </Disclosure.Panel>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </Disclosure>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="mb-3 ml-2 md:mb-5 md:ml-4">
              <Disclosure.Button className="focus-green relative flex w-full justify-between pt-2 pb-2 text-left text-base font-bold leading-tight before:absolute before:top-[14px] before:-left-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#17A966] focus-visible:ring-offset-0 md:text-xl before:md:top-5 before:md:-left-5 lg:text-2xl">
                Days 13-21: Traveling
                <div className="flex shrink-0 items-center text-[10px] font-semibold text-[#17A966] md:text-base lg:text-lg">
                  <span className="mr-1 md:mr-2">2 Lessons</span>
                  {open ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#17A966] pb-[2px] text-lg md:h-6 md:w-6 md:text-2xl">
                      -
                    </span>
                  ) : (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#17A966] text-lg md:h-6 md:w-6 md:text-xl">
                      +
                    </span>
                  )}
                </div>
              </Disclosure.Button>

              <AnimatePresence>
                {open && (
                  <Disclosure.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={slideToggle}
                    className=""
                  >
                    <div className="text-[13px]">
                      Tortor pellentesque nec sit nulla volutpat curabitur
                      mattis fusce condimentum. Nulla orci congue praesent
                      nullam vitae nibh. Sed sit sed eu lectus mi amet egestas
                      massa. Nunc enim eleifend tellus tincidunt pharetra
                      sagittis volutpat. Ut donec vitae ut viverra lacus lectus
                      orci. Amet, consequat volutpat magna risus risus. Sed sed
                      aliquet a pretium molestie
                    </div>

                    <Disclosure>
                      {({ open }) => (
                        <div className="mb-4">
                          <Disclosure.Button className="focus-green text-[10px] font-bold text-[#17A966]">
                            {open ? <span>+</span> : <span>-</span>}
                            <span className="ml-1">SHOW DETAILS</span>
                          </Disclosure.Button>

                          <AnimatePresence>
                            {open && (
                              <Disclosure.Panel
                                static
                                as={motion.div}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={slideToggle}
                                className=""
                              >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                  <div
                                    key={item}
                                    className="max-w-[590px] pt-3"
                                  >
                                    <div className="flex flex-wrap justify-center overflow-hidden rounded-lg shadow-spread sm:flex-nowrap">
                                      <div className="mt-3 flex w-[73px] shrink-0 sm:mt-0">
                                        <Image
                                          src="/plan-1.jpg"
                                          width={73}
                                          height={63}
                                          alt="plan 1"
                                          className="rounded-lg"
                                        />
                                      </div>
                                      <div className="px-3 py-2">
                                        <p className="mb-[2px] flex justify-between text-xs font-bold text-black">
                                          {item}. This is the plan
                                          <span className="text-[8px] font-bold uppercase text-[#17A966]">
                                            DAY {item}
                                          </span>
                                        </p>
                                        <div className="text-[11px]">
                                          Tortor pellentesque nec sit nulla
                                          volutpat curabitur mattis fusce
                                          condimentum. Nulla orci praesent
                                          nullam vitae nibh. Sed sit sed eu
                                          lectus mi a
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </Disclosure.Panel>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </Disclosure>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className="mb-3 ml-2 md:mb-5 md:ml-4">
              <Disclosure.Button className="focus-green relative flex w-full justify-between pt-2 pb-2 text-left text-base font-bold leading-tight before:absolute before:top-[14px] before:-left-[10px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#17A966] focus-visible:ring-offset-0 md:text-xl before:md:top-5 before:md:-left-5 lg:text-2xl">
                Days 22-30: Summary
                <div className="flex shrink-0 items-center text-[10px] font-semibold text-[#17A966] md:text-base lg:text-lg">
                  <span className="mr-1 md:mr-2">3 Lessons</span>
                  {open ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#17A966] pb-[2px] text-lg md:h-6 md:w-6 md:text-2xl">
                      -
                    </span>
                  ) : (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#17A966] text-lg md:h-6 md:w-6 md:text-xl">
                      +
                    </span>
                  )}
                </div>
              </Disclosure.Button>

              <AnimatePresence>
                {open && (
                  <Disclosure.Panel
                    static
                    as={motion.div}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={slideToggle}
                    className=""
                  >
                    <div className="text-[13px]">
                      Tortor pellentesque nec sit nulla volutpat curabitur
                      mattis fusce condimentum. Nulla orci congue praesent
                      nullam vitae nibh. Sed sit sed eu lectus mi amet egestas
                      massa. Nunc enim eleifend tellus tincidunt pharetra
                      sagittis volutpat. Ut donec vitae ut viverra lacus lectus
                      orci. Amet, consequat volutpat magna risus risus. Sed sed
                      aliquet a pretium molestie
                    </div>

                    <Disclosure>
                      {({ open }) => (
                        <div className="mb-4">
                          <Disclosure.Button className="focus-green text-[10px] font-bold text-[#17A966]">
                            {open ? <span>+</span> : <span>-</span>}
                            <span className="ml-1">SHOW DETAILS</span>
                          </Disclosure.Button>

                          <AnimatePresence>
                            {open && (
                              <Disclosure.Panel
                                static
                                as={motion.div}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={slideToggle}
                                className=""
                              >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                  <div
                                    key={item}
                                    className="max-w-[590px] pt-3"
                                  >
                                    <div className="flex flex-wrap justify-center overflow-hidden rounded-lg shadow-spread sm:flex-nowrap">
                                      <div className="mt-3 flex w-[73px] shrink-0 sm:mt-0">
                                        <Image
                                          src="/plan-1.jpg"
                                          width={73}
                                          height={63}
                                          alt="plan 1"
                                          className="rounded-lg"
                                        />
                                      </div>
                                      <div className="px-3 py-2">
                                        <p className="mb-[2px] flex justify-between text-xs font-bold text-black">
                                          {item}. This is the plan
                                          <span className="text-[8px] font-bold uppercase text-[#17A966]">
                                            DAY {item}
                                          </span>
                                        </p>
                                        <div className="text-[11px]">
                                          Tortor pellentesque nec sit nulla
                                          volutpat curabitur mattis fusce
                                          condimentum. Nulla orci praesent
                                          nullam vitae nibh. Sed sit sed eu
                                          lectus mi a
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </Disclosure.Panel>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </Disclosure>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>
        <div className="pt-2">
          <Link href="/">
            <a className="green_btn block h-[40px] max-w-[320px] rounded-md py-3 text-center text-[10px] font-bold text-white transition-shadow hover:shadow-lg md:text-xs">
              Connect me to customize this to your needs
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);

export default IntermediateTab;
