{
  /*数字发行物组件 -  数字发行物展示*/
}
{
  /*导入React */
}
import React from "react";
{
  /*导入 Link 组件 */
}
import { Link } from "react-router-dom";
{
  /*导入懒加载 */
}
import LazyLoad from "react-lazyload";
{
  /*导入 数字发行图标（左） 图标 */
}
import left from "../../../assets/icon/icon_wheat_left.svg";
{
  /*导入 数字发行图标（右） 图标*/
}
import right from "../../../assets/icon/icon_wheat_right.svg";
{
  /*导入 数据  ./digital.json*/
}
import datas from "./digital.json";

{
  /*定义 DigitalItem 接口以增强类型安全性 */
}
interface DigitalItem {
  id: number;
  img: string;
  title: string;
  date: string;
  show: string;
}

export const DigitalDistributionShow: React.FC = () => {
  return (
    <div className="w-full h-fit bg-white overflow-hidden">
      <div className="w-full pt-16 sm:py-16 px-8 sm:px-10 md:px-10 lg:px-8 xl:px-20">
        <div className="flex justify-center">
          <img src={left} className="-pt-3 lg:pt-3" />
          <span className="pt-1 sm:pt-1 md:pt-1 lg:pt-1 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider text-[#e30000]">
            数字书架
          </span>
          <img src={right} className="-pt-3 lg:pt-3" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-full pt-20 gap-4 sm:gap-4 md:gap-6 xl:gap-8">
          {datas.map((item: DigitalItem) => (
            <Link to={item.show} key={item.id}>
              <div className="group flex flex-col w-full sm:aspect-[2/3] rounded-2xl overflow-hidden shadow-lg md:shadow-none shadow-true-gray-200 transition-all duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-2xl">
                {/*
                LazyLoad 实现懒加载，根据滚动位置动态调整 LazyLoad 高度阈值
                设置了垂直偏移量，使其在接近视口顶部时提前开始加载 
                */}
                <LazyLoad
                  className="w-full h-full rounded-3xl transition-all duration-500 ease-in-out transform-gpu md:filter "
                  height={(window.innerHeight as number) * 1.2}
                  offset={[-100, 0]}
                >
                  <img
                    src={item.img}
                    className="w-full aspect-[2/3] rounded-3xl object-cover transition-all duration-500 ease-in-out transform-gpu scale-125 group-hover:-rotate-[6deg]"
                  />
                </LazyLoad>
                <div className="absolute right-0 bottom-0 lg:-bottom-56 transition-all duration-500 ease-in-out transform-gpu group-hover:bottom-0 left-0">
                  <div className="w-full h-fit p-4 bg-yellow-400">
                    <p className="py-1 line-clamp-2 text-xl text-black leading-tight tracking-wider md:text-2xl md:leading-tight font-bold">
                      {item.title}
                    </p>
                    <span className="text-xl text-black">{item.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
