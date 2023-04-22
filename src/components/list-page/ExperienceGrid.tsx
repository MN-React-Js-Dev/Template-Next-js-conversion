import { motion } from 'framer-motion';
import { animationWrapper, fadeIn, fadeInUp } from '../../utilities/animations';

import CheckmarkIcon from '../../../public/icons/checkmark-filled.svg';

const ExperienceGrid = () => {
  const information = [
    {
      id: 1,
      title: 'Private & Personalized',
      description:
        'No Strangers, Just you. Fully Customize your trip to your needs',
    },
    {
      id: 2,
      title: 'With Local Expert',
      description:
        'No Strangers, Just you. Fully Customize your trip to your needs',
    },
    {
      id: 3,
      title: 'Without the Crowds',
      description:
        'No Strangers, Just you. Fully Customize your trip to your needs',
    },
  ];

  return (
    <div className="bg-[#F9F9F9] pt-10 pb-10">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <div className="flex flex-wrap items-center justify-center lg:flex-nowrap lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <motion.h2
              variants={fadeIn}
              className="text-center text-xl font-bold text-[#27AA5E] lg:text-left lg:text-2xl xl:text-[28px]"
            >
              MentorOcean Experiences
              <span className="block pt-1 text-[#96BEA7] sm:pt-2">
                Are Always
              </span>
            </motion.h2>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-y-5 sm:flex-nowrap sm:gap-y-0 lg:max-w-[600px] xl:max-w-[700px]">
            {information &&
              information.map((info) => (
                <motion.div
                  key={info.id}
                  variants={fadeInUp}
                  className="w-full text-center sm:w-[190px]"
                >
                  <div className="mx-auto w-[40px]">
                    <CheckmarkIcon />
                  </div>
                  <p className="pt-2 pb-1 text-sm font-bold text-[#6A6363] md:text-base">
                    {info.title}
                  </p>
                  <p className="text-[10px] text-[#6A6363] md:text-xs">
                    {info.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ExperienceGrid;
