import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-center flex-col py-8 sm:py-10 md:py-15 xl:py-20  gap-5">
        <h1 className=" text-gray-700 text-center font-bold px-6 text-3xl md:text-4xl xl:text-5xl">
          🚫 404 - Page Not Found
        </h1>
        <p className="text-gray-700 font-semibold text-xl md:text-2xl px-6 text-center">
          <span className="font-bold">Oops!</span> The page you're looking for
          doesn't exist or has been moved.
        </p>
        <div>
          <button className="bg-blue-700 text-white hover:bg-blue-800 rounded cursor-pointer py-2 px-4 font-bold text-xl" onClick={() => navigate("/")}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
