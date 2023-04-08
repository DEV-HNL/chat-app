import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { NavLink } from "react-router-dom";
const ChatNavBar = () => {
  return (
    <div className="h-full w-[60px] flex flex-col items-center border-r border-gray-200 flex-shrink-0">
      <div className=" flex-1 overflow-hidden flex flex-col gap-2 items-center p-2">
        <div className="w-full h-[44px] rounded-md overflow-hidden p-1 bg-gray-200">
          <img
            src="https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png"
            alt=""
            className="w-full object-cover rounded-full"
          />
        </div>
        <NavLink
          to={"chat"}
          className={({ isActive }) =>
            (isActive ? "text-blue-500" : "text-gray-300") +
            " w-full h-[44px] rounded-md overflow-hidden p-1  flex items-center justify-center"
          }
        >
          <i className="fa-solid fa-comment text-xl  hover:text-black transition-all ease-linear"></i>
        </NavLink>
        <NavLink
          to={"fridens"}
          className={({ isActive }) =>
            (isActive ? "text-blue-500" : "text-gray-300") +
            " w-full h-[44px] rounded-md overflow-hidden p-1  flex items-center justify-center"
          }
        >
          <i className="fa-solid fa-user-group text-xl  hover:text-black transition-all ease-linear"></i>
        </NavLink>
        <NavLink
          to={"archived"}
          className={({ isActive }) =>
            (isActive ? "text-blue-500" : "text-gray-300") +
            " w-full h-[44px] rounded-md overflow-hidden p-1  flex items-center justify-center"
          }
        >
          <i className="fa-solid fa-trash-can-arrow-up text-xl  hover:text-black transition-all ease-linear"></i>
        </NavLink>
      </div>
      <i
        className="fa-solid fa-right-from-bracket mb-3 text-xl text-gray-300 hover:text-black"
        onClick={() => {
          signOut(auth);
        }}
      ></i>
    </div>
  );
};

export default ChatNavBar;
