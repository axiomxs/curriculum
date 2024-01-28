{
  /*顶部文字条组件 */
}
{
  /*导入 React、useState */
}
import React, { useState } from "react";

export const TopText = () => {
  {
    /*创建控制顶部文字条的显示和隐藏的状态，初始值为true */
  }
  const [isVisible, setIsVisible] = useState(true);
  {
    /*创建控制顶部文字条的显示和隐藏的点击事件 */
  }
  const handleButtonClick = () => {
    setIsVisible(false);
  };
  return (
    <div>
      {/*渲染一个条件渲染的元素，只有当isVisible为true时，才会显示文字条 */}
      {isVisible && (
        <div className="relative flex justify-center items-center w-screen h-12 bg-black text-slate-100 text-base text-center text-wrap">
          <p>📸咸鱼摄影 ｜ 💻业余开发</p>
          <button className="absolute right-8" onClick={handleButtonClick}>
            X
          </button>
        </div>
      )}
    </div>
  );
};
