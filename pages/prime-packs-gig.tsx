import type { NextPage } from 'next';
import Head from 'next/head';
import { serviceData } from '../src/utilities/dummy-api';

import PrimePackBanner from '../src/components/prime-packs-gig/PrimePackBanner';
import GreenBlueGradient from '../src/components/common/GreenBlueGradient';
import SessionInfoGrid from '../src/components/common/SessionInfoGrid';
import ServicesSlider from '../src/components/common/ServicesSlider';
import FrequentlyAskedQuestions from '../src/components/common/FAQ';
import DarkThreeColumns from '../src/components/common/DarkThreeColumns';

import Reviews from '../src/components/common/Reviews';

import BoxIcon from '../public/icons/box.svg';
import TimerIcon from '../public/icons/recently-viewed.svg';
import CourseDetails from '../src/components/prime-packs-gig/CourseDetails';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-wrap-multilines: "off" */
const PrimePacks: NextPage = () => (
  <>
    <Head>
      <title>Prime Packs - Mentor Ocean</title>
    </Head>
    <div className="bg-[#FBFBFB]">
      <PrimePackBanner />

      <GreenBlueGradient />

      <SessionInfoGrid />

      <CourseDetails />

      <DarkThreeColumns
        greenText="AN IMMERSIVE LEARNING EXPERIENCE"
        title="A better kind of online class"
        subtitle="Monthly classes go beyond a playlist of videos. The classroom has been fully digitzied, allowing you to get a hands-on learning experience and community from anywhere."
      />

      <Reviews />

      <FrequentlyAskedQuestions />

      <div className="pb-14" />

      <ServicesSlider
        sliderId="other_services_slider"
        title={
          <h2 className="mr-7 inline-flex items-center text-[20px] font-bold text-black md:text-[24px]">
            Other Services by Abdullah Faza Farhan
          </h2>
        }
        data={serviceData}
      />

      <ServicesSlider
        sliderId="more_services_slider"
        title={
          <h2 className="mr-7 inline-flex items-center text-[20px] font-bold text-black md:text-[24px]">
            <span className="svg_icon mr-4 w-[28px] text-transparent">
              <BoxIcon />
            </span>
            More Services Like this
          </h2>
        }
        data={serviceData}
      />

      <ServicesSlider
        sliderId="recent_browsing_slider"
        title={
          <h2 className="mr-7 inline-flex items-center text-[20px] font-bold text-black md:text-[24px]">
            <span className="svg_icon mr-4 w-[28px] text-[#17A966]">
              <TimerIcon />
            </span>
            Recent Browsing
          </h2>
        }
        data={serviceData}
      />
    </div>
  </>
);

export default PrimePacks;
