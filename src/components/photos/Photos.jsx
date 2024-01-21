{
  /*照片组件 */
}
{
  /*导入React */
}
import React from "react";
{
  /*导入照片展示组件 */
}
import { PhotosShow } from "./photosShow/PhotoShow.jsx";

export const Photos = () => {
  return (
    <div className="w-screen h-fit">
      <PhotosShow />
    </div>
  );
};
