{
  /*年度作品引导页组件 */
}
{
  /*导入 React、motion动画 */
}
import React from "react";
import { motion } from "framer-motion";

export const GuideAnnualDisplay = () => {
  {
    /*文字出现在页面时的渐入动画 */
  }
  const states = {
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: 2,
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <div className="flex justify-center bg-[#fafafc]">
      <div className="flex flex-col w-1/2 h-screen">
        <p className="w-full h-full text-5xl text-black">
          🎈🎈一起来看看我的作品吧！
        </p>
      </div>
      <div className="w-1/2 h-screen">
        <img
          src="https://telegraph-image-6cq.pages.dev/file/9c3c6fda2cfdea53f6a15.jpg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
