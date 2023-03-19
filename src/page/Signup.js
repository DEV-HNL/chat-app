import React, { useState } from "react";
import TempleAuth from "../components/tempAuth/TempleAuth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [getValue, setGetValue] = useState({
    email: "",
    password: "",
    passwordRe: "",
    fullname: "",
  });
  const handleSignup = async (e) => {
    e.preventDefault(e);
    try {
      await createUserWithEmailAndPassword(
        auth,
        getValue.email,
        getValue.password === getValue.passwordRe && getValue.password
      );
    } catch (error) {
      e.target.reset();
      return null;
    }

    try {
      const colRefAuth = collection(db, "auth");
      await addDoc(colRefAuth, {
        ...getValue,
      });
    } catch (error) {
      console.log(error);
    }
    navigate("/chatroom");
  };
  const handleGetValue = (e) => {
    setGetValue({
      ...getValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <TempleAuth>
      <form onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold">Signup</h2>
        <div className="flex flex-col gap-3 my-5 relative">
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
          <label htmlFor="fullname">FullName</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            id="fullname"
            name="fullname"
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
        <div className="flex flex-col gap-3 my-5 relative">
          <label htmlFor="password-re">Password-Re</label>
          <input
            type="password"
            placeholder="password-Re"
            id="passwordRe"
            name="passwordRe"
            onChange={handleGetValue}
            className="w-full outline-none border border-gray-200 py-3 px-5 rounded-md focus:border-blue-500"
          />
          <i className="fa-solid fa-eye absolute bottom-[25%] right-3 translate-y-[40%] text-gray-400 cursor-pointer"></i>
        </div>
        <span className="inline-block my-3 w-full">
          You have an account yet?
          <NavLink to="/Login" className="text-blue-500">
            Login now
          </NavLink>
        </span>
        <button className="w-full text-white bg-red-600 rounded-lg py-3 px-5 my-3 cursor-pointer font-semibold text-xl hover:opacity-50 transition-all ease-linear">
          Signup
        </button>
      </form>
    </TempleAuth>
  );
};

export default Signup;
