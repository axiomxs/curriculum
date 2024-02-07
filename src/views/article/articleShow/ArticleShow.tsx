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
  /*导入图片展示数据  ./articleShow.json*/
}
import datas from "../../../../public/json/articleShow.json";
{
  /*导入 css*/
}
import "../../../styles/app.css";
{
  /*（接口）定义 SelectionItem 接口以增强类型安全性 */
}
interface SelectionItem {
  id: number;
  address: string;
  img: string;
  title: string;
  author?: string;
  sort?: string[];
  date?: string;
  abstract?: string;
  content?: string;
}

export const ArticleShow: React.FC = () => {
  {
    /*
    数据反向：最新的数据先展示
    */
  }
  const reversedData = React.useMemo(() => {
    return datas.reverse();
  }, []);
  return (
    <div className="box-border flex flex-col xl:flex-row xl:justify-between max-w-[1400px] h-fit my-0 mx-auto py-4 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 overflow-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-5 w-full pr-0 xl:pr-[300px] transition-all duration-300 ease-in-out transform-gpu">
        {reversedData.map((item: SelectionItem) => (
          <Link
            to={`/article/${item.address}`}
            key={item.id}
            className="group flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-col w-full h-fit mt-4 mb-3 xl:mt-1 xl:mb-3 border border-[#f0f0f0] hover:border-[#ffc848] rounded-xl cursor-pointer overflow-hidden shadow-lg md:shadow-none shadow-true-gray-200 transition duration-300 ease-in-out transform-gpu hover:shadow-lg"
          >
            <LazyLoad
              className="flex w-full md:w-4/5 lg:w-4/5 xl:w-full h-[170px] md:h-[220px] xl:h-[225px] xl:rounded-t-xl overflow-hidden duration-300 ease-in-out md:filter md:group-hover:brightness-90 transition"
              height={(window.innerHeight as number) * 1.2}
              offset={[-100, 0]}
            >
              <img
                src={item.img}
                className="w-full h-full xl:rounded-t-xl object-cover transition-all duration-300 ease-in-out opacity-100 md:group-hover:scale-105 md:group-hover:opacity-90 transform-gpu"
              />
            </LazyLoad>
            <div className="flex flex-col justify-between w-full h-36 md:h-[220px] xl:h-[174px] p-6 lg:p-10 xl:p-6 bg-white rounded-b-xl cursor-pointer">
              <div className="flex flex-col justify-between items-start">
                <div className="flex gap-2.5">
                  {item.sort.map((sort, index) => (
                    <p
                      className="hidden md:block mb-2 text-xs text-black font-bold text-red-500 leading-2"
                      key={index}
                    >
                      {sort}
                    </p>
                  ))}
                </div>
                <p className="text-xl md:text-xl lg:text-2xl text-black group-hover:text-[#ffc848] line-clamp-2 leading-tight md:leading-tight lg:leading-tight font-bold text-wrap transition duration-300 ease-in-out transform-gpu ">
                  {item.title}
                </p>
              </div>
              <p className="mt-2 text-sm text-black font-semibold">
                {item.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
