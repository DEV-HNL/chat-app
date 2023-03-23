import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { db } from "../../firebase/config";
import { Authcontext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
const UserList = ({ items, idChat }) => {
  const { uid, displayName } = useContext(Authcontext);
  const navigate = useNavigate();
  const handleCreateChat = async () => {
    const idChatRoom = items.id
      ? items.id > uid
        ? items.id + uid
        : uid + items.id
      : idChat;

    try {
      const colRefMess = collection(db, "messenger");
      const check = await getDoc(doc(colRefMess, idChat)).then((snap) => {
        return snap.exists();
      });
      if (!check) {
        setDoc(doc(colRefMess, idChat), {
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
      className="flex items-center gap-3  cursor-pointer hover:bg-gray-200 p-3 rounded-lg transition-all ease-linear"
      onClick={handleCreateChat}
    >
      <img
        src="https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png"
        alt=""
        className=" w-9 h-9 object-cover rounded-full"
      />
      <div className="flex flex-col ">
        <span className="font-semibold">
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
                return <span key={index}>me: {items.mess}</span>;
              } else {
                return <span key={index}>you: {items.mess}</span>;
              }
            })}
      </div>
    </div>
  );
};

export default UserList;
