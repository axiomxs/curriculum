import React from "react";
import datas from "../json/article.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Article = () => {
  {
    /*动画 */
  }
  const states = {
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        duration: 1,
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <div className="bg-[#fafafc] w-full h-fit">
      <motion.div
        variants={states}
        whileInView="visible"
        initial="hidden"
        className="w-full m-0 pt-4 lg:pt-14 container mx-auto px-4 sm:px-14"
      >
        <span className="text-2xl sm:text-3xl pt-16 font-bold text-[#e30000]">
          文章，
        </span>
        <span className="text-2xl sm:text-3xl text-[#6e6e73]">
          引领未来之路！
        </span>
        <div className="carousel carousel-center w-full px-4 pb-14 pt-10 space-x-6 rounded-box h-full">
          <div className="carousel-item rounded-2xl h-[454px] w-[260px] sm:h-[505px] sm:w-[404px] p-8 overflow-hidden shadow-xl cursor-pointer flex flex-col relative bg-[#f56900] scale-100 transition duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-2xl shadow-[2px_4px_16px_rgba(0, 0, 0, 0.16)]">
            <span className="text-white text-2xl sm:text-3xl pt-10">
              探索科技奥秘。
            </span>
            <img
              src="https://telegraph-image-6cq.pages.dev/file/b260d3ca7c7a961b61474.png"
              alt=""
            />
          </div>
          {datas.map((item) => (
            <Link
              to={item.show}
              className="carousel-item rounded-2xl h-[454px] w-[260px] sm:h-[500px] sm:w-[313px] p-8 overflow-hidden shadow-xl cursor-pointer flex flex-col relative bg-[#fff] scale-100 transition duration-500 ease-in-out transform-gpu hover:scale-[1.02] hover:shadow-2xl "
              key={item.id}
            >
              <div className="h-2/3 w-full flex justify-center items-center">
                <img
                  className="rounded-box h-auto w-auto overflow-hidden object-cover"
                  src={item.img}
                  alt="product-icon"
                  title="product-icon"
                />
              </div>
              <div className="h-1/3 w-full flex flex-col justify-center">
                <span className="text-[#e30000] text-xl">{item.title}</span>
                <span className="text-black text-xl pt-4">
                  {item.introduce}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
