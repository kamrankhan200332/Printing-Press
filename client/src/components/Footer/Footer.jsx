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
    <div className="px-[30px] md:px-[40px] xl:px-[70px] pt-8 bg-black">
      <div className="space-y-10">
        <div className="head space-y-5 flex flex-col items-center">
          <h1 className="text-yellow-600 text-xl md:text-xl xl:text-2xl font-bold text-center">
            ONLINE PRINTING PRESS IN PAKISTAN
          </h1>
          <p className=" text-3xl md:text-4xl xl:text-5xl font-bold text-center text-white">
            ISLAMABAD PRINTING PRESS
          </p>
          <div className="h-[5px] w-[40%] sm:w-[30%] md:w-[20%] bg-yellow-600"></div>
        </div>

        <div className="mid gap-6 xl:gap-10 text-white grid grid-cols-1 md:grid-cols-2">
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
          <div className="right border h-fit flex justify-center items-center text-gray-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0433093128116!2d73.0478828758237!3d33.684422739269494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df954b4ef4f4e1%3A0xc3dc5a1a7e1eab4!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718374712190!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Islamabad Location"
            ></iframe>
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
