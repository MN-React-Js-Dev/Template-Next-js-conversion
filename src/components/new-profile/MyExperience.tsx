import { motion } from 'framer-motion';
import { animationWrapper, fadeInUp } from '../../utilities/animations';

import BriefcaseIcon from '../../../public/icons/briefcase.svg';
import LocationIcon from '../../../public/icons/location.svg';
import CalendarIcon from '../../../public/icons/calendar-week.svg';

const MyExperience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Tokopedia Product Design',
    },
    {
      id: 2,
      title: 'Sribu.com Web Designer',
    },
  ];

  return (
    <div className="relative pt-12 pb-10 md:pb-14">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <div className="">
          <h3 className="pb-4 text-xl font-bold text-[#262626] lg:text-2xl">
            My Experience
          </h3>
          <div className="max-w-[720px] rounded-xl bg-white px-4 py-5 shadow-lg md:px-8 md:py-8">
            <div>
              {experiences.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className="mb-7 border-b-2 border-b-[#EBEBEB] pb-7 last-of-type:mb-0 last-of-type:border-b-0 last-of-type:pb-0"
                >
                  <div className="flex">
                    <div className="svg_icon mr-3 w-7 text-[#8796A0]">
                      <BriefcaseIcon />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p className="text-sm font-semibold text-black md:text-[17px]">
                        {item.title}
                      </p>
                      <p className="text-sm font-semibold text-black md:text-[17px]">
                        UX Designer - As a Freelancer
                      </p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#4B4B4B] md:flex-nowrap">
                        <div className="flex items-center">
                          <div className="svg_icon mr-1 w-4 text-[#8796A0]">
                            <LocationIcon />
                          </div>
                          Indonesia
                        </div>
                        <div className="flex items-center">
                          <div className="svg_icon mr-2 w-3 text-[#8796A0]">
                            <CalendarIcon />
                          </div>
                          January 2021 - Mei 2021
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-[#4B4B4B] md:text-sm">
                    Tortor pellentesque nec sit nulla volutpat curabitur mattis
                    fusce condimentum.. Nulla Orci congue prasentTortor
                    pellentesque nec sit nulla volutpat curabitur mattis fusce
                    condimentum.. Nulla Orci congue prasent
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 md:flex-nowrap">
                    {['UI Design', 'UX Design', 'Web Design'].map((cat) => (
                      <div
                        key={cat}
                        className="rounded-md bg-[#E8F3FF] px-2 py-1 text-[11px] text-[#5F87F2] md:px-3 md:py-[6px] md:text-[13px]"
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-7 text-center">
              <button
                type="button"
                className="green_btn h-[44px] w-[160px] rounded-lg py-1 px-2 text-[13px] font-bold uppercase text-white transition-shadow hover:shadow-lg"
              >
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default MyExperience;
