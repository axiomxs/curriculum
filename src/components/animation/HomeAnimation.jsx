import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HomeAnimation = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimationStage(1), 500);
    setTimeout(() => setAnimationStage(2), 2000); // 假设放大动画持续1.5秒，此处延时为1.5秒之后
    setTimeout(() => setAnimationStage(3), 3000); // 新增：3秒后开始透明度变化
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: animationStage === 3 ? 0 : 1,
        transition: { duration: 1 },
      }}
      className="w-full h-screen relative flex justify-center items-center"
    >
      <div className="relative flex justify-center items-center w-full h-screen">
        {/* 圆点容器元素 */}
        <AnimatePresence>
          {animationStage >= 1 && (
            <motion.div
              key="circle"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 1.5 } }}
              className="absolute w-[100px] h-[100px] bg-white rounded-full"
            >
              {/* 圆内图片 */}
              <motion.img
                src="https://telegraph-image-6cq.pages.dev/file/f385249cefaa7fb3bac7c.jpg"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5, duration: 1 },
                }}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
