import React from "react";

const Profile = () => {
  return (
    <div className="bg-[#002140]">
      <div className="bg-[#002140] font-sans container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-fit ">
        <div className="bg-gradient-to-r from-black to-[#003a6c] text-white py-12 rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative group">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                  <img
                    src="/api/placeholder/200/200"
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-[#ff4d4d] p-2 rounded-full shadow-lg cursor-pointer hover:bg-red-600 transition-colors">
                  <i className="fas fa-camera text-white"></i>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold">John Doe</h1>
                  <span className="inline-block bg-blue-500 px-3 py-1 rounded-full text-sm font-semibold">
                    Premium Member
                  </span>
                </div>
                <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                  Food enthusiast with a passion for Mediterranean and Asian
                  cuisines. Exploring the connection between music and food
                  flavors.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-center">
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                    <div className="text-2xl font-bold">157</div>
                    <div className="text-gray-300 text-sm">Posts</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                    <div className="text-2xl font-bold">7.3K</div>
                    <div className="text-gray-300 text-sm">Followers</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                    <div className="text-2xl font-bold">432</div>
                    <div className="text-gray-300 text-sm">Following</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                    <div className="text-2xl font-bold">4.8</div>
                    <div className="text-gray-300 text-sm">Rating</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end items-end gap-3">
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-fit px-3 py-2 mr-1 rounded-full transition-colors flex items-center justify-center hover:scale-105">
                  <i className="fas fa-cog text-base hover:scale-105"></i>
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-7 py-2 rounded-full font-medium transition-colors flex items-center gap-2 hover:scale-105">
                  <i className="fas fa-edit"></i> Edit Profile
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 hover:scale-105">
                  <i className="fas fa-share-alt"></i> Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto  py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-r from-black via-black/25 to-transparent rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-black to-[#003a6c] text-white px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">About</h2>
                  <button className="text-white hover:text-[#ff4d4d]">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-user text-[#ff4d4d] mr-4 mt-1"></i>
                      <div>
                        <h3 className="font-medium text-white">Bio</h3>
                        <p className="text-gray-400">
                          Food writer and photographer with 8+ years of
                          experience. I believe food is the universal language
                          that brings people together.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-map-marker-alt text-[#ff4d4d] mr-4 mt-1"></i>
                      <div>
                        <h3 className="font-medium text-white">Location</h3>
                        <p className="text-gray-400">
                          San Francisco, California
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-birthday-cake text-[#ff4d4d] mr-4 mt-1"></i>
                      <div>
                        <h3 className="font-medium text-white">Birthday</h3>
                        <p className="text-gray-400">May 15</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-calendar-alt text-[#ff4d4d] mr-4 mt-1"></i>
                      <div>
                        <h3 className="font-medium text-white">Joined</h3>
                        <p className="text-gray-400">September 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-black via-black/25 to-transparent rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-black to-[#003a6c] text-white px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">Food Interests</h2>
                  <button className="text-white hover:text-[#ff4d4d]">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Mediterranean
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Vegan
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      Pastry
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      Wine Pairing
                    </span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      Spicy Food
                    </span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      Molecular Gastronomy
                    </span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                      Street Food
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Farm to Table
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex border-b">
                  <button
                    className="tab-btn flex-1 py-4 px-6 text-center font-medium text-[#002140] border-b-2 border-[#ff4d4d]"
                    data-tab="articles"
                  >
                    My Articles
                  </button>
                  <button
                    className="tab-btn flex-1 py-4 px-6 text-center font-medium text-gray-500 hover:text-[#002140]"
                    data-tab="reels"
                  >
                    My Reels
                  </button>
                  <button
                    className="tab-btn flex-1 py-4 px-6 text-center font-medium text-gray-500 hover:text-[#002140]"
                    data-tab="videos"
                  >
                    My Videos
                  </button>
                  <button
                    className="tab-btn flex-1 py-4 px-6 text-center font-medium text-gray-500 hover:text-[#002140]"
                    data-tab="community"
                  >
                    My Community
                  </button>
                  <button
                    className="tab-btn flex-1 py-4 px-6 text-center font-medium text-gray-500 hover:text-[#002140]"
                    data-tab="activity"
                  >
                    My Activity
                  </button>
                </div>
              </div>
              <div id="articlesSection" className="content-section">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div
                      className="h-48 bg-cover bg-center"
                      // style="background-image: url('/api/placeholder/400/200')"
                    ></div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          FEATURED
                        </span>
                        <div className="text-gray-400 text-sm">
                          March 10, 2025
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        How Jazz Music Influences My Cooking Style
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        Exploring the improvisational nature of jazz and how it
                        translates to creative cooking techniques in the
                        kitchen.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-400 text-sm">
                          <i className="fas fa-eye mr-1"></i> 1.2K
                          <i className="fas fa-comment ml-3 mr-1"></i> 32
                          <i className="fas fa-heart ml-3 mr-1"></i> 78
                        </div>
                        <a
                          href="#"
                          className="text-[#ff4d4d] hover:text-red-700 font-medium text-sm"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div
                      className="h-48 bg-cover bg-center"
                      // style="background-image: url('/api/placeholder/400/200')"
                    ></div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          RECIPE
                        </span>
                        <div className="text-gray-400 text-sm">
                          March 5, 2025
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        10 Mediterranean Dishes You Must Try This Summer
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        A collection of refreshing and flavorful Mediterranean
                        recipes perfect for hot summer days.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-400 text-sm">
                          <i className="fas fa-eye mr-1"></i> 2.8K
                          <i className="fas fa-comment ml-3 mr-1"></i> 54
                          <i className="fas fa-heart ml-3 mr-1"></i> 142
                        </div>
                        <a
                          href="#"
                          className="text-[#ff4d4d] hover:text-red-700 font-medium text-sm"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <button className="load-more-btn bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors flex items-center gap-2 mx-auto">
                    <span>Load More Articles</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </div>
              <div id="reelsSection" className="content-section hidden">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative">
                      <div
                        className="h-64 bg-cover bg-center"
                        // style="background-image: url('/api/placeholder/200/320')"
                      ></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                        <h3 className="text-white font-medium text-sm">
                          Perfect Italian Tiramisu
                        </h3>
                        <div className="flex items-center mt-1">
                          <div className="text-gray-300 text-xs flex items-center">
                            <i className="fas fa-play-circle mr-1"></i> 15.2K
                          </div>
                          <div className="text-gray-300 text-xs flex items-center ml-3">
                            <i className="fas fa-heart mr-1"></i> 2.3K
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        0:42
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative">
                      <div
                        className="h-64 bg-cover bg-center"
                        // style="background-image: url('/api/placeholder/200/320')"
                      ></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                        <h3 className="text-white font-medium text-sm">
                          Quick Garlic Noodles
                        </h3>
                        <div className="flex items-center mt-1">
                          <div className="text-gray-300 text-xs flex items-center">
                            <i className="fas fa-play-circle mr-1"></i> 24.7K
                          </div>
                          <div className="text-gray-300 text-xs flex items-center ml-3">
                            <i className="fas fa-heart mr-1"></i> 3.8K
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        0:38
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <button className="load-more-btn bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors flex items-center gap-2 mx-auto">
                    <span>Load More Reels</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </div>
              <div id="videosSection" className="content-section hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative">
                      <div
                        className="h-56 bg-cover bg-center"
                        //  style="background-image: url('/api/placeholder/400/300')"
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                          <i className="fas fa-play text-white text-2xl"></i>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        15:42
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                          COOKING TUTORIAL
                        </span>
                        <div className="text-gray-400 text-sm">
                          March 15, 2025
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        Complete Guide to Making Perfect Sourdough Bread at Home
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Learn all the techniques and secrets to creating
                        delicious sourdough bread from scratch with minimal
                        equipment.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-400 text-sm">
                          <i className="fas fa-eye mr-1"></i> 24.7K
                          <i className="fas fa-comment ml-3 mr-1"></i> 156
                          <i className="fas fa-heart ml-3 mr-1"></i> 982
                        </div>
                        <a
                          href="#"
                          className="text-[#ff4d4d] hover:text-red-700 font-medium text-sm"
                        >
                          Watch Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative">
                      <div
                        className="h-56 bg-cover bg-center"
                        // style="background-image: url('/api/placeholder/400/300')"
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/30 backdrop-blur-sm p-4 rounded-full">
                          <i className="fas fa-play text-white text-2xl"></i>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        12:18
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          KITCHEN TOUR
                        </span>
                        <div className="text-gray-400 text-sm">
                          March 8, 2025
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        My Professional Home Kitchen Setup: Tools & Organization
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Tour my recently renovated home kitchen and learn about
                        all the essential tools and organization systems I use.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-400 text-sm">
                          <i className="fas fa-eye mr-1"></i> 18.3K
                          <i className="fas fa-comment ml-3 mr-1"></i> 94
                          <i className="fas fa-heart ml-3 mr-1"></i> 763
                        </div>
                        <a
                          href="#"
                          className="text-[#ff4d4d] hover:text-red-700 font-medium text-sm"
                        >
                          Watch Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <button className="load-more-btn bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors flex items-center gap-2 mx-auto">
                    <span>Load More Videos</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </div>

              <div id="communitySection" className="content-section hidden">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-blue-600">12</h3>
                        <p className="text-gray-600">Groups Joined</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-green-600">3</h3>
                        <p className="text-gray-600">Groups Created</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-purple-600">
                          147
                        </h3>
                        <p className="text-gray-600">Discussion Posts</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="text-2xl font-bold text-yellow-600">
                          832
                        </h3>
                        <p className="text-gray-600">Comments</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                  <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">
                      My Groups
                    </h3>
                    <a
                      href="#"
                      className="text-[#ff4d4d] hover:text-red-700 text-sm font-medium"
                    >
                      View All
                    </a>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center border-b pb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src="/api/placeholder/48/48"
                            alt="Mediterranean Foodies"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">
                            Mediterranean Foodies
                          </h4>
                          <p className="text-gray-500 text-sm">
                            4.2K members · 18 new posts today
                          </p>
                        </div>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                          Admin
                        </div>
                      </div>

                      <div className="flex items-center border-b pb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src="/api/placeholder/48/48"
                            alt="Home Bread Bakers"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">
                            Home Bread Bakers
                          </h4>
                          <p className="text-gray-500 text-sm">
                            8.7K members · 27 new posts today
                          </p>
                        </div>
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          Member
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">
                      Recent Discussions
                    </h3>
                    <a
                      href="#"
                      className="text-[#ff4d4d] hover:text-red-700 text-sm font-medium"
                    >
                      View All
                    </a>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="border-b pb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-500 text-sm">
                            Mediterranean Foodies · 2 days ago
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            25 replies
                          </span>
                        </div>
                        <h4 className="font-medium text-gray-800 mb-2">
                          Favorite olive oil brands for dipping?
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          I'm hosting a dinner party this weekend and want to
                          serve some quality olive oil for bread dipping. What
                          are your favorite brands that won't break the bank?
                        </p>
                        <div className="flex items-center text-gray-400 text-sm">
                          <i className="fas fa-heart mr-1 text-[#ff4d4d]"></i>{" "}
                          47
                          <i className="fas fa-comment ml-3 mr-1"></i> 25
                          <i className="fas fa-share-alt ml-3 mr-1"></i> 5
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="activitySection" className="content-section hidden">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                  <div className="p-4 flex flex-wrap gap-2">
                    <button className="bg-[#ff4d4d] text-white px-4 py-2 rounded-lg text-sm font-medium">
                      All Activity
                    </button>
                    <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                      Comments
                    </button>
                    <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                      Likes
                    </button>
                    <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                      Saves
                    </button>
                    <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                      Shares
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 border-b">
                    <h3 className="text-lg font-bold text-gray-800">
                      Recent Activity
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full p-2 mr-4">
                          <i className="fas fa-heart text-blue-600"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            You liked{" "}
                            <span className="font-medium">Maria Garcia's</span>{" "}
                            article "
                            <span className="font-medium">
                              How to Make Authentic Paella at Home
                            </span>
                            "
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-full p-2 mr-4">
                          <i className="fas fa-comment text-green-600"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            You commented on{" "}
                            <span className="font-medium">David Wong's</span>{" "}
                            recipe "
                            <span className="font-medium">
                              Umami-Rich Mushroom Risotto
                            </span>
                            "
                          </p>
                          <div className="bg-gray-50 p-3 rounded-lg mt-2 text-gray-600 text-sm italic">
                            "I tried this recipe last night and it was
                            incredible! I added a splash of white wine during
                            the cooking process and it enhanced the flavors
                            beautifully."
                          </div>
                          <p className="text-gray-500 text-sm mt-1">
                            5 hours ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-purple-100 rounded-full p-2 mr-4">
                          <i className="fas fa-share-alt text-purple-600"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            You shared{" "}
                            <span className="font-medium">
                              Food & Wine Magazine's
                            </span>{" "}
                            article "
                            <span className="font-medium">
                              10 Essential Spices Every Home Cook Should Own
                            </span>
                            "
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            Yesterday at 3:45 PM
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-yellow-100 rounded-full p-2 mr-4">
                          <i className="fas fa-star text-yellow-600"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            You saved{" "}
                            <span className="font-medium">
                              Chef Alex Johnson's
                            </span>{" "}
                            recipe "
                            <span className="font-medium">
                              Crispy Korean Fried Chicken
                            </span>
                            " to your collection
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            Yesterday at 11:20 AM
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-2 mr-4">
                          <i className="fas fa-pen text-red-600"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            You published a new article "
                            <span className="font-medium">
                              How Jazz Music Influences My Cooking Style
                            </span>
                            "
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            2 days ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <button className="load-more-btn bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors flex items-center gap-2 mx-auto">
                        <span>Load More Activity</span>
                        <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
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
                <p className="text-gray-300">
                  Connect with food lovers worldwide
                </p>
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

export default Profile;
