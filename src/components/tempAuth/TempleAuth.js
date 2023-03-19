import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../asset/img/logo.png";

const TempleAuth = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-[#fedcc5] to-[#fedcc6] w-screen h-screen relative">
      <img
        src={logo}
        alt="a"
        className="w-[50%] object-cover absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] backdrop-blur-sm opacity-50"
      />
      <div className="absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] w-[500px] bg-glass p-10 rounded-lg blurcomponent">
        <i
          className="fa-solid fa-xmark absolute right-5 top-5 font-semibold text-2xl hover:opacity-50 transition-all ease-linear "
          onClick={() => navigate("/")}
        ></i>
        {children}
      </div>
    </div>
  );
};

export default TempleAuth;
