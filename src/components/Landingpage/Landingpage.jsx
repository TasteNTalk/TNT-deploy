import React from 'react'

const Landingpage = () => {
  return (
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
        <div className="icon text-[24px] text-[#555] transition-transform duration-300 group-hover:scale-110">📽️</div>
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
  )
}

export default Landingpage
