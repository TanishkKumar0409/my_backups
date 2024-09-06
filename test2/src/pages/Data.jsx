//! IMPORTS
import React from "react";
import { useState, useEffect } from "react";
import Loader from "../Component/Loader";
import { Link } from "react-router-dom";

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
                      rowSpan={"3"}
                    >
                      View
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
                        <td className="border text-center">
                          <Link to={`/View/${item.id}`}>
                            <button className="btn btn-primary">View</button>
                          </Link>
                        </td>
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
