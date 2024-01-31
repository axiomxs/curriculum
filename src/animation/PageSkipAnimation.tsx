{
  /*导入 React、useState、useEffect */
}
import React, { useState, useEffect } from "react";

const PageSkipAnimation = () => {
  {
    /*创建一个名为 isShow 的状态，表示是否显示动画 */
  }
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    {
      /*在组件挂载后等待0.5秒，然后将 isShow 设置为 true，让动画内容开始显现 */
    }
    setTimeout(() => {
      setIsShow(true);
      {
        /*在第一个回调之后2.5秒，将 isShow 设置回 false，让动画内容在显示2秒后消失 */
      }
      setTimeout(() => {
        setIsShow(false);
      }, 2000);
    }, 500);
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-screen w-screen transition-opacity duration-1000 overflow-hidden ${
        isShow ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1
        className={`text-center text-5xl lg:text-7xl text-black transition-opacity duration-1000 z-50 ${
          isShow ? "opacity-100" : "opacity-0"
        }`}
      >
        Ling Jue
      </h1>
    </div>
  );
};

export default PageSkipAnimation;
