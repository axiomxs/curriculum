{
  /*导入 React、useState、useEffect */
}
import React, { useState, useEffect } from "react";
{
  /*导入 页面转跳动画 */
}
import PageSkipAnimation from "../animation/PageSkipAnimation";
{
  /*创建一个高阶组件以统一处理加载状态 */
}
export default function withLoading(WrappedComponent) {
  {
    /*返回一个新的函数组件 WithLoading，它接收与原组件相同的 props */
  }
  return function WithLoading(props) {
    {
      /*创建一个名为 isShow 的状态，表示当前是否处于页面转跳动画的状态 */
    }
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
      {
        /*设置一个定时器，在 X 秒（跳转动画时常）后执行回调函数。 */
      }
      const timeoutAn = setTimeout(() => {
        setIsShow(false);
        {
          /*将 isRendered 状态设置为 false，隐藏动画，显示 WrappedComponent 组件 */
        }
      }, 3500);
      {
        /*清理函数*/
      }
      return () => {
        clearTimeout(timeoutAn);
      };
    }, []);

    return (
      <>{isShow ? <PageSkipAnimation /> : <WrappedComponent {...props} />}</>
    );
  };
}
