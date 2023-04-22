/* eslint react/jsx-wrap-multilines: "off" */
import type { NextPage } from 'next';
import Head from 'next/head';
import { serviceData } from '../src/utilities/dummy-api';

import BannerSection from '../src/components/list-page/BannerSection';
import ExperienceGrid from '../src/components/list-page/ExperienceGrid';
import SubCategoriesSlider from '../src/components/list-page/SubCategoriesSlider';
import ListFilters from '../src/components/list-page/ListFilters';
import ServicesSlider from '../src/components/common/ServicesSlider';
import PopularCategorySlider from '../src/components/list-page/PopularCategorySlider';
import AdBanner from '../src/components/list-page/AdBanner';
import PopularLeadershipLarge from '../src/components/list-page/PopularLeadershipLarge';

const ListPage: NextPage = () => (
  <>
    <Head>
      <title>List Page - Mentor Ocean</title>
    </Head>
    <div className="bg-white">
      <BannerSection />

      <PopularLeadershipLarge />

      <div className="hidden md:block">
        <ExperienceGrid />
      </div>

      <SubCategoriesSlider />

      <ListFilters />

      <PopularCategorySlider />

      <ServicesSlider
        sliderId="other_services_slider"
        title={
          <h2 className="mr-7 inline-flex flex-wrap items-center text-[20px] font-bold text-black md:flex-nowrap md:text-[24px]">
            <span className="mr-2">Experiences for</span>
            <span className="text-[#1589C1]">One Days Trips with Mentors</span>
          </h2>
        }
        data={serviceData}
        useLine={false}
      />

      <div className="hidden md:block">
        <AdBanner />
      </div>

      <ServicesSlider
        sliderId="other_mentor_services_slider"
        title={
          <div>
            <h2 className="mr-7 inline-flex flex-wrap items-center text-[20px] font-bold text-black md:flex-nowrap md:text-[24px]">
              <span className="mr-2">Explore with a</span>
              <span className="mr-2 text-[#1589C1]">Mentors</span>
              <span>of your Choice</span>
            </h2>
            <div className="mt-2 text-xs text-[#616161] md:text-base">
              Learn about their personal stories, and find out how you can
              explore together
            </div>
          </div>
        }
        data={serviceData}
        useLine={false}
      />
    </div>
  </>
);

export default ListPage;
