{
  /*照片组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入照片主页组件 */
}
import { PhotosHome } from "./photosHome/PhotosHome.jsx";
{
  /*导入照片展示组件 */
}
import { PhotosShow } from "./photosShow/PhotosShow.jsx";

export const Photos = () => {
  return (
    <div className="w-screen h-fit bg-white">
      {/*插入照片主页组件 */}
      <PhotosHome />
      {/*插入照片展示组件 */}
      <PhotosShow />
    </div>
  );
};
