import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Authcontext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const provider = onAuthStateChanged(auth, (snapshrot) => {
      if (snapshrot) {
        const { email, password, displayName, uid } = snapshrot;
        setUser({ email, password, displayName, uid });
        navigate("/chatroom");
      } else {
        navigate("/");
      }
    });
    return () => {
      provider();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Authcontext.Provider value={{ user }}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
