import React from "react";
import heroImage from "../../assets/images/printing.jpg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { ProdState } from "../../context/contextApi";
import img1 from "../../assets/images/aliAhmad.jpg";
import img2 from "../../assets/images/kami.jpg";
import img3 from "../../assets/images/ceo.jpg";

const Home = () => {
  const {
    state: { prod, card },
    dispatch,
  } = ProdState();
  return (
    <div className=" ">
      <div className="">
        <div
          className="hero relative"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)", // 50% black overlay
              zIndex: 0,
            }}
          />
          <div className="relative flex flex-col items-center justify-center gap-10 z-10 h-full">
            <h1 className="text-white text-5xl font-bold">
              Printing Shop Online in Pakistan
            </h1>
            <p className="text-white text-3xl font-bold">
              Islamabad Printing Press
            </p>
            <div className="text-white text-2xl font-bold flex items-center gap-2 border-2 p-3 rounded bg-green-500 cursor-pointer">
              <span className="icon">
                <IoLogoWhatsapp />
              </span>
              <p>+92 3119921465</p>
            </div>
            <div className="bg-white w-[600px] font-semibold p-3 rounded-xl">
              <div className="flex items-center rounded-full py-3 px-6 space-x-2 text-[18px] bg-gray-300">
                <div className="icon">
                  <IoSearchOutline />
                </div>
                <input type="text" placeholder="Search for products..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className=" px-[70px] py-5 bg-gray-100">
          <Heading store="ONLINE PRINTING STORE" />
          <div className="grid grid-cols-3 gap-10 w-full">
            {prod.map((cat, index) => (
              <div
                key={index}
                className="w-[100%] rounded-2xl shadow-xl border border-gray-300 bg-white pb-10"
              >
                <div className="image rounded-2xl">
                  <img src={cat.img} className="w-full rounded-2xl" alt="" />
                </div>
                <h1 className="text-center font-semibold text-xl py-3 mb-3 bg-blue-700 text-white">
                  {cat.heading}
                </h1>
                <ul className="">
                  {cat.subCategories?.map((subCategory, index) => (
                    <li
                      key={index}
                      className={`flex items-center space-x-2 ${
                        index % 2 === 0 ? "bg-gray-200" : "bg-white"
                      } px-7 py-2`}
                    >
                      <span className="icon">
                        <AiOutlineDoubleRight />
                      </span>
                      <Link
                        to={subCategory.url}
                        className="text-blue-500 hover:text-blue-700 font-medium"
                      >
                        {subCategory.subCat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className=" px-[70px] py-5">
          <Heading newProduct="NEW PRODUCTS" />
          <div className="grid grid-cols-3 gap-10 w-full">
            {card.map((cardItem, index) => (
              <div
                key={index}
                className="w-[100%] p-7 shadow-xl border border-gray-300 bg-gray-200 rounded space-y-2"
              >
                <div className="image">
                  <img src={cardItem.img} className="w-full" alt="" />
                </div>
                <h1 className="text-center font-semibold text-xl text-green-600">
                  {cardItem.title}
                </h1>
                <p className="text-center font-bold text-xl text-gray-700">
                  {cardItem.price}
                </p>
                <div className="btn flex items-center justify-center">
                  <button className="bg-blue-700 text-white hover:bg-blue-800 cursor-pointer rounded py-2 px-5 font-semibold">
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" px-[70px] py-5">
          <Heading teamMember="OUR TEAM MEMBERS" />

          <div className="grid grid-cols-3 gap-10 w-full bg-gray-200 p-10">
            <div className="w-[100%] p-5 rounded shadow-2xl space-y-2">
              <div className="image w-full">
                <img src={img1} className="rounded-full w-full" alt="" />
              </div>
              <h1 className="text-center font-semibold text-xl ">
                Prof Dr. Ali Ahmad
              </h1>
              <p className="text-center font-bold text-xl text-blue-600">CEO</p>
            </div>

            <div className="w-[100%] p-5 rounded shadow-2xl space-y-2">
              <div className="image">
                <img src={img2} className="rounded-full w-full" alt="" />
              </div>
              <h1 className="text-center font-semibold text-xl">Kamran Khan</h1>
              <p className="text-center font-bold text-xl text-blue-600">
                Web Developer
              </p>
            </div>

            <div className="w-[100%] p-5 rounded shadow-2xl space-y-2">
              <div className="image">
                <img src={img3} className="rounded-full w-full" alt="" />
              </div>
              <h1 className="text-center font-semibold text-xl">Rasool Khan</h1>
              <p className="text-center font-bold text-xl text-blue-600">
                Graphic Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
