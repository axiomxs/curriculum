// 假设 @google/generative-ai 库存在且支持 gemini-pro 模型用于生成文本摘要
import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Props {
  inputText: string;
}

const AbstractOfArticle = ({ inputText }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    async function generateSummary() {
      setIsLoading(true);

      try {
        // 使用从环境变量或其他安全方式获取到的 API Key
        const API_KEY = "AIzaSyCUczeFUpFdTzMvBfFbV6fCoz6Z5KNAKho";

        if (!API_KEY) {
          throw new Error("API Key not found");
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // 构造提示语句
        const prompt = `请将这段话用简短的语言概括成文章摘要：${inputText}`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        setSummary(text);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    if (inputText) {
      generateSummary();
    }

    return () => {}; // 清理函数，不执行任何操作
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
