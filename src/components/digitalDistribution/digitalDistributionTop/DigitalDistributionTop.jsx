{
  /*数字发行物组件 - 数字发行物头部组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入 光晕 组件 */
}
import { HaloAnimation } from "../haloAnimation/HaloAnimation";

export const DigitalDistributionTop = () => {
  {
    /*定义 光晕 组件的宽高 */
  }
  const size = {
    w: "900px",
    h: "900px",
  };
  return (
    <div className="box-border w-full h-fit px-14 pt-6 pb-14 bg-white overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 z-0">
          {/*将 光晕 组件的宽高传入 */}
          <HaloAnimation size={size} />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="pt-22 py-16 text-black text-5xl sm:text-8xl lg:text-9xl">
            数字出版
            <div className="flex justify-center gap-2.5 mt-4 lg:mt-10">
              <p className="p-1 rounded-xl text-xl text-black hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out transform-gpu">
                见闻
              </p>
              <p className="p-1 rounded-xl text-xl text-black hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out transform-gpu">
                项目集
              </p>
              <p className="p-1 rounded-xl text-xl text-black hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out transform-gpu">
                技术
              </p>
              <p className="p-1 rounded-xl text-xl text-black hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out transform-gpu">
                文学与艺术
              </p>
              <p className="p-1 rounded-xl text-xl text-black hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out transform-gpu">
                影像记录
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*手机屏幕下为单栏、平板为双栏、电脑为三栏 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative w-full rounded-3xl shadow-lg drop-shadow-[0_0px_16px_rgba(0,0,0,0.10)] transition-all duration-500 ease-in-out transform-gpu overflow-hidden hover:scale-95">
          <img
            src="https://telegraph-image-6cq.pages.dev/file/53441eccfcdb414345456.jpg"
            className="rounded-3xl transition-all duration-500 ease-in-out transform-gpu hover:scale-105"
          />
          <p className="absolute bottom-[21%] left-[10%] text-white text-3xl">
            Top books of 2024
          </p>
        </div>
        <div className="hidden sm:block lg:block relative w-full rounded-3xl shadow-lg drop-shadow-[0_0px_16px_rgba(0,0,0,0.10)] transition-all duration-500 ease-in-out transform-gpu overflow-hidden hover:scale-95">
          <img
            src="https://telegraph-image-6cq.pages.dev/file/1734a47997351394c9494.jpg"
            className="rounded-3xl transition-all duration-500 ease-in-out transform-gpu hover:scale-105"
          />
          <p className="absolute bottom-[21%] left-[10%] text-white text-3xl">
            Top books of 2024
          </p>
        </div>
        <div className="hidden sm:hidden lg:block relative w-full rounded-3xl shadow-lg drop-shadow-[0_0px_16px_rgba(0,0,0,0.10)] transition-all duration-500 ease-in-out transform-gpu overflow-hidden hover:scale-95">
          <img
            src="https://telegraph-image-6cq.pages.dev/file/9368c68a511c84f1f9713.jpg"
            className="rounded-3xl transition-all duration-500 ease-in-out transform-gpu hover:scale-105"
          />
          <p className="absolute bottom-[21%] left-[10%] text-white text-3xl">
            Top books of 2024
          </p>
        </div>
      </div>
    </div>
  );
};
