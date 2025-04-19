import React from 'react'

const Cheffi = () => {
  return (
<div className="bg-[#002140] min-h-screen">
    <div className="flex justify-center items-center mt-5 ml-auto">
        <div className="flex flex-col h-full w-full max-w-6xl">
            <div className="flex justify-between gap-5 mb-8 flex-wrap md:flex-nowrap">
                <div id="recipe-assistant" className="feature-card scale-110 bg-gradient-to-r from-black/40 via-black/25 to-transparent shadow-lg shadow-gray-900 hover:shadow-xl hover:shadow-slate-900 rounded-lg p-5 flex-1 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-1 bg-opacity-80 cursor-pointer ">
                    <i className="fas fa-utensils text-yellow-400 text-2xl mb-4 transition-transform duration-300 hover:scale-105"></i>
                    <h3 className="text-lg font-semibold mb-2 text-white">Recipe Assistant</h3>
                    <p className="text-sm text-white text-opacity-80">Get cooking help and recipes</p>
                </div>
                <div id="food-faq" className="feature-card bg-gradient-to-r from-black/40 via-black/25 to-transparent shadow-lg shadow-gray-900 hover:shadow-xl hover:shadow-slate-900 rounded-lg p-5 flex-1 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-1 cursor-pointer ">
                    <i className="fas fa-question-circle text-yellow-400 text-2xl mb-4 transition-transform duration-300 hover:scale-105"></i>
                    <h3 className="text-lg font-semibold mb-2 text-white">Food FAQ</h3>
                    <p className="text-sm text-white text-opacity-80">Ask any food-related questions</p>
                </div>
                <div id="shopping-helper" className="feature-card bg-gradient-to-r from-black/40 via-black/25 to-transparent shadow-lg shadow-gray-900 hover:shadow-xl hover:shadow-slate-900 rounded-lg p-5 flex-1 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <i className="fas fa-shopping-basket text-yellow-400 text-2xl mb-4 transition-transform duration-300 hover:scale-105"></i>
                    <h3 className="text-lg font-semibold mb-2 text-white">Shopping Helper</h3>
                    <p className="text-sm text-white text-opacity-80">Meal planning & ingredient suggestions</p>
                </div>
            </div>
            
            <div className="flex flex-col h-[70vh] border-2 border-[#002140] rounded-2xl shadow-xl bg-gray-50 overflow-hidden">
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
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-gradient-to-br from-gray-50 to-white bg-opacity-75">
                    <div className="max-w-3/4 self-start bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl rounded-bl-sm px-5 py-3 shadow border-l-4 border-[#002140] transform transition duration-200 hover:-translate-y-1">
                        <div>👋 Hello chef! I'm Cheffi, your TasteBot assistant. Let me help you discover amazing recipes and cooking tips!</div>
                        <div className="text-xs text-gray-500 text-right mt-1">10:05 AM</div>
                        <div className="flex gap-1 mt-1 pl-2">
                            <div className="w-2 h-2 bg-[#002140] rounded-full animate-bounce opacity-70"
                            //  style="animation-delay: 0s"
                            ></div>
                            <div className="w-2 h-2 bg-[#002140] rounded-full animate-bounce opacity-70"
                            //  style="animation-delay: 0.2s"
                            ></div>
                            <div className="w-2 h-2 bg-[#002140] rounded-full animate-bounce opacity-70"
                            //  style="animation-delay: 0.4s"
                            ></div>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <button className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200 shadow hover:bg-[#002140] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">🍳 Find a recipe</button>
                            <button className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200 shadow hover:bg-[#002140] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">👨‍🍳 Cooking tips</button>
                            <button className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200 shadow hover:bg-[#002140] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">📝 Meal planning</button>
                            <button className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200 shadow hover:bg-[#002140] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">🔄 Ingredient substitutes</button>
                        </div>
                    </div>
                    <div className="max-w-3/4 self-end bg-gradient-to-r from-[#002140] to-[#004b8d] text-white rounded-2xl rounded-br-sm px-5 py-3 shadow border-r-4 border-yellow-400 transform transition duration-200 hover:-translate-y-1">
                        <div>I need a quick pasta recipe for dinner tonight</div>
                        <div className="text-xs text-gray-300 text-right mt-1">10:06 AM</div>
                    </div>
                    <div className="max-w-3/4 self-start bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl rounded-bl-sm px-5 py-3 shadow border-l-4 border-[#002140] transform transition duration-200 hover:-translate-y-1">
                        <div>I'd be happy to help! Here's a quick and easy pasta recipe:</div>
                        <div className="mt-3 font-semibold text-[#002140]">✨ Quick Garlic Butter Pasta ✨</div>
                        <div className="mt-2">
                            <strong>Ingredients:</strong>
                            <ul className="ml-4 mt-1 list-disc">
                                <li>8 oz pasta (spaghetti or fettuccine)</li>
                                <li>3 tbsp butter</li>
                                <li>4 cloves garlic, minced</li>
                                <li>1/4 cup grated parmesan</li>
                                <li>Salt and pepper to taste</li>
                                <li>Fresh parsley (optional)</li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            <strong>Instructions:</strong>
                            <ol className="ml-4 mt-1 list-decimal">
                                <li>Cook pasta according to package instructions</li>
                                <li>In a pan, melt butter and sauté garlic until fragrant</li>
                                <li>Drain pasta and add to the pan</li>
                                <li>Toss with parmesan, salt, and pepper</li>
                                <li>Garnish with parsley if desired</li>
                            </ol>
                        </div>
                        <div className="text-xs text-gray-500 text-right mt-1">10:07 AM</div>
                        <div className="flex flex-wrap gap-3 mt-3">
                            <button className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200 shadow hover:bg-[#002140] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">🔄 Show variations</button>
                            <button className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200 shadow hover:bg-[#002140] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">🛒 Add to shopping list</button>
                            <button className="bg-white px-4 py-2 rounded-full text-sm border border-gray-200 shadow hover:bg-[#002140] hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer">📊 Show nutritional info</button>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200 flex items-center gap-4">
                    <div className="flex gap-4">
                        <i className="fas fa-camera text-gray-500 hover:text-[#002140] transition-all duration-300 hover:scale-125 cursor-pointer text-lg"></i>
                        <i className="fas fa-microphone text-gray-500 hover:text-[#002140] transition-all duration-300 hover:scale-125 cursor-pointer text-lg"></i>
                        <i className="fas fa-paperclip text-gray-500 hover:text-[#002140] transition-all duration-300 hover:scale-125 cursor-pointer text-lg"></i>
                    </div>
                    <input type="text" className="flex-1 px-5 py-3 bg-gray-100 rounded-full border-2 border-gray-200 focus:border-[#002140] focus:ring focus:ring-[#002140] focus:ring-opacity-20 outline-none transition duration-300" placeholder="Ask about recipes, ingredients, or cooking tips..."/>
                    <button className="w-12 h-12 bg-gradient-to-r from-[#002140] to-[#004b8d] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform hover:rotate-15">
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    

</div>
  )
}

export default Cheffi
