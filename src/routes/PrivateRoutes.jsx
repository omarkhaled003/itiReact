import { Navigate, Outlet, useLocation } from "react-router-dom";

import UserInfoContext from "../Context/User/UserInfoContext";
import { useContext } from "react";
export default function PrivateRoutes() {
  const location = useLocation();
  console.log(location);
  const { isLogin } = useContext(UserInfoContext);
  console.log(isLogin);
  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
