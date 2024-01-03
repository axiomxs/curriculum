import React from "react";
import "../../icon/icon.css";

export const Introduction = () => {
  return (
    <div className="bg-[#fafafc] flex justify-center">
      <div className="flex flex-col lg:flex-row items-center px-8 leading-6 max-w-[1200px] container mx-auto">
        <div className="w-full lg:w-1/3 h-screen flex flex-col justify-center items-center">
          <p className="text-black text-5xl mb-6 font-black">灵</p>
          <p className="text-black text-5xl font-black">绝</p>
          <p className="text-[#e30000] text-5xl ml-6 mb-20">。</p>
          <img
            src="https://telegraph-image-6cq.pages.dev/file/ed2c98f5740ccbf71fb61.jpg
"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
        <div className="w-full lg:w-2/3 h-screen flex justify-center items-center">
          <div>
            <span className="text-black text-3xl font-black">个人信息</span>
            <span className="text-black text-xl"> / information</span>
            <div className="flex mt-6">
              <span className="text-[#6e6e73] text-xl lg:text-2xl mr-3">
                AGE:
              </span>
              <span className="text-black  text-xl lg:text-2xl">18</span>
            </div>
            <div className="flex mt-4">
              <span className="text-[#6e6e73]  text-xl lg:text-2xl mr-3">
                Education:
              </span>
              <span className="text-black  text-xl lg:text-2xl">本科</span>
            </div>
            <div className="flex mt-4">
              <span className="text-[#6e6e73]  text-xl lg:text-2xl mr-3">
                Technical direction:
              </span>
              <span className="text-black  text-xl lg:text-2xl">WEB 开发</span>
            </div>
            <div className="w-full h-fit flex justify-center items-center pl-12 mt-12">
              <i className="iconfont icon-html text-orange-600 scale-[3] w-1/6"></i>
              <i className="iconfont icon-CSS text-blue-600 scale-[3] w-1/6"></i>
              <i className="iconfont icon-JavaScript text-yellow-300 scale-[3] w-1/6"></i>
              <i className="iconfont icon-Nodejs text-green-600 scale-[3] w-1/6"></i>
              <i className="iconfont icon-react text-sky-400 scale-[3] w-1/6"></i>
              <i className="iconfont icon-Docker text-blue-600 scale-[3] w-1/6"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
