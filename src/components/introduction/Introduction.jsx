import React from "react";
import "../../icon/icon.css";
import { motion } from "framer-motion";

export const Introduction = () => {
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
    <div className="bg-[#fafafc] flex justify-center">
      <div className="flex flex-col lg:flex-row items-center px-8 leading-6 container mx-auto">
        <motion.div
          variants={states}
          whileInView="visible"
          initial="hidden"
          className="w-full lg:w-1/3 h-screen flex flex-col justify-center items-center"
        >
          <p className="text-black text-5xl mb-6 font-black">灵</p>
          <p className="text-black text-5xl font-black">绝</p>
          <p className="text-[#e30000] text-5xl ml-6 mb-20">。</p>
          <img
            src="https://telegraph-image-6cq.pages.dev/file/ed2c98f5740ccbf71fb61.jpg
"
            className="rounded-full w-48 h-48 object-cover"
          />
        </motion.div>
        <div className="w-full lg:w-2/3 h-screen flex justify-center items-center">
          <div className="w-fit h-fit flex flex-col border border-[#e3e8f7] bg-white p-14 rounded-2xl transition-all duration-300 ease-in-out hover:border-rose-400 shadow-[0_8px_16px_-4px_rgba(102, 68, 68, 0.00)]">
            <div>
              <motion.span
                variants={states}
                whileInView="visible"
                initial="hidden"
                className="text-black text-3xl font-black"
              >
                个人信息
              </motion.span>
              <motion.span
                variants={states}
                whileInView="visible"
                initial="hidden"
                className="text-black text-xl"
              >
                {" "}
                / Information
              </motion.span>
              <motion.div
                variants={states}
                whileInView="visible"
                initial="hidden"
                className="flex mt-6"
              >
                <span className="text-[#6e6e73] text-xl lg:text-2xl mr-3">
                  AGE:
                </span>
                <span className="text-black  text-xl lg:text-2xl">18</span>
              </motion.div>
              <motion.div
                variants={states}
                whileInView="visible"
                initial="hidden"
                className="flex mt-4"
              >
                <span className="text-[#6e6e73]  text-xl lg:text-2xl mr-3">
                  Education:
                </span>
                <span className="text-black  text-xl lg:text-2xl">本科</span>
              </motion.div>
              <motion.div
                variants={states}
                whileInView="visible"
                initial="hidden"
                className="flex mt-4"
              >
                <span className="text-[#6e6e73]  text-xl lg:text-2xl mr-3">
                  Technical direction:
                </span>
                <span className="text-black  text-xl lg:text-2xl">
                  WEB 开发
                </span>
              </motion.div>
            </div>
            <motion.div
              variants={states}
              whileInView="visible"
              initial="hidden"
              className="w-full h-fit flex flex-col justify-center mt-14"
            >
              <div className="flex items-end">
                <span className="text-black text-3xl font-black mr-2">
                  技术栈
                </span>
                <span className="text-black text-xl"> / Technical </span>
              </div>
              <div className="w-full h-fit flex justify-center items-center mt-10 scale-[3]">
                <i className="iconfont icon-html text-orange-600"></i>
                <i className="iconfont icon-CSS text-blue-600 "></i>
                <i className="iconfont icon-JavaScript text-yellow-300 "></i>
                <i className="iconfont icon-Nodejs text-green-600  "></i>
                <i className="iconfont icon-react text-sky-400 "></i>
                <i className="iconfont icon-Docker text-blue-600 "></i>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
