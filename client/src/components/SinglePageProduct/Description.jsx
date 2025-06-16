import React from "react";

const Description = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold text-center">
          Sticker Printing in Rawalpindi & Islamabad.
        </h1>
        <p className="text-justify md:text-center">
          Sticker Printing Service Online in Pakistan, Wholesale Die Cut Sticker
          Printing Provider Online in Islamabad Pakistan and Rawalpindi, Digital
          Sticker Printing With Lamination Available With Us. Order Now Online
          From All Over Pakistan and Get Your Sticker Printing Ready in 48
          Hours. Home Delivery Option Also Available For Karachi, Lahore &
          Peshawar PK.
        </p>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl text-gray-700 font-semibold text-center">
          Sticker Printing Price in Pakistan
        </h1>
        <p className="text-center">
          We Offer High Quality Sticker Printing at Lowest Rates and Cheapest
          Prices in Market.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-center">
          <div className="h-[5px] w-[40%] sm:w-[30%] md:w-[20%] bg-gray-400 rounded-full"></div>
        </div>

        <div className="overflow-x-auto p-1 bg-blue-600">
          <table className="min-w-full text-left text-gray-800">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border-r border-gray-300 px-2 sm:px-6 py-3 uppercase font-semibold">
                  S. #
                </th>
                <th className="border-r border-gray-300 px-2 sm:px-6 py-3 uppercase font-semibold">
                  Sticker Size
                </th>
                <th className="border-gray-300 px-2 sm:px-6 py-3 uppercase font-semibold">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">1</td>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">
                  2x3 Size Sticker
                </td>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">
                  3500
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">2</td>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">
                  7x10 Size Sticker
                </td>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">
                  11000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">3</td>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">
                  10x15 Size Sticker
                </td>
                <td className="border border-gray-300 px-2 sm:px-6 py-4">
                  16000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Description;
