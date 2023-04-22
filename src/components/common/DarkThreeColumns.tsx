import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, animationWrapper } from '../../utilities/animations';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */

interface DarkThreeColumnsProps {
  greenText: string;
  title: string;
  subtitle: string;
}

const DarkThreeColumns = ({
  greenText,
  title,
  subtitle,
}: DarkThreeColumnsProps) => {
  const posts = [
    {
      id: 1,
      title: 'Part 1 - Lorem Ispum',
      content:
        'Massa pulvinar ante mattis nulla felis. Massa massa porta aliquam varius euismod. Arcu nisl accumsan neque dui id penatibus vulputate pretium. Eu ultricies bibendum ac. ',
      imgUrl: '/how-works-1.jpg',
    },
    {
      id: 2,
      title: 'Part 2 - Lorem Ispum',
      content:
        'Massa pulvinar ante mattis nulla felis. Massa massa porta aliquam varius euismod. Arcu nisl accumsan neque dui id penatibus vulputate pretium. Eu ultricies bibendum ac. ',
      imgUrl: '/how-works-2.jpg',
    },
    {
      id: 3,
      title: 'Part 3 - Lorem Ispum',
      content:
        'Massa pulvinar ante mattis nulla felis. Massa massa porta aliquam varius euismod. Arcu nisl accumsan neque dui id penatibus vulputate pretium. Eu ultricies bibendum ac. ',
      imgUrl: '/how-works-3.jpg',
    },
  ];
  return (
    <div className="relative bg-[#1c1c25] pt-20 pb-10 lg:pb-28">
      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="pb-7 text-center md:pb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm uppercase text-[#17A966] md:text-lg"
          >
            {greenText}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="pb-3 text-[24px] font-bold leading-tight text-white md:text-[42px]"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto text-xs text-white opacity-70 md:max-w-[670px]"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {posts && (
          <motion.div
            variants={animationWrapper}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-between gap-8 md:gap-5 lg:gap-8"
          >
            {posts.map((post) => (
              <motion.div
                variants={fadeInUp}
                key={post.id}
                className="w-full text-center text-white md:max-w-[230px] lg:max-w-[306px] xl:max-w-[330px]"
              >
                <div className="flex overflow-hidden rounded-[10px]">
                  <Image
                    src={post.imgUrl}
                    width={296 * 2}
                    height={237 * 2}
                    className="overflow-hidden rounded-[10px]"
                  />
                </div>
                <h3 className="pt-2 pb-1 text-base md:pb-2 md:pt-4 md:text-xl lg:pt-5 lg:pb-3 xl:text-2xl">
                  {post.title}
                </h3>
                <p className="text-xs opacity-80 sm:text-sm">{post.content}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default DarkThreeColumns;
