{
  /*导入基础部分 */
}
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
{
  /*导入组件*/
}
import { App } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  </HashRouter>
);
