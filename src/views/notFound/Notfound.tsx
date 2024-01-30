{
  /* NotFound 组件 */
}
{
  /*导入 React */
}
import React from "react";
{
  /*导入 Link 组件 */
}
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="flex justify-center items-center w-full h-screen px-6 py-24 sm:py-32 lg:px-8 bg-white ">
      <div className="mt-10 text-center">
        <p className="text-4xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-gray-900 sm:text-5x1">
          Page not found
        </h1>
        <p className="mt-16 text-3xl sm:text-3xl md:text-4xl leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="mt-10 px-3.5 py-2.5 rounded-md bg-indigo-600 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
