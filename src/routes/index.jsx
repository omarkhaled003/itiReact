import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/index.jsx";

import PageDetail from "../pages/page-detail";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Login/";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home/index";
import Posts from "../components/Day3/index.jsx";
import Day2 from "../components/Day2/Day2.jsx";
import Counter from "../components/Day1/Counter.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<MainLayout text="Hello" />}>
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="page" element={<Posts />} />
          <Route path="calc" element={<Day2 />} />
          <Route path="counter" element={<Counter />} />
          <Route path="post-details/:id" element={<PageDetail />} />
        </Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  )
);

export default router;
