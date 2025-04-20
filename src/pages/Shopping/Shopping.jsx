import React from "react";

const Shopping = () => {
  return (
    <div className="bg-[#002140]">
      <div className="bg-[#002140] min-h-screen font-serif container ml-[250px] -mt-[720px] py-6 px-4 md:px-6 w-fit ">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-[#002140] rounded-lg mb-8 overflow-hidden text-white">
            <div className="flex flex-wrap justify-between bg-gradient-to-r from-black/40 via-black/25 to-transparent">
              <div className="flex">
                <div className="cursor-pointer py-3 px-6 font-semibold hover:bg-white hover:text-[#ff4d4d] active:bg-white active:text-[#ff4d4d] flex items-center gap-2 transition">
                  <i className="fas fa-th-large"></i> ALL INGREDIENTS
                </div>
                <div className="cursor-pointer py-3 px-6 font-semibold flex items-center gap-2 hover:bg-white hover:text-[#ff4d4d] active:bg-white active:text-[#ff4d4d] transition">
                  <i className="fas fa-home"></i> HOME
                </div>
                <div className="cursor-pointer py-3 px-6 font-semibold flex items-center gap-2 hover:bg-white hover:text-[#ff4d4d] active:bg-white active:text-[#ff4d4d] transition">
                  <i className="fas fa-store"></i> SHOP
                </div>
                <div className="cursor-pointer py-3 px-6 font-semibold flex items-center gap-2 hover:bg-white hover:text-[#ff4d4d] active:bg-white active:text-[#ff4d4d] transition lg:flex">
                  <i className="fas fa-seedling"></i> SPICES & HERBS
                </div>
                <div className="cursor-pointer py-3 px-6 font-semibold flex items-center gap-2 hover:bg-white hover:text-[#ff4d4d] active:bg-white active:text-[#ff4d4d] transition md:flex">
                  <i className="fas fa-tag"></i> DEALS
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for ingredients..."
                  className="w-full py-2 px-4 rounded-full text-[#002140] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#002140] focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#002140]">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-light rounded-full flex items-center justify-center hover:bg-white hover:text-[#ff4d4d] active:bg-white active:text-[#ff4d4d] transition duration-300 cursor-pointer">
                    <i className="fas fa-shopping-cart text-lg"></i>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    3
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">TOTAL PRICE</p>
                  <p className="font-bold">$89.99</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-[#002140] to-green-400 rounded-xl overflow-hidden mb-12">
            <div className="absolute -top-4 -left-4 transform rotate-12 bg-yellow-500 text-white w-32 h-10 flex items-center justify-center font-bold shadow-lg">
              JUST ARRIVED
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-12 md:w-1/2">
                <div className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm mb-6">
                  Premium Quality Cooking Ingredients
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Fresh, Raw Ingredients For Your Kitchen
                </h1>
                <p className="text-white text-opacity-90 mb-8">
                  Discover our wide selection of high-quality raw ingredients
                  sourced.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#ff4d4d] text-white hover:bg-white hover:text-[#ff4d4d] transition px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    SHOP NOW
                  </a>
                  <a
                    href="#"
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 transition px-6 py-3 rounded-full text-white flex items-center"
                  >
                    <i className="fas fa-play-circle mr-2"></i> OUR SOURCES
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Fresh Ingredients"
                  className="object-cover h-full w-full md:absolute right-0 bottom-0"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                Shop By Category
              </h2>
              <div className="w-20 h-1 bg-[#002140] mx-auto mt-3"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/20 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group">
                <div className="h-40 overflow-hidden">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Fresh Produce"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4 text-center bg-[#002140]-dark text-[#002140] font-semibold">
                  FRESH PRODUCE
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/20 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group">
                <div className="h-40 overflow-hidden">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Spices & Herbs"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4 text-center bg-[#002140]-dark text-[#002140] font-semibold">
                  SPICES & HERBS
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/20 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group">
                <div className="h-40 overflow-hidden">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Oils & Vinegars"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4 text-center bg-[#002140]-dark text-[#002140] font-semibold">
                  OILS & VINEGARS
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/20 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group">
                <div className="h-40 overflow-hidden">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Grains & Legumes"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4 text-center bg-[#002140]-dark text-[#002140] font-semibold">
                  GRAINS & LEGUMES
                </div>
              </div>

              <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/20 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group">
                <div className="h-40 overflow-hidden">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Specialty Items"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-4 text-center bg-[#002140]-dark text-[#002140] font-semibold">
                  SPECIALTY ITEMS
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                Featured Ingredients
              </h2>
              <div className="w-20 h-1 bg-[#002140] mx-auto mt-3"></div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Explore our handpicked selection of the finest cooking
                ingredients that will elevate your culinary creations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group">
                <div className="relative">
                  <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-2 py-1 rounded z-10">
                    SEASONAL
                  </span>
                  <span className="absolute top-4 right-4 bg-[#002140] text-white text-xs font-bold px-2 py-1 rounded z-10">
                    -15%
                  </span>
                  <div className="h-56 overflow-hidden">
                    <img
                      src="/api/placeholder/400/320"
                      alt="Saffron Threads"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-[#ff4d4d] text-white hover:bg-white hover:text-[#ff4d4d] transition px-4 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0  duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#002140] font-semibold mb-1">
                    Premium Spices
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#002140] transition">
                    Spanish Saffron Threads
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="text-yellow-400 flex mr-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="text-xs text-gray-500">(32 Reviews)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 line-through text-sm mr-1">
                        $42.00
                      </span>
                      <span className="font-bold text-[#002140]">$36.00</span>
                      <span className="text-xs text-gray-500">/ 1g</span>
                    </div>
                    <button className="bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white border border-[#ff4d4d] rounded-full transition px-3 py-2 flex items-center gap-1 text-sm">
                      <i className="fas fa-cart-plus"></i> Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group">
                <div className="relative">
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    IMPORTED
                  </span>
                  <div className="h-56 overflow-hidden">
                    <img
                      src="/api/placeholder/400/320"
                      alt="Extra Virgin Olive Oil"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-[#ff4d4d] text-white hover:bg-white hover:text-[#ff4d4d] transition px-4 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#002140] font-semibold mb-1">
                    Culinary Oils
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#002140] transition">
                    Extra Virgin Olive Oil
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="text-yellow-400 flex mr-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <span className="text-xs text-gray-500">(16 Reviews)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400 line-through text-sm mr-1">
                        $38.00
                      </span>
                      <span className="font-bold text-[#002140]">$30.00</span>
                      <span className="text-xs text-gray-500">/ 500ml</span>
                    </div>
                    <button className="bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white border border-[#ff4d4d] rounded-full transition px-3 py-2 flex items-center gap-1 text-sm">
                      <i className="fas fa-cart-plus"></i> Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-block border-2 border-[#002140] text-[#002140] hover:bg-[#002140] hover:text-white transition px-6 py-3 rounded-full font-bold"
              >
                View All Ingredients
              </a>
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
                    Connect with food lovers around the world. Share recipes,
                    join events, and discover new culinary experiences.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#FF6B35]                           transition-colors"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#FF6B35]                           transition-colors"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#FF6B35]                           transition-colors"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-[#FF6B35]                           transition-colors"
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
                  <h4 className="font-semibold text-lg mb-4">
                    Popular Categories
                  </h4>
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
                  <h4 className="text-lg font-bold text-white mb-4">
                    Download Our App
                  </h4>
                  <p className="text-gray-400 mb-4">
                    Get the full experience on your mobile device
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/20 transition-all p-2 rounded-lg flex items-center gap-3"
                    >
                      <i className="fab fa-apple text-2xl text-white"></i>
                      <div>
                        <div className="text-xs text-gray-400">
                          Download on the
                        </div>
                        <div className="text-white font-semibold">
                          App Store
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="bg-white/10 hover:bg-white/20 transition-all p-2 rounded-lg flex items-center gap-3"
                    >
                      <i className="fab fa-google-play text-2xl text-white"></i>
                      <div>
                        <div className="text-xs text-gray-400">Get it on</div>
                        <div className="text-white font-semibold">
                          Google Play
                        </div>
                      </div>
                    </a>
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
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
