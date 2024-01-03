import React from "react";

export const Catalogue = () => {
  return (
    <div className="bg-[#fafafc] flex justify-center px-4 sm:px-14 pb-0 lg:pb-20 pt-0 lg:pt-14">
      <div className="flex flex-col px-8 container mx-auto">
        <div className="flex justify-start mb-20">
          <i className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold pr-6">
            目录
          </i>
          <i className="text-sky-600 text-3xl sm:text-4xl lg:text-5xl font-bold">
            CATALOGUE
          </i>
        </div>
        <div className="flex flex items-start h-fit mb-20">
          <div className="flex flex-col w-1/3 justify-center items-center">
            <div className="flex flex-col ">
              <span className="text-black text-2xl lg:text-3xl font-black mb-6">
                技术总览
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                年度作品展示
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                文章，引领未来之路
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                项目，用心和创意构建体验
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                奖项，用实力说话
              </span>
            </div>
          </div>
          <div className="flex flex-col w-1/3 justify-center items-center">
            <div className="flex flex-col ">
              <span className="text-black text-2xl lg:text-3xl font-black mb-6">
                UI设计
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                视觉设计
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                其他设计
              </span>
            </div>
          </div>
          <div className="flex flex-col w-1/3 justify-center items-center">
            <div className="flex flex-col ">
              <span className="text-black text-2xl lg:text-3xl font-black mb-6">
                摄影展示
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                人文
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                景物
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl mb-4">
                其他
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <span className="text-black lg:text-3xl font-bold pr-10 tracking-[1em] sm:tracking-[1.5em] lg:tracking-[2em]">
            Website
          </span>
          <span className="text-sky-600 lg:text-3xl font-bold tracking-[1em] sm:tracking-[1.5em] lg:tracking-[2em]">
            design
          </span>
        </div>
      </div>
    </div>
  );
};
