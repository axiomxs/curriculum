{
  /*页面 底部 组件*/
}
{
  /*导入React */
}
import React from "react";
{
  /*导入 非 AI 创作 图标 */
}
import notAI from "../../assets/icon/Written-By-Human-Not-By-AI-Badge-white.svg";

export const Bottom = () => {
  return (
    <div className="box-border max-w-[1400px] h-fit px-20 pb-14 bg-white overflow-hidden ">
      <div className="flex justify-between items-center flex-wrap w-full border-t-[1px] border-gray-300">
        <div className="flex flex-col pt-24 ">
          <span className="p-1 text-2xl text-black font-bold rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out">
            离颜 灵绝
          </span>
          <span className="p-1 whitespace-nowrap text-black  rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out">
            命运指引，一切皆为必然轨迹。
          </span>
          <a href="https://notbyai.fyi" target="_blank" className="px-2 pt-3">
            <img src={notAI} />
          </a>
        </div>
        <div className="flex h-full text-center text-xl text-black ">
          <span className="p-1 font-bold whitespace-nowrap rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out">
            灵绝
          </span>
          <span className="p-1 ml-1">© 2024 - 保留所有权利</span>
        </div>
      </div>
    </div>
  );
};
