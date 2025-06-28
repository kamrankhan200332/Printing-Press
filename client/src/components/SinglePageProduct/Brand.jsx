// import React from "react";
// import brandImg from "../../assets/images/brand.png";

// const Brand = () => {
//   return (
//     <div>
//       <div className="space-y-1">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Brand</h1>
//         <p className="text-xl font-bold text-gray-700">
//           Printing Press Online
//         </p>
//         <p>
//           Printing Press in Rawalpindi Provides Online Printing Services in
//           Pakistan
//         </p>
//         <div className="img">
//           <img src={brandImg} alt="brandImage" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brand;



import React, { useEffect } from "react";
import brandImg from "../../assets/images/brand.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Brand = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Brand</h1>
        <p className="text-xl font-bold text-gray-700">Printing Press Online</p>
        <p>
          Printing Press in Rawalpindi Provides Online Printing Services in
          Pakistan
        </p>
        <div className="img">
          <img src={brandImg} alt="brandImage" />
        </div>
      </div>
    </motion.div>
  );
};

export default Brand;
