{
  /*文章 组件*/
}
{
  /*导入React、useState、useEffect */
}
import React, { useState, useEffect } from "react";
{
  /*导入 返回上个页面 history 钩子 */
}
import { useNavigate } from "react-router-dom";
{
  /*获取 路径动态参数 钩子 */
}
import { useParams } from "react-router-dom";
{
  /*导入 图片渐变遮罩CSS  */
}
import "../../app.css";
{
  /*导入 文章 数据 */
}
import datas from "../digitalDistribution/digitalDistributionIntroduce/digitalSelection.json";

{
  /*（接口）定义 ArticleItem 接口以增强类型安全性 */
}
interface ArticleItem {
  id: number;
  address: string;
  img: string;
  title: string;
  author?: string;
  sort: string;
  date: string;
  abstract: string;
  content: string;
}
{
  /*（接口）定义 ArticleParams 接口，表示URL中的动态地址参数 */
}
interface ArticleParams {
  address: string;
}

const Article = () => {
  {
    /*使用useParams()获取路由参数，检查是否包含地址参数 */
  }
  const params = useParams();
  if (!params.address) {
    return <div>无法找到地址信息！</div>;
  }
  {
    /*将获取到的地址参数赋值给 address */
  }
  const address = params.address;
  {
    /*从数据中过滤出与当前地址匹配的文章内容 */
  }
  const data: ArticleItem[] = datas.filter((item) => item.address === address);
  {
    /*获取第一个匹配项的内容，使用可选链运算符避免未定义时引发的错误 */
  }
  const html = data[0]?.content || "";
  {
    /*创建一个内联 HTML 对象，用于设置 dangerouslySetInnerHTML 属性 */
  }
  const htmlobj = { __html: html };
  {
    /*
    使用 useNavigate 获取路由导航功能 
    const navigate = useNavigate();
  */
  }
  {
    /*
    创建一个函数 handleGoBack 用于返回上一个页面(数字出版页面) 
    const handleGoBack = () => {
    navigate(-1);
  };
  */
  }
  {
    /*检查数据源是否存在数据 */
  }
  if (!datas[0]) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-fit bg-white mb-10 overflow-hidden">
      <div
        className="project-gradient absolute top-0 left-0 right-0 h-[60vh] bg-no-repeat bg-center bg-scroll bg-cover z-10"
        style={{ backgroundImage: `url('${data[0].img}')` }}
      />
      <div className="relative flex flex-col w-full md:w-[70%] lg:w-[980px] h-fit mt-16 mb-2 px-10 xl:px-20 z-20">
        <span className="w-fit px-3 py-1 border border-black rounded-2xl text-black text-sm">
          {data[0].sort}
        </span>
        <span className="mt-2 text-black text-6xl sm:text-7xl lg:text-8xl lg:leading-tight">
          {data[0].title}
        </span>
        <span className="mt-6 text-black text-xl lg:text-2xl leading-normal tracking-wide font-bold">
          {data[0].abstract}
        </span>
        <div className="flex mt-10">
          <div className="avatar online w-10 h-10">
            <img
              src="https://telegraph-image-6cq.pages.dev/file/65b6808ea82c37cb1829b.jpg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col pl-6">
            <span className="text-black text-sm">{data[0].author}</span>
            <span className="text-black text-sm">{data[0].date}</span>
          </div>
        </div>
      </div>
      <div className="divider pt-8 px-14"></div>
      <div className="mt-10 px-4 sm:px-20 md:px-40 lg:px-80">
        <div className="p-5 text-xl text-black break-all leading-relaxed tracking-wider">
          <div dangerouslySetInnerHTML={htmlobj} className="" />
        </div>
      </div>
    </div>
  );
};

export default Article;