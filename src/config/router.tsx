{
  /*路由组件 */
}
{
  /*导入 React */
}
import React from "react";
{
  /*导入 ReactDOM、Route 路由 */
}
import { Route, Routes } from "react-router-dom";

{
  /*导入组件*/
}
{
  /*导入 导航栏 组件*/
}
import App from "../App";
{
  /*导入 项目（年度项目 + 普通项目）组件*/
}
import Project from "../views/project/Project";
{
  /*导入 博客文章 组件*/
}
import Article from "../views/article/Article";
{
  /*导入 数字发行物 组件*/
}
import DigitalDistribution from "../views/digitalDistribution/DigitalDistribution";
{
  /*导入 图片展示 组件*/
}
import Photos from "../views/photos/Photos";
{
  /*导入 联系我 组件*/
}
import ContactMe from "../views/contactMe/ContactMe";
{
  /*导入 文章 组件*/
}
import ArticleShow from "../components/article/Article";
{
  /*导入 NotFound 组件*/
}
import Notfound from "../views/notFound/Notfound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Project />} />
        <Route path="/article" element={<Article />} />
        <Route path="/digital" element={<DigitalDistribution />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/diary/:address" element={<ArticleShow />}></Route>
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Router;
