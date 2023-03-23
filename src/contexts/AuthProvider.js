import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useLocation, useNavigate } from "react-router-dom";

export const Authcontext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const provider = onAuthStateChanged(auth, (snapshrot) => {
      if (snapshrot) {
        const { email, password, displayName, uid } = snapshrot;
        setUser({ email, password, displayName, uid });

        if (!(pathname === "/chatroom") && pathname !== "/") {
          navigate(`${pathname}`);
        } else {
          navigate("/chatroom/chat");
        }
      } else {
        if (pathname.slice(0, 9) === "/chatroom") navigate("/");
      }
    });
    return () => {
      provider();
    };
  }, [navigate, pathname]);
  return <Authcontext.Provider value={user}>{children}</Authcontext.Provider>;
};

export default AuthProvider;
