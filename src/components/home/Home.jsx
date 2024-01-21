{
  /*主页组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入顶部文字条组件 */
}
import { TopText } from "./topText/TopText.jsx";
{
  /*导入主页展示组件 */
}
import { HomePage } from "./homePage/HomePage.jsx";
{
  /*导入个人介绍组件 */
}
import { Introduction } from "./introduction/Introduction.jsx";

export const Home = () => {
  return (
    <div className="w-screen h-fit">
      <TopText />
      <HomePage />
      <Introduction />
    </div>
  );
};
