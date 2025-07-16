import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaUser } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const location = useLocation();
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div>
      <div
        className={`sidebar relative ${
          toggleSidebar ? "w-[100%]" : "w-0 overflow-hidden"
        } duration-300 transition-all ease-in-out  h-[100vh] bg-gray-700 p-3 rounded`}
      >
        <div>
          <div className="flex items-center gap-2 py-2 px-3 text-white">
            <span>📊</span>
            <h1>Dashboard</h1>
          </div>
          <div className="separator"></div>
        </div>

        <div className="space-y-1">
          <Link
            to={"/dashboard"}
            className={`flex items-center gap-2 p-3 rounded text-white font-semibold  ${
              location.pathname === "/dashboard"
                ? "bg-blue-700"
                : "hover:bg-blue-700"
            }`}
          >
            <span>📊</span>
            <h1>Dashboard</h1>
          </Link>

          <Link
            to={"/dashboard/table"}
            className={`flex items-center gap-2 p-3 rounded text-white font-semibold  ${
              location.pathname === "/dashboard/table"
                ? "bg-blue-700"
                : "hover:bg-blue-700"
            }`}
          >
            <span>
              <FaUser />
            </span>
            <h1>Table</h1>
          </Link>
          <Link
            to={"/dashboard/billing"}
            className={`flex items-center gap-2 p-3 rounded text-white font-semibold  ${
              location.pathname === "/dashboard/billing"
                ? "bg-blue-700"
                : "hover:bg-blue-700"
            }`}
          >
            <span>
              <FaSignInAlt />
            </span>
            <h1>Billing</h1>
          </Link>
          <Link
            to={"/dashboard/notification"}
            className={`flex items-center gap-2 p-3 rounded text-white font-semibold  ${
              location.pathname === "/dashboard/notification"
                ? "bg-blue-700"
                : "hover:bg-blue-700"
            }`}
          >
            <span>
              <FaUser />
            </span>
            <h1>Notification</h1>
          </Link>
          <div className="flex items-center gap-2 p-3 rounded text-white font-semibold bg-blue-700k">
            <span>
              <FaSignInAlt />
            </span>
            <h1>RTL</h1>
          </div>
          <div className="flex items-center gap-2 p-3 rounded text-white font-semibold bg-blue-700k">
            <h1>ACCOUNT PAGES</h1>
          </div>

          <Link
            to={"/dashboard/profile"}
            className="flex items-center gap-2 p-3 rounded text-white font-semibold bg-blue-700k"
          >
            <span>
              <FaUser />
            </span>
            <h1>Profile</h1>
          </Link>

          <Link
            to={"/dashboard/login"}
            className="flex items-center gap-2 p-3 rounded text-white font-semibold bg-blue-700k"
          >
            <span>
              <FaSignInAlt />
            </span>
            <h1>Login</h1>
          </Link>

          <Link
            to={"/dashboard/signup"}
            className="flex items-center gap-2 p-3 rounded text-white font-semibold bg-blue-700k"
          >
            <span>
              <SiGnuprivacyguard />
            </span>
            <h1>Sign up</h1>
          </Link>
        </div>

        <div
          className="burger absolute top-2 right-2 cursor-pointer bg-gray-200 text-gray-700 p-1 rounded text-xl hover:bg-gray-100"
          onClick={handleToggleSidebar}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
