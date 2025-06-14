import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-gray-200k shadow-xl h-[100px]">
      <nav className="flex items-center justify-between w-[90%] m-auto py-[15px]">
        <Link to={"/"}>
          <img className="w-[160px]" src={logo} alt="" />
        </Link>

        <div
          className={`xl:static xl:min-h-fit absolute left-0 flex items-center px-15 z-50 w-full xl:w-auto bg-white border-t xl:border-none border-gray-300 min-h-[60vh] ${
            showMenu ? "top-[14%]" : "top-[-100%]"
          } duration-500 ease-in-out `}
        >
          <ul className="flex flex-col xl:flex-row xl:items-center justify-between gap-[35px] xl:gap-[20px] font-semibold text-[20px] xl:text-[17px] uppercase">
            <li
              className={`${
                location.pathname === "/sublimation"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
            >
              <Link to={"/sublimation"}>Sublimation Printing</Link>
            </li>
            <li
              className={`${
                location.pathname === "/offset"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
            >
              <Link to={"/offset"}>Offset Printing</Link>
            </li>
            <li
              className={`${
                location.pathname === "/stationery"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
            >
              <Link to={"/stationery"}>Stationery Printing</Link>
            </li>
            {/* <li className={`${
                location.pathname === "/embroidery"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}>
              <Link to={"/embroidery"}>Embroidery Printing</Link>
            </li> */}
            <li
              className={`${
                location.pathname === "/uvPrinting"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
            >
              <Link to={"/uvPrinting"}>UV Printing</Link>
            </li>
            <li
              className={`${
                location.pathname === "/largePrinting"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
            >
              <Link to={"/largePrinting"}>Large Printing</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-3">
          <div
            className="icon text-2xl xl:hidden cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
          </div>

          <div className="cart text-[20px]">
            <FaShoppingCart />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
