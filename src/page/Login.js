import React, { useState } from "react";
import { ReactComponent as LogoGoogle } from "../asset/img/google.svg";
import { ReactComponent as LogoFacebook } from "../asset/img/facebook.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import TempleAuth from "../components/tempAuth/TempleAuth";
import { auth } from "../firebase/config";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [getValue, setGetValue] = useState({
    email: "",
    password: "",
    passwordRe: "",
    fullname: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, getValue.email, getValue.password);
      navigate("/chatroom");
    } catch (error) {
      e.target.reset();
      return null;
    }
  };
  const handleGetValue = (e) => {
    setGetValue({
      ...getValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <TempleAuth>
      <form onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold">Login</h2>
        <div className="flex flex-col gap-3 my-5">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Username@gmai.com"
            id="email"
            name="email"
            onChange={handleGetValue}
            className="w-full outline-none border border-gray-200 py-3 px-5 rounded-md focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-3 my-5 relative">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={handleGetValue}
            className="w-full outline-none border border-gray-200 py-3 px-5 rounded-md focus:border-blue-500"
          />
          <i className="fa-solid fa-eye absolute bottom-[25%] right-3 translate-y-[40%] text-gray-400 cursor-pointer"></i>
        </div>
        <NavLink to="/" className="text-blue-500">
          Forgot Password?
        </NavLink>{" "}
        <br />
        <button className="w-full text-white bg-red-600 rounded-lg py-3 px-5 my-5 cursor-pointer font-semibold text-xl hover:opacity-50 transition-all ease-linear">
          Login
        </button>
        <div className="w-full flex flex-col text-center justify-center gap-3">
          <span>or continue with</span>
          <div className="w-full flex justify-center gap-2">
            <button className="w-[30%] bg-white rounded-xl p-3 flex justify-center hover:opacity-50 transition-all ease-linear">
              <LogoGoogle />
            </button>
            <button className="w-[30%] bg-white rounded-xl p-3 flex justify-center hover:opacity-50 transition-all ease-linear">
              <LogoFacebook />
            </button>
          </div>
        </div>
        <span className="inline-block my-5 w-full text-center">
          Don't have an account yet?{" "}
          <NavLink to="/signup" className="text-blue-500">
            Register for free
          </NavLink>
        </span>
      </form>
    </TempleAuth>
  );
};

export default Login;
