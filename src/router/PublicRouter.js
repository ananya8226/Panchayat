import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainLayout } from "../app/layouts";

export default function PublicRouter() {
   const isloggedIn = localStorage.getItem('ACCESS_TOKEN');
   const userId = localStorage.getItem("USER_ROLE");
  return <>
    { !isloggedIn ?
     (<MainLayout>
      <Outlet />
    </MainLayout> )
    // : (  <Navigate to="/" />)}
    : userId==1 ? (<Navigate to="/panchayatDashboard"/>) : (<Navigate to= "/blockDashboard"/>)}
  </>;
}

