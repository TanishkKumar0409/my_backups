// DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Navigation/Sidebar/Sidebar";
import TopBar from "../Components/Navigation/TopBar/TopBar";
import Footer from "../Components/Footer/Footer";

export default function DashboardLayout(props) {
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <Sidebar openClass={props.openClass} />
      <div className={`content ${props.openClass}`}>
        <TopBar
          toggleOpenClass={props.toggleOpenClass}
          handleTheme={props.handleTheme}
          theme={props.theme}
          toggleFullScreen={props.toggleFullScreen}
          fullIcon={props.fullIcon}
        />

        <Outlet />

        <Footer />
      </div>
    </div>
  );
}
