import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="my-5">
      <div className="bg-gray-300 flex items-center justify-center px-2 py-2 md:py-4 border-2 border-dashed rounded text-center text-xl sm:text-3xl md:text-4xl xl:text-5xl">
        <h1 className="font-bold">{heading}</h1>
      </div>
    </div>
  );
};

export default Heading;
