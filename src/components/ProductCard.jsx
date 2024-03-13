import React from "react";
import TshirtImg from "../assets/t-shirt.svg";
import nextIcon from "../assets/next.svg";
import prevIcon from "../assets/Prev.svg";
import deleteIcon from "../assets/delete-icon.svg";
import editIcon from "../assets/edit-icon.svg";

const ProductCard = ({ cardno }) => {
  return (
    <div className="xl:w-[94%] w-[204px] sm:h-[377.42px] sm:pb-0 bg-white xs:w-[170px] xs:pb-2">
      <div className="relative">
        <div className="flex items-center justify-between absolute w-full px-2 mt-2">
          <div className="w-[18px] h-[18px] bg-white border-[1.5px] border-[#C7D3DF]"></div>
          <p className="text-white bg-black rounded-[2px] p-[1px] h-4 text-[9px] font-semibold">
            10% Off
          </p>
        </div>
        {cardno === 1 && (
          <div className="flex justify-between absolute w-full top-16">
            <img src={prevIcon} />
            <img src={nextIcon} />
          </div>
        )}

        <div className="flex w-full absolute top-32 gap-1 px-3 xs:top-[110px]">
          <div className="w-[4.5px] h-[4.5px] rounded-full  bg-[#5F677A]"></div>
          <div className="w-[4.5px] h-[4.5px] rounded-full bg-[#FFFFFF66]/40"></div>
          <div className="w-[4.5px] h-[4.5px] rounded-full bg-[#FFFFFF66]/40"></div>
          <div className="w-[4.5px] h-[4.5px] rounded-full bg-[#FFFFFF66]/40"></div>
        </div>
        <div className="bg-white absolute w-full bottom-0 text-[9px] text-[#0F172A] flex gap-1 p-[8px] xs:-bottom-1">
          <div className="font-medium border-[#FC9D03] px-[1px] border-[1px] rounded-[2px] gap-1 flex items-center w-[83.77px] h-[14px]">
            <span className="w-[5.77px] h-[5.77px] bg-[#FC9D03] rounded-full"></span>
            Mustard Yellow
          </div>
          <div className="font-medium border-[#E3E4E7] px-[1px] border-[1px] rounded-[2px] gap-1 flex items-center w-[61px] h-[14px]">
            Multiplier : 5
          </div>
        </div>
        <img className="w-full" src={TshirtImg} alt="" />
      </div>
      <div className="px-3 xs:mt-1">
        <p className="text-[#74767A] text-[9px] font-normal xs:text-[6px]">
          Item Name
        </p>
        <p className="text-[#0F172A] text-xs font-medium pr-2 xs:text-[9px] ">
          Mens white check Shirt regular fit
        </p>
        <div className="mt-2 xs:mt-1">
          <p className="text-[#74767A] text-[9px] font-normal xs:text-[6px]">
            Design Number
          </p>
          <p className="text-[#0F172A] text-[11px] font-normal xs:text-[9px]">
            DN098234839
          </p>
        </div>
        <div className="flex gap-2 mt-3">
          <div className="bg-[#E3E4E7] rounded-[2px] text-[9px] font-semibold  p-1 xs:text-[6px]">
            XL
          </div>
          <div className="bg-[#E3E4E7] rounded-[2px] text-[9px] font-semibold  p-1 xs:text-[6px]">
            Instock : 100
          </div>
        </div>
        <div className="flex gap-4 mt-3 text-xs xs:text-[9px]">
          <p className="font-semibold text-[#0F172A]">₹ 799.67</p>
          <p className="font-medium text-[#A6A8AC] line-through">₹ 1299.67</p>
        </div>
        <div className="flex gap-2 mt-3 xs:mt-1">
          <div className="border-[1px] border-[#DAE4EE] w-[32px] h-[30px] flex items-center justify-center">
            <img src={deleteIcon} alt="" />
          </div>
          <div className=" w-[139px] h-[30px] bg-[#D9D9D980]/50 flex items-center justify-center">
            <p className="text-[11px] text-[#0F172A] font-bold xs:text-[9px]">
              XL
            </p>
            <div className="bg-white rounded-[40px] text-[11px] text-[#0F172A] font-medium py-[2px] px-[3%] ml-[6%] xs:text-[9px] xs:px-1">
              +5 More
            </div>
            <div className="w-[1px] ml-4 h-full bg-[#DDDEDE]"></div>
            <img className="ml-2" src={editIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
