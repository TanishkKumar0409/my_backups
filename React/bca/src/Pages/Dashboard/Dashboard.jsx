import React from "react";
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import TopBar from "../../Components/Navigation/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Stats from "../../Components/DashboardComponents/Stats/Stats";
import Graphs from "../../Components/DashboardComponents/Graphs/Graphs";
import Extras from "../../Components/DashboardComponents/Extras/Extras";
import Data from "../ManageUser/User.json";
import Table from "../../Components/DashboardComponents/Table/Table";

export default function Dashboard(props) {
  const heading = [
    "Id",
    "Date",
    "Name",
    "Email",
    "Phone No",
    "Course",
    "Action",
  ];
  const values = Data;

  return (
    <>
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar openClass={props.openClass} />
        <div className={`content ${props.openClass}`}>
          <TopBar toggleOpenClass={props.toggleOpenClass} />
          <Stats />

          <Graphs />

          <div className="container-fluid pt-4 px-4">
            <div className="bg-sec-custom text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">All Students</h6>
                <Link to="/manage-user">Show All</Link>
              </div>
              <Table heading={heading} values={values} />
            </div>
          </div>

          <Extras />
          <Footer />
        </div>
      </div>
    </>
  );
}
