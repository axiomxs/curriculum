{
  /*导入 React、useState、useEffect、useRef */
}
import React, { useState, useEffect, useRef } from "react";
{
  /*导入 Framer Motion库 */
}
import { motion } from "framer-motion";
{
  /*接收一个 size 对象作为 props */
}
export const HaloAnimation = ({ size }) => {
  {
    /*创建状态 mouse 用于存储鼠标坐标 */
  }
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  {
    /*创建一个ref实例，用于获取DOM元素的位置信息 */
  }
  const ref = useRef(null);
  {
    /*计算SVG元素相对于视窗的位置信息（left、top、width、height）以及中心点坐标 */
  }
  const svgPosInfo = ref.current?.getBoundingClientRect();
  const svgLeft = svgPosInfo?.left ?? 0;
  const svgTop = svgPosInfo?.top ?? 0;
  const svgWidth = svgPosInfo?.width ?? 0;
  const svgHeight = svgPosInfo?.height ?? 0;
  const svgCenterX = svgLeft + svgWidth / 2;
  const svgCenterY = svgTop + svgHeight / 2;
  {
    /*根据鼠标位置与SVG中心点计算偏移量（deltaX, deltaY） */
  }
  const deltaX = mouse.x - svgCenterX;
  const deltaY = mouse.y - svgCenterY;
  {
    /*定义 mouseMoveHandler 函数，当鼠标在窗口中移动时更新 mouse 状态 */
  }
  function mouseMoveHandler(e) {
    setMouse({ x: e.clientX, y: e.clientY });
  }
  {
    /*监听全局鼠标的 mousemove 事件，并在卸载时移除监听器 */
  }
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  return (
    <div className="flex justify-center items-center h-full">
      <div className="blur-[80px]" ref={ref}>
        <motion.div
          animate={{ translateX: deltaX * 0.1, translateY: deltaY * 0.1 }}
          transition={{ ease: "easeOut" }}
        >
          <svg viewBox="0 0 900 800" width={size.w} height={size.h}>
            <g transform="translate(468.5133684084391 469.5293914477717)">
              <motion.path
                d="M235.9 -232.2C286.1 -185.7 293.5 -92.9 295.8 2.2C298 97.3 295 194.7 244.9 232.2C194.7 269.7 97.3 247.4 8.4 239C-80.6 230.6 -161.2 236.2 -220.1 198.7C-278.9 161.2 -315.9 80.6 -328.7 -12.7C-341.4 -106.1 -329.8 -212.1 -271 -258.6C-212.1 -305.1 -106.1 -292.1 -6.6 -285.5C92.9 -278.9 185.7 -278.7 235.9 -232.2"
                fill="#BB004B"
                animate={{
                  d: [
                    "M235.9 -232.2C286.1 -185.7 293.5 -92.9 295.8 2.2C298 97.3 295 194.7 244.9 232.2C194.7 269.7 97.3 247.4 8.4 239C-80.6 230.6 -161.2 236.2 -220.1 198.7C-278.9 161.2 -315.9 80.6 -328.7 -12.7C-341.4 -106.1 -329.8 -212.1 -271 -258.6C-212.1 -305.1 -106.1 -292.1 -6.6 -285.5C92.9 -278.9 185.7 -278.7 235.9 -232.2",
                    "M260.6 -272.1C309.1 -212.1 300.1 -106.1 296.8 -3.3C293.5 99.5 295.9 198.9 247.4 236.4C198.9 273.9 99.5 249.5 1.5 247.9C-96.4 246.4 -192.8 267.8 -264.6 230.3C-336.5 192.8 -383.7 96.4 -373.2 10.5C-362.8 -75.4 -294.5 -150.8 -222.7 -210.8C-150.8 -270.8 -75.4 -315.4 15.3 -330.7C106.1 -346.1 212.1 -332.1 260.6 -272.1",
                    "M257.8 -251.8C303.5 -212.1 288.7 -106.1 269.9 -18.9C251 68.4 228 136.7 182.4 181.4C136.7 226 68.4 247 0.9 246.1C-66.5 245.1 -132.9 222.3 -202.9 177.6C-272.9 132.9 -346.5 66.5 -339.8 6.7C-333 -53 -246.1 -106.1 -176.1 -145.7C-106.1 -185.4 -53 -211.7 26.5 -238.2C106.1 -264.7 212.1 -291.5 257.8 -251.8",
                  ],
                  fill: ["#BB004B", "#BAF093", "#C517D0"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  duration: 5,
                }}
              ></motion.path>
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
