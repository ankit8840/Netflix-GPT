import React from "react";
import Header from "./Header";
import Login from "./login";
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
const Body = () => {
    const routes=createBrowserRouter([{
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    }]);
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  );
};

export default Body;
