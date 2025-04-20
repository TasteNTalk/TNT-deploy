import React from "react";

const Feedback = () => {
  return (
    <div className="bg-[#002140]">
      <div className="bg-[#002140] font-sans container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-auto">
        <div
          id="feedback"
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="px-6 py-4 bg-gradient-to-r from-black/90 via-[#002140]/90 to-[#003a6c] border-b flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Feedback</h3>
            <a
              href="#feedback"
              className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              <i className="fas fa-comment-alt mr-2"></i>
            </a>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h4 className="font-bold text-gray-700 mb-3">Share Your Thoughts</h4>
              <p className="text-gray-600 mb-4">
                We value your opinion and would love to hear your suggestions on
                how we can improve Taste'n Talk.
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="feedback-type"
                  >
                    Feedback Type
                  </label>
                  <select
                    className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feedback-type"
                  >
                    <option>General Feedback</option>
                    <option>Bug Report</option>
                    <option>Feature Request</option>
                    <option>Content Suggestion</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="feedback-message"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feedback-message"
                    rows="5"
                    placeholder="Share your thoughts here..."
                  ></textarea>
                </div>

                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="feedback-satisfaction"
                  >
                    Overall Satisfaction
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="flex text-2xl text-yellow-400">
                      <i
                        className="far fa-star cursor-pointer hover:text-yellow-500 transition-colors"
                        data-rating="1"
                      ></i>
                      <i
                        className="far fa-star cursor-pointer hover:text-yellow-500 transition-colors"
                        data-rating="2"
                      ></i>
                      <i
                        className="far fa-star cursor-pointer hover:text-yellow-500 transition-colors"
                        data-rating="3"
                      ></i>
                      <i
                        className="far fa-star cursor-pointer hover:text-yellow-500 transition-colors"
                        data-rating="4"
                      ></i>
                      <i
                        className="far fa-star cursor-pointer hover:text-yellow-500 transition-colors"
                        data-rating="5"
                      ></i>
                    </div>
                    <span className="text-gray-600" id="rating-text">
                      Select a rating
                    </span>
                  </div>
                </div>

                <div className="flex items-center mt-2">
                  <input
                    id="anonymous-feedback"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    for="anonymous-feedback"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Submit anonymously
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <button className="bg-[#ff4d4d] hover:bg-[#ff3333] text-white font-medium py-2 px-6 rounded transition-colors">
                  Submit Feedback
                </button>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-bold text-gray-700 mb-3">Previous Feedback</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Feature Request</p>
                      <p className="text-gray-600 text-sm mb-2">
                        Submitted on March 27, 2025
                      </p>
                    </div>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Would love to see a dark mode option for the mobile app. It
                    would be easier on the eyes when browsing recipes at night.
                  </p>
                  <div className="mt-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Under Review
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-800">Bug Report</p>
                      <p className="text-gray-600 text-sm mb-2">
                        Submitted on February 15, 2025
                      </p>
                    </div>
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Sometimes notifications don't appear properly on Android
                    devices.
                  </p>
                  <div className="mt-2 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Resolved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-black to-[#003a6c] text-white py-8 mt-16 rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Taste'n Talk</h2>
                <p className="text-gray-300">Connect with food lovers worldwide</p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ff4d4d] transition-colors"
                >
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300 text-sm">
              <p>&copy; 2025 Taste'n Talk. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Feedback;
