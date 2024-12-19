import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {
    const loginToken = localStorage.getItem("loginToken");
    const location = useLocation();
    const path = location.pathname;

    const nonLogin = ["/", "/form"]
    const includeLogin = ['/main', "/user/history"]

    if (loginToken && nonLogin.includes(path)) {
        return <Navigate to={"/main"} replace />
    } if (!loginToken && includeLogin.includes(path)) {
        return <Navigate to={"/"} replace />
    }
    return children;
}
