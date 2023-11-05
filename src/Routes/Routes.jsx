import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginSingUp/Login";
import SingUp from "../Pages/LoginSingUp/SingUp/SingUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blogs/Blog";
import MyJob from "../Pages/MyJob/MyJob";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import AllJob from "../Pages/AllJob/AllJob";
import ViewDetails from "../Pages/AllJob/ViewDetails/ViewDetails";
import AddaJob from "../Pages/AddaJob/AddaJob";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allJob",
        element: <AllJob></AllJob>,
      },
      {
        path: "/myjob",
        element: <MyJob></MyJob>,
      },
      {
        path: "/updateJob",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "/viewDetails",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/addaJob",
        element: <AddaJob></AddaJob>,
      },
      {
        path: "/appliedJob",
        element: <AppliedJob></AppliedJob>,
      },
    ],
  },
]);

export default router;
