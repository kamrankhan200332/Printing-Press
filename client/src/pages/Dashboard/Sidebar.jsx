import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaUser } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaProductHunt } from "react-icons/fa6";


const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="">
      <div
        className={`sidebar h-[100vh] bg-gray-700 p-3 rounded rounded-r-none `}
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
            to={"/dashboard/addProduct"}
            className={`flex items-center gap-2 p-3 rounded text-white font-semibold  ${
              location.pathname === "/dashboard/table"
                ? "bg-blue-700"
                : "hover:bg-blue-700"
            }`}
          >
            <span className="text-[18px]">
              <FaProductHunt />
            </span>
            <h1>Add Product</h1>
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

        {/* <div className="burger absolute top-2 right-2 cursor-pointer bg-gray-200 text-gray-700 p-1 rounded text-xl hover:bg-gray-100">
          <GiHamburgerMenu />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
