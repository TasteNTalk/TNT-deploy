import React from "react";
import { useState } from "react";

const Tiffin = () => {
  const [activeTab, setActiveTab] = useState("all");

  const getTabClass = (tab) =>
    `px-5 py-2 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md border-none ` +
    (activeTab === tab
      ? "bg-[#ff4d4d] text-white"
      : "bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white hover:-translate-y-[2px]");
  return (
    <>
      <div className="bg-[#002140]">
        <div className="container ml-[250px] -mt-[720px] py-12 px-4 md:px-6 w-fit ">
          <div>
            <div>
              <div className="bg-[#002140] min-h-screen font-sans rounded-2xl">
                <div className="relative">
                  <div
                    className="h-72 md:h-80 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/api/placeholder/1920/600')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-2xl"></div>
                    <div className="container mx-auto px-4 h-full flex flex-col justify-center ">
                      <div className="text-white w-full">
                        <h3 className="text-2xl md:text-4xl font-bold mb-2">
                          Find Your Perfect Tiffin Service
                        </h3>
                        <p className="text-base md:text-lg mb-4">
                          Connect with home chefs and tiffin providers near you
                          for daily fresh, homemade meals
                        </p>

                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="relative flex-1">
                            <input
                              type="text"
                              placeholder="Enter your location"
                              className="w-full py-2.5 px-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <i className="fas fa-map-marker-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                          </div>

                          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg transition duration-300">
                            Find Tiffin Services
                          </button>

                          <div className="relative hidden md:block">
                            <input
                              type="text"
                              placeholder="Search tiffins..."
                              className="w-52 py-2 pl-4 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                              <i className="fas fa-search"></i>
                            </button>
                          </div>

                          <div className="flex items-center gap-4 text-white">
                            <a
                              href="#"
                              className="relative hover:text-orange-300 transition"
                            >
                              <i className="fas fa-shopping-cart text-xl"></i>
                              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                              </span>
                            </a>
                            <a
                              href="#"
                              className="hover:text-orange-300 transition"
                            >
                              <i className="fas fa-bell text-xl"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto py-8">
                  <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl shadow-md p-6 mb-8">
                    <div className="flex flex-wrap gap-4 mb-6">
                      {["all", "veg", "north", "south", "healthy"].map(
                        (tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={getTabClass(tab)}
                          >
                            {
                              {
                                all: "All Tiffin Services",
                                veg: "Vegetarian",
                                north: "North Indian",
                                south: "South Indian",
                                healthy: "Healthy & Diet",
                              }[tab]
                            }
                          </button>
                        )
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        "Price Range",
                        "Delivery Time",
                        "Dietary Preferences",
                      ].map((label, i) => (
                        <div key={i} className="relative">
                          <select
                            className="w-full appearance-none bg-white text-[#002140] py-3 px-4 rounded-[25px] 
                    shadow-[0_4px_6px_rgba(0,33,64,0.89)] border-none cursor-pointer transition-all duration-[0.8s] 
                    hover:shadow-[0_6px_8px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                          >
                            {label === "Price Range" && (
                              <>
                                <option>Price Range</option>
                                <option>Under ₹80 per meal</option>
                                <option>₹80 - ₹120 per meal</option>
                                <option>₹120 - ₹180 per meal</option>
                                <option>Above ₹180 per meal</option>
                              </>
                            )}
                            {label === "Delivery Time" && (
                              <>
                                <option>Delivery Time</option>
                                <option>Under 30 minutes</option>
                                <option>30 - 45 minutes</option>
                                <option>45 - 60 minutes</option>
                              </>
                            )}
                            {label === "Dietary Preferences" && (
                              <>
                                <option>Dietary Preferences</option>
                                <option>Vegan</option>
                                <option>Gluten-Free</option>
                                <option>Low-Carb</option>
                                <option>High-Protein</option>
                              </>
                            )}
                          </select>
                          <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"></i>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-6">
                    Featured Tiffin Providers
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {/* Featured Tiffin Cards go here */}
                    <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="relative">
              <img
                src="/api/placeholder/400/200"
                alt="South Spice Kitchen"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full">
                <i className="fas fa-clock text-blue-600 mr-1"></i> 25 min
                delivery
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    South Spice Kitchen
                  </h3>
                  <p className="text-gray-400 text-sm">
                    South Indian, Traditional
                  </p>
                </div>
                <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg">
                  <span className="text-green-700 font-bold mr-1">4.7</span>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Authentic South Indian meals including idli, dosa, sambar rice,
                and traditional curries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Pure Veg
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Organic
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Eco-friendly Packaging
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold text-white">₹95.00</span>
                  <span className="text-sm text-gray-400">/meal</span>
                </div>
                <button className="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#ff4d4d] hover:text-white hover:-translate-y-[2px]">
                  View Plans
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="relative">
              <img
                src="/api/placeholder/400/200"
                alt="Fit Food Kitchen"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                HEALTHY
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full">
                <i className="fas fa-clock text-blue-600 mr-1"></i> 35 min
                delivery
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Fit Food Kitchen
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Health Food, Calorie Counted
                  </p>
                </div>
                <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg">
                  <span className="text-green-700 font-bold mr-1">4.6</span>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Nutrition-focused meals with calorie counting. Perfect for
                fitness enthusiasts and health-conscious individuals.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Protein-Rich
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Gluten-Free
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Keto Options
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold text-white">₹160.00</span>
                  <span className="text-sm text-gray-400">/meal</span>
                </div>
                <button className="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#ff4d4d] hover:text-white hover:-translate-y-[2px]">
                  View Plans
                </button>
              </div>
            </div>
          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <div className="mb-16">
            <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    How Our Tiffin Marketplace Works
                  </h2>
                  <p className="text-gray-400 max-w-2xl">
                    Taste'n Talk connects you with the best local tiffin
                    providers. We don't make the food - we bring the makers to
                    you!
                  </p>
                </div>
                <button className="bg-white text-[#ff4d4d] border-none flex justify-center items-center py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#ff4d4d] hover:text-white hover:-translate-y-1">
                  <i className="fas fa-play-circle mr-2"></i> Watch How It Works
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "fas fa-search",
                  title: "1. Discover Providers",
                  text: "Browse through a curated list of tiffin service providers in your area, read reviews, and check their menus.",
                  shadow: "hover:shadow-pink-300",
                },
                {
                  icon: "fas fa-calendar-alt",
                  title: "2. Choose a Plan",
                  text: "Select a subscription plan that fits your needs - from daily meals to weekly or monthly packages with significant savings.",
                  shadow: "hover:shadow-blue-500",
                },
                {
                  icon: "fas fa-utensils",
                  title: "3. Enjoy Fresh Meals",
                  text: "Get fresh, homemade meals delivered to your doorstep at your preferred time, every day as per your subscription.",
                  shadow: "hover:shadow-purple-400",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl shadow-md p-6 text-center text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ${step.shadow}`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <i className={`${step.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>

            <div
              id="subscription-plans"
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
            >
              <div className="bg-gradient-to-r from-[#0e1e2c] via-[#183248] to-[#0e1e2c] py-8 px-6 md:px-10 outline-none border-none">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Subscription Plans
                </h2>
                <p className="text-blue-100">
                  Subscribe to your favorite tiffin provider and save more
                </p>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Weekly Plan",
                      subtitle: "7 days of fresh meals",
                      features: [
                        "One meal per day for 7 days",
                        "Choose your delivery time",
                        "Basic menu customization",
                      ],
                      exclusions: [
                        "Priority delivery",
                        "Weekend special dishes",
                      ],
                      btnText: "Choose Weekly",
                      border: "border border-gray-400",
                    },
                    {
                      title: "Monthly Plan",
                      subtitle: "30 days of fresh meals",
                      features: [
                        "One meal per day for 30 days",
                        "Choose your delivery time",
                        "Full menu customization",
                        "Priority delivery",
                        "Weekend special dishes",
                      ],
                      btnText: "Choose Monthly",
                      border: "border-2 border-blue-500 relative",
                      popular: true,
                    },
                    {
                      title: "Family Plan",
                      subtitle: "Meals for the whole family",
                      features: [
                        "Meals for 4 people for 30 days",
                        "Flexible delivery schedule",
                        "Premium menu customization",
                        "Priority express delivery",
                        "Weekend & festival specials",
                      ],
                      btnText: "Choose Family Plan",
                      border: "border border-gray-200",
                    },
                  ].map((plan, idx) => (
                    <div
                      key={idx}
                      className={`${
                        plan.border
                      } bg-[#e2e4d6] rounded-xl overflow-hidden hover:border-blue-400 transition-all duration-300 hover:shadow-md ${
                        plan.popular ? "hover:shadow-xl" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-bold">
                          POPULAR
                        </div>
                      )}
                      <div className="bg-[#e2e4d6] p-6">
                        <h3 className="text-xl font-bold text-[#002140]">
                          {plan.title}
                        </h3>
                        <p className="text-[#002140c3]">{plan.subtitle}</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feat, i) => (
                            <li key={i} className="flex items-start">
                              <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                              <span className="text-[#002140c3]">{feat}</span>
                            </li>
                          ))}
                          {plan.exclusions &&
                            plan.exclusions.map((exc, i) => (
                              <li
                                key={i}
                                className="flex items-start text-red-600"
                              >
                                <i className="fas fa-times-circle mt-1 mr-2"></i>
                                <span>{exc}</span>
                              </li>
                            ))}
                        </ul>
                        <button className="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#ff4d4d] hover:text-white hover:-translate-y-1">
                          {plan.btnText}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Tiffin Provider Section */}
            <div className="bg-gradient-to-r from-black/40 via-black/25 to-transparent rounded-xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center text-white">
                <div className="mb-6 md:mb-0 md:mr-8 md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Are You a Tiffin Provider?
                  </h2>
                  <p className="mb-6">
                    Join our platform to reach more customers, manage your
                    subscriptions efficiently, and grow your tiffin business.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                      <span>
                        Reach thousands of potential customers in your area
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                      <span>
                        Dedicated dashboard to manage orders and subscriptions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                      <span>
                        Flexible commission structure with weekly payouts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-400 mt-1 mr-2"></i>
                      <span>
                        Marketing support and business growth insights
                      </span>
                    </li>
                  </ul>
                  <button className="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#ff4d4d] hover:text-white hover:translate-y-[-2px]">
                    Register as Provider
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="/api/placeholder/600/400"
                    alt="Provider"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Customer Testimonials Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                What Our Customers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#e2e4d6] rounded-xl shadow-md p-6 relative">
                  <div className="absolute -top-5 left-6">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <i className="fas fa-quote-left text-white"></i>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-600 italic mb-4">
                      "I've been using Taste'n Talk's tiffin service for the
                      past 3 months and it has completely transformed my lunch
                      routine. The meals are fresh, delicious and arrive right
                      on time."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="/api/placeholder/40/40"
                        alt="Customer"
                        className="h-10 w-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Priya Sharma
                        </h4>
                        <div className="flex text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e2e4d6] rounded-xl shadow-md p-6 relative">
                  <div className="absolute -top-5 left-6">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <i className="fas fa-quote-left text-white"></i>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-gray-600 italic mb-4">
                      "As a busy professional, finding time to cook healthy
                      meals was always a challenge. The monthly subscription
                      from Fit Food Kitchen has been a game-changer for my
                      health goals."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="/api/placeholder/40/40"
                        alt="Customer"
                        className="h-10 w-10 rounded-full mr-3"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          Rahul Kapoor
                        </h4>
                        <div className="flex text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Frequently Asked Questions Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    question: "How does the tiffin subscription work?",
                    answer:
                      "Once you select a tiffin provider and subscription plan, you'll be able to choose your meal preferences, delivery time, and payment method. Your meals will be delivered according to your chosen schedule, and you can manage or pause your subscription at any time through your account dashboard.",
                  },
                  {
                    question: "Can I customize my meals?",
                    answer:
                      "Yes, most tiffin providers offer customization options. The level of customization depends on the provider and your subscription plan. Monthly and family plans typically offer more customization options. You can specify dietary preferences, allergies, and even request specific dishes on certain days.",
                  },
                  {
                    question: "What if I need to skip a day or cancel?",
                    answer:
                      "You can easily manage your deliveries through your account dashboard. To skip a day, simply mark it in your calendar at least 24 hours in advance. For cancellations, most plans require a 3-day notice. Any unused balance will be credited to your account for future use or refunded as per our refund policy.",
                  },
                  {
                    question: "How do you ensure food quality and safety?",
                    answer:
                      "All tiffin providers on our platform undergo a strict verification process. We check their kitchen facilities, cooking practices, and ensure they comply with local food safety regulations. We also conduct periodic quality checks and monitor customer feedback. Additionally, our insulated delivery packaging ensures that your food arrives fresh and at the right temperature.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleActive(index)}
                      className="flex items-center justify-between w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                    >
                      <span className="font-medium text-[#002140]">
                        {item.question}
                      </span>
                      {/* <i
                  className={`fas transition-transform duration-200 ${
                    active === index ? 'fa-chevron-up' : 'fa-chevron-down'
                  }`}
                ></i> */}
                    </button>
                    {/* {active === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )} */}
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Updated Section */}
            <div className="bg-gradient-to-r from-transparent via-black/60 rounded-xl p-6 md:p-8 mb-16">
              <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
                <p className="mb-6">
                  Subscribe to our newsletter to receive updates on new tiffin
                  providers, special offers, and healthy eating tips.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-[#002140] focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button className="bg-white text-[#ff4d4d] border-none py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-[#ff4d4d] hover:text-white hover:translate-y-[-2px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-gradient-to-r from-black via-black/60 to-transparent text-white pt-12 pb-6 rounded-lg">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Taste'nTalk Section */}
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    Taste<span className="text-orange-400">'</span>nTalk
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Connecting food lovers with authentic home-cooked tiffin
                    services across India.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>

                {/* Quick Links Section */}
                <div>
                  <h4 className="font-bold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Find Tiffin Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Subscription Plans
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Become a Provider
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Offers & Discounts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Download App
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Help & Support Section */}
                <div>
                  <h4 className="font-bold mb-4">Help & Support</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Refund Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div>
                  <h4 className="font-bold mb-4">Contact</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start">
                      <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                      <span>123 Food Street, Bangalore, India - 560001</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-phone-alt mr-2"></i>
                      <span>+91 98765 43210</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-envelope mr-2"></i>
                      <span>hello@tastentalk.com</span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-800 mb-6" />

              {/* Footer Copyright */}
              <div className="text-center text-gray-500 text-sm">
                <p>
                  &copy; 2025{" "}
                  <a href="#">
                    <span className="text-orange-400">Taste'n Talk</span>
                  </a>
                  . All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Tiffin;
