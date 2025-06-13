import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

const Navbar = () => {
  return (
    <header className="bg-gray-200k shadow-xl">
      <nav className="flex items-center justify-between w-[90%] m-auto py-[15px]">
        <Link to={"/"}>
          <img className="w-[160px]" src={logo} alt="" />
        </Link>
        <div>
          <ul className="flex items-center justify-between gap-[20px] font-semibold text-xl">
            <li className="hover:text-gray-700">
              <Link>Sublimation Printing</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link>Offset Printing</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link>Stationery Printing</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link>Embroidery Printing</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link>UV Printing</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link>Large Printing</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
