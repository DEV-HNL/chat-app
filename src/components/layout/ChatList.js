import React from "react";

const ChatList = () => {
  return (
    <div className="w-[350px] h-full p-3 border-r border-gray-200">
      <div className="flex items-center ">
        <h2 className="text-3xl font-bold flex-1">Chat</h2>
        <div className="flex justify-center items-center bg-gray-100 w-3 h-3 p-5 rounded-full">
          <i className="fa-solid fa-pen-to-square text-xl "></i>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search name your fiends"
          className="p-3 outline-none border border-gray-200 w-full rounded-2xl my-3"
        />
        <i className="fa-solid fa-magnifying-glass absolute top-[50%]  right-3 translate-y-[-50%]"></i>
      </div>
    </div>
  );
};

export default ChatList;
