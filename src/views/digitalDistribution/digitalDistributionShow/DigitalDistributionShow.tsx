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
  /*导入 数字发行图标（左） 组件 */
}
import left from "../../../assets/icon/icon_wheat_left.svg";
{
  /*导入 数字发行图标（右） 组件 */
}
import right from "../../../assets/icon/icon_wheat_right.svg";
{
  /*导入 数据  */
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
      <div className="w-full pt-16 sm:py-16 px-8 sm:px-14">
        <div className="flex justify-center">
          <img src={left} />
          <span className="pt-2 text-4xl sm:text-5xl lg:text-5xl font-bold text-[#e30000]">
            数字书架
          </span>
          <img src={right} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full px-4 pt-20 gap-8">
          {datas.map((item: DigitalItem) => (
            <Link to={item.show} key={item.id}>
              <div className="group flex flex-col w-full h-[440px] mb-12 rounded-3xl overflow-hidden shadow-lg md:shadow-none shadow-true-gray-200 transition-all duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-2xl">
                <div className="w-full h-full rounded-3xl transition-all duration-500 ease-in-out transform-gpu md:filter ">
                  <img
                    src={item.img}
                    className="w-full h-[440px] rounded-3xl object-cover transition-all duration-500 ease-in-out transform-gpu scale-125 group-hover:-rotate-[6deg]"
                  />
                </div>
                <div className="absolute right-0 bottom-0 lg:-bottom-28 transition-all duration-500 ease-in-out transform-gpu group-hover:bottom-0 left-0">
                  <div className="w-full h-fit p-4 bg-yellow-400">
                    <p className="py-1 line-clamp-2 text-xl text-black leading-tight md:text-2xl md:leading-tight font-bold">
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
