import { useState, useEffect } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import addBtn from "../assets/add-square.png";
import colorFilter from "../assets/colorfilter.png";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1140) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [windowWidth]);

  const menus = [
    {
      title: "Home",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
      isSelected: false,
    },
    {
      title: "Maessages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      ),
      isSelected: false,
    },
    {
      title: "Tasks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
        </svg>
      ),
    },
    {
      title: "Members",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      isSelected: false,
    },
    {
      title: "Settings",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      isSelected: false,
    },
  ];

  const Pojects = [
    {
      title: "Mobile App",
      dotColor: "bg-[#5030E5]",
      isSelected: true,
    },
    {
      title: "Website Redesign",
      dotColor: "bg-[#FFA500]",
      isSelected: false,
    },
    {
      title: "Design System",
      dotColor: "bg-[#E4CCFD]",
      isSelected: false,
    },
    {
      title: "Wireframs",
      dotColor: "bg-[#8BC48A]",
      isSelected: false,
    },
  ];

  return (
    <>
      {windowWidth >= 1140 && (
        <div className={` ${isSidebarOpen ? "w-72" : "w-0 "} h-full relative duration-300 border-r-2  bg-white`}>
          <div className="flex gap-x-4 h-16 items-center border-b-2 px-7">
            <img src={colorFilter} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
            <h1 className={`text-customBlack corigin-left font-medium text-xl duration-200 font-custom ${!isSidebarOpen && "scale-0"}`}>Project M. </h1>
            <div className={`absolute cursor-pointer right-6  w-5 h-5 text-chevronColor`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <ChevronDoubleLeftIcon /> : <ChevronDoubleRightIcon />}
            </div>
          </div>
          <div className="p-3  ">
            <ul className="pt-0 p-2">
              {menus.map((menu, index) => (
                <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-navigationHover text-gray-300 text-sm items-center gap-x-4`}>
                  <span className="w-5 h-5 text-[#787486]">{menu.icon}</span>
                  <span className={`${!isSidebarOpen && "hidden"} origin-left duration-200 text-cutomTextColor`}>{menu.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-2">
            <hr />
          </div>

          <div className={`${!isSidebarOpen && "hidden"} p-3`}>
            <div className="p-2 flex items-center justify-between">
              <p className="text-cutomTextColor text-sm font font-bold">MY PROJECTS</p>
              <img src={addBtn} className="cursor-pointer" />
            </div>
            <ul className="pt-0 p-2">
              {Pojects.map((project, index) => (
                <li key={index} className={`${project.isSelected ? "bg-[#5030E5] bg-opacity-10" : "hover:bg-navigationHover"} flex rounded-md p-2 my-2 cursor-pointer  text-gray-300 text-sm items-center gap-x-4 `}>
                  <div className={`w-2 h-2 rounded-full ${project.dotColor}`}></div>
                  <span className={`${!isSidebarOpen && "hidden"} origin-left duration-200 text-cutomTextColor`}>{project.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${!isSidebarOpen && "hidden"} p-5 relative `}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[66px] h-[66px] bg-union rounded-full flex items-center justify-center">
              <div className="custom-container rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#FBCB18]">
                  <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                  <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <div className="p-4 text-center bg-union rounded-lg">
              <p className="text-sm font-medium leading-4 tracking-normal pb-2 mt-6">Thoughts Time</p>
              <p className=" text-cutomTextColor text-xs font-normal leading-4 tracking-normal text-center">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
              <input type="text" className="placeholder-[#000] text-sm mt-4 font-semibold leading-4 tracking-normal  w-[100%] placeholder-center rounded-md border-0 text-center focus:ring-1 focus:ring-gray-400" placeholder="Write a message" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
