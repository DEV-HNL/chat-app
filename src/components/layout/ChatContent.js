import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
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
  const { displayName } = useContext(Authcontext);
  const { chatID } = useParams();
  const colRef = useRef();
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
  useEffect(() => {
    colRef.current?.scrollIntoView();
  }, [dataChat]);
  const handleGetValueMess = (e) => {
    setValueMess(e.target.value);
  };
  const handleSubmitMess = async (e) => {
    e.preventDefault();
    e.target.reset();
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
        <div className=" flex flex-col p-3 overflow-y-auto mt-auto content-chat ">
          {dataChat.messenger &&
            dataChat.messenger.map((items, index) => {
              return <Messenger key={index} items={items}></Messenger>;
            })}
          <p ref={colRef}></p>
        </div>
        <form
          onSubmit={handleSubmitMess}
          className=" rounded-lg flex m-3 relative border border-gray-200"
        >
          <input
            type="text"
            placeholder="Messenger"
            onChange={handleGetValueMess}
            className=" w-[calc(100%-44px)] p-2 outline-none  rounded-xl"
          />
          <button type="submit">
            <i className="fa-solid fa-paper-plane absolute right-3 top-[50%] translate-y-[-50%] text-blue-500 text-xl"></i>
          </button>
        </form>
      </div>
      <ChatInfo show={showInfo} />
    </div>
  );
};

export default ChatContent;
