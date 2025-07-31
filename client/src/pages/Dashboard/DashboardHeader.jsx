import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const DashboardHeader = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-10">
      <div className="flex items-center justify-between bg-gray-700 text-white font-semibold py-4 px-3">
        <div className="flex items-center space-x-4">
          <div
            className="burger text-xl cursor-pointer"
            onClick={toggleSidebar}
          >
            <GiHamburgerMenu />
          </div>
          <h1>Dashboard</h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="input">
            <input
              type="text"
              placeholder="Type here..."
              className="border border-gray-400 rounded py-2 px-3"
            />
          </div>
          <div className="border border-gray-400 py-2 px-2 rounded text-white">
            ONLINE BUILDER
          </div>
          <div className="flex items-center ">
            <div className="flex items-center border border-gray-400 rounded px-3 py-2 border-r-0 rounded-r-none space-x-2">
              <span className="icon cursor-pointer">
                <FaRegStar />
              </span>
              <span>Star</span>
            </div>
            <div className="border border-gray-400 rounded rounded-l-none px-3 py-2">
              11,021
            </div>
          </div>
        </div>

        <div className="account flex items-center space-x-5">
          <div className="flex items-center space-x-2">
            <span className="sitting text-xl cursor-pointer">
              <IoMdSettings />
            </span>
            <span className="notification text-xl cursor-pointer">
              <IoMdNotifications />
            </span>
          </div>

          <div className="flex items-center cursor-pointer space-x-1">
            <span className="user text-xl ">
              <FaUser />
            </span>
            <span>Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
