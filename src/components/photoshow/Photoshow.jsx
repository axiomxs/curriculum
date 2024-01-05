import React, { useEffect, useState } from "react";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const Photoshow = () => {
  return (
    <div className="bg-[#fafafc] flex  justify-center px-4 sm:px-14 pb-32 pt-14">
      <div className="flex flex-col lg:flex-row px-8 container mx-auto">
        <div className="w-full lg:w-1/2 h-fit">
          <div className="flex flex-col gap-10 lg:mr-5">
            <span className="text-[#e30000] text-2xl sm:text-3xl lg:text-4xl font-bold">
              PhotoShow
            </span>
            <span className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold -mt-6 mb-6">
              作品展示
            </span>

            <img
              src="https://telegraph-image-6cq.pages.dev/file/d915abe89a0e43ed81a06.jpg"
              className="w-full object-cover"
            />

            <img
              src="https://telegraph-image-6cq.pages.dev/file/923cddb133323b5d01f9c.jpg"
              className="w-full object-cover"
            />
            <img
              src="https://telegraph-image-6cq.pages.dev/file/6ce782767c78b9b726d28.jpg"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-screen">
          <div className="flex flex-col gap-10 mt-16 lg:ml-5">
            <img
              src="https://telegraph-image-6cq.pages.dev/file/c02d35e456f70a875d97e.jpg"
              className="w-full object-cover"
            />
            <img
              src="https://telegraph-image-6cq.pages.dev/file/7d470a7283d273bbe8d88.jpg"
              className="w-full object-cover"
            />
            <img
              src="https://telegraph-image-6cq.pages.dev/file/75dbaa565342190a5cd54.jpg"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
