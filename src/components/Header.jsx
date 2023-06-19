import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import searchIcon from "../assets/search.png";
import calendarIcon from "../assets/calendar.png";
import messageQuestionIcon from "../assets/message-question.png";
import notification from "../assets/notification.png";
import userImage from "../assets/user.png";

const Header = () => {
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 items-center h-16 border-b-2 bg-white">
              <div className="flex justify-start items-center ">
                <div className="relative rounded-md shadow-sm w-[70%] mx-6">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
                    <img className="w-4 h-4" src={searchIcon} />
                  </div>
                  <input type="text" name="price" className="block w-full rounded-md bg-[#F5F5F5]  border-0  outline-none py-1.5 pl-10 pr-5 text-gray-900  placeholder:text-[#787486]  focus:ring-1 focus:ring-gray-400 sm:text-sm sm:leading-6 text-sm font-normal leading-4 tracking-normal text-left" placeholder="Search for anything..." />
                </div>
              </div>

              <div className="hidden md:block">
                <div className=" flex items-center justify-end text-end mx-6">
                  <div className="flex items-center justify-end ">
                    <img src={calendarIcon} className="cursor-pointer w-5 h-5 mr-4" />
                    <img src={messageQuestionIcon} className="cursor-pointer last:w-5 h-5 mr-4" />
                    <img src={notification} className="cursor-pointer w-5 h-5 mr-4" />
                  </div>
                  <div className="flex items-center justify-right">
                    <div className="py-2 w-60">
                      <p className="text-base text-[#0D062D] font-normal leading-5 tracking-normal text-right">Anima Agrawal</p>
                      <p className="text-sm text-[#787486] font-normal leading-4 tracking-normal text-right">U.P, India</p>
                    </div>
                    <img src={userImage} className="cursor-pointer ml-4 mr-2 h-10 w-10 rounded-full  " />
                    <span>
                      <ChevronDownIcon className="cursor-pointer w-5 h-5 text-[#292D32]" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;

{
  /* <div className="w-1/2 flex items-center text-right">
                  
                  
                </div> */
}
