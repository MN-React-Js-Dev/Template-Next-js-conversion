import { motion } from 'framer-motion';
import { fadeInRight, fadeInUp } from '../../utilities/animations';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const StopDebut = () => {
  const wrapperAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        when: 'beforeChildren',
      },
    },
  };

  return (
    <div
      className="pb-10 pt-10 md:pt-14 md:pb-14"
      style={{ backgroundImage: 'url(/stop-debut-bg.jpg)' }}
    >
      <div className="container">
        <motion.div
          variants={wrapperAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto flex flex-wrap items-center rounded-xl bg-cover bg-center bg-no-repeat px-5 py-7 sm:px-[35px] sm:py-[45px] md:max-w-[885px] md:justify-between lg:flex-nowrap"
          style={{ backgroundImage: 'url(/stop-debut-blur-bg.png)' }}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-extrabold text-black md:text-xl lg:text-2xl xl:text-[28px]">
              STOP DOUBTING. START DOING
            </h3>
            <motion.div
              variants={{
                initial: { width: 0, opacity: 0 },
                animate: {
                  width: '100%',
                  opacity: 1,
                  transition: { duration: 1 },
                },
              }}
              className="mt-2 mb-4 block h-1 w-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(233, 214, 125, 0)  0%, #E9D67D 100%)',
              }}
            />
            <p className="text-[15px] font-medium text-[#343434]">
              Find out about new instructors, enrollment deadlines, and more
            </p>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            className="w-full pt-5 lg:max-w-[276px] lg:pt-0"
          >
            <input
              type="text"
              className="focus-green h-[46px] w-full rounded-md bg-white px-3 text-[13px] font-medium placeholder:text-[#9E9E9E]"
              placeholder="name@mail.com"
            />
            <button
              type="submit"
              className="mt-2 h-[46px] w-full rounded-md bg-black text-center font-bold text-white hover:shadow-xl"
            >
              JOIN IN NOW
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default StopDebut;
