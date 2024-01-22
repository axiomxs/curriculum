{
  /*图片展示 - 照片主页组件 */
}
{
  /*导入React */
}
import React from "react";

export const PhotosHome = () => {
  return (
    <div className="w-full h-fit bg-white overflow-hidden">
      <div className="relative flex flex-col sm:flex-col lg:flex-row-reverse ">
        <div className="w-full sm:w-full lg:w-1/2 lg:h-screen">
          <img
            src="https://telegraph-image-6cq.pages.dev/file/542354d0397c28e975cc5.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col lg:justify-center items-center sm:items-center lg:items-start w-full sm:w-full lg:w-1/2 h-screen pt-4 sm:pt-4 lg:pt-0 pb-0 lg:pb-20 px-20">
          <div className="flex w-fit mb-14 border border-[#967a47] text-[#967a47] mt-6 lg:mt-0 p-2">
            <div className="flex flex-col pt-1">
              <span>THE STORY</span>
              <small>OF THE MONTH</small>
            </div>
            <div className="divider">·</div>
            <small className="pt-1">
              January <br />
              2024
            </small>
          </div>
          <p className="text-black text-xl">By LingJue 📸</p>
          <div className="my-8 lg:my-14 leading-10">
            <span className="bg-gradient-to-r from-[#ff0f77] to-[#ff0f77] bg-no-repeat bg-[length:0px_30%] bg-left-bottom transition-[background-size] duration-[1000ms] ease-in-out text-black text-wrap text-4xl lg:text-5xl hover:bg-[length:100%_30%]">
              🎈🎈欢迎来到我的照片集 #万物可爱
            </span>
          </div>

          <p className="hidden lg:block text-black text-base">
            今年的摄影计划犹如一部精心编撰的视觉诗篇，涵盖了三个极具魅力的篇章：繁华的城市掠影、壮丽的自然景观探索以及对未来的洞察。每一主题都承载着无数潜在的惊喜瞬间，等待我们用镜头逐一揭晓。
          </p>
          <div className="flex gap-2.5 lg:mt-14">
            <p className="text-black p-1 rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out">
              摄影
            </p>
            <p className="text-black p-1 rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out">
              人像
            </p>
            <p className="text-black p-1 rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out">
              旅拍
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
