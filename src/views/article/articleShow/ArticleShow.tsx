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
import datas from "../../../../articleShow.json";

{
  /*（接口）定义 SelectionItem 接口以增强类型安全性 */
}
interface SelectionItem {
  id: number;
  address: string;
  img: string;
  title: string;
  author?: string;
  sort?: string;
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
    <div className="w-full h-fit px-16 sm:px-40 md:px-44 lg:px-44 xl:px-44 pb-20 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:lg:grid-cols-3 w-full h-full px-2 gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-8">
        {reversedData.map((item: SelectionItem) => (
          <Link to={`/diary/${item.address}`} key={item.id}>
            <div className="group flex flex-col w-full aspect-[1/1.13] rounded-3xl overflow-hidden shadow-lg md:shadow-none shadow-true-gray-200 transition duration-500 ease-in-out transform-gpu hover:scale-95 hover:shadow-lg mobile-hover:hover:scale-95 md:hover:shadow-lg hover:rotate-0 hover:active:scale-95">
              <LazyLoad
                className="flex flex-col justify-start items-center w-full h-[200px] rounded-3xl duration-500 ease-in-out md:filter md:group-hover:brightness-90 transition"
                height={(window.innerHeight as number) * 1.2}
                offset={[-100, 0]}
              >
                <img
                  src={item.img}
                  className="w-full h-full rounded-t-3xl object-cover transition-all duration-500 ease-in-out opacity-100 md:group-hover:scale-105 md:group-hover:opacity-90 transform-gpu"
                />
              </LazyLoad>
              <div className="flex flex-col justify-between h-full p-6 bg-white rounded-b-3xl">
                <div className="flex flex-col justify-between items-start">
                  <p className="mb-2 text-xs font-bold text-red-500 leading-2 text-hex-ff3b30 dark:text-hex-ff453a">
                    {item.sort}
                  </p>
                  <p className="line-clamp-2 text-xl text-slate-900 leading-tight md:text-lg md:leading-tight lg:text-xl lg:leading-tight font-bold">
                    {item.title}
                  </p>
                </div>
                <div className="mb-5">
                  <p className="block mt-2 text-sm font-semibold text-slate-600 dark:text-true-gray-400">
                    {item.date}
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
