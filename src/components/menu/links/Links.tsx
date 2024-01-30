{
  /*菜单 - 链接组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入Link组件、useNavigate */
}
import { Link, useNavigate } from "react-router-dom";
{
  /*导入motion动画 */
}
import { motion } from "framer-motion";

{
  /*定义 MotionLink 接口以增强类型安全性 */
}
{
  /*onClick? 可选的点击事件处理函数 */
}
interface MotionLinkProps {
  to: string;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  [propName: string]: any;
}

const Links = () => {
  {
    /*使用useNavigate Hook获取导航函数 */
  }
  const navigate = useNavigate();
  {
    /*
    问题1：因为无法给 Link 组件加上 motion 动画
    解决：需要封装自定义带有动画效果的 Link 组件
    问题2：因为 framer-motion 不能识别到 Link 的特殊属性和行为，会导致路由跳转失效
    解决：通过 useNavigate 钩子从 react-router-dom 中获取 navigate 函数，在用户点击时手动触发页面跳转。
    */
  }
  const MotionLink: React.FC<MotionLinkProps> = ({
    to,
    variants,
    whileHover,
    whileTap,
    children,
    onClick,
    ...props
  }) => (
    <motion.div
      {...props}
      whileHover={whileHover}
      whileTap={whileTap}
      onClick={(event) => {
        {
          /*
          在点击链接后调用从 useNavigate 钩子获取到的 navigate 函数，实现页面的路由跳转。
          这里的 to 是自定义 MotionLink 组件接收的一个属性（目标地址 ）
          */
        }
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </motion.div>
  );
  {
    /*链接文字动画 */
  }
  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="absolute flex flex-col justify-center items-center gap-5 w-full h-full text-black text-2xl"
      variants={containerVariants}
    >
      {/*
        为了在SPA单页面应用中实现无刷新的页面导航，
        使用a标签会完整刷新页面，而link则只加载路由 
      */}
      <MotionLink
        to="/"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        主页 & 项目
      </MotionLink>
      <MotionLink
        to="/digital"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        数字出版
      </MotionLink>
      <MotionLink
        to="/photos"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        照片展示
      </MotionLink>
      <MotionLink
        to="/contact"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        联系我
      </MotionLink>
    </motion.div>
  );
};

export default Links;
