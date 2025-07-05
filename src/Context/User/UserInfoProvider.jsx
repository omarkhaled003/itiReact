import { useState, useEffect } from "react";
import UserInfoContext from "./UserInfoContext";

export default function UserInfoProvider({ children }) {
  // const [userName, setUserName] = useState("");
  // const [Pass, setPass] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  // shared state for all app
  const values = {
    // userName,
    // setUserName,
    // Pass,
    // setPass,
    isLogin,
    setIsLogin,
  };
  console.log({ isLogin });

  useEffect(() => {
    console.log("");
  }, []);

  return (
    <UserInfoContext.Provider value={values}>
      {children}
    </UserInfoContext.Provider>
  );
}
