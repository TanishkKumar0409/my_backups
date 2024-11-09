import React from "react";
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import TopBar from "../../Components/Navigation/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Stats from "../../Components/DashboardComponents/Stats/Stats";
import Graphs from "../../Components/DashboardComponents/Graphs/Graphs";
import Extras from "../../Components/DashboardComponents/Extras/Extras";
import Table from "../../Components/Table/Table";

export default function Dashboard(props) {
  return (
    <>
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar openClass={props.openClass} />
        <div className={`content ${props.openClass}`}>
          <TopBar toggleOpenClass={props.toggleOpenClass} />
         <Stats/>

          <Graphs/>

          <div className="container-fluid pt-4 px-4">
            <div className="bg-sec-custom text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Recent Sales</h6>
                <Link to="/">Show All</Link>
              </div>
             <Table />
            </div>
          </div>

         <Extras/>
          <Footer />
        </div>
      </div>
    </>
  );
}
