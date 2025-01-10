import React, { useEffect, useState } from "react";
import { noFileAPI } from "../../Services/API/API";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

export default function UserProfile() {
  const [data, setData] = useState([]);
  const { username } = useParams();
  const localUsername = JSON.parse(localStorage.getItem("user"));
  const redirector = useNavigate();

  useEffect(() => {
    if (username !== localUsername) {
      redirector(`/main/user/${localUsername}`);
    }
  }, [username, localUsername, redirector]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await noFileAPI.get(`/user/${username}`);
        setData(response.data);
      } catch (error) {
        redirector("/");
        console.error(error.response.data.error);
      }
    };

    const intervalID = setInterval(() => {
      getData();
    }, 100);

    return () => clearInterval(intervalID);
  }, [username, redirector]);

  const APIurl = process.env.REACT_APP_API;

  const formatStorage = (bytes) => {
    if (!bytes) return "0 MB";
    const gb = bytes / (1024 * 1024 * 1024);
    if (gb >= 1) {
      return `${gb.toFixed(2)} GB`;
    }
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <section className="py-5 bgGradient">
        <div className="container rounded mt-5 p-5 bg-light">
          <div className="row">
            <div className="col-md-6 text-center align-content-center">
              <img
                src={`${APIurl}${data.profile}`}
                className="img-fluid rounded shadow w-100"
                style={{ aspectRatio: "4/4" }}
                alt={"User Profile"}
              />
            </div>
            <div className="col-md-6 align-content-center">
              <h3 className="mb-4 fs-1 fw-bold">
                {data.username || "User Details"}
              </h3>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{data.name || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{data.email || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Contact</th>
                      <td>{data.contact || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Role</th>
                      <td>{data.role || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Status</th>
                      <td>{data.status || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Used Storage</th>
                      <td>{formatStorage(data.usedStorage)}</td>
                    </tr>
                    <tr>
                      <th>Total Storage</th>
                      <td>{formatStorage(data.totalStorage)}</td>
                    </tr>
                    <tr>
                      <td colSpan={`2`} className="text-center">
                        <button className="btn btn-custom custom-btn w-50 rounded-0 rounded-start-3">
                          Update Profile
                        </button>
                        <button
                          className="btn btn-custom custom-btn rounded-0 rounded-end-3 w-50"
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Actions
                        </button>
                        <div className="dropdown">
                          <ul
                            className="dropdown-menu dropdown-menu-top overflow-hidden text-center p-0"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li>
                              <button
                                className="dropdown-item btn btn-custom custom-btn"
                                onClick={handleLogout}
                              >
                                Logout
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item btn btn-custom custom-btn">
                                Change Password
                              </button>
                            </li>
                            <li>
                              <Link
                                to={`/main/user/delete/account/${username}`}
                                className="dropdown-item btn-custom custom-btn"
                              >
                                Delete Account
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
