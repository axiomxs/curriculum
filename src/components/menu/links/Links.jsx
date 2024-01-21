{
  /*导入React */
}
import React from "react";

export const Links = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center gap-5 w-full h-full text-black text-2xl">
      <a
        href="/#"
        className="transition-all duration-300 ease-in-out hover:scale-110"
      >
        主页
      </a>
      <a href="/#/project">项目</a>
      <a href="/#/article">文章</a>
      <a href="/#/awards">奖项</a>
      <a href="/#/digital">数字出版</a>
      <a href="/#/photos">照片展示</a>
      <a href="/#/collection">数字藏品</a>
      <a href="/#/contact">联系我</a>
    </div>
  );
};
