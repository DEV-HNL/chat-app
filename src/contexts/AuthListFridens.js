import React, { createContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
export const AuthListProvider = createContext();
const AuthListFridens = ({ children }) => {
  const [dataFridens, setDataFridens] = useState([]);
  const colRef = collection(db, "auth");
  useEffect(() => {
    let data = [];
    const provider = onSnapshot(colRef, (snapshot) => {
      if (snapshot) {
        snapshot.docs.forEach((doc) => {
          data.push({
            ...doc.data(),
          });
        });
        setDataFridens(data);
      }
    });
    return () => {
      provider();
    };
  }, [colRef]);
  return (
    <AuthListProvider.Provider value={dataFridens}>
      {children}
    </AuthListProvider.Provider>
  );
};

export default AuthListFridens;
