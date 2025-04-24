import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const storiesContainerRef = useRef(null);

  const users = [
    { name: "Tanisha", image: "/api/placeholder/40/40" },
    { name: "Amish", image: "/api/placeholder/40/40" },
    { name: "Prittam", image: "/api/placeholder/40/40" },
    { name: "Piyush", image: "/api/placeholder/40/40" },
    { name: "Lisa", image: "/api/placeholder/40/40" },
    { name: "Marco", image: "/api/placeholder/40/40" },
    { name: "Sophia", image: "/api/placeholder/40/40" },
    { name: "James", image: "/api/placeholder/40/40" },
    { name: "Emma", image: "/api/placeholder/40/40" },
    { name: "David", image: "/api/placeholder/40/40" }
  ];

  const recipeData = [
    { 
      title: "Creamy Garlic Pasta", 
      description: "Rich and creamy pasta with roasted garlic and herbs." 
    },
    { 
      title: "Vegetarian Lasagna", 
      description: "Layers of pasta, veggies, and cheese baked to perfection." 
    },
    { 
      title: "Chocolate Cake", 
      description: "Rich, moist chocolate cake topped with ganache and berries." 
    },
    { 
      title: "Vegan Buddha Bowl", 
      description: "Nutritious bowl with grains, roasted veggies, and tahini." 
    },
  ];

  const videoData = [
    {
      id: "r2N8ObqAgy0?si=2ygMwa_hUgmoXy9w",
      title: "Aloo Paratha Recipe | Breakfast Lunch Recipe | Kunal Kapur Recipes",
      channel: "Kunal Kapur",
      description: "आलू पराठा बनाने का नया और आसान तरीका | Aloo Parantha Recipe | Kunal Kapur",
      views: "23,732,152",
      tag: "Healthy",
      tagColor: "green"
    },
    {
      id: "wfPt0r0Nl5o?si=xrfyipljUISTWbjW",
      title: "The Easiest Chocolate Cake Of All Time",
      channel: "Joshua Weissman",
      description: "Homemade cakes can be a scary thing for many people. This recipe ideally skips all of the typical fuss and stress around baking a cake. A simplified cake base with a perfectly rich chocolate frosting. Just right to give you the sugar crash you desire.",
      views: "3.7M",
      tag: "Dessert",
      tagColor: "yellow"
    },
    {
      id: "sv3TXMSv6Lw?si=I6V-VOyquJ2sn-50",
      title: "The Best Homemade Pizza You'll Ever Eat",
      channel: "Tasty",
      description: "Learn how to make restaurant-quality pizza from scratch with this simple recipe.",
      views: "34,927,844",
      tag: "Popular",
      tagColor: "red"
    },
    {
      id: "7h85kgW2Cnc?si=tTL6dwSxvCzyOzn7",
      title: "Pasta in Creamy Peri Peri Sauce Recipe | Home-Made Peri Peri Masala | Desi Pasta | Chef Sanjyot Keer",
      channel: "Your Food Lab",
      description: "Master the art of making authentic Thai curry with simple ingredients.",
      views: "3,129,642",
      tag: "Spicy",
      tagColor: "red"
    },
    {
      id: "uZtb-o3L3hQ?si=xrN6dPUHMN3hSqW-",
      title: "Creamy Mushroom with Lemon Coriander Rice | क्रीमी मशरूम और लेमन कोरिएंडर राइस | Chef Sanjyot Keer",
      channel: "Your Food Lab",
      description: "Creamy Mushroom with Lemon Coriander Rice Prep time: 15-20 minutes Cooking time: 25-30 minutes Serves: 3-4 people",
      views: "2,280,905",
      tag: "Easy",
      tagColor: "blue"
    },
    {
      id: "1DbrPChGnpk?si=v3TtHdOHbnBph1fX",
      title: "Paneer Lababdar Recipe | Restaurant style | होटल जैसा पनीर लबाबदार | Chef Sanjyot Keer",
      channel: "Your Food Lab",
      description: "Prep time: 15-20 minutes Cooking time:25-30 minutes Serves: 5-6 people",
      views: "8M",
      tag: "Popular",
      tagColor: "green"
    }
  ];

    const scrollStories = (amount) => {
    if (storiesContainerRef.current) {
      storiesContainerRef.current.scrollBy({
        left: amount,
        behavior: "smooth"
      });
    }
  };

  const slideNext = () => {
    if (currentIndex < recipeData.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      const lastPossibleIndex = Math.max(0, recipeData.length - cardsPerView);
      setCurrentIndex(lastPossibleIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getTagColorClasses = (color) => {
    const colorMap = {
      red: 'bg-red-100 text-red-600',
      green: 'bg-green-100 text-green-600',
      blue: 'bg-blue-100 text-blue-600',
      yellow: 'bg-yellow-100 text-yellow-600',
    };

    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  return (


<>


<div
    className="bg-[#002140] font-serif text-[#e2e4d6] container ml-[250px] -mt-[720px] py-8 px-4 md:px-6 w-auto"
  >

  {/* <!-- Navigation Container --> */}
  <div className="w-full mx-auto mt-5 bg-gradient-to-br from-[#e2e4d6] to-[#c4c2c2] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] overflow-hidden relative">
    
    {/* <!-- Top Color Stripe --> */}
    <div className="absolute top-0 left-0 w-full h-5 bg-gradient-to-r from-[#ff4d4d] via-[#6a5acd] to-[#0099ff] "></div>
    
    {/* <!-- Navigation Items Wrapper --> */}
    <div className="flex flex-wrap justify-between gap-2 p-4 md:gap-0" id="navItems">
      
      {/* <!-- Navigation Item --> */}
      <div className="nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md">
        <div className="icon text-[24px] text-[#555] transition-transform duration-300 group-hover:scale-110">🏠</div>
        <div className="label text-sm font-medium text-[#333] group-hover:text-[#0099ff] transition-colors">Home</div>
        <div className="indicator absolute bottom-0 left-1/2 w-0 h-[3px] bg-gradient-to-r from-[#ff4d4d] to-[#002140] transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></div>
      </div>

      <div className="nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md">
        <div className="icon text-[24px] text-[#555] transition-transform duration-300 group-hover:scale-110">🔥</div>
        <div className="label text-sm font-medium text-[#333] group-hover:text-[#0099ff] transition-colors">Trending</div>
        <div className="indicator absolute bottom-0 left-1/2 w-0 h-[3px] bg-gradient-to-r from-[#ff4d4d] to-[#002140] transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></div>
      </div>

      <div className="nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md">
        <div className="icon text-[24px] text-[#555] transition-transform duration-300 group-hover:scale-110">📽</div>
        <div className="label text-sm font-medium text-[#333] group-hover:text-[#0099ff] transition-colors">Repi</div>
        <div className="indicator absolute bottom-0 left-1/2 w-0 h-[3px] bg-gradient-to-r from-[#ff4d4d] to-[#002140] transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></div>
      </div>

      <div className="nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md">
        <div className="icon text-[24px] text-[#555] transition-transform duration-300 group-hover:scale-110">📹</div>
        <div className="label text-sm font-medium text-[#333] group-hover:text-[#0099ff] transition-colors">Your Content</div>
        <div className="indicator absolute bottom-0 left-1/2 w-0 h-[3px] bg-gradient-to-r from-[#ff4d4d] to-[#002140] transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></div>
      </div>

      <div className="nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md">
        <div className="icon text-[24px] text-[#555] transition-transform duration-300 group-hover:scale-110">🎵</div>
        <div className="label text-sm font-medium text-[#333] group-hover:text-[#0099ff] transition-colors">Playlists</div>
        <div className="indicator absolute bottom-0 left-1/2 w-0 h-[3px] bg-gradient-to-r from-[#ff4d4d] to-[#002140] transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></div>
      </div>

      <div className="nav-item group flex-1 flex flex-col items-center text-center gap-2 p-4 rounded-lg cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-[#e2e4d6] hover:-translate-y-1 hover:shadow-md">
        <div className="icon text-[24px] text-[#555] transition-transform duration-300 group-hover:scale-110">🕒</div>
        <div className="label text-sm font-medium text-[#333] group-hover:text-[#0099ff] transition-colors">History</div>
        <div className="indicator absolute bottom-0 left-1/2 w-0 h-[3px] bg-gradient-to-r from-[#ff4d4d] to-[#002140] transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5"></div>
      </div>

    </div>
  </div>

  {/* <script> */}
    {/* document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelectorAll(".nav-item").forEach(el => {
          el.classNameList.remove("bg-[#e2e4d6]", "shadow-md");
          el.querySelector(".icon").classNameList.remove("text-[#002140]");
          el.querySelector(".label").classNameList.remove("text-[#002140]", "font-semibold");
          el.querySelector(".indicator").classNameList.remove("w-4/5");
          el.querySelector(".indicator").classNameList.add("w-0");
        });

        this.classNameList.add("bg-[#e2e4d6]", "shadow-md");
        this.querySelector(".icon").classNameList.add("text-[#002140]");
        this.querySelector(".label").classNameList.add("text-[#002140]", "font-semibold");
        this.querySelector(".indicator").classNameList.remove("w-0");
        this.querySelector(".indicator").classNameList.add("w-4/5");
        this.querySelector(".indicator").classNameList.remove("from-[#ff4d4d]", "to-[#002140]");
        this.querySelector(".indicator").classNameList.add("from-[#002140]", "to-[#ff4d4d]");
      });
    }); */}
  {/* </script> */}

</div>

    
    <div className="bg-[#002140] text-gray-800 py-8 px-4 font-sans leading-normal">
      <div className="container ml-[250px] -mt-[70px] py-12 px-4 md:px-6 w-fit ">
        {/* Stories Section (Horizontal Scrolling) */}
        <section className="mb-10">
          <div className="relative">
            <button 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none cursor-pointer w-10 h-10 rounded-full text-lg flex items-center justify-center hover:bg-black hover:bg-opacity-80 "
              onClick={() => scrollStories(-200)}
            >
              <ChevronLeft size={24} />
            </button>
            <div 
              ref={storiesContainerRef}
              className="flex overflow-x-auto gap-4 p-4 whitespace-nowrap scroll-smooth rounded-xl"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {users.map((user, index) => (
                <div key={index} className="flex-none flex flex-col items-center justify-center gap-2">
                  <button className="bg-transparent border-none cursor-pointer flex flex-col items-center gap-1 hover:scale-110">
                    <div className="h-16 w-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
                    </div>
                    <span className="text-xs font-medium text-gray-300">{user.name}</span>
                  </button>
                </div>
              ))}
            </div>
            <button 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none cursor-pointer w-10 h-10 rounded-full text-lg flex items-center justify-center hover:bg-black hover:bg-opacity-80"
              onClick={() => scrollStories(200)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        {/* Recipe Slider Section */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-white">Daily Dish Playlist</h2>
          <div className="relative">
            <button 
              className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 bg-white text-gray-800 border-none rounded-full cursor-pointer flex items-center justify-center text-lg shadow-md hover:bg-gray-200 focus:outline-none z-1"
              onClick={slidePrev}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="overflow-hidden py-5">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6 px-5"
                style={{ transform: `translateX(-${currentIndex * (280 + 24)}px)`}}
              >
                {recipeData.map((recipe, index) => (
                  <div 
                    key={index} 
                    className="min-w-[280px] flex-none bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
                  >
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">🍳</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{recipe.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">{recipe.description}</p>
                      <button className="mt-3 bg-red-500 text-white px-3 py-1 rounded-full border-none cursor-pointer hover:bg-red-600">
                        View Playlist
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 bg-white text-gray-800 border-none rounded-full cursor-pointer flex items-center justify-center text-lg shadow-md hover:bg-gray-200 focus:outline-none"
              onClick={slideNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        {/* Video Grid Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">More Recipe Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoData.map((video, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-black via-black/60 to-transparent rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-0.5 text-xs text-white rounded">HD</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded mr-2 ${getTagColorClasses(video.tagColor)}`}>
                      {video.tag}
                    </span>
                    <span className="text-gray-400 text-xs">{video.views} views</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-300 mb-1">{video.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{video.description}</p>
                  <div className="flex items-center">
                    <img
                      src="/api/placeholder/40/40"
                      className="h-8 w-8 rounded-full mr-2"
                      alt={`${video.channel} profile`}
                    />
                    <span className="text-sm font-medium text-gray-300">{video.channel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-white text-red-500 border border-red-500 py-2 px-5 rounded-full font-semibold cursor-pointer transition-all duration-300 shadow-md hover:bg-red-500 hover:text-white">
              View All
            </button>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default HomePage