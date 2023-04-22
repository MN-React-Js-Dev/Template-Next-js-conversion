import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  animationWrapper,
  fadeInUp,
  fadeIn,
  zoomIn,
} from '../../utilities/animations';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const BannerWithImageGrid = () => (
  <div className="bg-[#1C1C25] pb-16 pt-16 md:pb-24 md:pt-24">
    <div className="container">
      <div className="flex flex-wrap-reverse items-center justify-between text-white md:flex-nowrap">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full pt-8 md:w-1/2 md:pt-0"
        >
          <motion.p
            variants={fadeInUp}
            className="pb-2  text-sm md:text-base lg:text-lg"
          >
            CHARLIE PUTH & VICK HANA TEACHES
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-3xl font-bold leading-tight md:text-[36px] lg:text-[50px] xl:text-[58px]"
          >
            HOW TO MAKE
            <br />
            A UNIQUE DESIGN
            <br />
            WITH FIGMA
          </motion.h1>
          <motion.div
            variants={fadeInUp}
            className="pt-4 pb-4 text-sm md:w-[95%] md:max-w-[520px] md:text-base lg:text-lg"
          >
            <span className="opacity-80">
              From US $254, Enroll in impressive, month-long classes with the
              world’s best instructors. Unlock your creative potential.
              month-long classes with the world’s best instructors
            </span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-3 lg:gap-6"
          >
            <Link href="/">
              <a className="focus-green green_btn inline-block rounded-[5px] px-[15px] py-[10px] text-base font-bold focus-visible:ring-offset-0 lg:text-lg">
                ENROLL NOW FOR THE COURSE
              </a>
            </Link>
            <Link href="/">
              <a className="focus-green inline-block text-[10px] underline transition hover:text-green_primary focus-visible:ring-offset-0 lg:text-xs">
                View Meeting Location
              </a>
            </Link>
          </motion.div>
        </motion.div>
        <div className="flex w-full  md:w-1/2 md:justify-end">
          <motion.div
            variants={animationWrapper}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative grid grid-cols-3 gap-1 lg:max-w-[538px]"
          >
            <div className="col-span-3">
              <motion.div variants={zoomIn} className="flex overflow-hidden rounded-md" >
                <Image src="/banner-grid-img-1.jpg" height={229 * 2} width={538 * 2} alt="banner 1" />
              </motion.div>
            </div>
            <div className="col-span-2">
              <motion.div variants={zoomIn} className="flex overflow-hidden rounded-md" >
                <Image src="/banner-grid-img-2.jpg" width={365} height={224} alt="banner 2" />
              </motion.div>
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <motion.div variants={zoomIn} className="flex overflow-hidden rounded-md" >
                <Image src="/banner-grid-img-4.jpg" width={365} height={229 * 2} alt="banner 3" />
              </motion.div>
              {/* <motion.div variants={zoomIn} className="flex overflow-hidden rounded-md" >
                <Image src="/banner-grid-img-4.jpg" width={180} height={109} alt="banner 4" />
              </motion.div> */}
            </div>
            <motion.a
              variants={fadeIn}
              href="#"
              className="absolute top-3 left-3 z-[1] max-w-[322px] text-xs"
            >
              Germany &gt; Project &gt; Class &gt; Learning Course &gt; 20th
              Class &gt; Business Economy &gt; Something to type here
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);
export default BannerWithImageGrid;
