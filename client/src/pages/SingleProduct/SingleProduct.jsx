// import React, { useState } from "react";
// import img from "../../assets/images/mug.webp";
// import Heading from "../../components/Heading/Heading";
// import { FaCartPlus } from "react-icons/fa";
// import Hero from "../../components/Hero/Hero";
// import heroImg from "../../assets/images/printing.jpg";
// import Description from "../../components/SinglePageProduct/Description";
// import Brand from "../../components/SinglePageProduct/Brand";
// import Review from "../../components/SinglePageProduct/Review";
// import { useLocation } from "react-router-dom";
// import { ProdState } from "../../context/ContextApi";

// const SingleProduct = () => {
//   const location = useLocation();
//   const {id, title, price, img } = location.state;

//   const [description, setDescription] = useState(true);
//   const [brand, setBrand] = useState(false);
//   const [review, setReview] = useState(false);

//   const {
//     state: { cart },
//     dispatch,
//   } = ProdState();
//   return (
//     <div>
//       <Hero printing={title} image={heroImg} />
//       <div className="px-[20px] md:px-[30px] xl:px-[55px] py-5">
//         <Heading heading={title} />
//         <div className=" gap-6 xl:gap-10 grid grid-cols-1 md:grid-cols-2">
//           <div className="image rounded p-4 bg-white shadow-xl">
//             <img src={img} alt="image" className="w-full rounded" />
//           </div>
//           <div className="content rounded p-4 bg-white shadow-xl space-y-5 md:space-y-6 xl:space-y-10">
//             <div className="name bg-blue-700 rounded-xl p-3 sm:p-4 text-xl sm:text-2xl font-bold">
//               <h1 className="bg-white p-3 text-gray-800 rounded-t-2xl">
//                 Product Name
//               </h1>
//               <p className="text-white p-3">{title}</p>
//             </div>
//             <div className="name bg-blue-700 rounded-xl p-3 sm:p-4 text-xl sm:text-2xl font-bold">
//               <h1 className="bg-white p-3 text-gray-800 rounded-t-2xl">
//                 Product Price
//               </h1>
//               <p className="text-white p-3">Rs. {price}</p>
//             </div>
//             <div className="w-full">
//               {cart.some((p) => p.id === id) ? (
//                 <div
//                   className="bg-red-700 text-white space-x-3 cursor-pointer hover:bg-red-800 flex items-center justify-center rounded-xl py-6 sm:py-9 md:py-10 xl:py-13 text-xl sm:text-2xl font-bold"
//                   onClick={() =>
//                     dispatch({
//                       type: "REMOVE_FROM_CART",
//                       payload: { id, title, price, img },
//                     })
//                   }
//                 >
//                   <span className="icon">
//                     <FaCartPlus />
//                   </span>
//                   <span>REMOVE FROM CART</span>
//                 </div>
//               ) : (
//                 <div
//                   className="bg-blue-700 text-white space-x-3 cursor-pointer hover:bg-blue-800 flex items-center justify-center rounded-xl py-6 sm:py-9 md:py-10 xl:py-13 text-xl sm:text-2xl font-bold"
//                   onClick={() =>
//                     dispatch({
//                       type: "ADD_TO_CART",
//                       payload: { id, title, price, img },
//                     })
//                   }
//                 >
//                   <span className="icon">
//                     <FaCartPlus />
//                   </span>
//                   <span>ADD TO CART</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="description py-5">
//           <nav>
//             <div className="border border-gray-300">
//               <ul className="flex flex-col sm:flex-row sm:items-center text-xl font-semibold border-b border-gray-300">
//                 <li
//                   className={`${
//                     description
//                       ? "bg-blue-700 text-white hover:bg-blue-800"
//                       : "text-blue-700 hover:text-blue-800"
//                   }  cursor-pointer py-2 px-5 border-b sm:border-b-0 sm:border-r border-gray-300`}
//                   onClick={() => {
//                     setDescription(true), setBrand(false), setReview(false);
//                   }}
//                 >
//                   Description
//                 </li>
//                 <li
//                   className={`${
//                     brand
//                       ? "bg-blue-700 text-white hover:bg-blue-800"
//                       : "text-blue-700 hover:text-blue-800"
//                   }  cursor-pointer py-2 px-5 border-b sm:border-b-0 sm:border-r border-gray-300`}
//                   onClick={() => {
//                     setDescription(false), setBrand(true), setReview(false);
//                   }}
//                 >
//                   Brand
//                 </li>
//                 <li
//                   className={`${
//                     review
//                       ? "bg-blue-700 text-white hover:bg-blue-800"
//                       : "text-blue-700 hover:text-blue-800"
//                   }  cursor-pointer py-2 px-5 sm:border-r border-gray-300`}
//                   onClick={() => {
//                     setDescription(false), setBrand(false), setReview(true);
//                   }}
//                 >
//                   Reviews(0)
//                 </li>
//               </ul>

//               <div className="p-5">
//                 {description && <Description />}
//                 {brand && <Brand />}
//                 {review && <Review />}
//               </div>
//             </div>

