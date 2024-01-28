{
  /*个人介绍组件 */
}
{
  /*导入 React、motion动画 */
}
import React from "react";
import { motion } from "framer-motion";

export const Introduction = () => {
  {
    /*文字出现在页面时的渐入动画 */
  }
  const states = {
    visible: {
      opacity: 1,

      transition: {
        type: "tween",
        duration: 3,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <div className="w-full h-hit">
      {/*固定背景图片 */}
      <div className="h-full px-6 bg-fixed bg-cover bg-[url('https://telegraph-image-6cq.pages.dev/file/f207f73092881d180db49.jpg')]">
        <div className="text-8xl text-white text-center">
          <motion.p
            variants={states}
            whileInView="visible"
            initial="hidden"
            className="pt-[350px]"
          >
            👋你好，🎉我是灵绝！
          </motion.p>
          <motion.p
            variants={states}
            whileInView="visible"
            initial="hidden"
            className="pt-[350px]"
          >
            年龄: 18
          </motion.p>
          <motion.p
            variants={states}
            whileInView="visible"
            initial="hidden"
            className="pt-[350px]"
          >
            学历: 本科
          </motion.p>
          <motion.p
            variants={states}
            whileInView="visible"
            initial="hidden"
            className="pt-[300px] pb-[300px]"
          >
            技术方向: WEB 开发
          </motion.p>
        </div>
      </div>
    </div>
  );
};
