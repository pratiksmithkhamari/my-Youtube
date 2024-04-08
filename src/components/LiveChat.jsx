import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/messageSlice";
import store from "../utils/store";
import { generateRandomName, makeRandomMessage } from "../utils/randomData";
import { IoSendSharp } from "react-icons/io5";

const LiveChat = () => {
  const [chat, setChat] = useState("");

  const dispatch = useDispatch();
  const displayMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const time = setInterval(() => {
      //   console.log("api called");
      //api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(24),
        })
      );
    }, 2000);
    return () => clearInterval(time);
  }, []);

  return (
    <>
      <div className="mx-4 mt-4 border border-black w-9/12 h-[400px] overflow-y-scroll flex flex-col-reverse rounded-lg p-2">
        <h1 className="border border-b-black">Live Chat</h1>
        {displayMessage.map((mes, ind) => {
          return (
            <ChatMessage name={mes.name} message={mes.message} key={ind} />
          );
        })}
      </div>
      <form
        className="w-9/12 bg-slate-200 ml-4 border border-black p-2 rounded-b-lg flex items-center gap-7"
        onSubmit={(e) => {
          e.preventDefault();
          setChat("");
          dispatch(
            addMessage({
              name: "Pratik",
              message: chat,
            })
          );
        }}
      >
        <input
          type="text"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          className="border w-9/12 rounded-md p-1 ml-2 border-b-black"
        />

        <button>
          <IoSendSharp className="text-2xl text-slate-700" />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
