//! IMPORTS
import React from "react";
import { useState, useEffect } from "react";
import Loader from "../Component/Loader";

//? MAIN FUNCTION
export default function Data(props) {
  //* USESTATE
  const [data, setdata] = useState([]);

  //? USEEFFECT
  useEffect(() => {
    getdata();
  }, []);

  //! FUNCTION FOR FETCH DATA
  const getdata = async () => {
    const out = await fetch("https://jsonplaceholder.typicode.com/users");
    const output = await out.json();
    setdata(output);
  };

  console.log(data);

  //* COMPONENT CODE WITH PROPS
  return (
    <>
      <section className="container my-5">
        {data.length > 0 ? (
          <>
            <h1>
              <table
                className={`table table-${props.theme} border shadow-lg `}
                style={{ fontSize: "13px", borderRadius: "50px" }}
              >
                <thead>
                  <tr>
                    <th
                      className="border text-center align-content-center fs-1 text-uppercase"
                      colSpan={"15"}
                    >
                      Data Fetch
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"3"}
                    >
                      Id
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"3"}
                    >
                      Name
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"3"}
                    >
                      Username
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"3"}
                    >
                      Email
                    </th>
                    <th
                      className="border text-center align-content-center"
                      colSpan={"6"}
                    >
                      Address
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"3"}
                    >
                      Phone
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"3"}
                    >
                      Website
                    </th>
                    <th
                      className="border text-center align-content-center"
                      colSpan={"6"}
                    >
                      Company
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"2"}
                    >
                      Street
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"2"}
                    >
                      Suite
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"2"}
                    >
                      City
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"2"}
                    >
                      Zipcode
                    </th>
                    <th
                      className="border text-center align-content-center"
                      colSpan={"2"}
                    >
                      Geo
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"2"}
                    >
                      Company Name
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"2"}
                    >
                      catchPhrase
                    </th>
                    <th
                      className="border text-center align-content-center"
                      rowSpan={"2"}
                    >
                      bs
                    </th>
                  </tr>
                  <tr>
                    <th className="border text-center align-content-center">
                      lat
                    </th>
                    <th className="border text-center align-content-center">
                      lng
                    </th>
                  </tr>
                </thead>
                {data.map((item, detail) => {
                  return (
                    <tbody key={detail}>
                      <tr>
                        <td className="border">{item.id}</td>
                        <td className="border">{item.name}</td>
                        <td className="border">{item.username}</td>
                        <td className="border">{item.email}</td>
                        <td className="border">{item.address.street}</td>
                        <td className="border">{item.address.suite}</td>
                        <td className="border">{item.address.city}</td>
                        <td className="border">{item.address.zipcode}</td>
                        <td className="border">{item.address.geo.lat}</td>
                        <td className="border">{item.address.geo.lng}</td>
                        <td className="border">{item.phone}</td>
                        <td className="border">{item.website}</td>
                        <td className="border">{item.company.name}</td>
                        <td className="border">{item.company.catchPhrase}</td>
                        <td className="border">{item.company.bs}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </h1>
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
      </section>
    </>
  );
}
