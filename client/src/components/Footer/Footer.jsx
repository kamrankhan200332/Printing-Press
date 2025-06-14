import React, { useState } from "react";
import footerImage from "../../assets/images/FOOTER_PAK.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [show, setShow] = useState(1);

  const accordion = [
    {
      id: 1,
      heading: "SUBLIMATION PRINTING",
      subCategories: [
        {
          subCat: "Mug Printing",
          url: "/mug",
        },
        {
          subCat: "T-Shirt Printing",
          url: "/tShirt",
        },
        {
          subCat: "Cap Printing",
          url: "/cap",
        },
        {
          subCat: "Cushion Printing",
          url: "/cushion",
        },
        {
          subCat: "Tea Coaster Printing",
          url: "/teaCoaster",
        },
      ],
    },

    {
      id: 2,
      heading: "OFFSET PRINTING",
      subCategories: [
        {
          subCat: "Business Cards Printing",
          url: "/businessCard",
        },
        {
          subCat: "Letterhead Printing",
          url: "/letterhead",
        },
        {
          subCat: "Bill Book Printing",
          url: "/billBook",
        },
        {
          subCat: "Notepad Printing",
          url: "/notepad",
        },
        {
          subCat: "Brochure Printing",
          url: "/brochure",
        },
      ],
    },

    {
      id: 3,
      heading: "STATIONERY PRINTING",
      subCategories: [
        {
          subCat: "Rubber Stamp",
          url: "/rubber",
        },
        {
          subCat: "PVC Cards Printing",
          url: "/pvcCard",
        },
        {
          subCat: "Canvas Printing",
          url: "/canvas",
        },
        {
          subCat: "Round Badges",
          url: "/roundBadge",
        },
        {
          subCat: "Award Shields",
          url: "/awardShield",
        },
      ],
    },

    {
      id: 4,
      heading: "LARGE FORMAT PRINTING",
      subCategories: [
        {
          subCat: "Panaflex Printing",
          url: "/panaflex",
        },
        {
          subCat: "Signboard Makers",
          url: "/signboardMaker",
        },
        {
          subCat: "Flag Printing",
          url: "/flag",
        },
        {
          subCat: "Rollup Standee",
          url: "/rollupStandee",
        },
        {
          subCat: "One Vision Printing",
          url: "/brochure",
        },
      ],
    },

    {
      id: 5,
      heading: "EMBROIDERY PRINTING",
      subCategories: [
        {
          subCat: "Clothing Labels",
          url: "/clothingLabel",
        },
        {
          subCat: "School Badges",
          url: "/schoolBadge",
        },
        {
          subCat: "School Sash",
          url: "/schoolSash",
        },
        {
          subCat: "School Tie",
          url: "/schoolTie",
        },
        {
          subCat: "Woven Tags",
          url: "/wovenTag",
        },
      ],
    },

    {
      id: 6,
      heading: "UV PRINTING",
      subCategories: [
        {
          subCat: "Pen Printing",
          url: "/clothingLabel",
        },
        {
          subCat: "Diary Printing",
          url: "/schoolBadge",
        },
        {
          subCat: "Black Mug Printing",
          url: "/schoolSash",
        },
        {
          subCat: "Mobile Cover",
          url: "/schoolTie",
        },
        {
          subCat: "Water Bottles",
          url: "/wovenTag",
        },
      ],
    },
  ];

  const handleOpen = (id) => {
    if (show === id) {
      return setShow(null);
    }
    setShow(id);
  };
  return (
    <div className=" px-[70px] pt-8 bg-black">
      <div className="space-y-10">
        <div className="head space-y-5 flex flex-col items-center">
          <h1 className="text-yellow-600 text-xl font-bold">
            ONLINE PRINTING PRESS IN PAKISTAN
          </h1>
          <p className="text-5xl font-semibold text-white">
            ISLAMABAD PRINTING PRESS
          </p>
          <div className="h-[5px] w-[210px] bg-yellow-600"></div>
        </div>

        <div className="mid text-white grid grid-cols-2">
          <div className="left">
            {accordion.map((accord, index) => (
              <div key={index}>
                <h1 className="bg-yellow-500 px-4 py-3 flex items-center justify-between border">
                  {accord.heading}
                  <button
                    className={`cursor-pointer transition-transform duration-300 ${
                      show === accord.id ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() => handleOpen(accord.id)}
                  >
                    {show === accord.id ? "➖" : "➕"}
                  </button>
                </h1>
                <ul
                  className={`overflow-hidden transition-all ease-in-out transform duration-500 ${
                    show === accord.id ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <li
                    className={`bg-white text-black px-4 py-3 space-y-1 transition-opacity duration-500 ease-in-out ${
                      show === accord.id
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {accord.subCategories?.map((subCategory, index) => (
                      <Link
                        key={index}
                        to={subCategory.url}
                        className="flex items-center gap-1"
                      >
                        <div>
                          <span className="text-red-700">◉</span>
                        </div>
                        <div className="hover:text-blue-800">
                          {subCategory.subCat}
                        </div>
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="right flex justify-center items-center text-gray-400">
            <p>Coming Soon</p>
          </div>
        </div>

        <div className="last">
          <div className="image">
            <img src={footerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
