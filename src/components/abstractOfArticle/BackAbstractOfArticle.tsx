{
  /*【后端请求】AI文章摘要组件 */
}
{
  /*导入 React、useState、useEffect */
}
import React, { useState, useEffect } from "react";
{
  /*导入 axios */
}
import axios from "axios";

{
  /*定义一个名为Props的接口，表示要进行摘要处理的文章内容 */
}
interface Props {
  inputText: string;
}

{
  /*接收Props类型的参数，并通过解构赋值获取`inputText`属性 */
}
const AiAbstractOfArticle = ({ inputText }: Props) => {
  {
    /*三个状态：
  isLoading（是否正在加载摘要）
  error（加载过程中的错误信息）
  summary（生成的文章摘要）*/
  }
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState("");

  {
    /*当 inputText 发生变化时执行回调函数 */
  }
  useEffect(() => {
    {
      /*定义异步函数 fetchSummary ，负责发送 POST 请求到服务器以生成文章摘要 */
    }
    async function fetchSummary() {
      setIsLoading(true);

      try {
        {
          /*创建一个 JSON 格式的请求体，包含待摘要的文章内容 */
        }
        const requestBody = JSON.stringify({ text: inputText });

        {
          /*发送 POST 请求到指定 API 地址 */
        }
        const response = await axios.post(
          "https://gemini.forevers.love/post/gemini",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        {
          /*提取摘要并将其设置到组件状态 */
        }
        if (response.status === 200 && response.data) {
          setSummary(response.data.summary);
        } else {
          {
            /*如果服务器响应的状态码不是200，则抛出错误 */
          }
          throw new Error(`服务器响应状态码 ${response.status}`);
        }
        {
          /*处理错误 */
        }
      } catch (err) {
        setError(err.message || err.response?.data?.message);
      }
      setIsLoading(false);
    }

    if (inputText) {
      fetchSummary();
    }
    {
      /*清理函数 */
    }
    return () => {};
  }, [inputText]);

  return (
    <div>
      {isLoading && <p>正在生成文章摘要...</p>}
      {error && <p>出错啦: {error}</p>}
      {summary && <p>{summary}</p>}
    </div>
  );
};

export default AiAbstractOfArticle;
