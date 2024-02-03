{
  /*文章组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入 监听渲染完毕 的高阶组件 */
}
import withLoading from "../../hoc/withLoading";
{
  /*导入 文章展示主页 组件 */
}
import { ArticleHome } from "./articleHome/ArticleHome";
{
  /*导入 文章展示 组件 */
}
import { ArticleShow } from "./articleShow/ArticleShow";

const Project: React.FC = () => {
  return (
    <div className="w-screen h-fit bg-[#fafafc]">
      {/*插入 文章展示主页 组件 */}
      <ArticleHome />
      {/*插入 文章展示 组件 */}
      <ArticleShow />
    </div>
  );
};
export default withLoading(Project);
