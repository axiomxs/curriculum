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
  /*导入 图片渐变遮罩CSS  */
}
import "../../../app.css";

export const ProjectHome = () => {
  return (
    <div className="w-full h-fit">
      <div className="project-gradient absolute top-0 left-0 right-0 h-[60vh] bg-[url('https://telegraph-image-6cq.pages.dev/file/b947bf8fbc2b2095175a4.jpg')] bg-no-repeat bg-center bg-scroll bg-cover z-10" />
      <div className="relative flex flex-col w-full md:w-[70%] lg:w-[980px] h-fit mt-16 mb-2 px-10 xl:px-20 z-20">
        <span className="text-black text-6xl sm:text-7xl lg:text-8xl lg:leading-tight">
          Create, Show and Enjoy, Welcome!
        </span>
        <span className="mt-10 text-black text-2xl lg:text-3xl leading-normal tracking-wide font-bold">
          欢迎到访我的项目展示页面，这里将精彩呈现年度项目以及层出不穷的奇思妙想。每一次点击都将带领您探索无尽创意的边界，感受灵感碰撞的火花!
        </span>
        <Link to="/contact">
          <button className="mt-8 px-10 py-2 md:py-3 bg-[#4258ff] leading-normal text-xl text-white font-bold rounded-[100px] cursor-pointer">
            快来联系我吧
          </button>
        </Link>
      </div>
    </div>
  );
};
