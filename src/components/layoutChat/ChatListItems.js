import { collection, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase/config";
import UserList from "../user/UserList";
import { Authcontext } from "../../contexts/AuthProvider";

const ChatListItems = () => {
  const { displayName } = useContext(Authcontext);

  const [dataChat, setDataChat] = useState([]);
  useEffect(() => {
    const docRef = collection(db, "messenger");
    const snap = onSnapshot(docRef, (doc) => {
      setDataChat(doc.docs);
    });
    return () => {
      snap();
    };
  }, []);
  return (
    <>
      <div className="flex items-center px-3">
        <h2 className="text-3xl font-bold flex-1">Chat</h2>
        <div className="flex justify-center items-center bg-gray-100 w-3 h-3 p-5 rounded-full">
          <i className="fa-solid fa-pen-to-square text-xl "></i>
        </div>
      </div>
      <div className="relative px-3">
        <input
          type="text"
          placeholder="Search name your fiends"
          className="p-3 outline-none border border-gray-200 w-full rounded-2xl my-3 focus:border-blue-500"
        />
        <i className="fa-solid fa-magnifying-glass absolute top-[50%]  right-6 translate-y-[-50%]"></i>
      </div>
      <div className="w-full h-fulloverflow-y-auto">
        {dataChat &&
          dataChat.map((items) => {
            if (
              items.data().preson1 === displayName ||
              items.data().preson2 === displayName
            ) {
              return (
                <UserList
                  key={items.id}
                  items={items?.data()}
                  idChat={items?.id}
                ></UserList>
              );
            }
            return null;
          })}
      </div>
    </>
  );
};

export default ChatListItems;
