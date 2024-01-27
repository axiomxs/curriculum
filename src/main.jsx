{
  /*路由 */
}
{
  /*导入 React、useEffect、ReactDOM、Route路由 */
}
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
{
  /*导入组件*/
}
{
  /*导入 开屏动画 组件*/
}
import { HomeAnimation } from "./components/animation/HomeAnimation.jsx";
{
  /*导入 滚动到顶部 组件*/
}
import { ScrollToTop } from "./ScrollToTop.jsx";
{
  /*导入 导航栏 组件*/
}
import { App } from "./App.jsx";
{
  /*导入 主页 组件*/
}
import { Home } from "./components/home/Home.jsx";
{
  /*导入 项目（年度项目 + 普通项目）组件*/
}
import { Project } from "./components/project/Project.jsx";
{
  /*导入 数字发行物 组件*/
}
import { DigitalDistribution } from "./components/digitalDistribution/DigitalDistribution.jsx";
{
  /*导入 图片展示 组件*/
}
import { Photos } from "./components/photos/Photos.jsx";
{
  /*导入 联系我 组件*/
}
import { ContactMe } from "./components/contactMe/ContactMe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/digital" element={<DigitalDistribution />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </ScrollToTop>
  </HashRouter>
);
