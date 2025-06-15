import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

import { ProdState } from "../../context/ContextApi";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const handleToggle = () => {
    setShowCart(!showCart);
  };
  const {
    state: { cart },
    dispatch,
  } = ProdState();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="bg-white shadow-xl h-[100px] sticky top-0 z-50">
      <nav className="flex items-center justify-between w-[90%] m-auto py-[15px]">
        <Link to={"/"} onClick={() => setShowMenu(false)}>
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
              onClick={() => setShowMenu(false)}
            >
              <Link to={"/sublimation"}>Sublimation Printing</Link>
            </li>
            <li
              className={`${
                location.pathname === "/offset"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
              onClick={() => setShowMenu(false)}
            >
              <Link to={"/offset"}>Offset Printing</Link>
            </li>
            <li
              className={`${
                location.pathname === "/stationery"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
              onClick={() => setShowMenu(false)}
            >
              <Link to={"/stationery"}>Stationery Printing</Link>
            </li>
            {/* <li className={`${
                location.pathname === "/embroidery"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`} onClick={() => setShowMenu(false)}>
              <Link to={"/embroidery"}>Embroidery Printing</Link>
            </li> */}
            <li
              className={`${
                location.pathname === "/uvPrinting"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
              onClick={() => setShowMenu(false)}
            >
              <Link to={"/uvPrinting"}>UV Printing</Link>
            </li>
            <li
              className={`${
                location.pathname === "/largePrinting"
                  ? "bg-blue-700 text-white hover:bg-blue-800 py-1 px-2 rounded"
                  : "hover:text-blue-700"
              }`}
              onClick={() => setShowMenu(false)}
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

          <div>
            <div
              className="relative cart text-[20px] cursor-pointer bg-blue-700 py-2 px-4 rounded-full text-white"
              onClick={handleToggle}
            >
              <FaShoppingCart />
              <div className="absolute top-[-7px] right-[-3px] w-[20px] text-sm h-[20px] rounded-full bg-red-700 font-semibold text-white flex items-center justify-center">
                {cart.length}
              </div>
            </div>
            {showCart && (
              <div className="dropdown w-[300px] overflow-auto max-h-[300px] rounded bg-white border absolute right-20 top-18 z-50">
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod, index) => (
                      <span
                        className="cartItem space-y-3 hover:bg-green-200 flex items-center justify-between p-2 mb-1"
                        // key={prod.id}
                        key={index}
                      >
                        <img
                          src={prod.img}
                          className="cartItemImg w-[50px] h-[50px] mr-2 object-cover rounded-full"
                          alt={prod.title}
                        />
                        <div className="cartItemDetail flex flex-col flex-1 py-0 px-[20px]">
                          <span className="font-semibold">{prod.title}</span>
                          <span className="font-semibold">
                            ${prod.price.split(".")[0]}
                          </span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => setShowCart(false)}
                          className="w-[96%] mx-[10px] my-0  bg-blue-700 py-1 rounded mb-1 flex items-center justify-center font-semibold text-white cursor-pointer"
                        >
                          Go To Cart
                        </button>
                      </div>
                    </Link>
                  </>
                ) : (
                  <span className="p-3 flex items-center justify-center bg-green-800 text-white font-bold">
                    Cart is Empty!
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
