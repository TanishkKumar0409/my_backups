import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stats from "../../Components/DashboardComponents/Stats/Stats";
import Graphs from "../../Components/DashboardComponents/Graphs/Graphs";
import Extras from "../../Components/DashboardComponents/Extras/Extras";
import Data from "../ManageUser/User.json";
import Table from "../../Components/DashboardComponents/Table/Table";

export default function Dashboard(props) {
  const heading = ["Id", "Name", "Email", "Phone No", "Course", "Action"];

  const values = Data;

  const [courseStats, setCourseStats] = useState({});

  useEffect(() => {
    const courseData = values.reduce((acc, user) => {
      const { course, courseIcon } = user;

      if (!acc[course]) {
        acc[course] = { count: 0, icon: courseIcon };
      }

      acc[course].count += 1;

      return acc;
    }, {});

    setCourseStats(courseData);
  }, [values]);

  return (
    <>
      <Stats courseStats={courseStats} />

      <Graphs theme={props.theme} />

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
    </>
  );
}
