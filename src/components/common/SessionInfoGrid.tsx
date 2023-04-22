import Image from 'next/image';
import { motion } from 'framer-motion';
import { animationWrapper, fadeInUp } from '../../utilities/animations';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint operator-linebreak: "off" */
const SessionInfoGrid = () => {
  const information = [
    {
      id: 1,
      title: 'DURATION',
      time: '2 MONTHS AND MORE',
      description:
        'Sed habitant diam massa id egestas ante. Feugiat ullamcorper am',
      image: '/icons/calendar-week.svg',
    },
    {
      id: 2,
      title: 'SESSIONS',
      time: '2 Sessions / Week',
      description:
        'Sed habitant diam massa id egestas ante. Feugiat ullamcorper am',
      image: '/icons/calendar-days.png',
    },
    {
      id: 3,
      title: 'TIME',
      time: '45 Minutes / Session',
      description:
        'Sed habitant diam massa id egestas ante. Feugiat ullamcorper am',
      image: '/icons/clock.svg',
    },
    {
      id: 4,
      title: 'LEARNERS',
      time: '3 - 10 Learners / Class',
      description:
        'Sed habitant diam massa id egestas ante. Feugiat ullamcorper am',
      image: '/icons/learners.svg',
    },
    {
      id: 5,
      title: 'OUTPUT',
      time: '3 - 10 Learners / Class',
      description:
        'Sed habitant diam massa id egestas ante. Feugiat ullamcorper am',
      image: '/icons/learners.svg',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] pt-8 pb-8 shadow-lg md:pt-14 md:pb-14">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-wrap items-center pl-9 pr-9 md:gap-0 xl:flex-nowrap xl:justify-between"
      >
        {information &&
          information.map((info) => (
            <motion.div
              key={info.id}
              variants={fadeInUp}
              className="flex w-full items-center gap-2 pb-4 text-center last:border-r-0 last:pb-0 sm:w-1/2 lg:w-1/3 lg:pr-[1%] xl:mr-[1%] xl:w-auto xl:border-r-2 xl:border-r-[#EBEBEB] xl:pb-0 xl:pr-[1%]"
            >
              <div className="flex h-[62px] w-[62px] flex-shrink-0 items-center justify-center rounded-full bg-[#76F4BA]">
                <Image
                  src={info.image}
                  width={22}
                  height={22}
                  alt={info.title}
                />
              </div>
              <div className="text-left text-black">
                <p className="text-xs font-bold">{info.title}</p>
                <p className="text-sm font-bold">{info.time}</p>
                <p className="text-[10px] opacity-70">{info.description}</p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};
export default SessionInfoGrid;
