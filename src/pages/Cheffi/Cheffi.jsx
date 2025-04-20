import React, { useState } from "react";
import { sendMessageToGemini } from "../../gemini";

const Cheffi = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hello chef! I'm Cheffi, your TasteBot assistant. Let me help you discover amazing recipes and cooking tips!",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botReplyText = await sendMessageToGemini(userMessage.text);

    const botMessage = {
      role: "assistant",
      text: botReplyText,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="bg-[#002140] min-h-screen">
      <div className="flex justify-center items-center container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-auto">
        <div className="flex flex-col h-full w-full max-w-6xl">
          {/* Top Features */}
          <div className="flex justify-between gap-5 mb-8 flex-wrap md:flex-nowrap">
            {[
              { id: "recipe-assistant", icon: "utensils", title: "Recipe Assistant", desc: "Get cooking help and recipes" },
              { id: "food-faq", icon: "question-circle", title: "Food FAQ", desc: "Ask any food-related questions" },
              { id: "shopping-helper", icon: "shopping-basket", title: "Shopping Helper", desc: "Meal planning & ingredient suggestions" },
            ].map((card) => (
              <div
                key={card.id}
                id={card.id}
                className="feature-card bg-gradient-to-r from-black/40 via-black/25 to-transparent shadow-lg shadow-[#081c2e] hover:shadow-xl hover:shadow-[#061524] rounded-lg p-5 flex-1 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <i className={`fas fa-${card.icon} text-yellow-400 text-2xl mb-4 transition-transform duration-300 hover:scale-105`}></i>
                <h3 className="text-lg font-semibold mb-2 text-white">{card.title}</h3>
                <p className="text-sm text-white text-opacity-80">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Chat Area */}
          <div className="flex flex-col h-[60vh] border-2 border-[#002140] rounded-2xl shadow-xl bg-gray-50 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-black via-[#002140] to-[#003a6d] border-b border-gray-200 flex items-center justify-between">
              <div className="font-semibold text-xl flex items-center gap-3 text-white">
                <i className="fas fa-robot text-yellow-400 text-2xl"></i>
                <span>Cheffi</span>
              </div>
              <div className="flex gap-4">
                <i className="fas fa-expand-arrows-alt text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 cursor-pointer"></i>
                <i className="fas fa-info-circle text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 cursor-pointer"></i>
                <i className="fas fa-cog text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 cursor-pointer"></i>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-white bg-opacity-75">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-3/4 ${msg.role === "user" ? "self-end bg-gradient-to-r from-[#002140] to-[#004b8d] text-white border-r-4 border-yellow-400" : "self-start bg-gradient-to-r from-gray-100 to-gray-200 border-l-4 border-[#002140]"} rounded-2xl px-5 py-3 shadow transform transition duration-200 hover:-translate-y-1`}
                >
                  <div>{msg.text}</div>
                  <div className="text-xs text-right mt-1 text-gray-500">{msg.time}</div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200 flex items-center gap-4">
              <div className="flex gap-4">
                <i className="fas fa-camera text-gray-500 hover:text-[#002140] transition-all duration-300 hover:scale-125 cursor-pointer text-lg"></i>
                <i className="fas fa-microphone text-gray-500 hover:text-[#002140] transition-all duration-300 hover:scale-125 cursor-pointer text-lg"></i>
                <i className="fas fa-paperclip text-gray-500 hover:text-[#002140] transition-all duration-300 hover:scale-125 cursor-pointer text-lg"></i>
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-5 py-3 bg-gray-100 rounded-full border-2 border-gray-200 focus:border-[#002140] focus:ring focus:ring-[#002140] focus:ring-opacity-20 outline-none transition duration-300"
                placeholder="Ask about recipes, ingredients, or cooking tips..."
              />
              <button
                onClick={handleSend}
                className="w-12 h-12 bg-gradient-to-r from-[#002140] to-[#004b8d] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform hover:rotate-15"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheffi;
