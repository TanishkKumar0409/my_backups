import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function View() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(
        "https://673200597aaf2a9aff130eaa.mockapi.io/fakeTanishk/fakeTanishk"
      );
      const jsonData = await fetchData.json();
      const filterData = jsonData.filter((user) => user.id === parseInt(id));
      setData(filterData);
    };
    getData();
  }, [id]);

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-sec-custom text-center rounded p-4">
          {data.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-md-5">
                <img src={item.image} alt="" className="img-fluid rounded" />
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
                          <div className="btn-group w-100">
                            <Link to={`/`} className="btn btn-red btn-lg">
                              Update
                            </Link>
                            <button className="btn btn-red btn-lg">
                              Delete
                            </button>
                            <Link
                              to={`/manage-user`}
                              className="btn btn-red btn-lg"
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
    </>
  );
}
