import React from "react";

const Community = () => {
  return (
    <div className="bg-[#002140]  min-h-screen ">
      <div className="ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-auto">
        <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-2xl overflow-hidden shadow-xl mb-8">
          <div className="p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Connect with <span className="text-[#FF6B35]">Food Lovers</span>{" "}
                Around the World
              </h1>
              <p className="text-white text-opacity-90 text-lg mb-6">
                Join our vibrant community, share recipes, and discover culinary
                adventures with passionate foodies.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-[#FF6B35] text-white border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-white hover:text-[#FF6B35] hover:translate-y-[-2px]">
                  {" "}
                  Join Community{" "}
                </button>
                <button className="bg-white text-[#002140] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#3975ac] hover:bg-opacity-50 hover:text-white hover:translate-y-[-2px]">
                  {" "}
                  <i className="fas fa-search"></i> Explore Groups{" "}
                </button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center relative">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <div className="absolute top-0 left-0 w-full h-full bg-[#FF6B35] rounded-full opacity-10 animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/api/placeholder/400/400"
                    alt=""
                    className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-[#FF6B35] text-white rounded-full p-3 shadow-lg animate-float">
                  <i className="fas fa-star text-2xl"></i>
                </div>
                <div
                  className="absolute -bottom-2 -left-2 bg-white text-[#002140] rounded-full p-3 shadow-lg animate-float"
                  // style="animation-delay: 1s"
                >
                  <i className="fas fa-heart text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 px-6 py-4 flex justify-between items-center">
            <div className="flex gap-4 text-white">
              <div>
                <span className="text-2xl font-bold">15K+</span>
                <p className="text-xs text-white text-opacity-80">Members</p>
              </div>
              <div>
                <span className="text-2xl font-bold">500+</span>
                <p className="text-xs text-white text-opacity-80">Groups</p>
              </div>
              <div>
                <span className="text-2xl font-bold">10K+</span>
                <p className="text-xs text-white text-opacity-80">Recipes</p>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-white text-opacity-80 text-sm">
                Join the fastest growing food community!
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-5 mx-5 mb-8 flex-wrap md:flex-nowrap">
          <div className="flex-1 bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center cursor-pointer group scale-110">
            <div className="w-16 h-16 bg-[#002140] bg-opacity-10 rounded-full flex items-center justify-center mb-4 sclae-110 transition-transform duration-300">
              <i className="fas fa-users text-2xl text-[#FF6B35]"></i>
            </div>
            <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
              Food Groups
            </h3>
            <p className="text-sm text-gray-400 text-center">
              Connect with niche food communities that share your culinary
              passions
            </p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="px-4 py-2 bg-[#002140] text-white rounded-full text-sm hover:bg-[#002140]-light transition-colors">
                Explore Groups
              </button>
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center cursor-pointer group scale-110">
            <div className="w-16 h-16 bg-[#002140] bg-opacity-10 rounded-full flex items-center justify-center mb-4 sclae-110 transition-transform duration-300">
              <i className="fas fa-calendar-alt text-2xl text-[#FF6B35]"></i>
            </div>
            <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
              Food Events
            </h3>
            <p className="text-sm text-gray-400 text-center">
              Discover local cooking meetups, workshops, and food festivals
            </p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="px-4 py-2 bg-[#002140] text-white rounded-full text-sm hover:bg-[#002140]-light transition-colors">
                Find Events
              </button>
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center cursor-pointer group scale-110">
            <div className="w-16 h-16 bg-[#002140] bg-opacity-10 rounded-full flex items-center justify-center mb-4 sclae-110 transition-transform duration-300">
              <i className="fas fa-book text-2xl text-[#FF6B35]"></i>
            </div>
            <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
              Recipe Exchange
            </h3>
            <p className="text-sm text-gray-400 text-center">
              Share & discover new recipes from creative home chefs worldwide
            </p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="px-4 py-2 bg-[#002140] text-white rounded-full text-sm hover:bg-[#002140]-light transition-colors">
                Browse Recipes
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black/40 via-transparent to-black/40 rounded-2xl shadow-xl p-6 mb-8 ">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Food <span className="text-[#FF6B35]">Groups</span>
              </h2>
              <p className="text-sm text-gray-400">
                Find your perfect culinary community
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-[#FF6B35] text-white border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-white hover:text-[#FF6B35] hover:translate-y-[-2px]">
                {" "}
                <i className="fas fa-plus-circle"></i> Create Group{" "}
              </button>
              <button className="px-5 py-2.5 border border-[#002140] text-[#002140] bg-white opacity-60 rounded-full text-sm font-medium hover:bg-[#244665] hover:text-white transition-all">
                View All Groups
              </button>
            </div>
          </div>

          <div className="mb-8 overflow-x-auto scrollbar-hide pb-2">
            <div className="flex gap-3">
              <button className="bg-[#002140] text-white px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium shadow-md flex items-center gap-2">
                <i className="fas fa-th-large"></i> All Groups
              </button>
              <button className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-[#FF6B35] hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-leaf"></i> Vegetarian
              </button>
              <button className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-[#FF6B35] hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-bread-slice"></i> Baking
              </button>
              <button className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-[#FF6B35] hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-globe-americas"></i> International
              </button>
              <button className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-[#FF6B35] hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-heartbeat"></i> Healthy Eating
              </button>
              <button className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-[#FF6B35] hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-cookie"></i> Desserts
              </button>
              <button className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-[#FF6B35] hover:text-white transition-colors flex items-center gap-2">
                <i className="fas fa-fish"></i> Seafood
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="relative">
                <div className="h-40 bg-gradient-to-r from-[#00214088] to-[#0066b2] flex items-center justify-center overflow-hidden">
                  <img
                    src="/api/placeholder/400/200"
                    alt="Vegetarian"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-8 left-6">
                  <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full bg-[#e2f4ff] flex items-center justify-center">
                      <i className="fas fa-leaf text-2xl text-[#002140] group-hover:text-[#FF6B35] transition-colors"></i>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  <i className="fas fa-fire mr-1"></i> Trending
                </div>
              </div>

              <div className="p-6 pt-10">
                <div className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
                  Vegetarian Foodies
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>
                    <i className="fas fa-users mr-1"></i> 12.4K members
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-comment-alt mr-1"></i> Very active{" "}
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1 animate-pulse"></span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Share plant-based recipes, restaurant finds, and tips for
                  delicious vegetarian cooking.
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex -space-x-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="/api/placeholder/32/32"
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="/api/placeholder/32/32"
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className="w-8 h-8 rounded-full bg-[#002140]-light text-white border-2 border-white flex items-center justify-center text-xs">
                      +9k
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 ml-3">
                    Friends are members
                  </span>
                </div>

                <div className="flex justify-between">
                  <button className="px-5 py-2.5 bg-[#FF6B35] text-white rounded-md text-sm font-medium w-3/4 hover:bg-[#FF6B35]-dark transition-all shadow-md group-hover:shadow-lg">
                    Join Group
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-md hover:bg-gray-100 transition-all">
                    <i className="fas fa-share-alt text-gray-500"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="relative">
                <div className="h-40 bg-gradient-to-r from-[#331800] to-[#b25000] flex items-center justify-center overflow-hidden">
                  <img
                    src="/api/placeholder/400/200"
                    alt="Baking"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-8 left-6">
                  <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full bg-[#ffeedf] flex items-center justify-center">
                      <i className="fas fa-bread-slice text-2xl text-[#b25000] group-hover:text-[#FF6B35] transition-colors"></i>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  <i className="fas fa-star mr-1"></i> Featured
                </div>
              </div>

              <div className="p-6 pt-10">
                <div className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
                  Sourdough Masters
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>
                    <i className="fas fa-users mr-1"></i> 8.7K members
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-comment-alt mr-1"></i> Active{" "}
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1 animate-pulse"></span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Everything about sourdough bread - starters, techniques,
                  troubleshooting, and showing off your best loaves!
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex -space-x-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="/api/placeholder/32/32"
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="/api/placeholder/32/32"
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className="w-8 h-8 rounded-full bg-[#002140]-light text-white border-2 border-white flex items-center justify-center text-xs">
                      +5k
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 ml-3">
                    Friends are members
                  </span>
                </div>

                <div className="flex justify-between">
                  <button className="px-5 py-2.5 bg-[#FF6B35] text-white rounded-md text-sm font-medium w-3/4 hover:bg-[#FF6B35]-dark transition-all shadow-md group-hover:shadow-lg">
                    Join Group
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-md hover:bg-gray-100 transition-all">
                    <i className="fas fa-share-alt text-gray-500"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="relative">
                <div className="h-40 bg-gradient-to-r from-[#003322] to-[#00664b] flex items-center justify-center overflow-hidden">
                  <img
                    src="/api/placeholder/400/200"
                    alt="International"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-8 left-6">
                  <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full bg-[#e0fff0] flex items-center justify-center">
                      <i className="fas fa-globe-americas text-2xl text-[#00664b] group-hover:text-[#FF6B35] transition-colors"></i>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  <i className="fas fa-certificate mr-1"></i> New
                </div>
              </div>

              <div className="p-6 pt-10">
                <div className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
                  Global Gastronomy
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>
                    <i className="fas fa-users mr-1"></i> 5.2K members
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-comment-alt mr-1"></i> Very active{" "}
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1 animate-pulse"></span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Explore authentic recipes and cooking techniques from around
                  the world. Cultural food discussions welcome!
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex -space-x-3">
                    <img
                      src="/api/placeholder/32/32"
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="/api/placeholder/32/32"
                      alt="Member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className="w-8 h-8 rounded-full bg-[#002140]-light text-white border-2 border-white flex items-center justify-center text-xs">
                      +3k
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 ml-3">
                    Friends are members
                  </span>
                </div>

                <div className="flex justify-between">
                  <button className="px-5 py-2.5 bg-[#FF6B35] text-white rounded-md text-sm font-medium w-3/4 hover:bg-[#FF6B35]-dark transition-all shadow-md group-hover:shadow-lg">
                    Join Group
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-md hover:bg-gray-100 transition-all">
                    <i className="fas fa-share-alt text-gray-500"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">
              Recommended for you
            </h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FF6B35] hover:text-white transition-colors scroll-btn-left">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#FF6B35] hover:text-white transition-colors scroll-btn-right">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-4 min-w-max">
              <div className="w-64 bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-24 bg-gradient-to-r from-[#2b1e40] to-[#523b8c] overflow-hidden">
                  <img
                    src="/api/placeholder/300/150"
                    alt="Group cover"
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#FF6B35] text-white flex items-center justify-center text-xs">
                    <i className="fas fa-check"></i>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-3 items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#f0ebff] flex items-center justify-center">
                      <i className="fas fa-cookie text-[#523b8c]"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#002140]">
                        Cookie Enthusiasts
                      </h4>
                      <p className="text-xs text-gray-500">7.3K members</p>
                    </div>
                  </div>
                  <button className="w-full px-3 py-1.5 bg-gray-100 rounded-md text-sm font-medium text-[#002140] hover:bg-[#FF6B35] hover:text-white transition-colors">
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-black via-black/60 to-transparent] rounded-2xl shadow-xl p-6 mb-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-xl">
                  Taste<span className="text-[#FF6B35]">'</span>nTalk
                </span>
              </div>
              <p className="text-white text-opacity-80 text-sm mb-4">
                Connect with food lovers around the world. Share recipes, join
                events, and discover new culinary experiences.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white text-opacity-80">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Food Groups
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Recipes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Popular Categories</h4>
              <ul className="space-y-2 text-white text-opacity-80">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Vegetarian
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Baking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    International Cuisine
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Desserts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Healthy Eating
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Seafood
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Subscribe</h4>
              <p className="text-white text-opacity-80 text-sm mb-4">
                Get updates on new groups, events, and recipes.
              </p>
              <div className="flex">
                {/* <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"> */}
                <button className="bg-[#FF6B35] text-white px-4 py-2 rounded-r-md hover:bg-[#FF6B35]-dark transition-colors">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-70 text-sm mb-4 md:mb-0">
              © 2025{" "}
              <a href="#">
                <span className="text-[#ff6b35]">Taste'n Talk</span>
              </a>
              . All rights reserved.
            </p>
            <div className="flex gap-6 text-white text-opacity-70 text-sm">
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#FF6B35] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Community;
