import { motion } from 'framer-motion';
import Link from 'next/link';
import { animationWrapper, fadeInUp } from '../../utilities/animations';

import ArrowRightIcon from '../../../public/icons/arrow-right.svg';

/* eslint react/jsx-one-expression-per-line: "off" */
const CourseCard = () => {
  const cards = [
    {
      id: 1,
      title: 'Beginner',
      sessions: 24,
      time: 3,
      regularPrice: 10000,
      salePrice: 10000,
    },
    {
      id: 2,
      title: 'Intermediate',
      sessions: 48,
      time: 6,
      regularPrice: 15000,
      salePrice: 13000,
    },
    {
      id: 3,
      title: 'Advanced',
      sessions: 96,
      time: 12,
      regularPrice: 25000,
      salePrice: 30000,
    },
  ];
  return (
    <div className="relative pt-20">
      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative mx-auto flex w-full flex-wrap justify-between gap-y-5 lg:max-w-[936px]"
        >
          {cards &&
            cards.map((card) => (
              <Link key={card.id} href="/">
                <motion.a
                  href="/"
                  variants={fadeInUp}
                  className="w-full rounded-2xl border-[3px] border-[#5BE6A6] bg-[#5BE6A6] px-4 pt-4 pb-6 hover:border-[#FADB2D] md:w-[31%]"
                >
                  <div className="flex justify-between">
                    <div>
                      <h4 className="mb-1 font-bold text-black lg:text-[22px]">
                        {card.title}
                      </h4>
                      <p className="text-xs text-[#515151]">
                        {card.sessions} Live Sessions
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-[64px] font-bold leading-none text-black">
                        {card.time}
                      </div>
                      <div className="text-sm text-[#919191]">Months</div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-[22px] font-bold text-black">
                      ₹{card.salePrice}
                    </div>
                    <del className="ml-1 text-[#515151]">
                      ₹{card.regularPrice}
                    </del>
                  </div>
                  <div className="relative text-sm text-[#515151]">
                    ₹333 per session
                    {card.id === 2 ? (
                      <div className="absolute -top-1 -right-[19px] flex w-[110px] items-center justify-center overflow-hidden bg-[#1569E8] py-1 pl-3 text-[9px] font-bold text-white before:absolute before:-left-[5px] before:border-[20px] before:border-transparent before:border-l-[#5BE6A6]">
                        Recommended
                      </div>
                    ) : (
                      ''
                    )}
                    {card.id === 3 ? (
                      <div className="absolute -top-1 -right-[19px] flex w-[110px] items-center justify-center overflow-hidden bg-[#1569E8] py-1 pl-3 text-center text-[9px] font-bold leading-tight text-white before:absolute before:-left-[5px] before:border-[20px] before:border-transparent before:border-l-[#5BE6A6]">
                        CID UNESCO Certificate
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="relative mt-5 border-t-2 border-[#3AD78F] pt-5 text-xs text-[#515151]">
                    <p className="mb-3">4 Unique Choreography</p>
                    <p className="mb-3">15+ Dance Activities</p>
                    <p className="mb-3">40+ Hip Hop Steps</p>
                    <div className="absolute right-0 top-[15px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-black">
                      <div className="svg_icon w-[20px]">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </div>
                </motion.a>
              </Link>
            ))}
        </motion.div>
      </div>
    </div>
  );
};
export default CourseCard;
