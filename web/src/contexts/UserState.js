import { useState } from "react";
import { UserContext } from "./userContext";

export const UserState = (props) => {
  const [currentUser, setCurrentUser] = useState("");

  const data = {currentUser, setCurrentUser}
  return (
    <UserContext.Provider value={data}>
      {props.children}
    </UserContext.Provider>
  );
};
