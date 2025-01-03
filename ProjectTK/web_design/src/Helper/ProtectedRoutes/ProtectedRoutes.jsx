import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {
    const loginToken = localStorage.getItem("loginToken");
    const adminToken = localStorage.getItem("adminToken");
    const location = useLocation();
    const path = location.pathname;

    const nonLogin = ["/", "/form"];
    const includeLogin = ['/main', "/main/history", "/main/storage"];
    const includeAdmin = ["/admin/dashboard", "/admin/dashboard/info", "/admin/dashboard/user", "/admin/dashboard/query", "/admin/dashboard/user/:username"];

    if (loginToken && nonLogin.includes(path)) {
        return <Navigate to={"/main"} replace />;
    }

    if (!loginToken && includeLogin.includes(path)) {
        return <Navigate to={"/"} replace />;
    }

    if (!adminToken && includeAdmin.includes(path)) {
        return <Navigate to={"/"} replace />
    }
    return children;
}
