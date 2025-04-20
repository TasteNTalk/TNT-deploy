import React from "react";

const Courses = () => {
  return (
    <div>
      <div className="bg-[#002140] min-h-screen text-gray-800">
        <main className="container ml-[250px] -mt-[720px] py-14 px-4 md:px-6 w-fit ">
          <section className="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-2xl shadow-xl overflow-hidden mb-12 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-8 md:p-12">
                <h1 className="text-4xl font-bold text-white mt-4 mb-4 leading-tight">
                  Enhance{" "}
                  <span className="text-[#ff4d4d]">Your Culinary Skills</span>{" "}
                  With Popular Cooking Courses
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                  Take the first step in your culinary journey with expert-led
                  classNamees
                </p>
                <button className="group relative inline-flex items-center justify-center bg-[#ff4d4d] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:bg-white hover:text-[#ff4d4d]">
                  Get Started Today <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
              <div className="md:w-1/2 relative">
                <img
                  src="/api/placeholder/800/600"
                  alt="Cooking classNamees"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </section>
          <section className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <i className="fas fa-star text-accent mr-3"></i>
                Featured Cooking classNamees
              </h2>
              <a
                href="#"
                className="text-[#ff4d4d] hover:text-white transition-colors flex items-center"
              >
                View All
                <i className="fas fa-chevron-right ml-2"></i>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src="/api/placeholder/600/400"
                    alt="Beginner cooking className"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-lg uppercase">
                    Popular
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors">
                    Basic Cooking Techniques for Everyone
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="/api/placeholder/50/50"
                          alt="Chef Olivia"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-400">Chef Olivia</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-star text-gray-400 mr-1"></i>
                      <span className="text-gray-400 text-sm font-medium">
                        4.9 (128)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-white">
                      $49.00
                    </span>
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="fas fa-clock mr-1"></i>
                        <span>20 hrs</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-book mr-1"></i>
                        <span>15 lessons</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-[#002140] mb-4 flex justify-center items-center">
                    <i className="fas fa-users mr-2"></i>
                    <span>Beginner Level</span>
                  </div>
                  <button className="w-full group relative inline-flex items-center justify-center bg-white text-[#ff4d4d] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:bg-[#ff4d4d] hover:text-white">
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src="/api/placeholder/600/400"
                    alt="Italian Cuisine"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-lg uppercase">
                    New
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors">
                    Authentic Italian Cuisine MasterclassName
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="/api/placeholder/50/50"
                          alt="Chef Isabella"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-400">
                        Chef Isabella
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-star text-gray-400 mr-1"></i>
                      <span className="text-gray-400 text-sm font-medium">
                        4.8 (95)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-white">
                      $69.00
                    </span>
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="fas fa-clock mr-1"></i>
                        <span>25 hrs</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-book mr-1"></i>
                        <span>18 lessons</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-[#002140] mb-4 flex justify-center items-center">
                    <i className="fas fa-users mr-2"></i>
                    <span>Intermediate Level</span>
                  </div>
                  <button className="w-full group relative inline-flex items-center justify-center bg-white text-[#ff4d4d] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:bg-[#ff4d4d] hover:text-white">
                    Enroll Now
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src="/api/placeholder/600/400"
                    alt="Advanced Baking"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-lg uppercase">
                    Best Seller
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors">
                    Advanced Baking and Pastry Techniques
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src="/api/placeholder/50/50"
                          alt="Chef William"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-400">
                        Chef William
                      </span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-star text-gray-400 mr-1"></i>
                      <span className="text-gray-400 text-sm font-medium">
                        4.9 (210)
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-white">
                      $79.00
                    </span>
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <i className="fas fa-clock mr-1"></i>
                        <span>30 hrs</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-book mr-1"></i>
                        <span>22 lessons</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-[#002140] mb-4 flex justify-center items-center">
                    <i className="fas fa-users mr-2"></i>
                    <span>Advanced Level</span>
                  </div>
                  <button className="w-full group relative inline-flex items-center justify-center bg-white text-[#ff4d4d] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:bg-[#ff4d4d] hover:text-white">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <i className="fas fa-layer-group text-accent mr-3"></i>
              Popular Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-tr hover:from-black hover:via-[#002140] hover:to-[#002140c1] hover:text-white transition-all duration-300 group">
                <div className="bg-[#002140] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-bread-slice text-3xl text-[#002140] group-hover:text-white"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Baking</h3>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  24 Courses
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-tr hover:from-black hover:via-[#002140] hover:to-[#002140c1] hover:text-white transition-all duration-300 group">
                <div className="bg-[#002140] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-pizza-slice text-3xl text-[#002140] group-hover:text-white"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Italian</h3>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  18 Courses
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-tr hover:from-black hover:via-[#002140] hover:to-[#002140c1] hover:text-white transition-all duration-300 group">
                <div className="bg-[#002140] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-seedling text-3xl text-[#002140] group-hover:text-white"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Vegan</h3>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  12 Courses
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:bg-gradient-to-tr hover:from-black hover:via-[#002140] hover:to-[#002140c1] hover:text-white transition-all duration-300 group">
                <div className="bg-[#002140] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-utensils text-3xl text-[#002140] group-hover:text-white"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Asian</h3>
                <p className="text-sm text-gray-500 group-hover:text-white">
                  16 Courses
                </p>
              </div>
            </div>
          </section>
          <section className="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white flex items-center">
                <i className="fas fa-chalkboard-teacher text-accent mr-3"></i>
                Meet Our Famous Teachers
              </h2>
              <a
                href="#"
                className="text-[#ff4d4d] hover:text-secondary transition-colors flex items-center"
              >
                View All
                <i className="fas fa-chevron-right ml-2"></i>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-accent transition-all duration-300">
                  <img
                    src="/api/placeholder/150/150"
                    alt="Chef James"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg text-white mb-1">
                  Chef James
                </h3>
                <p className="text-gray-400 mb-3">Italian Cuisine Expert</p>
                <div className="flex justify-center space-x-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-accent transition-all duration-300">
                  <img
                    src="/api/placeholder/150/150"
                    alt="Chef Victoria"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg text-white mb-1">
                  Chef Victoria
                </h3>
                <p className="text-gray-400 mb-3">Pastry Specialist</p>
                <div className="flex justify-center space-x-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white text-[#ff4d4d] hover:bg-[#ff4d4d] hover:text-white flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <i className="fas fa-quote-left text-accent mr-3"></i>
              What Our Students Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-5 left-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                    <i className="text-[#ff4d4d] fas fa-quote-right"></i>
                  </div>
                </div>
                <p className="text-[#002140] italic mb-6 mt-4">
                  "The Basic Cooking Techniques className completely transformed
                  how I approach cooking. Chef Olivia's instructions were clear
                  and easy to follow. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="/api/placeholder/50/50"
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002140]">Sarah Johnson</h4>
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
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-5 left-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                    <i className="text-[#ff4d4d] fas fa-quote-right"></i>
                  </div>
                </div>
                <p className="text-[#002140] italic mb-6 mt-4">
                  "I never thought I could make authentic Italian pasta from
                  scratch until I took Chef Isabella's course. The techniques
                  are professional yet simple to master at home."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="/api/placeholder/50/50"
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002140]">
                      Michael Roberts
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
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-5 left-6">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                    <i className="text-[#ff4d4d] fas fa-quote-right"></i>
                  </div>
                </div>
                <p className="text-[#002140] italic mb-6 mt-4">
                  "Chef William's Advanced Baking course helped me start my own
                  pastry business. The tips and techniques he teaches are
                  invaluable for anyone serious about baking."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src="/api/placeholder/50/50"
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#002140]">Emily Davis</h4>
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
          </section>
          <section className="bg-gradient-to-tr from-black/40 via-black/25 to-transparent rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Cooking Skills?
                </h2>
                <p className="text-white text-opacity-90 text-lg mb-6">
                  Join thousands of students who have elevated their culinary
                  expertise with our expert-led classNamees
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-accent"></i>
                    </div>
                    <span className="text-white">
                      Learn from certified master chefs
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-accent"></i>
                    </div>
                    <span className="text-white">
                      Flexible learning schedule
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <i className="fas fa-check text-accent"></i>
                    </div>
                    <span className="text-white">
                      Certificate upon completion
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 text-center">
                <button className="bg-[#ff4d4d] text-white hover:bg-white hover:text-[#ff4d4d] text-xl font-bold py-4 px-8 rounded-full transition-colors transform hover:-translate-y-1 hover:shadow-xl duration-300 animate-bounce-slow">
                  Get Started Now!
                </button>
              </div>
            </div>
          </section>
          <footer className="bg-gradient-to-r from-black via-black/60 to-transparent] rounded-2xl shadow-xl p-6 mt-8 text-white">
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
                      <div className="text-white font-semibold">App Store</div>
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
        </main>
      </div>
    </div>
  );
};

export default Courses;
