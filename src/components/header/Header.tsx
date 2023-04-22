import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { SecondaryNav } from '../../utilities/types';
import { categoryMenuItems, states } from '../../utilities/dummy-api';
import useViewport from '../../hooks/useViewport';
import { decrementItem, incrementItem } from '../../utilities/helpers';
import HiddenMenuPrimary from './HiddenMenuPrimary';
import HiddenMobileMenu from './HiddenMobileMenu';

import SearchIcon from '../../../public/icons/search.svg';
import SearchBlackIcon from '../../../public/icons/search-black.svg';
import EnvelopeIcon from '../../../public/icons/envelope.svg';
import TeachIcon from '../../../public/icons/teach.svg';
import BarIcon from '../../../public/icons/bar.svg';
import UserGreenIcon from '../../../public/icons/user-green.svg';
import CoinIcon from '../../../public/icons/coins.svg';
import MobileFloatingHeader from './MobileFloatingHeader';
import { OverflowContext } from '../../context/overflowContext';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openPanel, setOpenPanel] = useState<number>(0);
  const [totalAdults, setTotalAdults] = useState<number>(0);
  const [totalChildren, setTotalChildren] = useState<number>(0);
  const [totalInfants, setTotalInfants] = useState<number>(0);
  const [when, setWhen] = useState<Date | null>(new Date());
  const hasNotifications = true;
  const [secondaryMenuItems, setSecondaryMenuItems] = useState<SecondaryNav[]>([
    { id: 1, title: 'Mentors', active: true },
    { id: 2, title: 'Online Classes', active: false },
    { id: 3, title: 'Workshops', active: false },
    { id: 4, title: 'Experiences', active: false },
    { id: 5, title: 'Prime Packs', active: false },
  ]);

  const { globalOverflow, setGlobalOverflow } = useContext(OverflowContext);

  const handlePrimaryNavClick = (panelId: number) => {
    setIsOpen(true);
    setOpenPanel(panelId);
    setGlobalOverflow(true);
  };

  const handleHeaderClose = () => {
    setIsOpen(false);
    setOpenPanel(0);
    setGlobalOverflow(false);
  };

  /* eslint array-callback-return: "off" */
  /* eslint no-param-reassign: "off" */
  const handleSecondaryNavClick = (id: number) => {
    const items = [...secondaryMenuItems];
    const index = items.findIndex((item) => item.id === id);
    const otherItems = items.filter((item) => item.id !== id);

    items[index].active = true;
    otherItems.map((item) => {
      item.active = false;
    });
    setSecondaryMenuItems(items);
  };

  const handleIncrement = (type: string) => {
    if (type === 'adults') {
      const value = incrementItem(totalAdults);
      setTotalAdults(value);
    } else if (type === 'child') {
      const value = incrementItem(totalChildren);
      setTotalChildren(value);
    } else if (type === 'infants') {
      const value = incrementItem(totalInfants);
      setTotalInfants(value);
    }
  };

  const handleDecrement = (type: string) => {
    if (type === 'adults') {
      const value = decrementItem(totalAdults);
      setTotalAdults(value);
    } else if (type === 'child') {
      const value = decrementItem(totalChildren);
      setTotalChildren(value);
    } else if (type === 'infants') {
      const value = decrementItem(totalInfants);
      setTotalInfants(value);
    }
  };

  const handleDateChange = (date: Date | null) => {
    setWhen(date);
  };

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setOpenPanel(0);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const { width } = useViewport();

  return (
    <div>
      {width > 1023 ? (
        <>
          <header
            id="header"
            className={`relative z-10 bg-white pt-4 shadow-lg transition-all duration-200 ease-in ${
              isOpen ? 'pb-[105px]' : 'pb-4'
            }`}
          >
            <div className="mx-auto px-[15px] lg:max-w-[1024px] lg:px-5 xl:max-w-[1200px]">
              <div className="relative flex items-center justify-between">
                <div className="md:w-[166px] lg:w-3/12 xl:w-1/3">
                  <Link href="/">
                    <a className="focus-green relative z-10 hidden py-3 text-left lg:inline-flex">
                      <Image
                        src="/mentor-ocean-logo.svg"
                        width={190}
                        height={34}
                        alt="Mentor Ocean"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="focus-green relative z-10 inline-flex py-3 text-left lg:hidden">
                      <Image
                        src="/logo-icon-part.svg"
                        width={45}
                        height={34}
                        alt="Mentor Ocean"
                      />
                    </a>
                  </Link>
                </div>
                <div className="w-5/12 xl:w-1/3">
                  <div
                    className={`header_center_menu group flex origin-top transform items-center justify-between rounded-full border border-[#E5E7EB] bg-white shadow-md transition duration-200 ease-in hover:shadow-lg ${
                      isOpen
                        ? 'invisible translate-y-8 scale-150 opacity-0'
                        : 'visible translate-y-0 scale-100 opacity-100'
                    }`}
                  >
                    <button
                      type="button"
                      className="header_center_menu_btn text-black"
                      onClick={() => handlePrimaryNavClick(1)}
                    >
                      What
                    </button>
                    <button
                      type="button"
                      className="header_center_menu_btn"
                      onClick={() => handlePrimaryNavClick(2)}
                    >
                      Where
                    </button>
                    <button
                      type="button"
                      className="header_center_menu_btn"
                      onClick={() => handlePrimaryNavClick(3)}
                    >
                      When
                    </button>
                    <button
                      type="button"
                      className="header_center_menu_btn flex max-w-[110px] items-center justify-center gap-3 pl-3 after:hidden"
                      onClick={() => handlePrimaryNavClick(4)}
                    >
                      Who
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#288890]">
                        <span className="w-5">
                          <SearchIcon />
                        </span>
                      </span>
                    </button>
                  </div>
                  <HiddenMenuPrimary
                    menuItems={secondaryMenuItems}
                    isOpen={isOpen}
                    panel={openPanel}
                    onNavChange={handleSecondaryNavClick}
                    categoryMenu={categoryMenuItems}
                    states={states}
                    adults={totalAdults}
                    child={totalChildren}
                    infants={totalInfants}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    when={when}
                    onDateChange={handleDateChange}
                  />
                </div>

                <div className="md:w-[166px] lg:w-3/12 xl:w-1/3">
                  <div className="flex items-center justify-end gap-5">
                    <button
                      type="button"
                      className={`focus-green relative hidden xl:flex ${
                        hasNotifications
                          ? 'after:absolute after:-top-[1px] after:-right-[2px] after:h-[6px] after:w-[6px] after:rounded-full after:bg-[#FD61AD]'
                          : ''
                      }`}
                    >
                      <span className="w-5">
                        <EnvelopeIcon />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="focus-green relative hidden items-center gap-[6px] font-bold xl:flex"
                    >
                      Teach
                      <span className="w-5">
                        <TeachIcon />
                      </span>
                    </button>

                    <Menu as="div" className="relative">
                      <Menu.Button className="focus-green flex h-[45px] w-[85px] items-center justify-center gap-3 rounded-full border border-[#E5E7EB] bg-white pl-2 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg focus-visible:rounded-full focus-visible:ring-offset-0">
                        <span className="w-[18px]">
                          <BarIcon />
                        </span>

                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full">
                          <UserGreenIcon />
                        </span>
                      </Menu.Button>
                      <Menu.Items className="focus-green absolute top-14 w-[220px] rounded-lg bg-white py-2 shadow-spread">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={`block rounded-md px-5 py-[9px] text-left text-sm text-[#515151] ${
                                active && 'bg-[#f0efef]'
                              }`}
                              href="/login"
                            >
                              Login
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={`block rounded-md px-5 py-[9px] text-left text-sm text-[#515151] ${
                                active && 'bg-[#f0efef]'
                              }`}
                              href="/sign-up"
                            >
                              Sign Up
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={`block rounded-md px-5 py-[9px] text-left text-sm text-[#515151] ${
                                active && 'bg-[#f0efef]'
                              }`}
                              href="/my-account"
                            >
                              My Account
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>

                    <div className="flex items-center justify-center gap-1">
                      <span className="flex items-center justify-center">
                        <span className="w-4">
                          <CoinIcon />
                        </span>
                      </span>
                      <span className="text-lg font-semibold text-[#17A966]">
                        ₹123
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {isOpen && (
            <div
              role="button"
              className="fixed top-0 left-0 z-[1] h-full w-full cursor-auto bg-black opacity-10"
              onClick={handleHeaderClose}
              onKeyUp={handleHeaderClose}
              tabIndex={0}
            >
              <span className="invisible opacity-0">dismiss</span>
            </div>
          )}
        </>
      ) : (
        <>
          <style>
            {`
              body {
                overflow: ${globalOverflow ? 'hidden' : 'auto'};
              }
            `}
          </style>
          <header className="fixed top-0 left-0 z-[31] w-full">
            <div className="px-[15px]">
              <button
                type="button"
                onClick={() => handlePrimaryNavClick(1)}
                className={`mt-2 flex w-full items-center rounded-full border border-[#E5E7EB] bg-white py-2 pl-[10px] pr-5 ${
                  globalOverflow ? 'hidden' : ''
                }`}
                style={{
                  boxShadow: '0 3px 10px rgba(0, 0, 0, .10)',
                }}
              >
                <div className="item flex h-10 w-10 justify-center rounded-full border-2 border-[#E5E7EB]">
                  <div className="svg_icon flex w-5 shrink-0 items-center justify-center text-transparent">
                    <SearchBlackIcon />
                  </div>
                </div>
                <div className="pl-3 text-left">
                  <p className="font-sm font-semibold leading-tight">What?</p>
                  <div className="text-[##717171] text-[12px] opacity-75">
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Category
                    </span>
                    <span className="px-[6px]">•</span>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Where
                    </span>
                    <span className="px-[6px]">•</span>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      When
                    </span>
                    <span className="px-[6px]">•</span>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Who
                    </span>
                  </div>
                </div>
              </button>
            </div>

            <HiddenMobileMenu
              menuItems={secondaryMenuItems}
              isOpen={isOpen}
              onClose={handleHeaderClose}
              onNavChange={handleSecondaryNavClick}
              categoryMenu={categoryMenuItems}
              states={states}
              adults={totalAdults}
              child={totalChildren}
              infants={totalInfants}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              when={when}
              onDateChange={handleDateChange}
            />
          </header>
          <MobileFloatingHeader />
        </>
      )}
    </div>
  );
};

export default Header;
