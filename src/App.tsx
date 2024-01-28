{
  /*导入React、useState*/
}
import React, { useState } from "react";
{
  /*导入Outlet组件插槽、Link组件 */
}
import { Outlet, Link } from "react-router-dom";
{
  /*导入底部信息组件 */
}
import { Bottom } from "./components/bottom/Bottom";
{
  /*导入手机、平板顶部链接组件 */
}
import { Links } from "./components/menu/links/Links";
{
  /*导入手机、平板顶部按钮组件 */
}
import { Button } from "./components/menu/button/Button";
{
  /*导入motion动画 */
}
import { motion } from "framer-motion";
{
  /*导入LOGO */
}
import logo from "./assets/img/logo.png";
{
  /*导入 app.scss全局样式 和 index.css Tailwindcss */
}
import "./app.scss";
import "./index.css";
{
  /*遍历生成导航栏 */
}
export const App = () => {
  {
    /*创建控制菜单显示与隐藏的状态 */
  }
  const [open, setOpen] = useState<boolean>(false);
  {
    /*创建动画
    开启时，设置一个半径为1200像素、圆心位于(335px, 30px)位置的圆形
    关闭时，设置一个半径为0像素（防止毛玻璃背景颜色差异，所以设置为0）、圆心位于(335px, 30px)位置的圆形
    */
  }
  const variants = {
    open: {
      clipPath: "circle(1200px at 335px 30px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(0px at 335px 30px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <div className="relative box-border bg-[#f6f6f6]">
      <div className="sticky top-0 bottom-auto right-auto left-auto w-auto h-14 px-14 bg-[#f6f6f6]/60 backdrop-blur-md z-50">
        {/*固定定位、100%宽度背景模糊、高层显示*/}
        <div className="flex justify-between items-center w-4/5 h-14 container mx-auto text-center">
          {/*logo */}
          <div className="w-auto h-full">
            <Link to="/">
              <img src={logo} className="h-full" alt="LingJue" />
            </Link>
          </div>
          {/*居中 当低于md，选项栏靠左*/}
          <div className="hidden sm:hidden lg:flex gap-x-12 text-black">
            {/*
              为了在SPA单页面应用中实现无刷新的页面导航，
              使用a标签会完整刷新页面，而link则只加载路由 
            */}
            <Link to="/">主页</Link>
            <Link to="/project">项目</Link>
            <Link to="/digital">数字出版</Link>
            <Link to="/photos">照片展示</Link>
            <Link to="/contact">联系我</Link>
          </div>
          <div className="block sm:block lg:hidden absolute top-0 right-0">
            <motion.div
              className=" flex flex-col justify-center items-center bg-[#f6f6f6] text-black"
              animate={open ? "open" : "closed"}
            >
              <motion.div
                className="fixed top-0 right-0 w-[400px] h-screen bg-[#f6f6f6]/60 backdrop-blur-md"
                variants={variants}
              >
                <Links />
              </motion.div>
              <Button setOpen={setOpen} />
            </motion.div>
          </div>
        </div>
      </div>

      {/*子路由组件插槽 */}
      <Outlet />
      <Bottom />
    </div>
  );
};
