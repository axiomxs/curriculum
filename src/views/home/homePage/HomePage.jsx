{
  /*主页展示组件 */
}
{
  /*导入 React */
}
import React from "react";

export const HomePage = () => {
  return (
    <div className="diff aspect-[16/9] w-full h-fit">
      <div className="diff-item-1">
        <div className="bg-primary text-primary-content text-3xl sm:text-6xl lg:text-9xl font-black grid place-content-center">
          灵绝・真的很绝！
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 text-3xl sm:text-6xl lg:text-9xl font-black grid place-content-center">
          灵绝・真的很绝！
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};
