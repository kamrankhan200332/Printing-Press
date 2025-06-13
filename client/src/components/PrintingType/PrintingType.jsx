import React from "react";
import { ProdState } from "../../context/contextApi";
import img from "../../assets/images/sublimation.webp";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

const PrintingType = () => {
  const {
    state: { prod },
    dispatch,
  } = ProdState();
  console.log(prod);

  return (
    <div className="grid grid-cols-3 gap-10">
      {prod.map((cat, index) => (
        <div
          key={index}
          className="w-[380px] rounded-2xl shadow-xl border border-gray-300 bg-white pb-10"
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
  );
};

export default PrintingType;
