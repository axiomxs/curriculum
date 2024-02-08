{
  /*前端请求 Gemini */
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
  /*定义名为 Props 的接口，表示组件接收的文章内容 */
}
interface Props {
  text: string;
}

{
  /*
  isLoading用于表示是否正在加载摘要；
  error用于存储可能发生的错误信息；
  summary用于存储生成的摘要文本 
  */
}
const AbstractOfArticle = ({ text }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    async function generateSummary() {
      setIsLoading(true);

      try {
        const API_KEY = "AIzaSyCUczeFUpFdTzMvBfFbV6fCoz6Z5KNAKho";
        {
          /*
          主：https://gemini.qing.pw/v1beta/
          备：https://gemini.baipiao.io/v1beta/
          */
        }
        const API_URL = `https://gemini.qing.pw/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
        const prompt = `请将这段话用简短的语言概括成文章摘要，生成字数不超过200字：${text}`;
        const requestBody = {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        };

        const response = await axios.post(API_URL, requestBody, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const keywordsText = response.data.candidates[0].content.parts[0].text;

        setSummary(keywordsText);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    if (text) {
      generateSummary();
    }

    return () => {};
  }, [text]);

  return (
    <div>
      {isLoading && <p>正在生成关键词...</p>}
      {error && <p>出错啦: {error}</p>}
      {summary && <p>{summary}</p>}
    </div>
  );
};

export default AbstractOfArticle;
