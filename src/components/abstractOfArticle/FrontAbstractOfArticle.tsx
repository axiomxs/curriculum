{
  /*【前端请求】AI文章摘要组件 */
}
{
  /*导入 React、useState、useEffect */
}
import React, { useState, useEffect } from "react";
{
  /*导入 @google/generative-ai*/
}
import { GoogleGenerativeAI } from "@google/generative-ai";

{
  /*定义一个名为Props的接口，表示要进行摘要处理的文章内容 */
}
interface Props {
  inputText: string;
}

{
  /*接收Props类型的参数，并通过解构赋值获取`inputText`属性 */
}
const AbstractOfArticle = ({ inputText }: Props) => {
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
      /*定义一个异步函数 generateSummary ，负责生成文章摘要 */
    }
    async function generateSummary() {
      setIsLoading(true);

      try {
        {
          /*声明API密钥常量 */
        }
        const API_KEY = "AIzaSyCUczeFUpFdTzMvBfFbV6fCoz6Z5KNAKho";
        {
          /*检查API密钥是否存在 */
        }
        if (!API_KEY) {
          throw new Error("API Key not found");
        }
        {
          /*使用API密钥实例化 GoogleGenerativeAI 对象，以便调用相关方法访问谷歌AI */
        }
        const genAI = new GoogleGenerativeAI(API_KEY);
        {
          /*调用 getGenerativeModel 方法获取模型 gemini-pro 的实例 */
        }
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        {
          /*将 inputText 内容 和 摘要要求拼凑 */
        }
        const prompt = `请将这段话用简短的语言概括成文章摘要，文章摘要在200字以内：${inputText}`;
        {
          /*异步调用模型的 generateContent 方法，传入构造好的语句以生成摘要 */
        }
        const result = await model.generateContent(prompt);
        {
          /*获取模型返回的响应对象并从中提取文本摘要内容 */
        }
        const response = await result.response;
        const text = response.text();

        setSummary(text);
        {
          /*处理异常 */
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    if (inputText) {
      generateSummary();
    }
    {
      /*清理函数 */
    }
    return () => {};
  }, [inputText]);

  return (
    <div>
      {isLoading && <p>Loading summary...</p>}
      {error && <p>Error: {error}</p>}
      {summary && <p>{summary}</p>}
    </div>
  );
};

export default AbstractOfArticle;
