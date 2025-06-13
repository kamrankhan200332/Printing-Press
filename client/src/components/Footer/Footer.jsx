import React from "react";
import footerImage from "../../assets/images/FOOTER_PAK.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const accordion = [
    {
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
          <dir className="h-[5px] w-[210px] bg-yellow-600"></dir>
        </div>

        <div className="mid text-white grid grid-cols-2">
          <div className="left">
            {accordion.map((accord) => (
              <div>
                <h1 className="bg-yellow-500 px-4 py-3">{accord.heading}</h1>
                <ul>
                  <li className="space-x-3 bg-white text-black px-4 py-3">
                    {accord.subCategories?.map((subCategory) => (
                      <Link to={subCategory.url} className="">
                        <span className="text-red-700">◉</span>{" "}
                        {subCategory.subCat}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="right">kami</div>
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
