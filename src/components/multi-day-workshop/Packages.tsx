/* eslint @typescript-eslint/no-unused-vars: "off" */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint jsx-a11y/label-has-associated-control: "off" */
/* eslint react/jsx-no-duplicate-props: "off" */
import { Tab } from '@headlessui/react';

import ClockIcon from '../../../public/icons/clock-circle-filled.svg';
import UndoIcon from '../../../public/icons/undo.svg';
import CheckmarkIcon from '../../../public/icons/check-lg.svg';

const Packages = () => {
  const packages = [
    { id: 1, name: 'Basic', price: '$100', title: 'Small Web Application' },
    { id: 2, name: 'Standard', price: '$200', title: 'Medium Web Application' },
    { id: 3, name: 'Premium', price: '$300', title: 'Large Web Application' },
  ];

  return (
    <div className="w-full rounded-xl bg-white px-5 pt-7 pb-10 shadow-small lg:max-w-[375px]">
      <Tab.Group>
        <Tab.List className="flex justify-between rounded-full bg-white p-[6px] shadow-small">
          {packages.map((item) => (
            <Tab
              key={item.id}
              className={({
                selected,
              }) => `h-12 w-1/3 rounded-full text-center text-sm font-semibold transition
                ${selected ? 'bg-[#CFDBE9] bg-opacity-50' : 'bg-white'}
                `}
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-5">
          {packages.map((item, idx) => (
            <Tab.Panel key={item.id} className="abc">
              <div>
                <h4 className="text-[18px] font-bold text-black md:text-lg">
                  {item.title}
                </h4>
                <div className="pt-3 pb-5 text-sm leading-snug text-[#444]">
                  Web application consist of 2-4 database table and also 2-4 web
                  page
                </div>
                <div className="flex items-center gap-x-7">
                  <div className="flex items-center text-xs">
                    <div className="svg_icon mr-2 w-4">
                      <ClockIcon />
                    </div>
                    5 Week
                  </div>
                  <div className="mt-[1px] flex items-center text-xs">
                    <div className="svg_icon mr-2 -mt-[1px] w-3">
                      <UndoIcon />
                    </div>
                    <div>1 Revision</div>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-xs text-[#8796A0]">
                  <div className="svg_icon mr-2 w-4">
                    <CheckmarkIcon />
                  </div>
                  4k ultra HD
                </div>
                <div className="mt-2 flex items-center text-xs text-[#20BE72]">
                  <div className="svg_icon mr-2 w-4">
                    <CheckmarkIcon />
                  </div>
                  30 Seconds running time
                </div>
                <div className="border-color-[#EAEAEA] mt-6 mb-4 border-t border-b py-2 text-[18px] font-bold text-black md:text-lg">
                  Whats Included
                </div>
                <div>
                  <div className="mb-5 font-bold">Classes Starting</div>
                  <div className="flex flex-wrap gap-y-5 md:gap-y-2 lg:flex-nowrap">
                    {['1:1', 'Group', 'Private Group'].map((day) => (
                      <div
                        key={day}
                        className="flex w-full items-center lg:w-1/3"
                      >
                        <input
                          type="radio"
                          id={day}
                          name="classStarting"
                          className="h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                        />
                        <label
                          htmlFor={day}
                          className="ml-2 w-full cursor-pointer text-base md:w-auto md:text-[12px]"
                        >
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex">
                    <input
                      type="radio"
                      id="subscribe"
                      name="classStarting"
                      className="mt-1 h-6 w-6 shrink-0 cursor-pointer accent-black md:h-[18px] md:w-[18px]"
                    />
                    <label
                      htmlFor="subscribe"
                      className="ml-2 w-full cursor-pointer text-base md:w-auto md:text-[12px]"
                    >
                      <div className="font-semibold">
                        Subscribe for 3 months
                      </div>
                      <div className="text-[11px] font-medium leading-tight">
                        Save 5% every month from your 2nd order
                      </div>
                    </label>
                  </div>
                  <div className="mt-10 flex flex-col items-center">
                    <button
                      type="button"
                      className="focus-green green_btn w-full rounded-lg px-[15px] py-[10px] text-base font-bold text-white hover:shadow-xl focus-visible:ring-offset-0 lg:text-lg"
                    >
                      Continue {item.price}
                    </button>

                    <button
                      type="button"
                      className="mt-6 max-w-[150px] rounded-[5px] border border-[#444] px-[10px] py-[6px] text-sm hover:bg-[#444] hover:text-white"
                    >
                      Continue {item.price}
                    </button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Packages;
