{
  /*项目展示 - 项目主页组件 */
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
  /*导入图片展示数据  ./projectMiddle.json*/
}
import datas from "./projectMiddle.json";

{
  /*（接口）定义 ProjectMiddleItem 接口以增强类型安全性 */
}
interface ProjectMiddleItem {
  id: string | number;
  img: string;
  author: string;
  title: string;
  show: string;
}

export const ProjectMiddle: React.FC = () => {
  return (
    <div className="w-full h-fit px-8 sm:px-10 md:px-10 lg:px-8 xl:px-20 pb-10 overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-full pt-10 sm:pt-14 md:pt-20 gap-4 sm:gap-4 md:gap-6 lg:gap-7">
        {datas.map((item: ProjectMiddleItem) => (
          <Link to={item.show} key={item.id}>
            <div className="flex flex-col w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-lg md:shadow-none shadow-true-gray-200 transition-all duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-xl">
              <div className="w-full h-full rounded-2xl">
                <img
                  src={item.img}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute letf-[5%] top-[55%] sm:top-[50%] w-full">
                <div className="w-full h-fit p-4">
                  <p className="py-1 line-clamp-2 text-2xl text-white leading-tight tracking-wider md:leading-tight font-bold">
                    {item.title}
                  </p>
                  <p className="py-1 line-clamp-2 text-base text-white leading-tight tracking-wider md:leading-tight">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
