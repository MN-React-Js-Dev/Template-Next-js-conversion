import { motion } from 'framer-motion';
import Image from 'next/image';
import { animationWrapper, fadeInUp } from '../../utilities/animations';

/* eslint react/jsx-one-expression-per-line: "off" */
const HowToParticipate = () => {
  const sliderItems = [
    {
      id: 1,
      title: 'Join a Video Call',
      imgUrl: 'bus.svg',
    },
    {
      id: 2,
      title: 'Book for a Private Group',
      imgUrl: 'group.svg',
    },
    {
      id: 3,
      title: 'Join a Video Call',
      imgUrl: 'bus.svg',
    },
    {
      id: 4,
      title: 'Book for a Private Group',
      imgUrl: 'group.svg',
    },
  ];

  return (
    <div className="relative pt-8">
      <motion.div
        variants={animationWrapper}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container"
      >
        <div className="border-t-2 border-t-[#EBEBEB] pt-8">
          <motion.h2
            variants={fadeInUp}
            className="pb-7 text-2xl font-bold text-black md:text-[28px] lg:text-[32px]"
          >
            How to Participate
          </motion.h2>
          <div className="flex max-w-[890px] flex-wrap gap-3 lg:flex-nowrap">
            {sliderItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="w-full rounded-lg border-2 border-[#E1E1E1] bg-white p-[15px] md:w-[49%] lg:w-auto"
              >
                <div className="relative flex">
                  <Image src={`/icons/${item.imgUrl}`} width={40} height={40} />
                </div>
                <p className="pb-2 pt-2 text-base font-semibold text-black md:text-lg md:leading-tight">
                  {item.title}
                </p>
                <p className="text-[13px]">
                  Tortor pellentesque nec sit nulla volutpat curabitur mattis
                  fusce condimentum. Nulla orci congue praesent nullam vitae
                  nibh. Sed sit{' '}
                  <a href="#" className="font-semibold">
                    Read More
                  </a>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default HowToParticipate;
