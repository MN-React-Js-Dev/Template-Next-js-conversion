import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { animationWrapper, fadeInUp } from '../../utilities/animations';
import BeginnerTab from './tabs/Beginner';
import IntermediateTab from './tabs/Intermediate';

const CourseCurriculum = () => (
  <div className="relative pt-10 md:pt-14 lg:pt-20">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <div className="relative mx-auto w-full lg:max-w-[936px]">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="pb-7 text-center text-2xl font-bold leading-tight text-black md:text-[28px] lg:text-[36px]"
        >
          Course Curriculum
        </motion.h2>

        <Tab.Group>
          <Tab.List className="mx-auto flex max-w-[750px] justify-between gap-x-1">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type="button"
                  className={`h-10 w-full rounded-full border-[3px] text-center text-xs font-semibold transition-all hover:border-[#8796A0] hover:bg-[#8796A0] hover:text-white md:h-[60px] md:w-[220px] md:text-base ${
                    selected
                      ? 'bg-[#8796A0] text-white'
                      : 'border-[#e8e8e8] text-[#ababab]'
                  }`}
                >
                  Beginner
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type="button"
                  className={`h-10 w-full rounded-full border-[3px] text-center text-xs font-semibold transition-all hover:border-[#8796A0] hover:bg-[#8796A0] hover:text-white md:h-[60px] md:w-[220px] md:text-base ${
                    selected
                      ? 'bg-[#8796A0] text-white'
                      : 'border-[#e8e8e8] text-[#ababab]'
                  }`}
                >
                  Intermediate
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  type="button"
                  className={`h-10 w-full rounded-full border-[3px] text-center text-xs font-semibold transition-all hover:border-[#8796A0] hover:bg-[#8796A0] hover:text-white md:h-[60px] md:w-[220px] md:text-base ${
                    selected
                      ? 'bg-[#8796A0] text-white'
                      : 'border-[#e8e8e8] text-[#ababab]'
                  }`}
                >
                  Expert
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="mt-10">
              <BeginnerTab />
            </Tab.Panel>
            <Tab.Panel className="mt-10">
              <IntermediateTab />
            </Tab.Panel>
            <Tab.Panel className="mt-10">
              <BeginnerTab />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  </div>
);

export default CourseCurriculum;
