{
  /*菜单 - 链接组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入motion动画 */
}
import { motion } from "framer-motion";

export const Links = () => {
  {
    /*链接文字动画 */
  }
  const variants = {
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
      variants={variants}
    >
      <motion.a
        href="/#"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        主页
      </motion.a>
      <motion.a
        href="/#/project"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        项目
      </motion.a>
      <motion.a
        href="/#/article"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        文章
      </motion.a>
      <motion.a
        href="/#/awards"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        奖项
      </motion.a>
      <motion.a
        href="/#/digital"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        数字出版
      </motion.a>
      <motion.a
        href="/#/photos"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        照片展示
      </motion.a>
      <motion.a
        href="/#/collection"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        数字藏品
      </motion.a>
      <motion.a
        href="/#/contact"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        联系我
      </motion.a>
    </motion.div>
  );
};
