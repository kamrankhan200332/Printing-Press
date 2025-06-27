import React from "react";

const TextInput = (props) => {
  return (
    <div className="flex items-center flex-col w-full">
      <input
        {...props}
        className="py-[10px] px-[20px] outline-none w-full border border-gray-400 rounded text-xl m-[3px]"
      />
      {props.error && (
        <p className="text-[#de1b55] text-left w-full">{props.errormessage}</p>
      )}
    </div>
  );
};

export default TextInput;
