import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <>
    <div className="flex items-center m-3 p-1">
      <img
        className="w-6 h-6"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt=""
      />
      <span className="text-slate-600 ml-2">{name}</span>
      <span className="ml-2">{message}</span>
    </div>
    </>
  );
};

export default ChatMessage;
