{
  /*数字发行物组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入 数字发行物头部 组件 */
}
import { DigitalDistributionTop } from "./digitalDistributionTop/DigitalDistributionTop";
{
  /*导入 数字发行物介绍 组件 */
}
import { DigitalDistributionIntroduce } from "./digitalDistributionIntroduce/DigitalDistributionIntroduce";
{
  /*导入 数字发行物连接 组件 */
}
import { DigitalDistributionMiddle } from "./digitalDistributionMiddle/DigitalDistributionMiddle";
{
  /*导入 数字发行物展示 组件 */
}
import { DigitalDistributionShow } from "./digitalDistributionShow/DigitalDistributionShow";

const DigitalDistribution: React.FC = () => {
  return (
    <div className="w-full h-fit bg-white">
      {/*插入 数字发行物头部 组件 */}
      <DigitalDistributionTop />
      {/*插入 数字发行物介绍 组件 */}
      <DigitalDistributionIntroduce />
      {/*插入 数字发行物连接 组件 */}
      <DigitalDistributionMiddle />
      {/*插入 数字发行物展示 组件 */}
      <DigitalDistributionShow />
    </div>
  );
};

export default DigitalDistribution;
