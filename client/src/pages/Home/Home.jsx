import React from "react";
import heroImage from "../../assets/images/printing.jpg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import Heading from "../../components/Heading/Heading";
import PrintingType from "../../components/PrintingType/PrintingType";

const Home = () => {
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

      <div className="px-[70px] bg-gray-100">
        <Heading store="ONLINE PRINTING STORE" />
        <div>
          <PrintingType />
        </div>
        <Heading newProduct="NEW PRODUCTS" />
      </div>
    </div>
  );
};

export default Home;
