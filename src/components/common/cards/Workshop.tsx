import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp } from '../../../utilities/animations';

import StarIcon from '../../../../public/icons/star.svg';
import HeartIcon from '../../../../public/icons/heart.svg';
import GearIcon from '../../../../public/icons/monotone-gear.svg';
import CalendarIcon from '../../../../public/icons/calendar.svg';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint react/require-default-props: "off" */

interface WorkshopProps {
  spotsLeft?: number;
  imgUrl?: string;
  authorImg?: string;
  ageRange?: string;
  price?: number;
  title?: string;
  authors?: string;
  rating?: number;
  offer?: number;
}

const Workshop = ({
  spotsLeft,
  imgUrl,
  authorImg,
  ageRange,
  price,
  title,
  authors,
  rating,
  offer,
}: WorkshopProps) => (
  <Link href="/">
    <motion.a
      variants={fadeInUp}
      className="mx-1 mb-4 block rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
    >
      <div className="relative rounded">
        <div className="flex justify-center overflow-hidden rounded-lg">
          {/* <Image src={imgUrl} width={590} height={366} /> */}
          <Image src="/workshop-1.jpg" width={590} height={366} />
        </div>
        <div className="z-1 absolute top-3 left-3 flex items-center rounded-full bg-[#565656] bg-opacity-90 px-2 py-[3px] text-[7px] font-bold text-white">
          <div className="svg_icon mr-1 inline-block w-[14px]">
            <GearIcon />
          </div>
          Workshop
        </div>
        <div className="z-1 absolute top-3 right-3 flex items-center rounded-md bg-opacity-20 px-2 py-[3px] text-[8px] font-bold text-transparent">
          <button type="button" className="svg_icon w-[15px] hover:shadow-lg">
            <HeartIcon />
          </button>
        </div>
      </div>
      <div className="px-5 pt-4 pb-2">
        <div className="-mt-[52px] flex items-end justify-between">
          <div className="z-10 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full border-2 border-white">
            <Image src="/author-head.png" width={60} height={60} />
          </div>
          <div className="text-[10px] font-bold text-[#878787]">
            Age 13 - 16
          </div>
        </div>
        <p className="pb-[3px] pt-2 text-[10px] font-bold text-[#878787]">
          {/* By {authors} */}
          By Nate Taylor, Toby and Smith
        </p>
        <p className="pb-2 text-xs font-bold leading-tight">
          {/* {title} */}
          Photography Masterclass: A Complete Guide to Photography
        </p>
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
            {/* {offer}%<span className="ml-1">off</span> */}
            30%<span className="ml-1">off</span>
          </span>
        </div>
        <div className="pt-2 pb-2 text-[11px] text-[#878787]">
          Gerard, MSC, 5 Years of Experience
          <div className="flex">
            <div className="svg_icon mt-[3px] mr-[5px] inline-block w-[9px] text-[#0F6378]">
              <CalendarIcon />
            </div>
            <div>
              Meets once, Over 4 weeks <br />
              Mon Sep 13, 6:00-6:30pm, + 19 more times
            </div>
          </div>
        </div>
        <div className="text-right text-sm font-bold">
          From
          {/* <span className="ml-2 text-lg">${price}</span> */}
          <span className="ml-2 text-lg">$420</span>
          <span className="ml-[3px] text-xs font-medium">/ class</span>
        </div>
      </div>
    </motion.a>
  </Link>
);
export default Workshop;
