{
  /*数字发行物组件 */
}
{
  /*导入 React、Link、motion动画 */
}
import React from "react";
import datas from "../json/digital.json";
import { Link } from "react-router-dom";
import left from "../../icon/icon_wheat_left.svg";
import right from "../../icon/icon_wheat_right.svg";

export const DigitalDistribution = () => {
  return (
    <div className="bg-[#fafafc] w-full h-fit">
      <div className="w-full m-0 pt-4 sm:pt-14 container mx-auto px-4 sm:px-14 pb-16">
        <div className="flex justify-center">
          <img src={left} />
          <span className="text-2xl sm:text-3xl lg:text-5xl pt-2 font-bold text-[#e30000]">
            数字出版
          </span>
          <img src={right} />
        </div>
        <div className="carousel carousel-center w-full px-4 pb-14 pt-14 space-x-6 rounded-box h-full">
          {datas.map((item) => (
            <Link
              to={item.show}
              className="group carousel-item rounded-xl h-[390px] w-[260px] sm:h-[440px] sm:w-[310px] overflow-hidden shadow-xl cursor-pointer flex flex-col relative bg-[#fff] scale-100 transition duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-2xl"
              key={item.id}
            >
              <div className="h-full w-full flex justify-center items-center">
                <img
                  className="rounded-box h-full w-full overflow-hidden object-cover transition-all duration-500 ease-in-out scale-125 group-hover:-rotate-[6deg] transform-gpu"
                  src={item.img}
                />
              </div>
              <div className="absolute transition-all duration-500 ease-in-out right-0 -bottom-20 group-hover:bottom-0 left-0">
                <div className="h-fit w-full p-4 bg-yellow-400">
                  <span className="text-xl text-black">{item.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
