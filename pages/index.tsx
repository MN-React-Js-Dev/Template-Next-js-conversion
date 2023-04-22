import type { NextPage } from 'next';

import BannerSection from '../src/components/home/BannerSection';
import MentorSlider from '../src/components/home/MentorSlider';
import PopularLeadership from '../src/components/home/PopularLeadership';
// import EducationCategories from '../src/components/home/EducationCategories';
import Sponsors from '../src/components/home/Sponsors';
import Timeline from '../src/components/home/Timeline';
import UpcomingLiveSessions from '../src/components/home/UpcomingLiveSessions';
import Creativity from '../src/components/home/Creativity';
import PersonalizeTour from '../src/components/home/PersonalizeTour';
import CreativeGoals from '../src/components/home/CreativeGoals';
import DarkThreeColumns from '../src/components/common/DarkThreeColumns';
import ServicesSlider from '../src/components/common/ServicesSlider';
import MentorTalks from '../src/components/home/MentorTalks';
import CollegeLogos from '../src/components/home/CollegeLogos';
import PersonalCareer from '../src/components/home/PersonalCareer';
import StopDebut from '../src/components/home/StopDebut';

import BoxIcon from '../public/icons/box.svg';
import { mentorSliderData } from '../src/utilities/dummy-api';

/* eslint react/jsx-wrap-multilines: "off" */
const Home: NextPage = () => (
  <div>
    <BannerSection />

    <Sponsors />

    <Timeline />

    <PopularLeadership />

    <MentorSlider />

    <UpcomingLiveSessions />

    <ServicesSlider
      sliderId="most_popular_mentors_slider"
      title={
        <h2 className="mr-7 inline-flex items-center text-[20px] font-bold text-black md:text-[24px]">
          <span className="svg_icon mr-4 w-[28px] text-transparent">
            <BoxIcon />
          </span>
          Most popular
          <span className="ml-2 text-[#1589C1]">Mentors</span>
        </h2>
      }
      data={mentorSliderData}
    />

    <Creativity />

    {/* <EducationCategories /> */}

    <PersonalizeTour />

    <CreativeGoals />

    <DarkThreeColumns
      greenText="AN IMMERSIVE LEARNING EXPERIENCE"
      title="How Does it Work"
      subtitle="Monthly classes go beyond a playlist of videos. The classroom has been fully digitzied, allowing you to get a hands-on learning experience and community from anywhere."
    />

    <MentorTalks />

    <CollegeLogos />

    <PersonalCareer />

    <StopDebut />
  </div>
);

export default Home;
