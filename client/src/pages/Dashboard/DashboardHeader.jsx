import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between bg-gray-300 rounded py-2 px-3">
      <div className="flex items-center space-x-4">
        <div className="icon">icon</div>
        <h1>Dashboard</h1>
      </div>
      <div className="flex items-center space-x-3">
        <div className="input">
          <input
            type="text"
            placeholder="Type here..."
            className="border border-gray-400 rounded py-2 px-3"
          />
        </div>
        <div>ONLINE BUILDER</div>
        <div className="flex items-center ">
          <div>
            <span className="icon">icon</span>
            <span>Star</span>
          </div>
          <div>11,021</div>
        </div>
      </div>

      <div className="account flex items-center space-x-3">
        <span className="sitting">icon</span>
        <span className="notification">icon</span>
        <div>
          <span className="user">icon</span>
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
