import Image from 'next/image';
import { motion } from 'framer-motion';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const Sponsors = () => {
  const wrapperAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };
  const logoItemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div className="bg-[#F7F7F7] pt-14 pb-10 sm:pb-14">
      <div className="container">
        <motion.div
          variants={wrapperAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap items-center md:justify-between md:gap-0 lg:flex-nowrap"
        >
          <motion.h3
            variants={logoItemAnimation}
            className="w-full max-w-none pb-6 text-center text-2xl font-bold leading-tight text-[#313131] lg:w-auto lg:max-w-[160px] lg:pb-0 lg:text-left"
          >
            Our Mentors Work for :
          </motion.h3>
          <motion.div
            variants={logoItemAnimation}
            className="w-full pb-6 text-center sm:w-1/2 lg:w-auto lg:pb-0"
          >
            <Image src="/planday.png" width={186} height={38} alt="Planday" />
          </motion.div>
          <motion.div
            variants={logoItemAnimation}
            className="w-full pb-6 text-center sm:w-1/2 lg:w-auto lg:pb-0"
          >
            <Image src="/umbraco.png" width={160} height={27} alt="Umbraco" />
          </motion.div>
          <motion.div
            variants={logoItemAnimation}
            className="w-full pb-6 text-center sm:w-1/2 lg:w-auto lg:pb-0"
          >
            <Image
              src="/pearlfisher.png"
              width={177}
              height={23}
              alt="pearlfisher"
            />
          </motion.div>
          <motion.div
            variants={logoItemAnimation}
            className="w-full pb-6 text-center sm:w-1/2 lg:w-auto lg:pb-0"
          >
            <Image
              src="/brightpearl.png"
              width={142}
              height={29}
              alt="brightpearl"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Sponsors;
