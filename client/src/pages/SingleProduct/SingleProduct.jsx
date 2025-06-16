import React, { useState } from "react";
import img from "../../assets/images/mug.webp";
import Heading from "../../components/Heading/Heading";
import { FaCartPlus } from "react-icons/fa";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/images/printing.jpg";
import Description from "../../components/SinglePageProduct/Description";
import Brand from "../../components/SinglePageProduct/Brand";
import Review from "../../components/SinglePageProduct/Review";

const SingleProduct = () => {
  const [description, setDescription] = useState(true);
  const [brand, setBrand] = useState(false);
  const [review, setReview] = useState(false);
  return (
    <div>
      <Hero printing="Sticker Printing" image={heroImg} />
      <div className="px-[20px] md:px-[30px] xl:px-[55px] py-5">
        <Heading heading="Sticker Printing" />
        <div className=" gap-6 xl:gap-10 grid grid-cols-1 md:grid-cols-2">
          <div className="image rounded p-4 bg-white shadow-xl">
            <img src={img} alt="image" className="w-full rounded" />
          </div>
          <div className="content rounded p-4 bg-white shadow-xl space-y-5 md:space-y-6 xl:space-y-10">
            <div className="name bg-blue-700 rounded-xl p-3 sm:p-4 text-xl sm:text-2xl font-bold">
              <h1 className="bg-white p-3 text-gray-800 rounded-t-2xl">
                Product Name
              </h1>
              <p className="text-white p-3">Sticker Printing</p>
            </div>
            <div className="name bg-blue-700 rounded-xl p-3 sm:p-4 text-xl sm:text-2xl font-bold">
              <h1 className="bg-white p-3 text-gray-800 rounded-t-2xl">
                Product Price
              </h1>
              <p className="text-white p-3">Rs 11,000</p>
            </div>
            <div className="name bg-blue-700 text-white space-x-3 cursor-pointer hover:bg-blue-800 flex items-center justify-center rounded-xl py-6 sm:py-9 md:py-10 xl:py-13 text-xl sm:text-2xl font-bold">
              <span className="icon">
                <FaCartPlus />
              </span>
              <button className="">ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className="description py-5">
          <nav>
            <div className="border border-gray-300">
              <ul className="flex flex-col sm:flex-row sm:items-center text-xl font-semibold border-b border-gray-300">
                <li
                  className={`${
                    description
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "text-blue-700 hover:text-blue-800"
                  }  cursor-pointer py-2 px-5 border-b sm:border-b-0 sm:border-r border-gray-300`}
                  onClick={() => {
                    setDescription(true), setBrand(false), setReview(false);
                  }}
                >
                  Description
                </li>
                <li
                  className={`${
                    brand
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "text-blue-700 hover:text-blue-800"
                  }  cursor-pointer py-2 px-5 border-b sm:border-b-0 sm:border-r border-gray-300`}
                  onClick={() => {
                    setDescription(false), setBrand(true), setReview(false);
                  }}
                >
                  Brand
                </li>
                <li
                  className={`${
                    review
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "text-blue-700 hover:text-blue-800"
                  }  cursor-pointer py-2 px-5 sm:border-r border-gray-300`}
                  onClick={() => {
                    setDescription(false), setBrand(false), setReview(true);
                  }}
                >
                  Reviews(0)
                </li>
              </ul>

              <div className="p-5">
                {description && <Description />}
                {brand && <Brand />}
                {review && <Review />}
              </div>
            </div>

            <div className="pt-10">
              <div className="space-y-5">
                <h1 className="bg-blue-700 text-white p-3 text-center rounded text-xl sm:text-2xl font-semibold">
                  COMPLETED PROJECTS
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 bg-gray-300 p-5 rounded">
                  <div className="img border border-gray-400 rounded p-4">
                    <img src={img} alt="" className="w-full" />
                  </div>
                  <div className="img border border-gray-400 rounded p-4">
                    <img src={img} alt="" className="w-full" />
                  </div>
                  <div className="img border border-gray-400 rounded p-4">
                    <img src={img} alt="" className="w-full" />
                  </div>
                  <div className="img border border-gray-400 rounded p-4">
                    <img src={img} alt="" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
