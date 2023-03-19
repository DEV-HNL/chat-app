import React from "react";

const ChatContent = () => {
  return (
    <div className="relative h-screen flex-1 border-r overflow-hidden border-gray-200">
      <div className=" flex items-centerw-full border-b border-gray-200 p-3">
        <div className="w-full h-9 flex gap-3 items-center font-semibold">
          <img
            src="https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png"
            alt=""
            className=" w-9 h-9 object-cover rounded-full"
          />
          <span>Chat 1</span>
        </div>
        <div className="flex gap-5 items-center text-blue-500 text-xl">
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ChatContent;
