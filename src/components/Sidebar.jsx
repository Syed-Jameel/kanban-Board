import { useState, useEffect } from "react";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import homeicon from "../assets/home.png";
import messagesicon from "../assets/messages.png";
import tasksicon from "../assets/tasks.png";
import membersicon from "../assets/members.png";
import settingsicon from "../assets/settings.png";
import greenDot from "../assets/green-dot.png";
import orangeDot from "../assets/orange-dot.png";
import grayDot from "../assets/gray-dot.png";
import blueDot from "../assets/blue-dot.png";
import addBtn from "../assets/add-square.png";
import lampOn from "../assets/lamp-on.png";
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

  const Pojects = [
    {
      title: "Mobile App",
      dot: greenDot,
      isSelected: true,
    },
    {
      title: "Website Redesign",
      dot: orangeDot,
      isSelected: false,
    },
    {
      title: "Design System",
      dot: grayDot,
      isSelected: false,
    },
    {
      title: "Wireframs",
      dot: blueDot,
      isSelected: false,
    },
  ];

  const Menus = [
    {
      title: "Home",
      icon: homeicon,
      isSelected: false,
    },
    {
      title: "Maessages",
      icon: messagesicon,
      isSelected: false,
    },
    {
      title: "Tasks",
      icon: tasksicon,
    },
    {
      title: "Members",
      icon: membersicon,
      isSelected: false,
    },
    {
      title: "Settings",
      icon: settingsicon,
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
              {Menus.map((Menu, index) => (
                <li key={index} className={`flex  rounded-md p-2 cursor-pointer hover:bg-navigationHover text-gray-300 text-sm items-center gap-x-4`}>
                  <img className="w-4 h-4" src={Menu.icon} />
                  <span className={`${!isSidebarOpen && "hidden"} origin-left duration-200 text-cutomTextColor`}>{Menu.title}</span>
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
                  <img src={project.dot} />
                  <span className={`${!isSidebarOpen && "hidden"} origin-left duration-200 text-cutomTextColor`}>{project.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${!isSidebarOpen && "hidden"} p-5 relative `}>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-[66px] h-[66px] bg-union rounded-full flex items-center justify-center">
              <div className="w-[66px] h-[66px] bg-unionElipBg rounded-full flex items-center justify-center">
                <img src={lampOn} />
              </div>
            </div>

            <div className="p-4 mt-4 text-center bg-union rounded-lg">
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

/* Rectangle 1060 */
