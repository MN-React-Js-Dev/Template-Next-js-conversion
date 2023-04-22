import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  fadeInUp,
  animationWrapper,
  slideToggle,
} from '../../utilities/animations';

import ArrowDownIcon from '../../../public/icons/chevron-down.svg';
import CloseIcon from '../../../public/icons/xmark.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const FrequentlyAskedQuestions = () => (
  <div className="relative pt-20">
    <div className="container">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pb-6 text-center md:pb-12"
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase text-[#17A966] md:text-lg"
        >
          WE’RE HERE TO ANSWER
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="pb-3 text-[24px] font-bold leading-tight md:text-[42px]"
        >
          Frequently Asked Questions
        </motion.h2>
      </motion.div>

      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mx-auto lg:max-w-[820px]"
      >
        <Disclosure as={motion.div} variants={fadeInUp}>
          {({ open }) => (
            <div className="mb-4 rounded-md px-2 pt-2 pb-2 shadow-spread md:px-3">
              <Disclosure.Button className="focus-green relative block w-full px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-lg">
                Who should take this course?
                {open ? (
                  <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                    <CloseIcon />
                  </span>
                ) : (
                  <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                    <ArrowDownIcon />
                  </span>
                )}
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
                    className="px-3"
                  >
                    <ul className="ml-3 list-disc pb-3 text-sm md:ml-5 lg:text-base">
                      <li className="mb-2">
                        Lawyers who want to work in top law firms or in the
                        corporate practice of boutique law firms,
                      </li>
                      <li className="mb-2">
                        Litigators whose practice is severely hurt by the
                        pandemic and who want to perform corporate work on the
                        side to survive and grow financially, and still have
                        sufficient time to focus on litigation,
                      </li>
                      <li className="mb-2">
                        Lawyers who want to build an independent/ freelancing
                        corporate practice or start their own law firm which
                        caters to offshore needs of foreign clients
                      </li>
                      <li className="">
                        Young lawyers and law students who intend to pursue an
                        LLM and settle abroad in the long term
                      </li>
                    </ul>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>

        <Disclosure as={motion.div} variants={fadeInUp}>
          {({ open }) => (
            <div className="mb-4 rounded-md px-2 pt-2 pb-2 shadow-spread md:px-3">
              <Disclosure.Button className="focus-green relative block w-full px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-lg">
                What will you learn from this course?
                {open ? (
                  <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                    <CloseIcon />
                  </span>
                ) : (
                  <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                    <ArrowDownIcon />
                  </span>
                )}
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
                    className="px-3"
                  >
                    <ul className="ml-3 list-disc pb-3 text-sm md:ml-5 lg:text-base">
                      <li className="mb-2">
                        Lawyers who want to work in top law firms or in the
                        corporate practice of boutique law firms,
                      </li>
                      <li className="mb-2">
                        Litigators whose practice is severely hurt by the
                        pandemic and who want to perform corporate work on the
                        side to survive and grow financially, and still have
                        sufficient time to focus on litigation,
                      </li>
                      <li className="mb-2">
                        Lawyers who want to build an independent/ freelancing
                        corporate practice or start their own law firm which
                        caters to offshore needs of foreign clients
                      </li>
                      <li className="">
                        Young lawyers and law students who intend to pursue an
                        LLM and settle abroad in the long term
                      </li>
                    </ul>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>

        <Disclosure as={motion.div} variants={fadeInUp}>
          {({ open }) => (
            <div className="mb-4 rounded-md px-2 pt-2 pb-2 shadow-spread md:px-3">
              <Disclosure.Button className="focus-green relative block w-full px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-lg">
                What is unique about this course?
                {open ? (
                  <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                    <CloseIcon />
                  </span>
                ) : (
                  <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                    <ArrowDownIcon />
                  </span>
                )}
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
                    className="px-3"
                  >
                    <ul className="ml-3 list-disc pb-3 text-sm md:ml-5 lg:text-base">
                      <li className="mb-2">
                        Lawyers who want to work in top law firms or in the
                        corporate practice of boutique law firms,
                      </li>
                      <li className="mb-2">
                        Litigators whose practice is severely hurt by the
                        pandemic and who want to perform corporate work on the
                        side to survive and grow financially, and still have
                        sufficient time to focus on litigation,
                      </li>
                      <li className="mb-2">
                        Lawyers who want to build an independent/ freelancing
                        corporate practice or start their own law firm which
                        caters to offshore needs of foreign clients
                      </li>
                      <li className="">
                        Young lawyers and law students who intend to pursue an
                        LLM and settle abroad in the long term
                      </li>
                    </ul>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>

        <Disclosure as={motion.div} variants={fadeInUp}>
          {({ open }) => (
            <div className="mb-4 rounded-md px-2 pt-2 pb-2 shadow-spread md:px-3">
              <Disclosure.Button className="focus-green relative block w-full px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-lg">
                Specific learning objectives
                {open ? (
                  <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                    <CloseIcon />
                  </span>
                ) : (
                  <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                    <ArrowDownIcon />
                  </span>
                )}
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
                    className="px-3"
                  >
                    <ul className="ml-3 list-disc pb-3 text-sm md:ml-5 lg:text-base">
                      <li className="mb-2">
                        Lawyers who want to work in top law firms or in the
                        corporate practice of boutique law firms,
                      </li>
                      <li className="mb-2">
                        Litigators whose practice is severely hurt by the
                        pandemic and who want to perform corporate work on the
                        side to survive and grow financially, and still have
                        sufficient time to focus on litigation,
                      </li>
                      <li className="mb-2">
                        Lawyers who want to build an independent/ freelancing
                        corporate practice or start their own law firm which
                        caters to offshore needs of foreign clients
                      </li>
                      <li className="">
                        Young lawyers and law students who intend to pursue an
                        LLM and settle abroad in the long term
                      </li>
                    </ul>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>

        <Disclosure as={motion.div} variants={fadeInUp}>
          {({ open }) => (
            <div className="mb-4 rounded-md px-2 pt-2 pb-2 shadow-spread md:px-3">
              <Disclosure.Button className="focus-green relative block w-full px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-lg">
                List of skills you will learn through weekly exercises
                {open ? (
                  <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                    <CloseIcon />
                  </span>
                ) : (
                  <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                    <ArrowDownIcon />
                  </span>
                )}
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
                    className="px-3"
                  >
                    <ul className="ml-3 list-disc pb-3 text-sm md:ml-5 lg:text-base">
                      <li className="mb-2">
                        Lawyers who want to work in top law firms or in the
                        corporate practice of boutique law firms,
                      </li>
                      <li className="mb-2">
                        Litigators whose practice is severely hurt by the
                        pandemic and who want to perform corporate work on the
                        side to survive and grow financially, and still have
                        sufficient time to focus on litigation,
                      </li>
                      <li className="mb-2">
                        Lawyers who want to build an independent/ freelancing
                        corporate practice or start their own law firm which
                        caters to offshore needs of foreign clients
                      </li>
                      <li className="">
                        Young lawyers and law students who intend to pursue an
                        LLM and settle abroad in the long term
                      </li>
                    </ul>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>

        <Disclosure as={motion.div} variants={fadeInUp}>
          {({ open }) => (
            <div className="mb-4 rounded-md px-2 pt-2 pb-2 shadow-spread md:px-3">
              <Disclosure.Button className="focus-green relative block w-full px-1 pb-3 pt-3 text-left text-base font-bold focus-visible:ring-offset-0 md:px-3 md:text-lg">
                What kind of assignments will you get?
                {open ? (
                  <span className="svg_icon absolute right-3 top-4 inline-block w-[15px] md:w-[18px]">
                    <CloseIcon />
                  </span>
                ) : (
                  <span className="svg_icon absolute right-3 top-5 inline-block w-[15px] text-transparent md:w-[18px]">
                    <ArrowDownIcon />
                  </span>
                )}
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
                    className="px-3"
                  >
                    <ul className="ml-3 list-disc pb-3 text-sm md:ml-5 lg:text-base">
                      <li className="mb-2">
                        Lawyers who want to work in top law firms or in the
                        corporate practice of boutique law firms,
                      </li>
                      <li className="mb-2">
                        Litigators whose practice is severely hurt by the
                        pandemic and who want to perform corporate work on the
                        side to survive and grow financially, and still have
                        sufficient time to focus on litigation,
                      </li>
                      <li className="mb-2">
                        Lawyers who want to build an independent/ freelancing
                        corporate practice or start their own law firm which
                        caters to offshore needs of foreign clients
                      </li>
                      <li className="">
                        Young lawyers and law students who intend to pursue an
                        LLM and settle abroad in the long term
                      </li>
                    </ul>
                  </Disclosure.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Disclosure>
      </motion.div>
    </div>
  </div>
);
export default FrequentlyAskedQuestions;
