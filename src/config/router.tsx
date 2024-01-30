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
  /*导入 主页 组件*/
}
import Home from "../views/home/Home";
{
  /*导入 项目（年度项目 + 普通项目）组件*/
}
import Project from "../views/project/Project";
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
  /*导入 NotFound 组件*/
}
import Notfound from "../views/notFound/Notfound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/digital" element={<DigitalDistribution />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<ContactMe />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Router;