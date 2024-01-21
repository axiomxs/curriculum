{
  /*导入基础部分 */
}
import React from "react";
import { motion } from "framer-motion";

export const Middle = () => {
  {
    /*动画 */
  }
  const states = {
    visible: {
      opacity: 1,

      transition: {
        type: "tween",
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <div className="flex justify-center bg-[#fafafc]">
      <div className="flex flex-col items-center mb-10 sm:mb-16 lg:mb-24 container mx-auto py-6 px-8 transition-all duration-300 ease-in-out ">
        <motion.p
          variants={states}
          whileInView="visible"
          initial="hidden"
          className="text-center text-xl sm:text-2xl lg:text-5xl text-black font-semibold tracking-widest pt-12"
        >
          命中注定
          <br />
          本该如此
        </motion.p>
        <motion.p
          variants={states}
          whileInView="visible"
          initial="hidden"
          className="text-center text-xl sm:text-2xl lg:text-5xl text-black font-semibold tracking-widest pt-12"
        >
          人间缱绻模样
          <br />
          不忘痴狂
        </motion.p>
        <motion.p
          variants={states}
          whileInView="visible"
          initial="hidden"
          className="text-center text-xl sm:text-2xl lg:text-5xl text-black font-semibold tracking-widest pt-12"
        >
          烛火幽微
          <br />
          人潮跌宕
        </motion.p>
      </div>
    </div>
  );
};
