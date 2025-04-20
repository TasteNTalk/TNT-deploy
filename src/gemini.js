// src/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔐 Replace this with your real API key
const API_KEY = "AIzaSyDfwrq3ymX5yg5uWcQ9z2ZdHJ91etUv7-Q";

const genAI = new GoogleGenerativeAI(API_KEY);

export const sendMessageToGemini = async (message) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Gemini API error:", err);
    return "⚠️ Sorry, I ran into an issue. Try again in a bit!";
  }
};