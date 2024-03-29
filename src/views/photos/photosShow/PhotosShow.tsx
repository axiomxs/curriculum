{
  /*图片展示 - 照片展示组件 */
}
{
  /*导入 React、useState、useEffect */
}
import React, { useState, useEffect } from "react";
{
  /*导入motion动画 */
}
import { motion } from "framer-motion";
{
  /*导入懒加载 */
}
import LazyLoad from "react-lazyload";
{
  /*导入灯箱 */
}
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
{
  /*导入图片展示数据  ./photosShow.json*/
}
import datas from "../../../../public/json/photosShow.json";

{
  /*（接口）定义 PhotoItem 接口以增强类型安全性 */
}
interface PhotoItem {
  id: number;
  img: string;
  author: string;
  title: string;
  introduce: string;
  tag: string[];
}

export const PhotosShow = () => {
  {
    /*
    数据反向：最新的数据先展示
    为避免可能造成不必要的UI重绘和重新布局，将反转数据的操作移动到useMemo以确保只执行一次
    */
  }
  const reversedData = React.useMemo(() => {
    return datas.reverse();
  }, []);
  {
    /*（滚动）使用useState Hook初始化状态变量scrollDistance，用于记录滚动距离 */
  }
  const [scrollDistance, setScrollDistance] = useState<number>(0);
  {
    /*（滚动）创建控制图片展示区域显示与隐藏的状态 */
  }
  const [visible, setVisible] = useState<boolean>(false);
  {
    /*（判断动画）初始化屏幕宽度状态为-1 */
  }
  const [screenWidth, setScreenWidth] = useState(-1);

  {
    /*（判断动画）窗口尺寸变化监听 */
  }
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    {
      /*添加窗口尺寸变化监听事件 */
    }
    window.addEventListener("resize", handleResize);
    {
      /*执行一次以获取当前屏幕宽度 */
    }
    handleResize();
    {
      /*在组件卸载时移除事件监听器 */
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  {
    /*（滚动）滚动事件监听与控制展示页面开关 */
  }
  useEffect(() => {
    function handleScroll(event: Event) {
      {
        /*获取当前窗口滚动条的位置*/
      }
      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;
      {
        /*设置滚动位置并判断是否达到显示阈值*/
      }
      setScrollDistance(currentScrollY);
      {
        /*当滚动到屏幕高度的10%时，显示图片展示区域*/
      }
      if (currentScrollY > window.innerHeight * 0.1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    {
      /*在组件卸载时移除滚动事件监听器*/
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDistance]);
  {
    /*灯箱，销毁 （隐藏缩略图）*/
  }
  useEffect(() => {
    Fancybox.bind('[data-fancybox="viewer"]', {
      Thumbs: false,
    });
    return () => {
      Fancybox.destroy();
    };
  }, []);

  {
    /*（动画）图片展示盒子出现在页面时的渐入动画 */
  }
  {
    /*电脑屏幕下的动画 */
  }
  const lgstates = {
    visible: {
      y: -130,

      transition: {
        type: "tween",
        duration: 1,
      },
    },
    hidden: {
      y: 50,

      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };
  {
    /*手机、平板屏幕下的动画 */
  }
  const states = {
    visible: {
      y: -320,

      transition: {
        type: "tween",
        duration: 1,
      },
    },
    hidden: {
      y: -50,

      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={screenWidth >= 1024 ? lgstates : states}
      animate={visible ? "visible" : "hidden"}
      className="box-border w-full h-fit px-6 sm:px-10 md:px-20 lg:px-20 bg-transparent overflow-hidden"
    >
      {/*使用map遍历，并通过对id的奇偶区分，分别设置样式，实现【图片 + 文字】块棋格布局 */}
      {reversedData.map((item: PhotoItem) => (
        <div
          className={`flex mb-6 lg:mb-0 ${
            item.id % 2 === 0
              ? "flex-col lg:flex-row-reverse"
              : "flex-col lg:flex-row"
          }`}
          key={item.id}
        >
          {/*
            LazyLoad 实现懒加载，根据滚动位置动态调整 LazyLoad 高度阈值
            设置了垂直偏移量，使其在接近视口顶部时提前开始加载 
          */}
          <LazyLoad
            className="w-full lg:w-1/2"
            height={window.innerHeight * 1.2}
            offset={[-100, 0]}
          >
            <div className="w-full lg:h-[650px]">
              <a data-fancybox="viewer" href={item.img}>
                <img src={item.img} className="w-full h-full object-cover" />
              </a>
            </div>
          </LazyLoad>
          {/*通过对id的奇偶区分，分别设置样式，实现【文字】块棋格布局 */}
          <div
            className={`flex flex-col lg:justify-center items-center sm:items-center  w-full lg:w-1/2 h-fit lg:h-[650px] py-12 lg:py-0 px-12 bg-[#fafafc] ${
              item.id % 2 === 0 ? "lg:items-end" : "lg:items-start"
            }`}
          >
            <p className="text-black text-base lg:text-md font-bold ">
              {item.author}
            </p>
            <div className="my-8 lg:my-14 leading-10">
              <span className="bg-gradient-to-r from-[#ff0f77] to-[#ff0f77] bg-no-repeat bg-[length:0px_30%] bg-left-bottom transition-[background-size] duration-[1000ms] ease-in-out transform-gputext-black text-black text-wrap text-4xl lg:text-5xl font-black hover:bg-[length:100%_30%]">
                {item.title}
              </span>
            </div>

            <p className="text-black text-base tracking-widest text-center lg:text-left">
              {item.introduce}
            </p>
            <div className="flex gap-2.5 mt-8 lg:mt-14">
              {item.tag.map((tag) => (
                <p className="p-1 text-black tracking-wider rounded-xl hover:text-orange-400 hover:bg-yellow-400/20 transition-all duration-300 ease-in-out transform-gpu">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
