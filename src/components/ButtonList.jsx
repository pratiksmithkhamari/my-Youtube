import React, { useState } from "react";
import Button from "./Button";

const ButtonList = () => {
  const lists = [
    "All",
    "Cricket",
    "Gaming",
    "Cooking",
    "Song",
    "Dance",
    "Live",
    "News",
    "science",
    "frontend delelopment",
  ];
  return (
    <div className="flex m-4 ">
      {lists.map((value, index) => (
        <Button key={index} name={value} />
      ))}
    </div>
  );
};

export default ButtonList;
