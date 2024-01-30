{
  /*年度作品展示组件 */
}
{
  /*导入 React */
}
import React from "react";
{
  /*导入 Link 组件 */
}
import { Link } from "react-router-dom";
{
  /*导入 motion动画 */
}
import { motion } from "framer-motion";
{
  /*从本地获取json数据 */
}
import datas from "./annualdisplay.json";

{
  /*定义 AnnualItem 接口以增强类型安全性 */
}
interface AnnualItem {
  id: number;
  img: string;
  show: string;
  title: string;
  introduce: string;
}

export const AnnualDisplay: React.FC = () => {
  {
    /*文字出现在页面时的渐入动画 */
  }
  const states = {
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: 1,
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <div className="w-full h-fit bg-[#fafafc]">
      <motion.div
        variants={states}
        whileInView="visible"
        initial="hidden"
        className="w-full pt-14 px-8 sm:px-10 md:px-10 lg:px-8 xl:px-20"
      >
        <span className="pt-16 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-normal  font-bold text-[#e30000]">
          年度作品展示，
        </span>
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-normal  text-[#6e6e73]">
          创意无限进步！
        </span>
        <div className="carousel carousel-center w-full h-full px-4 pb-14 pt-14 space-x-6 rounded-box">
          <div className="relative flex flex-col carousel-item w-[260px] h-[454px]  sm:h-[505px] sm:w-[404px] p-8 rounded-2xl bg-rose-500/90 overflow-hidden shadow-xl cursor-pointer scale-100 transition duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-2xl shadow-[2px_4px_16px_rgba(0, 0, 0, 0.16)]">
            <span className="pt-10 text-white text-3xl sm:text-4xl">
              源于热爱去创造设计。
            </span>
            <img
              src="https://telegraph-image-6cq.pages.dev/file/b260d3ca7c7a961b61474.png"
              alt="L"
              className="-mt-6"
            />
          </div>
          {datas.map((item: AnnualItem) => (
            <Link
              to={item.show}
              className="relative flex flex-col group carousel-item h-[454px] w-[260px] sm:h-[500px] sm:w-[313px] p-8 rounded-2xl bg-[#fff] overflow-hidden shadow-xl cursor-pointer scale-100 transition duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-2xl"
              key={item.id}
            >
              <div className="flex justify-center items-center w-full h-2/3">
                <img
                  className="w-auto h-auto rounded-box overflow-hidden object-cover transition-all duration-500 ease-in-out opacity-100 md:group-hover:scale-105 md:group-hover:opacity-90 transform-gpu"
                  src={item.img}
                />
              </div>
              <div className="flex flex-col justify-center w-full h-1/3 ">
                <span className="text-[#e30000] text-xl">{item.title}</span>
                <span className="mb-4 pt-4 text-black text-xl text-ellipsis overflow-hidden">
                  {item.introduce}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