//             <div className="pt-10">
//               <div className="space-y-5">
//                 <h1 className="bg-blue-700 text-white p-3 text-center rounded text-xl sm:text-2xl font-semibold">
//                   COMPLETED PROJECTS
//                 </h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 bg-gray-300 p-5 rounded">
//                   <div className="img border border-gray-400 rounded p-4">
//                     <img src={img} alt="" className="w-full" />
//                   </div>
//                   <div className="img border border-gray-400 rounded p-4">
//                     <img src={img} alt="" className="w-full" />
//                   </div>
//                   <div className="img border border-gray-400 rounded p-4">
//                     <img src={img} alt="" className="w-full" />
//                   </div>
//                   <div className="img border border-gray-400 rounded p-4">
//                     <img src={img} alt="" className="w-full" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useState, useEffect } from "react";
import img from "../../assets/images/mug.webp";
import Heading from "../../components/Heading/Heading";
import { FaCartPlus } from "react-icons/fa";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/images/printing.jpg";
import Description from "../../components/SinglePageProduct/Description";
import Brand from "../../components/SinglePageProduct/Brand";
import Review from "../../components/SinglePageProduct/Review";
import { useLocation } from "react-router-dom";
import { ProdState } from "../../context/ContextApi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SingleProduct = () => {
  const location = useLocation();
  const { id, title, price, img: productImg } = location.state;

  const [description, setDescription] = useState(true);
  const [brand, setBrand] = useState(false);
  const [review, setReview] = useState(false);

  const {
    state: { cart },
    dispatch,
  } = ProdState();

  const completedProjects = [img, img, img, img];

  const imageControls = useAnimation();
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contentControls = useAnimation();
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const completedControls = useAnimation();
  const [completedRef, completedInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (imageInView) imageControls.start("visible");
    if (contentInView) contentControls.start("visible");
    if (completedInView) completedControls.start("visible");
  }, [imageInView, contentInView, completedInView]);

  const contentChildVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.3 },
    }),
  };

  return (
    <div>
      <Hero printing={title} image={heroImg} />
      <div className="px-[20px] md:px-[30px] xl:px-[55px] py-5">
        <Heading heading={title} />

        <div className="gap-6 xl:gap-10 grid grid-cols-1 md:grid-cols-2">
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageControls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="image rounded p-4 bg-white shadow-xl"
          >
            <img src={productImg} alt="image" className="w-full rounded" />
          </motion.div>

          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentControls}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.3,
                },
              },
            }}
            className="content rounded p-4 bg-white shadow-xl space-y-5 md:space-y-6 xl:space-y-10"
          >
            {[0, 1, 2].map((i) => (
              <motion.div key={i} custom={i} variants={contentChildVariants}>
                {i === 0 && (
                  <div className="name bg-blue-700 rounded-xl p-3 sm:p-4 text-xl sm:text-2xl font-bold">
                    <h1 className="bg-white p-3 text-gray-800 rounded-t-2xl">
                      Product Name
                    </h1>
                    <p className="text-white p-3">{title}</p>
                  </div>
                )}
                {i === 1 && (
                  <div className="name bg-blue-700 rounded-xl p-3 sm:p-4 text-xl sm:text-2xl font-bold">
                    <h1 className="bg-white p-3 text-gray-800 rounded-t-2xl">
                      Product Price
                    </h1>
                    <p className="text-white p-3">Rs. {price}</p>
                  </div>
                )}
                {i === 2 && (
                  <div className="w-full">
                    {cart.some((p) => p.id === id) ? (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-700 text-white space-x-3 cursor-pointer hover:bg-red-800 flex items-center justify-center rounded-xl py-6 sm:py-9 md:py-10 xl:py-13 text-xl sm:text-2xl font-bold"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: { id, title, price, img: productImg },
                          })
                        }
                      >
                        <FaCartPlus />
                        <span>REMOVE FROM CART</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-700 text-white space-x-3 cursor-pointer hover:bg-blue-800 flex items-center justify-center rounded-xl py-6 sm:py-9 md:py-10 xl:py-13 text-xl sm:text-2xl font-bold"
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: { id, title, price, img: productImg },
                          })
                        }
                      >
                        <FaCartPlus />
                        <span>ADD TO CART</span>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
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
                  } cursor-pointer py-2 px-5 border-b sm:border-b-0 sm:border-r border-gray-300`}
                  onClick={() => {
                    setDescription(true);
                    setBrand(false);
                    setReview(false);
                  }}
                >
                  Description
                </li>
                <li
                  className={`${
                    brand
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "text-blue-700 hover:text-blue-800"
                  } cursor-pointer py-2 px-5 border-b sm:border-b-0 sm:border-r border-gray-300`}
                  onClick={() => {
                    setDescription(false);
                    setBrand(true);
                    setReview(false);
                  }}
                >
                  Brand
                </li>
                <li
                  className={`${
                    review
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "text-blue-700 hover:text-blue-800"
                  } cursor-pointer py-2 px-5 sm:border-r border-gray-300`}
                  onClick={() => {
                    setDescription(false);
                    setBrand(false);
                    setReview(true);
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

            <motion.div
              ref={completedRef}
              initial="hidden"
              animate={completedControls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
              className="pt-10"
            >
              <div className="space-y-5">
                <h1 className="bg-blue-700 text-white p-3 text-center rounded text-xl sm:text-2xl font-semibold">
                  COMPLETED PROJECTS
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 bg-gray-300 p-5 rounded">
                  {completedProjects.map((image, index) => {
                    const controls = useAnimation();
                    const [ref, inView] = useInView({
                      triggerOnce: true,
                      threshold: 0.2,
                    });

                    useEffect(() => {
                      if (inView) controls.start("visible");
                    }, [inView, controls]);

                    return (
                      <motion.div
                        key={index}
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, delay: index * 0.2 },
                          },
                        }}
                        className="img border border-gray-400 rounded p-4 shadow-lg bg-white"
                      >
                        <img
                          src={image}
                          alt={`completed-${index}`}
                          className="w-full rounded"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;


