import React from "react";
import { Outlet } from "react-router-dom";
import ChatContent from "../components/layout/ChatContent";
import ChatList from "../components/layout/ChatList";
import ChatNavBar from "../components/layout/ChatNavBar";

const ChatRoom = () => {
  return (
    <div className="flex w-screen h-screen">
      <ChatNavBar></ChatNavBar>
      <ChatList>
        <Outlet></Outlet>
      </ChatList>
      <ChatContent></ChatContent>
    </div>
  );
};

export default ChatRoom;
