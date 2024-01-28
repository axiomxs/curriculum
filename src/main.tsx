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
  /*导入 滚动到顶部 组件*/
}
import { ScrollToTop } from "./components/ScrollToTop";
{
  /*导入 导航栏 组件*/
}
import { App } from "./App";
{
  /*导入 主页 组件*/
}
import { Home } from "./views/home/Home";
{
  /*导入 项目（年度项目 + 普通项目）组件*/
}
import { Project } from "./views/project/Project";
{
  /*导入 数字发行物 组件*/
}
import { DigitalDistribution } from "./views/digitalDistribution/DigitalDistribution";
{
  /*导入 图片展示 组件*/
}
import { Photos } from "./views/photos/Photos";
{
  /*导入 联系我 组件*/
}
import { ContactMe } from "./views/contactMe/ContactMe";

{
  /*
  获取根元素，并确保其为HTMLElement类型
  */
}
const rootElement = document.getElementById("root") as HTMLElement | null;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/digital" element={<DigitalDistribution />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/contact" element={<ContactMe />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  );
} else {
  console.error("未能找到ID为'root'的元素！");
}
