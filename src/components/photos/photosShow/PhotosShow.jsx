{
  /*图片展示 - 照片展示组件 */
}
{
  /*导入 React、useState、useEffect */
}
import React, { useState, useEffect } from "react";
{
  /*导入motion动画 */
}
import { motion } from "framer-motion";
{
  /*导入图片展示数据 */
}
import datas from "../../json/photosShow.json";

export const PhotosShow = () => {
  {
    /*使用useState Hook初始化状态变量scrollDistance，用于记录滚动距离 */
  }
  const [scrollDistance, setScrollDistance] = useState(0);
  {
    /*创建控制图片展示区域显示与隐藏的状态 */
  }
  const [visible, setVisible] = useState(false);
  {
    /*滚动事件监听与控制展示页面开关 */
  }
  useEffect(() => {
    function handleScroll(event) {
      // 获取当前窗口滚动条的位置
      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;

      // 设置滚动位置并判断是否达到显示阈值
      setScrollDistance(currentScrollY);

      // 当滚动到屏幕高度的10%时，显示图片展示区域
      if (currentScrollY > window.innerHeight * 0.1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 在组件卸载时移除滚动事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDistance]);
  {
    /*图片展示盒子出现在页面时的渐入动画 */
  }
  const states = {
    visible: {
      y: -130,

      transition: {
        type: "tween",
        duration: 1,
      },
    },
    hidden: {
      y: 50,

      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={states}
      animate={visible ? "visible" : "hidden"}
      className="box-border w-full h-fit px-20 bg-transparent overflow-hidden"
    >
      {/*使用map遍历，并通过对id的奇偶区分，分别设置样式，实现【图片 + 文字】块棋格布局 */}
      {datas.map((item) => (
        <div
          className={`flex mb-6 lg:mb-0 ${
            item.id % 2 === 0
              ? "flex-col lg:flex-row-reverse"
              : "flex-col lg:flex-row"
          }`}
          key={item.id}
        >
          <div className="w-full lg:w-1/2 lg:h-[650px]">
            <img
              src="https://telegraph-image-6cq.pages.dev/file/1991400a9153aa8a44e8e.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          {/*通过对id的奇偶区分，分别设置样式，实现【文字】块棋格布局 */}
          <div
            className={`flex flex-col lg:justify-center items-center sm:items-center  w-full lg:w-1/2 h-fit lg:h-[650px] py-12 lg:py-0 px-12 bg-[#fafafc] ${
              item.id % 2 === 0 ? "lg:items-end" : "lg:items-start"
            }`}
          >
            <p className="text-black text-base lg:text-xl">{item.author}</p>
            <div className="my-8 lg:my-14 leading-10">
              <span className="bg-gradient-to-r from-[#ff0f77] to-[#ff0f77] bg-no-repeat bg-[length:0px_30%] bg-left-bottom transition-[background-size] duration-[1000ms] ease-in-out text-black text-wrap text-4xl lg:text-5xl hover:bg-[length:100%_30%]">
                {item.title}
              </span>
            </div>

            <p className="text-black text-base text-center lg:text-left">
              {item.introduce}
            </p>
            <div className="flex gap-2.5 mt-8 lg:mt-14">
              <p className="text-black p-1 rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out">
                摄影
              </p>
              <p className="text-black p-1 rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out">
                旅拍
              </p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
