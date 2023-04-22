/* eslint react/jsx-wrap-multilines: "off" */
import type { NextPage } from 'next';
import Head from 'next/head';
import { serviceData } from '../src/utilities/dummy-api';

import ProfileBanner from '../src/components/new-profile/ProfileBanner';
import SessionInfoGrid from '../src/components/common/SessionInfoGrid';
import CourseDetails from '../src/components/new-profile/CourseDetails';
import Reviews from '../src/components/common/Reviews';
import GoodToKnow from '../src/components/new-profile/GoodToKnow';
import ServicesSlider from '../src/components/common/ServicesSlider';

import BoxIcon from '../public/icons/box.svg';
import TimerIcon from '../public/icons/recently-viewed.svg';
import HowToParticipate from '../src/components/new-profile/HowToParticipate';
import MyExperience from '../src/components/new-profile/MyExperience';
import MyEducation from '../src/components/new-profile/MyEducation';
import Certifications from '../src/components/new-profile/Certifications';

const NewProfile: NextPage = () => (
  <>
    <Head>
      <title>New Profile - Mentor Ocean</title>
    </Head>
    <div className="bg-[#FBFBFB]">
      <ProfileBanner />

      <SessionInfoGrid />

      <CourseDetails />

      <Reviews />

      <GoodToKnow />

      <HowToParticipate />

      <MyExperience />

      <MyEducation />

      <Certifications />

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

export default NewProfile;
