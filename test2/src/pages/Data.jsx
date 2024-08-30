import React from "react";
import { useState, useEffect } from "react";
import Loader from "../Component/Loader";

export default function Data() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const out = await fetch("https://jsonplaceholder.typicode.com/users");
    const output = await out.json();
    setdata(output);
  };

  console.log(data);

  return (
    <>
      <section>
        {data.length > 0 ? (
          <>
            <h1>
              <table className="table fs-6 table-dark border">
                <thead>
                  <tr>
                    <th
                      className="border text-center fs-1 text-uppercase"
                      colSpan={"10"}
                    >
                      Details
                    </th>
                  </tr>
                  <tr>
                    <th className="border text-center" rowSpan={"3"}>
                      Id
                    </th>
                    <th className="border text-center" rowSpan={"3"}>
                      Name
                    </th>
                    <th className="border text-center" rowSpan={"3"}>
                      Username
                    </th>
                    <th className="border text-center" rowSpan={"3"}>
                      Email
                    </th>
                    <th colSpan={"6"}>Address</th>
                  </tr>
                  <tr>
                    <th className="border text-center" rowSpan={"2"}>
                      Street
                    </th>
                    <th className="border text-center" rowSpan={"2"}>
                      Suite
                    </th>
                    <th className="border text-center" rowSpan={"2"}>
                      City
                    </th>
                    <th className="border text-center" rowSpan={"2"}>
                      Zipcode
                    </th>
                    <th className="border text-center" colSpan={"2"}>
                      Geo
                    </th>
                  </tr>
                  <tr>
                    <th className="border text-center">lat</th>
                    <th className="border text-center">lng</th>
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
