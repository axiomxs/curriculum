import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  inputText: string;
}

const AiAbstractOfArticle = ({ inputText }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    async function fetchSummary() {
      setIsLoading(true);

      try {
        const requestBody = JSON.stringify({ text: inputText });

        // 发送POST请求到指定API地址
        const response = await axios.post(
          "https://gemini.forevers.love/post/gemini",
          requestBody,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200 && response.data) {
          setSummary(response.data.summary);
        } else {
          throw new Error(
            `Server responded with status code ${response.status}`
          );
        }
      } catch (err) {
        setError(err.message || err.response?.data?.message);
      }
      setIsLoading(false);
    }

    if (inputText) {
      fetchSummary();
    }

    return () => {}; // 清理函数，不执行任何操作
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
