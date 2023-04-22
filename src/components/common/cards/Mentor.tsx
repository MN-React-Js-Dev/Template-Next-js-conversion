import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp } from '../../../utilities/animations';

import StarIcon from '../../../../public/icons/star.svg';
import HeartIcon from '../../../../public/icons/heart.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint react/require-default-props: "off" */

interface MentorCardProps {
  isAvailable?: boolean;
  imgUrl?: string;
  isNew?: boolean;
  mentorName?: string;
  price?: number;
  title?: string;
  authors?: string;
  rating?: number;
  offer?: number;
}

const MentorCard = ({
  isAvailable = true,
  imgUrl = '/popular-mentor-1.jpg',
  isNew = true,
  mentorName = 'Dalvik Loger',
  price = 320,
  title = 'Photography Masterclass: A Complete Guide to Photography',
  authors = 'Nate Taylor, Toby and Smith',
  rating = 130,
  offer = 20,
}: MentorCardProps) => (
  <Link href="/">
    <motion.a
      variants={fadeInUp}
      className="dark_shadow mx-1 mb-4 block rounded-lg bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative rounded">
        <div className="flex justify-center overflow-hidden rounded-lg">
          <Image src={imgUrl} width={590} height={366} />
        </div>
        {isAvailable && (
          <div className="z-1 absolute top-3 left-3 flex items-center rounded-md bg-[#C4C4C4] bg-opacity-20 px-2 py-1 text-[8px] font-bold text-white">
            <div className="mr-1 h-[6px] w-[6px] rounded-full bg-[#00FF29]" />
            Available
          </div>
        )}
        <div className="z-1 absolute top-3 right-3 flex items-center rounded-md bg-opacity-20 px-2 py-1 text-[8px] font-bold text-transparent">
          <button type="button" className="svg_icon w-[15px] hover:shadow-lg">
            <HeartIcon />
          </button>
        </div>
        {isNew && (
          <div className="absolute -left-[5px] top-11 bg-[#00FF29] px-3 py-1 text-[10px] font-bold text-black">
            New Mentor
          </div>
        )}
      </div>
      <div className="px-5 pt-4 pb-2">
        <h4 className="relative z-[1] -mt-16 -ml-[10px] text-lg font-bold text-white">
          {mentorName}
        </h4>
        <div className="relative z-[1] mt-1 -ml-[10px] w-[94px] rounded-md bg-white py-1 text-center text-xs text-black shadow-lg">
          From <b className="text-sm">${price}</b>
        </div>
        <p className="pb-1 pt-4 text-xs font-bold leading-tight">{title}</p>
        <p className="pb-1 text-[10px] font-bold">By {authors}</p>
        <div className="flex items-center text-[#FFCE31]">
          <span className="svg_icon inline-block w-[8px]">
            <StarIcon />
          </span>
          <span className="svg_icon inline-block w-[8px]">
            <StarIcon />
          </span>
          <span className="svg_icon inline-block w-[8px]">
            <StarIcon />
          </span>
          <span className="svg_icon inline-block w-[8px]">
            <StarIcon />
          </span>
          <span className="svg_icon inline-block w-[8px]">
            <StarIcon />
          </span>
          <span className="ml-1 mr-3 text-[8px] font-bold">(231)</span>
          <span className="block rounded-full bg-[#DCF2E8] px-[6px] py-[1px] text-[8px] text-[#17A966]">
            {offer}%<span className="ml-1">off</span>
          </span>
        </div>
        <div className="pt-[6px] text-[11px] text-[#878787]">
          Advocate Suhasini S practices at city Civil Court I Bangalore,
          Intellectual property appelate borad (IPAB) Delhi, Karnataka Hight
          Court.. <span className="font-bold text-[#17A966]">See more</span>
        </div>
        <div className="text-right text-sm font-bold">
          From
          <span className="ml-2 text-lg">${price}</span>
        </div>
      </div>
    </motion.a>
  </Link>
);
export default MentorCard;
