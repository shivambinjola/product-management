import logo from "./logo.svg";
import "./App.css";
import homeIcon from "./assets/homesec-icon.svg";
import catlogueIcon from "./assets/catalogue.svg";
import procurementIcon from "./assets/procurement.svg";
import calenderIcon from "./assets/calender.svg";
import truckIcon from "./assets/truck.svg";
import packageIcon from "./assets/package.svg";
import dataIcon from "./assets/data.svg";
import administrationIcon from "./assets/Administration.svg";
import invoiceIcon from "./assets/Invoice.svg";
import reportsIcon from "./assets/reports.svg";
import analyticsIcon from "./assets/analytics.svg";

import Navbar from "./components/Navbar";

import searchIcon from "./assets/search.svg";
import gridIcon from "./assets/grid.svg";
import listIcon from "./assets/list.svg";
import framIcon from "./assets/Frame.svg";
import sanIcon from "./assets/scan-icon.svg";
import downArrowIcon from "./assets/downarrow-black.svg";
import settingIcon from "./assets/setting.svg";
import ProductCard from "./components/ProductCard";
import customerIcon from "./assets/customer-icon.svg";
import deliveryIcon from "./assets/delivery-location-icon.svg";
import dispatchIcon from "./assets/dispatch-location-icon.svg";
import discountIcon from "./assets/discount.svg";

