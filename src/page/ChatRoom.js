import React from "react";
import ChatContent from "../components/layout/ChatContent";
import ChatInfo from "../components/layout/ChatInfo";
import ChatList from "../components/layout/ChatList";
import ChatNavBar from "../components/layout/ChatNavBar";

const ChatRoom = () => {
  return (
    <div className="flex w-screen h-screen">
      <ChatNavBar></ChatNavBar>
      <ChatList></ChatList>
      <ChatContent></ChatContent>
      <ChatInfo></ChatInfo>
    </div>
  );
};

export default ChatRoom;
