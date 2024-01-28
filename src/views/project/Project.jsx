{
  /*项目组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入年度项目组件 */
}
import { AnnualDisplay } from "./annualDisplay/AnnualDisplay.jsx";
{
  /*导入项目展示组件 */
}
import { AppShow } from "./appshow/AppShow.jsx";

export const Project = () => {
  return (
    <div className="w-screen h-fit">
      <AnnualDisplay />
      <AppShow />
    </div>
  );
};
