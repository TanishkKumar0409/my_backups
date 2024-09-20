import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";

export default function ViewData() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const fetchdata = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await fetchdata.json();
      const FilterData = jsonData.filter((user) => user.id === parseInt(id));
      setData(FilterData);
    };
    getData();
  }, [id]);
  return (
    <>
      {data.length > 0 ? (
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col">
              <div
                style={{
                  position: "relative",
                  top: "100px",
                  marginBottom: "150px",
                }}
              >
                <h1
                  className="headHeading text-dark"
                  style={{ "--text": "'Users Data'" }}
                >
                  User Data
                </h1>
                <div className="text-box rounded p-3 shadow">
                  {data.map((item) => (
                    <div key={item.id}>
                      <h3 className="mt-4 text-dark">Personal</h3>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Id:</p>
                        <p className="Etext">{item.id}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Name:</p>
                        <p className="Etext">{item.name}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Username:</p>
                        <p className="Etext">{item.username}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Email:</p>
                        <p className="Etext">{item.email}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Contact:</p>
                        <p className="Etext">{item.phone}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Website:</p>
                        <p className="Etext">{item.website}</p>
                      </div>
                      {/* Address Section */}
                      <h3 className="mt-4 text-dark">Address</h3>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Street:</p>
                        <p className="Etext">{item.address.street}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Suite:</p>
                        <p className="Etext">{item.address.suite}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">City:</p>
                        <p className="Etext">{item.address.city}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Zipcode:</p>
                        <p className="Etext">{item.address.zipcode}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Geo-Lat:</p>
                        <p className="Etext">{item.address.geo.lat}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Geo-Lng:</p>
                        <p className="Etext">{item.address.geo.lng}</p>
                      </div>
                      {/* Company Section */}
                      <h3 className="mt-4 text-dark">Company</h3>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Name:</p>
                        <p className="Etext">{item.company.name}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Catchphrase:</p>
                        <p className="Etext">{item.company.catchPhrase}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="Etext">Business:</p>
                        <p className="Etext">{item.company.bs}</p>
                      </div>
                    </div>
                  ))}
                  <div className="btn-box p-3 rounded shadow d-flex justify-content-center">
                    <Link to="/userData">
                      <button className="btn btn-custom shadow">Back</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
