import React, { useState } from "react";

const Button = ({ name }) => {
  
  return (
    <div className=" sticky whitespace-nowrap">
      <button
        className="px-4 py-1  m-3 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-lg font-[600]"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
