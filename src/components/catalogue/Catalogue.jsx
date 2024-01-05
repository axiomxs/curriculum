import React from "react";
import { motion } from "framer-motion";

export const Catalogue = () => {
  {
    /*动画 */
  }
  const states = {
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: 1.5,
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <div className="bg-[#fafafc] flex justify-center px-4 sm:px-14 pb-0 lg:pb-32 pt-0 lg:pt-20">
      <div className="flex flex-col px-8 container mx-auto">
        <div className="flex justify-start mb-20">
          <i className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold pr-6">
            目录
          </i>
          <i className="text-sky-600 text-3xl sm:text-4xl lg:text-5xl font-bold transition-all duration-300 ease-in-out blur-sm hover:blur-none px-1">
            CATALOGUE
          </i>
        </div>
        <div className="flex flex items-start h-fit mb-20">
          <div className="flex flex-col w-1/3 justify-center items-center">
            <motion.div
              variants={states}
              whileInView="visible"
              initial="hidden"
              className="flex flex-col "
            >
              <span className="text-black text-2xl lg:text-3xl font-black mb-6">
                技术总览
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                年度作品展示
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                文章，引领未来之路
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                项目，用心和创意构建体验
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                奖项，用实力说话
              </span>
            </motion.div>
          </div>
          <div className="flex flex-col w-1/3 justify-center items-center">
            <motion.div
              variants={states}
              whileInView="visible"
              initial="hidden"
              className="flex flex-col "
            >
              <span className="text-black text-2xl lg:text-3xl font-black mb-6">
                UI设计
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                数字发行物
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                视觉设计
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                其他设计
              </span>
            </motion.div>
          </div>
          <div className="flex flex-col w-1/3 justify-center items-center">
            <motion.div
              variants={states}
              whileInView="visible"
              initial="hidden"
              className="flex flex-col "
            >
              <span className="text-black text-2xl lg:text-3xl font-black mb-6">
                摄影展示
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                人间烟火
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                风火山林
              </span>
              <span className="text-[#6e6e73] text-xl lg:text-2xl whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 p-1 transition-all duration-300 ease-in-out w-fit mb-4">
                其他
              </span>
            </motion.div>
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
