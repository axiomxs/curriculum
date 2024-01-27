{
  /*联系我组件 */
}
{
  /*导入 React、useState、useEffect */
}
import React, { useState, useEffect } from "react";
{
  /*导入 contact 图标 */
}
import contact from "../../icon/contact.svg";

export const ContactMe = () => {
  {
    /*使用useState Hook初始化状态变量scrollDistance，用于记录滚动距离 */
  }
  const [scrollDistance, setScrollDistance] = useState(0);
  {
    /*使用useRef Hook创建两个引用对象，分别用于获取header和img的DOM元素 */
  }
  const headerRef = React.useRef(null);
  const imgRef = React.useRef(null);
  {
    /*
    滚动事件监听与视差效果
    使用 useThrottleEffect 进行节流处理
    */
  }
  useEffect(() => {
    {
      /*updateHeaderClipPath函数：
        根据当前滚动距离计算header的clip-path属性值以及img元素的缩放比例，
        然后直接修改DOM元素的样式 */
    }
    const updateHeaderClipPath = () => {
      {
        /*如果没有获取到header或img的DOM元素，则return */
      }
      if (!headerRef.current || !imgRef.current) return;

      const clipPathValue = `polygon(0 0, 100% 0%, 100% ${
        scrollDistance <= 600 ? 100 - (scrollDistance / 600) * 60 : 75
      }%, 0 100%)`;
      {
        /*修改header DOM元素的样式 */
      }
      headerRef.current.style.clipPath = clipPathValue;

      const scaleValue = 1 + (scrollDistance / 600) * 1;
      {
        /*修改img DOM元素的缩放比例 */
      }
      imgRef.current.style.transform = `scale(${scaleValue})`;
    };
    {
      /*handleScroll函数：
        作为滚轮滚动事件的回调函数，
        在事件触发时更新scrollDistance的状态，
        同时返回一个清除函数，用于取消当前的动画帧请求 */
    }
    const handleScroll = (event) => {
      if (event.deltaY < 0) {
        setScrollDistance(Math.max(0, scrollDistance + event.deltaY));
      } else {
        setScrollDistance(Math.min(600, scrollDistance + event.deltaY));
      }

      {
        /*使用requestAnimationFrame优化渲染*/
      }
      let requestId = window.requestAnimationFrame(() => {
        updateHeaderClipPath();
      });
      return () => window.cancelAnimationFrame(requestId);
    };
    {
      /*添加 wheel 事件监听器 */
    }
    window.addEventListener("wheel", handleScroll);
    {
      /*当组件卸载时，通过返回的清理函数移除事件监听器 */
    }
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
    {
      /*每当scrollDistance数值发生变化时，effect都会执行一次 */
    }
  }, [scrollDistance]);

  return (
    <div className="w-full h-fit overflow-hidden">
      <header ref={headerRef} className="relative">
        <img
          className="w-full h-full object-cover"
          ref={imgRef}
          src="https://telegraph-image-6cq.pages.dev/file/833ea72a5c2bda1c525e4.jpg"
        />
        <div className="absolute left-0 top-0 flex flex-col justify-center items-center w-full h-full">
          <div className="flex text-5xl sm:text-7xl lg:text-8xl font-bold text-center">
            <span className="mr-8 text-white">CONTACT</span>
            <span className="text-[#cb90f6]">ME.</span>
          </div>
          <span className="hidden sm:block lg:block mt-8 text-2xl text-white text-center">
            如果你有很棒的想法或需要平面设计，网站，移动应用程序…
            <br />
            请我和我联系吧!
          </span>
          <img
            src="https://telegraph-image-6cq.pages.dev/file/eae58447dfd0349d91637.png"
            className="hidden sm:hidden lg:block absolute top-40 left-[370px] w-40 h-40"
          />
        </div>
      </header>
      <div className="w-fit lg:w-full h-fit container mx-auto px-8 ">
        <div className="flex flex-col justify-start items-center w-full h-fit">
          <div className="flex flex-col justify-start w-fit">
            <div className="flex w-fit mt-8 lg:mt-4">
              <img
                src={contact}
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
              />
              <span className="ml-2 lg:ml-10 text-4xl sm:text-5xl lg:text-7xl text-black font-black sm:leading-loose lg:leading-loose">
                Let’s talk!
              </span>
            </div>
            <div className="my-20 pl-8 border-l-2 lg:border-l-4 border-[#a43eee] leading-9 transition-all duration-500 ease-in-out transform-gpu hover:leading-10">
              <span className=" text-xl lg:text-2xl text-black text-center tracking-wider text-wrap">
                如果你有很棒的想法或需要平面设计，网站，移动应用程序…
                <br />
                请在这里填写，
                <br />
                或发送到我的邮箱
                <a
                  href="mailto:465331615@qq.com"
                  className="mx-2 text-[#a43eee]"
                >
                  465331615@qq.com
                </a>
                !
              </span>
            </div>
            <form onSubmit="/" className="w-full sm:w-full lg:w-[700px]">
              <input
                type="text"
                className="py-3 px-6 lg:px-8 w-full h-[60px] sm:h-[70px] lg:h-[80px] border border-[#d6d6d6] bg-white text-black input-text text-xl rounded-lg transition duration-500 ease-in-out transform-gpu hover:border-pink-500"
                id="username"
                placeholder="您的名字"
              />
              <input
                type="text"
                className="mt-8 py-3 px-6 lg:px-8 w-full h-[60px] sm:h-[70px] lg:h-[80px] border border-[#d6d6d6] bg-white text-black input-text text-xl rounded-lg transition duration-500 ease-in-out transform-gpu hover:border-pink-500"
                id="email"
                placeholder="您的邮箱"
              />
              <textarea
                rows="1"
                placeholder="请输入您很棒的想法..."
                className="mt-8 py-3 px-6 lg:px-8 w-full h-[150px] sm:h-[200px] lg:h-[300px] border border-[#d6d6d6] bg-white text-xl text-black rounded-lg overflow-x-hidden overflow-y-auto whitespace-pre-wrap outline-none outline-transparent outline-offset-2 break-normal transition duration-500 ease-in-out transform-gpu hover:border-pink-500"
              ></textarea>

              <button
                className="mt-8 mb-10 py-2.5 px-7 w-28 h-12 border border-[#d6d6d6] bg-transparent text-xl text-black rounded-[100px] cursor-pointer"
                onClick="/"
              >
                提交
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
