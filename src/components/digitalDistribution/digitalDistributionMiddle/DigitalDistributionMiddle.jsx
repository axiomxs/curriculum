{
  /*数字发行物组件 - 数字发行物连接 组件 */
}
{
  /*导入React、useState、useEffect } */
}
import React, { useState, useEffect } from "react";

export const DigitalDistributionMiddle = () => {
  {
    /*创建状态 scrollPercentage 用于存储滚动百分比*/
  }
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      {
        /*获取窗口的高度 */
      }
      const windowHeight = window.innerHeight;
      {
        /*获取整个文档内容的高度（包括未滚动到可视区域的部分） */
      }
      const docHeight = document.documentElement.scrollHeight;
      {
        /*获取当前滚动条距离顶部的距离 */
      }
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      {
        /*计算滚动百分比 */
      }
      const scrollPercentage = (scrollTop / (docHeight - windowHeight)) * 100;

      {
        /*防止滚动超过100%，确保百分比在有效范围内 */
      }
      setScrollPercentage(Math.min(scrollPercentage, 100));
    };

    {
      /*监听滚动事件 */
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    {
      /*当组件卸载时，移除滚动事件监听器 */
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  {
    /*根据滚动百分比的不同范围，返回相应的颜色值 */
  }
  const getColorByScrollPercentage = (percentage) => {
    {
      /*当滚动百分比小于30%时，文本颜色设为白色。否则，文本颜色设为黑色 */
    }
    if (percentage < 50) {
      return "slate-100";
    } else {
      return "black";
    }
  };
  return (
    <div className="flex justify-center py-20 px-8  bg-white">
      <div className="flex flex-col items-center max-w-[1200px] py-6 px-6 border border-[#e3e8f7] bg-white rounded-xl leading-6 transition-all duration-300 ease-in-out hover:border-rose-400 shadow-[0_8px_16px_-4px_rgba(102, 68, 68, 0.00)]">
        <span className="flex flex-col text-xl sm:text-xl lg:text-2xl tracking-widest py-2">
          <p
            className={`pb-2 leading-9 transition-all duration-500 ease-in-out transform-gpu text-${getColorByScrollPercentage(
              scrollPercentage
            )}`}
          >
            &emsp;&emsp;通过运用连续不断的数字内容，我们不仅能够
            <span className="inline text-orange-400">超越日常生活</span>
            的局限，启迪并汲取更多的
            <span className="inline text-orange-400">灵感与创意</span>
            ，还能在无尽的数字世界中探寻那些来自
            <span className="inline text-orange-400">生活之外</span>、却又深深
            <span className="inline text-orange-400">触动人心的奇思妙想</span>。
          </p>
          <p
            className={`hidden lg:block pb-2 leading-9 transition-all duration-500 ease-in-out transform-gpu text-${getColorByScrollPercentage(
              scrollPercentage
            )}`}
          >
            &emsp;&emsp;我们坚信，每一段精心编排的数字信息都
            <span className="inline text-orange-400">
              承载着非凡的意义和价值
            </span>
            ，正如一本生动而立体的连续数字出版物，它编织着我们的
            <span className="inline text-orange-400">
              独特见解、珍贵记忆以及创新思考
            </span>
            。
          </p>
          <p
            className={`hidden lg:block pb-2 leading-9 transition-all duration-500 ease-in-out transform-gpu text-${getColorByScrollPercentage(
              scrollPercentage
            )}`}
          >
            &emsp;&emsp;我们将用数字化的方式捕捉并传递那些非同凡响的生活片段，无论是对
            <span className="inline text-orange-400">知识的深度挖掘</span>
            ，还是对
            <span className="inline text-orange-400">情感的独特表达</span>
            ，抑或是对
            <span className="inline text-orange-400">未来的前瞻洞察</span>。
          </p>
          <p
            className={`hidden lg:block pb-2 leading-9 transition-all duration-500 ease-in-out transform-gpu text-${getColorByScrollPercentage(
              scrollPercentage
            )}`}
          >
            &emsp;&emsp;将个体与世界的连接延展至更广阔的维度，让每一个读者都能从中
            <span className="inline text-orange-400">
              找寻到共鸣、启示和激励
            </span>
            ，共同探索并享受这个丰富多彩的数字时代所带来的
            <span className="inline text-orange-400">无限可能</span>。
          </p>
        </span>
      </div>
    </div>
  );
};
