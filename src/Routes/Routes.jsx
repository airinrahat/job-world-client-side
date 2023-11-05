import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
// import Login from "../Pages/LoginSingUp/Login";
import SingUp2 from "../Pages/LoginSingUp/SingUp/SingUp2";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blogs/Blog";
import MyJob from "../Pages/MyJob/MyJob";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import AllJob from "../Pages/AllJob/AllJob";
import ViewDetails from "../Pages/AllJob/ViewDetails/ViewDetails";
import AddaJob from "../Pages/AddaJob/AddaJob";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import Login2 from "../Pages/LoginSingUp/Login2";

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
        element: <Login2></Login2>,
      },
      {
        path: "/singup",
        element: <SingUp2></SingUp2>,
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