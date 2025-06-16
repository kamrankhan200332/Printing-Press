import React from "react";
import brandImg from "../../assets/images/brand.png";

const Brand = () => {
  return (
    <div>
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Brand</h1>
        <p className="text-xl font-bold text-gray-700">
          Printing Press Online
        </p>
        <p>
          Printing Press in Rawalpindi Provides Online Printing Services in
          Pakistan
        </p>
        <div className="img">
          <img src={brandImg} alt="brandImage" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
