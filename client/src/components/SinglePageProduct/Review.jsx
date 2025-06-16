import React from "react";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="space-y-3 sm:space-y-5 ">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Reviews</h1>
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
    </div>
  );
};

export default Review;
