import React from "react";

export const Bottom = () => {
  return (
    <div className="box-border bg-[#f7f7fa] flex justify-between items-center border-t-[1px] border-gray-400 p-4 overflow-hidden flex-wrap max-w-[1400px] ">
      <div className="text-center text-xl sm:text-xl lg:text-2xl text-black flex">
        <span className="p-1 mr-1">©2023 - 2024 By</span>
        <span className="font-bold whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out">
          灵绝
        </span>
      </div>
    </div>
  );
};
