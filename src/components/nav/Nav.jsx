import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="w-full fixed left-0 flex flex-col justify-center items-center z-50 transition-all duration-300 ease-in-out bg-bg-neutral-900/91 backdrop-blur-[10px]">
      <div className="max-w-[1200px] container mx-auto flex z-50 justify-between items-center h-16">
        <div>
          <Link to="" className="flex items-center">
            <img
              src="https://telegraph-image-6cq.pages.dev/file/cc0e8e6d3a1f5b320e481.jpg"
              alt="logo"
              className="w-6"
            ></img>
            <span className="text-sm ml-2 bg-transparent">Axiom</span>
          </Link>
        </div>
        <div>
          <Link
            to="/"
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            A
          </Link>
          <Link
            to=""
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            B
          </Link>
          <Link
            to=""
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            C
          </Link>
          <Link
            to=""
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            D
          </Link>
          <Link
            to=""
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            E
          </Link>
          <Link
            to=""
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            F
          </Link>
          <Link
            to=""
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            G
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to=""
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            A
          </Link>
          <Link
            to=""
            className="bg-[#fff] text-sm transition-all duration-300 ease-in-out mx-0.5 opacity-80 rounded-xl py-1 px-2 hover:opacity-100 hover:text-[#00001e]"
          >
            B
          </Link>
        </div>
      </div>
    </div>
  );
};
