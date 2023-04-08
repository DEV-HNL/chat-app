import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { db } from "../../firebase/config";
import { Authcontext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
const UserList = ({ items, idChat }) => {
  const { uid, displayName } = useContext(Authcontext);
  const navigate = useNavigate();
  const idChatRoom = items.id
    ? items.id > uid
      ? items.id + uid
      : uid + items.id
    : idChat;
  const handleCreateChat = async () => {
    try {
      const colRefMess = collection(db, "messenger");
      const check = await getDoc(doc(colRefMess, idChatRoom)).then((snap) =>
        snap.exists()
      );
      if (!check) {
        setDoc(doc(colRefMess, idChatRoom), {
          preson1: items.fullname,
          preson2: displayName,
        });
      }
    } catch (error) {
      console.log(error);
    }
    navigate(`/chatroom/chat/${idChatRoom}`);
  };
  return (
    <div
      className="group/items flex items-center gap-3  cursor-pointer hover:bg-gray-200 p-3 rounded-lg transition-all ease-linear overflow-hidden relative hov"
      onClick={handleCreateChat}
    >
      <img
        src="https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png"
        alt=""
        className=" w-9 h-9 object-cover rounded-full"
      />
      <div className="flex flex-col w-full overflow-hidden ">
        <span className="font-semibold whitespace-nowarp ">
          {items.fullname
            ? items.fullname
            : items.preson1 === displayName
            ? items.preson2
            : items.preson1}
        </span>
        {items.messenger &&
          items.messenger
            .slice(-1, items.messenger.length)
            .map((items, index) => {
              if (items.name === displayName) {
                return (
                  <span key={index} className="whitespace-nowrap">
                    me: {items.mess}
                  </span>
                );
              } else {
                return <span key={index}>you: {items.mess}</span>;
              }
            })}
      </div>
      {items.messenger && (
        <i className="fa-solid fa-ellipsis absolute z-10 top-[50%] right-10 translate-y-[-50%] w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 shadow-lg bg-white transition-all ease-linear invisible opacity-0 group-hover/items:visible group-hover/items:opacity-100 hover:bg-gray-200 "></i>
      )}
    </div>
  );
};

export default UserList;
