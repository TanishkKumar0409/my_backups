import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import TopBar from "../../Components/Navigation/TopBar/TopBar";
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import Data from "../ManageUser/User.json";

export default function View(props) {
  const values = Data;
  const { id } = useParams();
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const filterData = values.filter((user) => user.id === parseInt(id));
    setMapData(filterData);
  }, [values, id]);

  console.log(id);
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
          <div className="container-fluid pt-4 px-4">
            <div className="bg-sec-custom text-center rounded p-4">
              {mapData.map((item, index) => (
                <div className="row" key={index}>
                  <div className="col-md-5">
                    <img
                      src="https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80"
                      alt=""
                      className="img-fluid rounded shadow"
                    />
                  </div>
                  <div className="col-md-7 p-5">
                    <h3>User Details</h3>
                    <div className="table-responsive">
                      <table className="table text-start align-middle table-bordered table-hover mb-0">
                        <tbody>
                          <tr>
                            <th className="fs-3">Id</th>
                            <td className="fs-3">{item.id}</td>
                          </tr>
                          <tr>
                            <th className="fs-3">Name</th>
                            <td className="fs-3">{item.name}</td>
                          </tr>
                          <tr>
                            <th className="fs-3">Email</th>
                            <td className="fs-3">{item.email}</td>
                          </tr>
                          <tr>
                            <th className="fs-3">Phone</th>
                            <td className="fs-3">{item.contact}</td>
                          </tr>
                          <tr>
                            <th className="fs-3">Course</th>
                            <td className="fs-3">{item.course}</td>
                          </tr>
                          <tr>
                            <td colSpan={"2"}>
                              <div class="btn-group w-100">
                                <Link to={`/`} class="btn btn-red btn-lg">
                                  Update
                                </Link>
                                <button class="btn btn-red btn-lg">
                                  Delete
                                </button>
                                <Link to={`/manage-user`}
                                  class="btn btn-red btn-lg"
                                >
                                  Back
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
