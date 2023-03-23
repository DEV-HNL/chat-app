import React, { useContext } from "react";
import { Authcontext } from "../../contexts/AuthProvider";

const Messenger = ({ items }) => {
  const { name, mess } = items;
  const { displayName } = useContext(Authcontext);
  return (
    <div
      className={`flex gap-3 items-end relative ${
        name === displayName ? "flex-row-reverse" : ""
      }`}
    >
      <img
        src="https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png"
        alt=""
        className=" w-5 h-5 object-cover rounded-full text-end"
      />
      <span
        className={`bg-blue-500 px-3 py-1 rounded-t-2xl ${
          name === displayName ? "rounded-l-2xl" : "rounded-r-2xl"
        } text-white`}
      >
        {mess}
      </span>
    </div>
  );
};

export default Messenger;
