import React from "react";

const ChatInfo = () => {
  return (
    <div className="w-[300px]">
      <div className="w-full flex flex-col items-center py-5 gap-3">
        <img
          src="https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png"
          alt=""
          className=" w-24 object-cover rounded-full"
        />
        <span className="font-semibold ">Chat 1</span>
        <div className="flex gap-5 text-2xl mt-3">
          <div className="flex flex-col justify-center items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer">
              <i className="fa-solid fa-bell "></i>
            </div>
            <span className="text-sm">Thông báo</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer">
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
            <span className="text-sm">Tìm kiếm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
