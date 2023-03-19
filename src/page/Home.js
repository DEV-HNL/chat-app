import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as LogoGoogle } from "../asset/img/google.svg";
import { ReactComponent as LogoFacebook } from "../asset/img/facebook.svg";
const Home = () => {
  const naviga = useNavigate();
  return (
    <div className="w-screen max-w-[1000px] h-screen mx-auto relative">
      <div className="flex justify-between fixed w-full max-w-[1000px] p-5">
        <h2 className="font-extrabold text-xl ">Tubo Chat</h2>
        <div className="flex gap-2 justify-center items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-pink-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className={`${({ isActive }) =>
              isActive ? "text-pink-500" : ""} hover:text-pink-500`}
          >
            Login
          </NavLink>
        </div>
      </div>

      <div className="flex w-full gap-2 justify-between items-center h-full p-5">
        <div className="flex flex-col gap-2 w-[35%]">
          <button
            className="w-full bg-gray-200 rounded-md h-10 hover:opacity-70"
            onClick={() => {
              naviga("/login");
            }}
          >
            Signin width Email & Password
          </button>
          <div className="flex items-center w-full gap-2">
            <button className=" px-3 w-[50%]  bg-gray-200 rounded-md h-10 flex gap-2 items-center flex-row-reverse flex-1 justify-center hover:opacity-70">
              Google
              <LogoGoogle />
            </button>
            <button className=" px-3 w-[50%] bg-gray-200 rounded-md h-10 flex gap-2 items-center flex-row-reverse flex-1 justify-center hover:opacity-70">
              Facebook
              <LogoFacebook />
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="https://i.pinimg.com/564x/1e/47/54/1e4754acda43e982de28b6370dc26359.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
