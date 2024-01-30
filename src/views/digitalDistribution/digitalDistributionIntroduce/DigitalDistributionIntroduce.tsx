{
  /*数字发行物组件 -  精选内容组件*/
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
  /*导入图片展示数据 */
}
import datas from "./digitalSelection.json";

{
  /*（接口）定义 SelectionItem 接口以增强类型安全性 */
}
interface SelectionItem {
  id: number;
  address: string;
  img: string;
  title: string;
  author: string;
  sort?: string;
  date?: string;
  abstract?: string;
  content?: string;
}

export const DigitalDistributionIntroduce: React.FC = () => {
  return (
    <div className="w-full h-fit py-16 px-8 sm:px-10 md:px-10 lg:px-8 xl:px-20 overflow-hidden">
      <div className="w-fit bg-gradient-to-r from-[#ff0f77] to-[#ff0f77] bg-no-repeat bg-[length:0px_30%] bg-left-bottom transition-[background-size] duration-[1000ms] ease-in-out transform-gpu text-black text-wrap text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider hover:bg-[length:100%_30%]">
        内容<span className="text-[#e30000]">精选</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-full pt-20 gap-4 sm:gap-4 md:gap-6 lg:gap-7">
        {datas.map((item: SelectionItem) => (
          <Link to={`/diary/${item.address}`} key={item.id}>
            <div className="flex flex-col w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-lg md:shadow-none shadow-true-gray-200 transition-all duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-2xl">
              {/*
            LazyLoad 实现懒加载，根据滚动位置动态调整 LazyLoad 高度阈值
            设置了垂直偏移量，使其在接近视口顶部时提前开始加载 
          */}
              <LazyLoad
                className="w-full h-full rounded-2xl"
                height={(window.innerHeight as number) * 1.2}
                offset={[-100, 0]}
              >
                <img
                  src={item.img}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </LazyLoad>
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
