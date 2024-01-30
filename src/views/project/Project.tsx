{
  /*项目组件 */
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
  /*导入 项目展示主页 组件 */
}
import { ProjectHome } from "./projectHome/ProjectHome";
{
  /*导入 项目展示连接 组件 */
}
import { ProjectMiddle } from "./projectMiddle/ProjectMiddle";
{
  /*导入 年度项目 组件 */
}
import { AnnualDisplay } from "./annualDisplay/AnnualDisplay";
{
  /*导入 项目展示 组件 */
}
import { AppShow } from "./projectShow/ProjectShow";

const Project: React.FC = () => {
  return (
    <div className="w-screen h-fit bg-[#fafafc]">
      {/*插入 项目展示主页 组件 */}
      <ProjectHome />
      {/*插入 项目展示连接 组件 */}
      <ProjectMiddle />
      {/*插入 年度项目 组件 */}
      <AnnualDisplay />
      {/*插入 项目展示 组件 */}
      <AppShow />
    </div>
  );
};
export default withLoading(Project);
