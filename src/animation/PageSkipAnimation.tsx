{
  /*导入 React、useState、useEffect */
}
import React, { useState, useEffect } from "react";
{
  /*导入动画样式 */
}
import "../styles/animation.css";

const PageSkipAnimation = () => {
  {
    /*使用useState和useEffect来控制动画的显示和隐藏*/
  }
  const [isShow, setIsShow] = useState(false);
  {
    /*设置动画的显示和隐藏，1.5秒后关闭动画 */
  }
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
      const hideTimeoutId = setTimeout(() => {
        setIsShow(false);
      }, 1500);

      return () => clearTimeout(hideTimeoutId);
    }, 0);
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-screen bg-white overflow-hidden ${
        isShow ? "show" : ""
      }`}
    >
      <div className="animation flex text-black text-5xl text-center">
        <span>L</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>&nbsp;
        <span>J</span>
        <span>u</span>
        <span>e</span>
      </div>
    </div>
  );
};
export default PageSkipAnimation;
