import React from "react";

const Heading = ({ store, newProduct, teamMember }) => {
  return (
    <div className="my-5">
      <div className="bg-gray-300 flex items-center justify-center py-4 text-5xl border-2 border-dashed rounded">
        <h1 className="font-bold">
          {store} {newProduct} {teamMember}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
