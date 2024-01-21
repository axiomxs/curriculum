{
  /*奖项组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入奖项展示组件 */
}
import { AwardsShow } from "./awardsShow/AwardsShow";

export const Awards = () => {
  return (
    <div className="w-screen h-fit">
      <AwardsShow />
    </div>
  );
};
