import React, { useState } from "react";
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import TopBar from "../../Components/Navigation/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Data from "./User.json";
import Table from "../../Components/DashboardComponents/Table/Table";

export default function ManageUser(props) {
  const values = Data;
  const [searchTerm, setSearchTerm] = useState("");
  const [more, setMore] = useState(10);
  const [none, setNone] = useState("");

  const heading = ["Id", "Name", "Email", "Phone No", "Course", "Action"];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredValues = values.filter((item) => {
    return (
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contact?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.course?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleData = () => {
    setMore(more + 10);
    if (more >= filteredValues.length - 10) {
      setNone("d-none");
    }
  };

  return (
    <>
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar openClass={props.openClass} />
        <div className={`content ${props.openClass}`}>
          <TopBar
            toggleOpenClass={props.toggleOpenClass}
            handleTheme={props.handleTheme}
            theme={props.theme}
          />
          <div className="container pt-4 px-4">
            <div className="bg-sec-custom text-center rounded p-4">
              <input
                type="text"
                className="form-control custom-placeholder"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="container-fluid pt-4 px-4">
            <div className="bg-sec-custom text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 className="mb-0 text-theme">Manage User</h5>
                <Link to="/add-user">Add User</Link>
              </div>
              <Table heading={heading} values={filteredValues} more={more} />
              <button
                className={`btn btn-red ${none} mt-4`}
                onClick={handleData}
              >
                Show More
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
