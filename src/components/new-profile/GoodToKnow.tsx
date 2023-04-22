import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  animationWrapper,
  fadeInRight,
  fadeInUp,
} from '../../utilities/animations';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CancelMark from '../../../public/icons/round-cancel.svg';
import MeetNowIcon from '../../../public/icons/meet-now.svg';

/* eslint react/jsx-one-expression-per-line: "off" */
const GoodToKnow = () => (
  <div className="relative pt-10">
    <motion.div
      variants={animationWrapper}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container"
    >
      <div className="flex flex-wrap lg:flex-nowrap">
        <motion.div variants={fadeInUp} className="w-auto">
          <h2 className="pb-5 text-xl font-bold text-black md:text-[24px] lg:text-[28px]">
            What we are going <span className="text-[#17A966]">to do</span>
          </h2>
          <div className="text-base lg:text-lg">
            <p className="pb-4">
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit
              sed eu lectus mi amet egestas massa. Nunc enim eleifend tellus
              tincidunt pharetra sagittis volutpat. Ut donec vitae ut viverra
              lacus lectus orci. Amet, consequat volutpat magna risus risus. Sed
              sed aliquet a pretium molestie lorem scelerisque convallis.
            </p>
            <p>
              Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
              condimentum. Nulla orci congue praesent nullam vitae nibh. Sed sit
              sed eu lectus mi amet egestas massa. Nunc enim eleifend tellus
              tincidunt pharetra sagittis volutpat. Ut donec vitae ut viverra
              lacus lectus orci. Amet, consequat volutpat magna risus risus. Sed
              sed aliquet a pretium molestie lorem scelerisque convallis.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          className="mt-7 w-full shrink-0 text-center lg:mt-12 lg:ml-7 lg:w-auto xl:ml-10"
        >
          <Image
            src="/creativity-thumb.png"
            width={360}
            height={250}
            alt="Creativity"
          />
        </motion.div>
      </div>

      <div className="mt-10">
        <h2 className="pb-5 text-xl font-bold text-black md:text-[24px] lg:text-[28px]">
          Good <span className="text-[#17A966]">to know</span>
        </h2>
        <motion.div variants={fadeInUp} className="mb-6">
          <h3 className="pb-3 font-bold text-[#262626] lg:text-2xl">
            Meeting Point
          </h3>
          <p className="mb-1 flex text-sm text-[#484848] md:text-base lg:text-lg">
            <span className="mr-2 inline-block w-[22px] flex-shrink-0 xl:pt-1">
              <MeetNowIcon />
            </span>
            We will meet online in a video call. You will receive a custom link
            after your booking is confirmed
          </p>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <h3 className="pb-3 font-bold text-[#262626] lg:text-2xl">
            Cancelation
          </h3>
          <p className="mb-1 flex text-sm text-[#484848] md:text-base lg:text-lg">
            <span className="mr-2 inline-block w-[22px] flex-shrink-0 xl:pt-1">
              <CancelMark />
            </span>
            Tortor pellentesque nec sit nulla volutpat curabitur mattis fusce
            condimentum.. Nulla Orci congue prasent
          </p>
          <p className="mb-1 flex text-sm text-[#484848] md:text-base lg:text-lg">
            <span className="mr-2 inline-block w-[22px] flex-shrink-0 xl:pt-1">
              <CancelMark />
            </span>
            Tortor pellentesque nec sit nulla volutpat
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
);
export default GoodToKnow;
