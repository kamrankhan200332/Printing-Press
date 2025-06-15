import React from "react";
import heroImage from "../../assets/images/printing.jpg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const Hero = ({ printing, image }) => {
  return (
    <div className="">
      <div
        className="hero relative bg-cover bg-center py-10 md:py-13 xl:py-20"
        style={{
          backgroundImage: `url("${image}")`,
          width: "100%",
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)", // 50% black overlay
          }}
        />
        <div className="relative flex flex-col items-center justify-center gap-5 md:gap-7  xl:gap-10 z-10 h-full">
          <h1 className="text-white text-center font-bold px-6 text-3xl md:text-4xl xl:text-5xl">
            {printing}
          </h1>
          <p className="text-white text-2xl md:text-3xl xl:text-4xl px-6 font-bold text-center">
            Islamabad Printing Press
          </p>
          <a
            href="https://wa.me/923119921465"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl font-bold flex items-center gap-2 border-2 p-3 rounded bg-green-500 cursor-pointer"
          >
            <span className="icon">
              <IoLogoWhatsapp />
            </span>
            <p>+92 3119921465</p>
          </a>

          <div className="bg-white w-[70%] md:w-[50%] px-6 hidden sm:block font-semibold p-3 rounded-xl">
            <div className="flex items-center rounded-full py-3 px-6 space-x-2 text-[18px] bg-gray-300">
              <div className="icon">
                <IoSearchOutline />
              </div>
              <input type="text" placeholder="Search for products..." />
            </div>
          </div>
        </div>
      </div>

      <div className="btn fixed right-4 bottom-4 z-50">
        <a
          href="https://wa.me/923119921465"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm sm:text-[18px] md:text-xl font-semibold flex items-center gap-2 border-2 px-3 py-2 rounded-full bg-green-500 cursor-pointer"
        >
          <span className="icon">
            <IoLogoWhatsapp />
          </span>
          <p className="text-center">How may I help you?</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
