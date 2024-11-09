import React from "react";
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import TopBar from "../../Components/Navigation/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Table from "../../Components/Table/Table";

export default function Product(props) {
  return (
    <>
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar openClass={props.openClass} />
        <div className={`content ${props.openClass}`}>
          <TopBar toggleOpenClass={props.toggleOpenClass} />
          <div className="container-fluid pt-4 px-4">
            <div className="bg-sec-custom text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 className="mb-0 text-white">Our Products</h5>
                <Link to="/">Show All</Link>
              </div>
              <Table />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
