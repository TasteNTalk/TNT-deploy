import React from "react";

const Inbox = () => {
  return (
    <div>
      <div className="bg-[#002140] container ml-[250px] -mt-[720px] pt-12 px-4 md:px-6 w-auto">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white">
          <div className="flex flex-col md:flex-row h-[80vh]">
            <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 bg-gradient-to-r from-black via-[#002140] to-[#003a6d]">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-black via-[#002140] to-[#003a6d] bg-white dark:bg-gray-900">
                <h3 className="font-bold text-xl text-gray-800 dark:text-white">
                  Taste'n Talk
                </h3>
                <div className="flex space-x-4">
                  <button className="text-white hover:text-[#002140] transition-colors duration-200">
                    <i className="fas fa-plus"></i>
                  </button>
                  <button className="text-white hover:text-[#002140] transition-colors duration-200">
                    <i className="fas fa-users"></i>
                  </button>
                  <button className="text-white hover:text-[#002140] transition-colors duration-200">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </div>
              <div className="p-3 bg-white bg-gradient-to-r from-[#003a6d] via-[#002140] to-black">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search conversations"
                    className="w-full py-2 px-4 rounded-full bg-[#002140]  focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 dark:text-gray-200"
                  />
                  <i className="fas fa-search absolute right-3 top-2.5 text-gray-400"></i>
                </div>
              </div>
              <div className="overflow-y-auto h-[calc(100%-112px)]">
                <div className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary">
                  <div className="relative">
                    <img
                      src="/api/placeholder/56/56"
                      alt="Alice"
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        Alice Whitman
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        15:17
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      Here! Hope you get time. Enjoy...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col bg-gradient-to-r from-black via-[#002140] to-[#003a6d]">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-black via-[#002140] to-[#003a6d]">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src="/api/placeholder/40/40"
                      alt="Alice"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      Alice Whitman
                    </h3>
                    <p className="text-xs text-green-500">Online</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">
                    <i className="fas fa-search"></i>
                  </button>
                  <button className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">
                    <i className="fas fa-phone"></i>
                  </button>
                  <button className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 bg-[url('https://web.whatsapp.com/img/bg-chat-tile-dark_a4be512e7195b6b733d9110b408f075d.png')] bg-repeat">
                <div className="flex justify-center mb-6">
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                    Today
                  </span>
                </div>
                <div className="flex mb-4">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Alice"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="max-w-xs md:max-w-md">
                    <div className="bg-[#0e1f2e]/90 text-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                      <p className="text-gray-800 dark:text-white">
                        I found an amazing recipe for butter chicken. Want to
                        try it this weekend?
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">10:03</span>
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <div className="max-w-xs md:max-w-md">
                    <div className="bg-[#1769aa] text-white rounded-2xl rounded-tr-none px-4 py-2 shadow-sm">
                      <p>
                        That sounds delicious! Please share the recipe with me.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs text-gray-500 mt-1">10:05</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Alice"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="max-w-xs md:max-w-md">
                    <div className="bg-[#0e1f2e]/90 text-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                      <p className="text-gray-800 dark:text-white">
                        I'll send it over. The secret is in the marinade. You
                        have to let the chicken sit overnight!
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">10:07</span>
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <div className="max-w-xs md:max-w-md">
                    <div className="bg-[#1769aa] text-white rounded-2xl rounded-tr-none px-4 py-2 shadow-sm">
                      <p>
                        Perfect! I can start the marinade tonight. Are there any
                        special spices I need to get?
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs text-gray-500 mt-1">10:10</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Alice"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="max-w-xs md:max-w-md">
                    <div className="bg-[#0e1f2e]/90 text-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                      <p className="text-gray-800 dark:text-white">
                        Yes, you'll need garam masala, turmeric, and kashmiri
                        chili powder. Do you have those?
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">10:12</span>
                  </div>
                </div>
                <div className="flex justify-end mb-4">
                  <div className="max-w-xs md:max-w-md">
                    <div className="bg-[#1769aa] text-white rounded-2xl rounded-tr-none px-4 py-2 shadow-sm">
                      <p>
                        I have garam masala and turmeric, but I'll need to get
                        the chili powder. Is there a specific brand you
                        recommend?
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs text-gray-500 mt-1">10:15</span>
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="flex-shrink-0 mr-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Alice"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="max-w-xs md:max-w-md">
                    <div className="bg-[#0e1f2e]/90 text-white rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                      <p className="text-gray-800 dark:text-white">
                        I like the MDH brand, but any authentic Indian brand
                        will work well!
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1">10:18</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-tr from-black via-black/60 to-transparent p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <button className="text-gray-500 hover:text-primary transition-colors duration-200">
                    <i className="fas fa-smile text-xl"></i>
                  </button>
                  <button className="text-gray-500 hover:text-primary transition-colors duration-200">
                    <i className="fas fa-paperclip text-xl"></i>
                  </button>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Type a message"
                      className="w-full py-3 px-4 bg-[#002140]/70 text-gray-700 dark:text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors duration-200">
                      <i className="fas fa-microphone text-lg"></i>
                    </button>
                  </div>
                  <button className="bg-primary hover:bg-primary/80 text-white p-3 rounded-full transition-colors duration-200">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
