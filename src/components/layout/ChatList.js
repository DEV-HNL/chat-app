import React from "react";
const ChatList = ({ children }) => {
  // console.log(useData);
  return (
    <div className="w-[350px] h-full p-3 border-r border-gray-200 overflow-hidden flex flex-col">
      {children}
    </div>
  );
};

export default ChatList;
