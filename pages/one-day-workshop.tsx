import type { NextPage } from 'next';
import Head from 'next/head';
import BannerWithImageGrid from '../src/components/common/BannerWithImageGrid';
import GreenBlueGradient from '../src/components/common/GreenBlueGradient';
import SessionInfoGrid from '../src/components/common/SessionInfoGrid';
import GoodToKnow from '../src/components/common/GoodToKnow';
import DarkThreeColumns from '../src/components/common/DarkThreeColumns';
import ServicesSlider from '../src/components/common/ServicesSlider';
import ThingsToKnow from '../src/components/common/ThingsToKnow';
import WorkshopExperience from '../src/components/common/WorkshopExperience';

import BoxIcon from '../public/icons/box.svg';
import TimerIcon from '../public/icons/recently-viewed.svg';
import { serviceData } from '../src/utilities/dummy-api';
import FrequentlyAskedQuestions from '../src/components/common/FAQ';
import MentorCards from '../src/components/common/MentorCards';
import ClassSchedule from '../src/components/common/ClassSchedule';
import OngoingCourse from '../src/components/common/OngoingCourse';
import Reviews from '../src/components/common/Reviews';
import CourseDetails from '../src/components/one-day-workshop/CourseDetails';

/* eslint jsx-a11y/anchor-is-valid: "off" */
/* eslint react/jsx-wrap-multilines: "off" */
const OneDayWorkshop: NextPage = () => (
  <>
    <Head>
      <title>One Day Workshop - Mentor Ocean</title>
    </Head>
    <div className="bg-[#FBFBFB]">
      <BannerWithImageGrid />

      <GreenBlueGradient />

      <SessionInfoGrid />

      <CourseDetails />

      <GoodToKnow />

      <DarkThreeColumns
        greenText="AN IMMERSIVE LEARNING EXPERIENCE"
        title="A better kind of online class"
        subtitle="Monthly classes go beyond a playlist of videos. The classroom has been fully digitzied, allowing you to get a hands-on learning experience and community from anywhere."
      />

      <Reviews />

      <OngoingCourse />

      <ClassSchedule sliderId="available_class_schedule" />

      <MentorCards />

      <FrequentlyAskedQuestions />

      <WorkshopExperience />

      <ThingsToKnow />

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

export default OneDayWorkshop;
