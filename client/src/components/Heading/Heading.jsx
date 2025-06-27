// import React from "react";

// const Heading = ({ heading }) => {
//   return (
//     <div className="my-5">
//       <div className="font-['Playfair_Display'] bg-gray-300 flex items-center justify-center px-2 py-2 md:py-4 border-2 border-dashed rounded text-center text-xl sm:text-3xl md:text-4xl xl:text-5xl">
//         <h1 className="font-bold">{heading}</h1>
//       </div>
//     </div>
//   );
// };

// export default Heading;
// ======================================================================================

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heading = ({ heading }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="my-5"
    >
      <div className="font-['Playfair_Display'] bg-gray-300 flex items-center justify-center px-2 py-2 md:py-4 border-2 border-dashed rounded text-center text-xl sm:text-3xl md:text-4xl xl:text-5xl">
        <h1 className="font-bold">{heading}</h1>
      </div>
    </motion.div>
  );
};

export default Heading;
