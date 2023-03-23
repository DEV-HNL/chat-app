import { async } from "@firebase/util";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Authcontext } from "../../contexts/AuthProvider";
import { db } from "../../firebase/config";
import Messenger from "../mess/Messenger";
import ChatInfo from "./ChatInfo";

const ChatContent = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [change, setChange] = useState(false);
  const [dataChat, setDataChat] = useState({});
  const [valueMess, setValueMess] = useState("");
  const { displayName, uid } = useContext(Authcontext);
  const { chatID } = useParams();
  useEffect(() => {
    const get = () => {
      const docRef = doc(db, "messenger", chatID);
      onSnapshot(docRef, (doc) => {
        setDataChat({
          ...doc.data(),
        });
      });
      return () => {
        docRef();
      };
    };
    chatID && get();
  }, [chatID, change]);
  const handleGetValueMess = (e) => {
    setValueMess(e.target.value);
  };
  const handleSubmitMess = async (e) => {
    e.preventDefault();
    await setChange(!change);
    const docRef = await doc(db, "messenger", chatID);
    if (!dataChat.messenger) {
      await updateDoc(docRef, {
        messenger: [
          {
            name: displayName,
            mess: valueMess,
          },
        ],
      });
    } else {
      await updateDoc(docRef, {
        messenger: [
          ...dataChat.messenger,
          {
            name: displayName,
            mess: valueMess,
          },
        ],
      });
    }
    e.target.reset();
  };

  return (
    <div className="flex flex-1">
      <div className=" flex flex-col relative h-screen flex-1 border-r overflow-hidden border-gray-200">
        <div className=" flex  items-centerw-full border-b border-gray-200 p-3">
          <div className="w-full h-9 flex gap-3 items-center font-semibold">
            <img
              src="https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png"
              alt=""
              className=" w-9 h-9 object-cover rounded-full"
            />
            <span>
              {displayName === dataChat.preson1
                ? dataChat.preson2
                : dataChat.preson1}
            </span>
          </div>
          <div className="flex gap-5 items-center text-blue-500 text-xl">
            <i className="fa-solid fa-phone"></i>
            <i className="fa-solid fa-video"></i>
            <i
              className="fa-solid fa-ellipsis"
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            ></i>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col  gap-3 p-3 justify-end">
          {dataChat.messenger &&
            dataChat.messenger.map((items, index) => {
              return <Messenger key={index} items={items}></Messenger>;
            })}
        </div>
        <form onSubmit={handleSubmitMess} className="w-full flex p-3 relative">
          <input
            type="text"
            placeholder="Messenger"
            onChange={handleGetValueMess}
            className="flex-1 p-2 outline-none border border-gray-200 rounded-xl"
          />
          <button type="submit">
            <i className="fa-solid fa-paper-plane absolute right-8 top-[50%] translate-y-[-50%] text-blue-500 text-xl"></i>
          </button>
        </form>
      </div>
      <ChatInfo show={showInfo} />
    </div>
  );
};

export default ChatContent;
