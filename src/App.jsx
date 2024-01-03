{
  /*导入基础部分 */
}
import React, { useState, useEffect } from "react";
{
  /*导入本组件样式和图标样式 */
}
import "./app.scss";
import "./index.css";
{
  /*导入组件 */
}
{
  /*导入主页 */
}
import { Home } from "./components/home/Home";
{
  /*导入个人介绍 */
}
import { Introduction } from "./components/introduction/Introduction";
{
  /*导入标语页面 */
}
import { Middle } from "./components/middle/Middle";
{
  /*导入目录页面 */
}
import { Catalogue } from "./components/catalogue/Catalogue";
{
  /*导入年度作品展示 */
}
import { AnnualDisplay } from "./components/annualDisplay/AnnualDisplay";
{
  /*导入文章推荐 */
}
import { Article } from "./components/appshow/Article";
{
  /*导入应用展示 */
}
import { Appshow } from "./components/appshow/Appshow";
{
  /*导入奖项展示 */
}
import { Awards } from "./components/appshow/Awards";
{
  /*导入摄影展示 */
}
import { Photoshow } from "./components/photoshow/Photoshow";

export const App = () => {
  return (
    <div>
      <section>
        <Home />
      </section>
      <section>
        <Introduction />
      </section>
      <section>
        <Catalogue />
      </section>
      <section>
        <Middle />
      </section>
      <section>
        <AnnualDisplay />
      </section>
      <section>
        <Article />
      </section>
      <section>
        <Appshow />
      </section>
      <section>
        <Awards />
      </section>
      <section>
        <Photoshow />
      </section>
    </div>
  );
};
