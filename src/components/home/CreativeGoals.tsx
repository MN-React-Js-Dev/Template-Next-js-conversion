import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, animationWrapper } from '../../utilities/animations';

// import CalenderIcon from '../../../public/icons/calender-month.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
const CreativeGoals = () => {
  const posts = [
    {
      id: 1,
      title: 'Get Unparreled Access to Industry Veterans',
      content:
        'Other online classes are easy to tune out. MentorOcean Classes motivate you to learn in',
      imgUrl: '/creative-goals-1.jpg',
    },
    {
      id: 2,
      title: 'Get Guided by Proven Leaders',
      content:
        'Other online classes are easy to tune out. MentorOcean Classes motivate you to learn in',
      imgUrl: '/creative-goals-2.jpg',
    },
    {
      id: 3,
      title: 'Structured Mentoring Programs',
      content:
        'Other online classes are easy to tune out. MentorOcean Classes motivate you to learn in',
      imgUrl: '/creative-goals-3.jpg',
    },
    {
      id: 4,
      title: 'Restyle Your Thought System',
      content:
        'Other online classes are easy to tune out. MentorOcean Classes motivate you to learn in',
      imgUrl: '/creative-goals-1.jpg',
    },
  ];
  return (
    <div className="relative pt-14 pb-10 lg:pb-14">
      <div className="container">
        <motion.div
          variants={animationWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="pb-8 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="mx-auto text-[30px] font-extrabold leading-tight text-black md:max-w-[710px] md:text-[46px]"
          >
            MAKE REAL PROGRESS ON YOUR{' '}
            <span className="relative z-[2] inline-block after:absolute after:left-0 after:bottom-0 after:-z-[1] after:h-6 after:w-full after:bg-[#F9E171] md:after:h-9">
              CREATIVE GOALS
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto pt-3 text-sm font-medium leading-tight text-[#585858] md:max-w-[430px] md:text-lg"
          >
            Other online classes are easy to tune out. MentorOcean Classes
            motivate you to learn in
          </motion.p>
        </motion.div>
        {posts && (
          <motion.div
            variants={animationWrapper}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 md:gap-8 lg:gap-11"
          >
            {posts.map((post) => (
              <motion.div
                variants={fadeInUp}
                key={post.id}
                className="w-full text-center md:max-w-[353px] lg:max-w-[470px] xl:max-w-[558px]"
              >
                <div className="flex">
                  <Image src={post.imgUrl} width={558 * 2} height={314 * 2} />
                </div>
                <h3 className="pt-2 pb-1 text-base font-bold text-black md:pb-3 md:pt-4 md:text-2xl lg:pt-5 lg:pb-4 xl:text-[28px]">
                  {post.title}
                </h3>
                <p className="text-sm text-[#585858] lg:text-base">
                  {post.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default CreativeGoals;
