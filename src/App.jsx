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
  /*导入宣传语页面 */
}
import { Middle } from "./components/middle/Middle";
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

export const App = () => {
  return (
    <div>
      <section className="h-screen">
        <Home />
      </section>

      <section>
        <Middle />
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
    </div>
  );
};
