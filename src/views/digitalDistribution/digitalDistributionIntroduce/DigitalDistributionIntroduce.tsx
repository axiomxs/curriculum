{
  /*数字发行物组件 -  精选内容组件*/
}
{
  /*导入React */
}
import React from "react";
{
  /*导入懒加载 */
}
import LazyLoad from "react-lazyload";
{
  /*导入图片展示数据 */
}
import datas from "./digitalSelection.json";

{
  /*定义 SelectionItem 接口以增强类型安全性 */
}
interface SelectionItem {
  id: string | number;
  img: string;
  author: string;
  title: string;
  introduce: string;
}

export const DigitalDistributionIntroduc: React.FC = () => {
  return (
    <div className="w-full h-fit py-16 px-8 lg:px-14 overflow-hidden">
      <div className="w-fit bg-gradient-to-r from-[#ff0f77] to-[#ff0f77] bg-no-repeat bg-[length:0px_30%] bg-left-bottom transition-[background-size] duration-[1000ms] ease-in-out transform-gpu text-black text-wrap text-4xl lg:text-5xl hover:bg-[length:100%_30%]">
        内容<span className="text-[#e30000]">精选</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
        {datas.map((item: SelectionItem) => (
          <div
            className="flex mb-6 lg:mb-0 flex-col lg:flex-row w-full h-full rounded-3xl transition-all duration-500 ease-in-out transform-gpu hover:scale-95"
            key={item.id}
          >
            {/*
            LazyLoad 实现懒加载，根据滚动位置动态调整 LazyLoad 高度阈值
            设置了垂直偏移量，使其在接近视口顶部时提前开始加载 
          */}
            <LazyLoad
              className="w-full lg:w-2/5 h-full overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none"
              height={(window.innerHeight as number) * 1.2}
              offset={[-100, 0]}
            >
              <div className="w-full lg:h-full">
                <img
                  src={item.img}
                  className="w-full h-full object-cover  rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none"
                />
              </div>
            </LazyLoad>
            <div className="flex flex-col lg:justify-center items-center sm:items-center lg:items-start w-full lg:w-3/5 h-full py-12 lg:py-12 px-12 bg-[#fafafc]  rounded-b-3xl lg:rounded-r-3xl lg:rounded-l-none">
              <p className="text-black text-base">{item.author}</p>
              <div className="my-8 lg:my-14 leading-10">
                <span className="bg-gradient-to-r from-[#ff0f77] to-[#ff0f77] bg-no-repeat bg-[length:0px_30%] bg-left-bottom transition-[background-size] duration-[1000ms] ease-in-out transform-gpu text-black text-wrap text-xl lg:text-4xl hover:bg-[length:100%_30%]">
                  {item.title}
                </span>
              </div>

              <p className="block lg:hidden text-black text-base text-center lg:text-left">
                {item.introduce}
              </p>
              <div className="flex gap-2.5 mt-8 lg:mt-14">
                <p className="text-black p-1 rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out transform-gpu">
                  摄影
                </p>
                <p className="text-black p-1 rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out transform-gpu">
                  旅拍
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
