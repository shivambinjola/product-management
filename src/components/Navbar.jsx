import React, { useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import commandIcon from "../assets/command.png";
import helpIcon from "../assets/help-icon.svg";
import uploadIcon from "../assets/upload-icon.svg";
import documentIcon from "../assets/document-icon.svg";
import notificationIcon from "../assets/notification-icon.svg";
import profileIcon from "../assets/profile-icon.svg";
import dropdownIcon from "../assets/dropdown.svg";
import homeIcon from "../assets/home-icon.svg";
import downArrowIcon from "../assets/downarrow-icon.svg";

import homesecIcon from "../assets/homesec-icon.svg";
import catlogueIcon from "../assets/catalogue.svg";
import procurementIcon from "../assets/procurement.svg";
import calenderIcon from "../assets/calender.svg";
import truckIcon from "../assets/truck.svg";
import packageIcon from "../assets/package.svg";
import dataIcon from "../assets/data.svg";
import administrationIcon from "../assets/Administration.svg";
import invoiceIcon from "../assets/Invoice.svg";
import reportsIcon from "../assets/reports.svg";
import analyticsIcon from "../assets/analytics.svg";

import processbarIcon from "../assets/processbar.svg";

const Icons = [
  { img: homesecIcon },
  { img: catlogueIcon },
  { img: procurementIcon },
  { img: calenderIcon },
  { img: truckIcon },
  { img: packageIcon },
  { img: dataIcon },
  { img: administrationIcon },
  { img: invoiceIcon },
  { img: reportsIcon },
  { img: analyticsIcon },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={` fixed z-50 w-full bg-black/20 h-[100%] bottom-0 top-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className={`w-[63.92px] h-[100%] flex flex-col items-center gap-5  pt-3 pb-24 shadow-lg bg-white  lg:items-center lg:w-auto  absolute`}
        >
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
          <img src="./logo.svg" alt="" />
          <div className="flex flex-col items-center">
            {Icons.map((item, id) => (
              <div
                key={id}
                className={`w-[44.38px] h-[44.38px] rounded-[13.11px] mt-7 xs:mt-1 ${
                  id === 0 && "bg-[#F2F1FE] "
                } flex flex-col items-center justify-center`}
              >
                <img src={item.img} alt="" />
                {id === 6 && (
                  <p className="w-[5.1px] h-[5.1px] rounded-full bg-[#FC5C65] mt-1"></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white lg:relative fixed w-full z-50">
        <section className="flex justify-between items-center border-b-[1px] border-[#F3F6F9] py-2 md:px-4 sm:px-2 xs:px-2">
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${
                  isOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center lg:w-[429.28px] h-[35px] text-[#67768E] border-[1px] border-[#DAE4EE] px-3 justify-between">
            <div className="flex items-center">
              <img className="w-[16px] h-[16px]" src={searchIcon} alt="" />
              <input
                className="pl-2 outline-none placeholder:font-normal text-[13px] lg:w-[250px] h-[20px] md:w-[100px] xs:w-[100px]"
                placeholder="Search POs, ASNs, & pages etc"
              />
            </div>
            <button className="hidden bg-[#7074941A]/10 rounded-[4px] w-[122.12px] h-[21.84px] text-xs  font-medium lg:flex items-center justify-center">
              <spna>⌘</spna>
              +k &nbsp; <span className="text-[8px]">/</span>&nbsp;&nbsp;
              <span className="">⌘</span>
              +Shift+k
            </button>
          </div>
          <div className="flex items-center ">
            <div className="flex items-center md:space-x-8 sm:space-x-4 xs:space-x-2 gf:hidden">
              <img className="" src={helpIcon} alt="" />
              <img className="" src={uploadIcon} alt="" />
              <div className="relative">
                <div className="absolute -right-3 -top-[5px] bg-[#5D5FEF] w-[20px] h-[15px] rounded-[3px] text-white text-[10px] font-bold flex items-center justify-center xs:text-[5px] xs:w-[10px] xs:right-0">
                  20
                </div>
                <img className="" src={documentIcon} alt="" />
                <img className="mt-[1px]" src={processbarIcon} alt="" />
              </div>
              <div className="relative">
                <div className="absolute -right-4 -top-[5px] bg-[#5D5FEF] w-[25px] h-[15px] rounded-[3px] text-white text-[10px] font-bold flex items-center justify-center xs:text-[5px] xs:w-[15px] xs:right-0">
                  120
                </div>
                <img className="" src={notificationIcon} alt="" />
              </div>
            </div>
            <div className="w-[2px] h-[17px] bg-[#B7C6DE] md:ml-9 md:mr-5 sm:ml-5 sm:mr-2 xs:hidden"></div>
            <div className="flex items-center space-x-2 xs:ml-2">
              <img className="w-[31.4px] h-[31.4px]" src={profileIcon} alt="" />
              <div className="xs:hidden">
                <p className="text-sm font-semibold text-[#23235F] flex items-center gap-1 xs:text-[9px]">
                  Vmart-Procurement Team{" "}
                  <span>
                    <img className="" src={dropdownIcon} alt="" />
                  </span>
                </p>
                <p className="text-xs font-medium text-[#67768E] xs:text-[9px]">
                  Ashish Kumar Singla
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-2 flex justify-between items-center gf:px-2">
          <div className="flex text-xs items-center gap-3 xs:text-[9px] xs:gap-2 gf:text-[5px]">
            <p className="flex items-center font-medium text-[#4B5563] gap-2">
              <span>
                {" "}
                <img className="" src={homeIcon} alt="" />
              </span>{" "}
              Home
            </p>{" "}
            <div className="text-[10px] xs:text-[5px]">/</div>
            <div className="w-[] h-[] px-[8px] py-[5px] border-[1px] border-[#E5E7EB] rounded-lg gf:px-1">
              <p className="flex items-center gap-2 font-medium text-[#4B5563]">
                Sales Order{" "}
                <span>
                  <img className="" src={downArrowIcon} alt="" />
                </span>
              </p>
            </div>
            <div className="text-[10px] xs:text-[5px]">/</div>
            <p className="text-[#1F2937] font-semibold">Product Catalogue</p>
          </div>
          <button className="bg-[#5D5FEF] sm:w-[158px] h-[30px] text-xs font-semibold text-white xs:text-[9px] xs:px-2 gf:text-[5px] gf:h-[20px]">
            PLACE ORDER
          </button>
        </section>
      </div>
    </>
  );
};

export default Navbar;
