// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Error = () => {
//     const navigate = useNavigate();
//   return (
//     <div>
//       <div className="flex items-center justify-center flex-col py-8 sm:py-10 md:py-15 xl:py-20  gap-5">
//         <h1 className=" text-gray-700k text-[#ea3943] text-center font-bold px-6 text-3xl md:text-4xl xl:text-5xl">
//           🚫 404 - Page Not Found
//         </h1>
//         <p className="text-gray-700 font-semibold text-xl md:text-2xl px-6 text-center">
//           <span className="font-bold">Oops!</span> The page you're looking for
//           doesn't exist or has been moved.
//         </p>
//         <div>
//           <button className="bg-blue-700 text-white hover:bg-blue-800 rounded cursor-pointer py-2 px-4 font-bold text-xl" onClick={() => navigate("/")}>
//             Go to Home
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Error;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Error = () => {
  const navigate = useNavigate();

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="flex items-center justify-center flex-col py-8 sm:py-10 md:py-15 xl:py-20 gap-5">
        <motion.h1
          variants={variants}
          className="text-[#ea3943] text-center font-bold px-6 text-3xl md:text-4xl xl:text-5xl"
        >
          🚫 404 - Page Not Found
        </motion.h1>

        <motion.p
          variants={variants}
          className="text-gray-700 font-semibold text-xl md:text-2xl px-6 text-center"
        >
          <span className="font-bold">Oops!</span> The page you're looking for
          doesn't exist or has been moved.
        </motion.p>

        <motion.div variants={variants}>
          <button
            className="bg-blue-700 text-white hover:bg-blue-800 rounded cursor-pointer py-2 px-4 font-bold text-xl"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Error;
