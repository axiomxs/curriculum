{
  /*路由 */
}
{
  /*导入 React、ReactDOM、Route路由 */
}
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
{
  /*导入组件*/
}
{
  /*导入导航栏组件*/
}
import { App } from "./App.jsx";
{
  /*导入主页组件*/
}
import { Home } from "./components/home/Home.jsx";
{
  /*导入项目（年度项目 + 普通项目）组件*/
}
import { Project } from "./components/project/Project.jsx";
{
  /*导入文章组件*/
}
import { Article } from "./components/article/Article.jsx";
{
  /*导入奖项组件*/
}
import { Awards } from "./components/awards/Awards.jsx";
{
  /*导入数字发行物组件*/
}
import { DigitalDistribution } from "./components/digitalDistribution/DigitalDistribution.jsx";
{
  /*导入图片展示组件*/
}
import { Photos } from "./components/photos/Photos.jsx";
{
  /*导入数字藏品组件*/
}
import { DigitalCollection } from "./components/digitalCollection/DigitalCollection.jsx";
{
  /*导入联系我组件*/
}
import { ContactMe } from "./components/contactMe/ContactMe.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/article" element={<Article />}></Route>
        <Route path="/awards" element={<Awards />}></Route>
        <Route path="/digital" element={<DigitalDistribution />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/collection" element={<DigitalCollection />}></Route>
        <Route path="/contact" element={<ContactMe />}></Route>
      </Route>
    </Routes>
  </HashRouter>
);
