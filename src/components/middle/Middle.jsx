{
  /*导入基础部分 */
}
import React from "react";

export const Middle = () => {
  return (
    <div className=" bg-[#fafafc] flex justify-center mt-32">
      <div className="flex flex-col items-center py-6 px-8 mb-10 sm:mb-16 lg:mb-32 mx-6 bg-white rounded-xl leading-6  max-w-[1200px] container mx-auto  border border-[#e3e8f7] transition-all duration-300 ease-in-out hover:border-rose-400 shadow-[0_8px_16px_-4px_rgba(102, 68, 68, 0.00)]">
        <span className="flex text-center text-xl sm:text-2xl lg:text-3xl text-black leading-relaxed font-semibold">
          “在这个互联网需求接近饱和的时代，产品开发其实应该更多地去关注人，人机交互体验，注重软件的体验，研究用户的使用心理、使用动机以及目标完成流程的状态变化。这就是我所追求的。”
        </span>
        <img
          className="w-96 h-16 object-cover mt-7 border-4  border-white shadow-[0_5px_12px_-5px_rgba(102, 68, 68, 0.00)]"
          src="https://telegraph-image-6cq.pages.dev/file/3d0afe896f0419a03db77.png"
        />
      </div>
    </div>
  );
};
