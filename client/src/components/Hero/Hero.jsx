// import React from "react";
// import heroImage from "../../assets/images/printing.jpg";
// import { IoLogoWhatsapp } from "react-icons/io5";
// import { IoSearchOutline } from "react-icons/io5";

// import { motion } from "motion/react";

// const Hero = ({ printing, image }) => {
//   return (
//     <div className="font-['Playfair_Display']">
//       <div
//         className="hero relative bg-cover bg-center py-10 md:py-13 xl:py-20"
//         style={{
//           backgroundImage: `url("${image}")`,
//           width: "100%",
//         }}
//       >
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.7)", // 50% black overlay
//           }}
//         />
//         <div className="relative flex flex-col items-center justify-center gap-5 md:gap-7  xl:gap-10 z-10 h-full">
//           <h1 className="text-white text-center font-bold px-6 text-3xl md:text-4xl xl:text-5xl">
//             {printing}
//           </h1>
//           <motion.p
//             // drag
//             // whileDrag={{scale: 0.8}}
//             animate={{ x: 100 }}
//             transition={{ duration: 1, delay: 1, ease: "anticipate" }}
//             className="text-white text-2xl md:text-3xl xl:text-4xl px-6 font-bold text-center"
//           >
//             Islamabad Printing Press
//           </motion.p>
//           <a
//             href="https://wa.me/923262147743"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white sm:text-[18px] md:text-xl xl:text-2xl font-bold flex items-center gap-1 md:gap-2 border-2 p-2 md:p-3 rounded bg-green-500 cursor-pointer"
//           >
//             <span className="icon">
//               <IoLogoWhatsapp />
//             </span>
//             <p>+92 3262147743</p>
//           </a>

//           <div className="bg-white w-[70%] md:w-[50%] px-6 hidden sm:block font-semibold p-3 rounded-xl">
//             <div className="flex items-center rounded-full py-3 px-6 space-x-2 text-[18px] bg-gray-300">
//               <div className="icon">
//                 <IoSearchOutline />
//               </div>
//               <input type="text" placeholder="Search for products..." />
//             </div>
//           </div>
//         </div>
//       </div>

//       <motion.div
//         drag
//         whileDrag={{ scale: 0.8 }}
//         dragConstraints={{ left: 10,bottom: 0, right: 1, top: 0 }}
//         className="btn fixed right-5.5 md:right-8 bottom-4 z-50"
//       >
//         <a
//           href="https://wa.me/923262147743"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white text-3xl sm:text-[18px] md:text-xl font-semibold flex items-center gap-2 border-2 px-1 sm:px-3 py-1 sm:py-2 rounded-full bg-green-500 cursor-pointer"
//         >
//           <span className="icon">
//             <IoLogoWhatsapp />
//           </span>
//           <div className="hidden sm:block">
//             <p className="text-center">How may I help you?</p>
//           </div>
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;
// ===================================================================================

import React, { useRef, useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Hero = ({ printing, image }) => {
  const btnRef = useRef(null);
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const navbarHeight = 80; // adjust if your navbar is taller

  useEffect(() => {
    const updateConstraints = () => {
      const btn = btnRef.current;
      if (btn) {
        const btnRect = btn.getBoundingClientRect();
        const padding = 10;

        setConstraints({
          top: navbarHeight - btnRect.top + padding,
          left: -btnRect.left + padding,
          right: window.innerWidth - btnRect.right - padding,
          bottom: window.innerHeight - btnRect.bottom - padding,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="font-['Playfair_Display']"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero relative bg-cover bg-center py-10 md:py-13 xl:py-20"
        style={{
          backgroundImage: `url("${image}")`,
          width: "100%",
        }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor: "rgba(0, 0, 0, 1)",
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="relative flex flex-col items-center justify-center gap-5 md:gap-7 xl:gap-10 z-10 h-full"
        >
          <motion.h1
            variants={{
              hidden: { y: -50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 1 }}
            className="text-white text-center font-bold px-6 text-3xl md:text-4xl xl:text-5xl"
          >
            {printing}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            className="text-white text-2xl md:text-3xl xl:text-4xl px-6 font-bold text-center"
          >
            Islamabad Printing Press
          </motion.p>

          <motion.a
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            transition={{
              duration: 1.1,
              type: "spring",
              bounce: 0.4,
            }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/923262147743"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white sm:text-[18px] md:text-xl xl:text-2xl font-bold flex items-center gap-1 md:gap-2 border-2 p-2 md:p-3 rounded bg-green-500 cursor-pointer"
          >
            <span className="icon">
              <IoLogoWhatsapp />
            </span>
            <p>+92 3262147743</p>
          </motion.a>

          <motion.div
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 1.2 }}
            className="bg-white w-[70%] md:w-[50%] px-6 hidden sm:block font-semibold p-3 rounded-xl"
          >
            <div className="flex items-center rounded-full py-3 px-6 space-x-2 text-[18px] bg-gray-300">
              <div className="icon">
                <IoSearchOutline />
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-gray-300 outline-none w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ✅ Draggable WhatsApp Button - avoids navbar */}
      <motion.div
        ref={btnRef}
        drag
        whileDrag={{ scale: 0.9 }}
        dragConstraints={constraints}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="btn fixed right-5.5 md:right-8 bottom-4 z-50"
      >
        <a
          href="https://wa.me/923262147743"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-[18px] md:text-xl font-semibold flex items-center gap-2 border-2 px-1 sm:px-3 py-1 sm:py-2 rounded-full bg-green-500 cursor-pointer"
        >
          <span className="icon">
            <IoLogoWhatsapp />
          </span>
          <div className="hidden sm:block">
            <p className="text-center">How may I help you?</p>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
