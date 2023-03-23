import React, { useContext } from "react";
import { AuthListProvider } from "../../contexts/AuthListFridens";
import { Authcontext } from "../../contexts/AuthProvider";
import UserList from "../user/UserList";

const Friends = () => {
  const { displayName } = useContext(Authcontext);
  const userData = useContext(AuthListProvider);

  return (
    <>
      <h1 className="font-bold text-2xl p-3">Mọi Người</h1>
      <div className="flex flex-col w-full h-full overflow-y-auto">
        {userData.length > 0 &&
          userData.map((items) => {
            if (items.fullname !== displayName) {
              return <UserList key={items.email} items={items}></UserList>;
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
};

export default Friends;
