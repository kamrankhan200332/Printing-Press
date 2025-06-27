import React from "react";

import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { ProdState } from "../../context/ContextApi";
import img1 from "../../assets/images/aliAhmad.jpg";
import img2 from "../../assets/images/kami.jpg";
import img3 from "../../assets/images/ceo.jpg";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import heroImg from "../../assets/images/printing.jpg";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Home = () => {
  const {
    state: { prod, card },
  } = ProdState();
  return (
    <div className="font-['Playfair_Display']">
      <div>
        <Hero printing="Printing Shop Online in Pakistan" image={heroImg} />
      </div>

      <div className="">
        <div className="px-[20px] md:px-[30px] xl:px-[55px] py-5 bg-gray-100">
          <Heading heading="ONLINE PRINTING STORE" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 w-full">
            {prod.map((cat, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-full rounded-2xl shadow-xl border border-gray-300 bg-white pb-10"
                >
                  <div className="image rounded-2xl">
                    <img src={cat.img} className="w-full rounded-2xl" alt="" />
                  </div>
                  <h1 className="text-center font-semibold text-xl py-3 mb-3 bg-blue-700 text-white">
                    {cat.heading}
                  </h1>
                  <ul className="">
                    {cat.subCategories?.map((subCategory, i) => (
                      <li
                        key={i}
                        className={`flex items-center space-x-2 ${
                          i % 2 === 0 ? "bg-gray-200" : "bg-white"
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
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="px-[20px] md:px-[30px] xl:px-[55px]">
            <Heading heading="NEW PRODUCTS" />
          </div>
          <Card />
        </div>

        <div className="px-[20px] md:px-[30px] xl:px-[55px] py-5">
          <Heading heading="OUR TEAM MEMBERS" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 w-full bg-gray-200 p-3 sm:p-5 md:p-7 xl:p-10">
            {[
              {
                img: img1,
                name: "Prof Dr. Ali Ahmad",
                role: "CEO",
              },
              {
                img: img2,
                name: "Kamran Khan",
                role: "Web Developer",
              },
              {
                img: img3,
                name: "Rasool Khan",
                role: "Graphic Designer",
              },
            ].map((member, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-[100%] p-2 sm:p-4 md:p-4 xl:p-5 rounded shadow-2xl space-y-2"
                >
                  <div className="image w-full">
                    <img
                      src={member.img}
                      className="rounded-full w-full"
                      alt={member.name}
                    />
                  </div>
                  <h1 className="text-center font-semibold text-xl">
                    {member.name}
                  </h1>
                  <p className="text-center font-bold text-xl text-blue-600">
                    {member.role}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