function App() {
  const Icons = [
    { img: homeIcon },
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

  return (
    <div className="flex bg-[#F3F4F9] 2xl:h-[100vh]">
      {/* sidebar */}
      <div className="hidden bg-[#FCFAFF] w-[63.92px] lg:flex flex-col items-center gap-5  pt-3 pb-24 shadow-lg">
        <img src="./logo.svg" alt="" />
        <div className="">
          {Icons.map((item, id) => (
            <div
              key={id}
              className={`w-[44.38px] h-[44.38px] rounded-[13.11px] mt-7 ${
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
      <div className="grow ">
        <Navbar />
        <main className=" flex md:flex-row sm:flex-col xs:flex-col justify-between sm:p-2 md:space-y-0 sm:space-y-10 xs:space-y-5 xs:p-2 xl:p-[1%] lg:p-4 sm:pt-32 sm:px-4 xs:px-4 xs:pt-32 ">
          {/* first-bar */}
          <div className="space-y-3 ">
            <div className="flex justify-between xl:w-[99%] xl:bg-transparent sm:bg-white">
              <div className="flex xl:gap-[4vw] sm:gap-2 p-[10px] bg-white xs:gap-2">
                <div className=" flex items-center xl:space-x-2 md:space-x-1 sm:space-x-2">
                  <div className="flex items-center xl:w-[16vw] lg:w-[125px]  border-[1px] border-[#DAE4EE] pl-2 md:w-[80px] xs:w-[80px]">
                    <img
                      className="w-[11.95px] h-[11.69px] xs:w-[8px] xs:h-[8px]"
                      src={searchIcon}
                      alt=""
                    />
                    <input
                      placeholder="Search Products"
                      className="text-xs outline-none text-[#67768E] font-normal xl:w-[20vw] lg:w-[100px] h-[30px] pl-2 lg:tex-xs md:text-[9px] md:w-[50px] xs:w-[50px] xs:text-[6px] xs:h-[12px]"
                    />
                  </div>
                  <div className="lg:flex hidden ">
                    <div className="bg-[#0F172A] xl:w-[30px] xl:h-[30px] flex items-center justify-center xl:p-0 lg:p-1">
                      <img className="" src={gridIcon} alt="" />
                    </div>
                    <div className="bg-[#F4F4F4] xl:w-[30px] xl:h-[30px] flex items-center justify-center xl:p-0 lg:p-1">
                      <img className="" src={listIcon} alt="" />
                    </div>
                    <div className="bg-[#F4F4F4] xl:w-[30px] xl:h-[30px] flex items-center justify-center xl:p-0 lg:p-1">
                      <img className="" src={framIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 gf:hidden">
                  <div className="border-[1px] border-[#DAE4EE] xl:w-[105px] xl:h-[30px] lg:text-xs font-medium text-[#7E8084] xl:px-[9px] sm:px-1 xl:pt-[6px] md:text-[9px] sm:text-[11px] xs:text-[6px]">
                    Add <br className="xl:hidden" /> Remarks
                  </div>
                  <div className="border-[1px] border-[#DAE4EE] xl:w-[124px] xl:h-[30px] lg:text-xs font-normal text-[#7E8084] xl:px-[9px] sm:px-1 xl:pt-[6px] md:text-[9px] sm:text-[11px] xs:text-[6px]">
                    Show by : <br className="xl:hidden" />
                    <span className="xl:ml-2 text-[#0F172A] font-semibold">
                      Sizes
                    </span>
                  </div>
                  <div className="border-[1px] border-[#DAE4EE] text-lg flex items-center justify-center w-[30px] h-[30px] xs:text-[6px] xs:w-[10px] xs:h-[10px]">
                    +
                  </div>
                </div>
              </div>
              <div className="flex items-center xs:bg-white">
                <div className="flex xl:justify-between xl:w-[24vw] p-[11px] bg-white md:gap-2 sm:gap-5 xs:px-[4px] xs:py-[14px] xs:gap-1">
                  <p className="xl:text-xs font-normal text-[#888A8E] flex xl:gap-2 items-center lg:text-[11px] sm:gap-1 md:text-[9px] sm:text-[11px] xs:text-[6px] xs:gap-1">
                    <span>
                      <img
                        className="xl:w-[20.23px] xl:h-[20.23px] lg:w-[15px] lg-h-[15px] xs:w-[10px] xs:h-[10px]"
                        src={sanIcon}
                        alt=""
                      />
                    </span>
                    Scan Product by...
                  </p>
                  <div className="xl:text-xs font-semibold flex items-center justify-center xl:gap-2 bg-[#D9D9D980]/50 xl:w-[93.15px] h-[28.3px] lg:text-[11px] lg:w-[75px] lg:gap-1 md:text-[9px] md:w-[60px] sm:text-[11px] sm:w-[80px] xs:text-[6px] xs:h-[20px] xs:px-1 gf:h-[20px]">
                    {" "}
                    Design No{" "}
                    <span>
                      <img src={downArrowIcon} alt="" />
                    </span>
                  </div>
                </div>
                <div className="bg-white ml-[1px] flex items-center p-[14px] xs:p-[1px] xs:py-[8px]">
                  <img src={settingIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="grid xl:grid-cols-5 lg:grid-cols-3 xl:gap-1 lg:gap-9 md:grid-cols-2 md:gap-y-4 md:gap-x-10 xl:w-full lg:w-[630px] md:w-[410px] sm:w-[70vw] sm:grid-cols-2 sm:gap-y-4 xs:grid-cols-2 xs:gap-4 gf:grid-cols-1 gf:px-10 ">
              <ProductCard cardno={1} />
              <ProductCard cardno={2} />
              <ProductCard cardno={3} />
              <ProductCard cardno={4} />
              <ProductCard cardno={5} />
            </div>
          </div>
          <div className="xl:w-[16vw] h-[781px] p-3 bg-white lg:w-[230px] ">
            <div className="space-y-2">
              <div className="bg-[#EDEEF1] py-2 px-3 gap-2 flex">
                <img
                  className="w-[16px] h-[16px] mt-1"
                  src={customerIcon}
                  alt=""
                />
                <div>
                  <p className="text-[#888A8E] text-[10px] font-normal">
                    Customer
                  </p>
                  <p className="text-[#0F172A] text-xs font-semibold">
                    SRG India Pvt Ltd
                  </p>
                </div>
              </div>
              <div className="bg-[#EDEEF1] py-2 px-3 gap-2 flex">
                <img
                  className="w-[19.32px] h-[6.96px] mt-1"
                  src={deliveryIcon}
                  alt=""
                />
                <div>
                  <p className="text-[#888A8E] text-[10px] font-normal">
                    Delivery Location
                  </p>
                  <p className="text-[#0F172A] text-xs font-semibold">
                    Gurugram-017838
                  </p>
                </div>
              </div>
              <div className="bg-[#EDEEF1] py-2 px-3 gap-2 flex">
                <img
                  className="w-[19.32px] h-[6.96px] mt-1"
                  src={dispatchIcon}
                  alt=""
                />
                <div>
                  <p className="text-[#888A8E] text-[10px] font-normal">
                    Dispatch Location
                  </p>
                  <p className="text-[#0F172A] text-xs font-semibold">
                    Gurugram-017838
                  </p>
                </div>
              </div>
              <div className="bg-[#EDEEF1] py-[7px]  text-center text-[#7E8084] text-xs font-medium">
                Show More
              </div>
            </div>
            <hr className="mt-3" />
            <div className="mt-3">
              <p className="text-xs text-[#0F172A] font-semibold tracking-wider">
                SUMMARY
              </p>
              <div className="bg-[#D9D9D980]/50 text-center p-1 xl:px-2 text-[0.7em] text-[#0F172A] font-semibold mt-[7px]">
                #SO_DRAFT_00000017_2024
              </div>
              <div className="text-[#7E8084] flex justify-between mt-3">
                <p className="text-[11px] font-normal">Total Quantity</p>
                <p className="text-[13px] font-medium">21</p>
              </div>
              <div className="text-[#7E8084] flex justify-between mt-3">
                <p className="text-[11px] font-normal">Total Items</p>
                <p className="text-[13px] font-medium">7</p>
              </div>
              <div className="text-[#7E8084] flex justify-between mt-3">
                <p className="text-[11px] font-normal">Order Quantity</p>
                <p className="text-[13px] font-medium">21</p>
              </div>
              <div className="bg-[#F7F8FB] text-[#0F172A] rounded-[5px] flex justify-between px-3 mt-3 py-2">
                <p className="text-[11px] font-normal">Total Bag Price</p>
                <p className="text-[13px] font-semibold">₹ 23031.808</p>
              </div>
            </div>
            <hr className="mt-3" />
            <div className="mt-3">
              <p className="text-xs text-[#0F172A] font-semibold tracking-wider">
                PRICE BREAKUP
              </p>

              <div className="text-[#7E8084] flex justify-between mt-3">
                <p className="text-[11px] font-normal">IGST</p>
                <p className="text-[13px] font-medium">₹ 230.80</p>
              </div>
              <div className="text-[#7E8084] flex justify-between mt-2">
                <p className="text-[11px] font-normal">CGST</p>
                <p className="text-[13px] font-medium">₹ 230.80</p>
              </div>
              <div className="text-[#7E8084] flex justify-between mt-2">
                <p className="text-[11px] font-normal">SGST</p>
                <p className="text-[13px] font-medium">₹ 230.80</p>
              </div>
              <div className="text-[#7E8084] flex justify-between mt-2">
                <p className="text-[11px] font-normal">CESS</p>
                <p className="text-[13px] font-medium">₹ 0.00</p>
              </div>
              <div className="bg-[#F7F8FB] text-[#52924C] rounded-[5px] flex justify-between px-3 mt-2 py-2">
                <p className="text-[11px] font-normal flex gap-2">
                  <span>
                    <img src={discountIcon} alt="" />
                  </span>
                  Discount
                </p>
                <p className="text-[13px] font-semibold">₹ 690.00</p>
              </div>
              <div className="bg-[#F7F8FB] text-[#0F172A] rounded-[5px] flex justify-between px-3 mt-3 py-2">
                <p className="text-[11px] font-normal">Total Amount</p>
                <p className="text-[13px] font-semibold">₹ 23031.808</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
