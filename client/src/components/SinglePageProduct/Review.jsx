// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Review = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="space-y-3 sm:space-y-5 ">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Reviews</h1>
//         <div>
//           <p>There are no reviews yet.</p>
//           <p>Be the first to review “Sticker Printing”</p>
//           <p>
//             You must be{" "}
//             <span
//               className="text-blue-600 cursor-pointer"
//               onClick={() => navigate("/login")}
//             >
//               logged in
//             </span>{" "}
//             to post a review.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Review = () => {
  const navigate = useNavigate();

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn}>
      <div className="space-y-3 sm:space-y-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">
          Reviews
        </h1>
        <div>
          <p>There are no reviews yet.</p>
          <p>Be the first to review “Sticker Printing”</p>
          <p>
            You must be{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              logged in
            </span>{" "}
            to post a review.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Review;
