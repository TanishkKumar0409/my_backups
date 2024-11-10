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
                    <div className="d-flex justify-content-between">
                      <h1>id:</h1>
                      <h1>{item.id}</h1>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h1>Name:</h1>
                      <h1>{item.name}</h1>
                    </div>
                    <div className="d-md-flex text-start justify-content-between">
                      <h1>Email:</h1>
                      <h3>{item.email}</h3>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h1>Phone:</h1>
                      <h1>{item.contact}</h1>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h1>Course:</h1>
                      <h1>{item.course}</h1>
                    </div>
                    <div className="btn-group mt-5 w-100">
                      <Link
                        to={`/`}
                        type="button"
                        className="btn btn-lg btn-red"
                      >
                        Update
                      </Link>
                      <button type="button" className="btn btn-lg btn-red">
                        Delete
                      </button>
                      <Link
                        to="/manage-user"
                        type="button"
                        className="btn btn-lg btn-red"
                      >
                        Back
                      </Link>
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
