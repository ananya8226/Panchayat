import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainLayout } from "../app/layouts";
import { useSelector } from "react-redux";



export default function PrivateRouter() {
    const isloggedIn = localStorage.getItem('ACCESS_TOKEN');
    return (
        <>
            {isloggedIn ? (
                <MainLayout>
                    <Outlet />
                </MainLayout>
            ) : (
                <Navigate to="/" />
            )}
        </>
    );
}

export const PanchayatRouter = () => {

    const designationId = useSelector((state) => state.loginDataReducer);
    return (
        <>
            {designationId.user == 1 ? (
                <Outlet />
            ) : (
                <Navigate to={"/"} />
            )}
        </>
    );
};
export const BlockRouter = () => {
    const designationId = useSelector((state) => state.loginDataReducer);
    return (
        <>
            {designationId.user == 2 ? (
                <Outlet />
            ) : (
                <Navigate to={"/"} />
            )}
        </>
    );
};