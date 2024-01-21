{
  /*文章组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入文章展示组件 */
}
import { ArticleShow } from "../article/ArticleShow/ArticleShow.jsx";

export const Article = () => {
  return (
    <div className="w-screen h-fit">
      <ArticleShow />
    </div>
  );
};
