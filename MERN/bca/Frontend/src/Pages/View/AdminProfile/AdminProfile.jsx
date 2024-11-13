import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminProfile() {
  const mapData = JSON.parse(localStorage.getItem("admin"));
  const Navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this admin?"
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/delete-admin/${id}`
        );
        if (response.status === 201) {
          Navigate("/");
          localStorage.clear();
          window.location.reload();
        }
      } catch (error) {
        toast.error(error.response.data.error);
      }
    } else {
      toast.info("Delete action was canceled.");
    }
  };

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-sec-custom text-center rounded p-4">
          <div className="row">
            <div className="col-md-5">
              <img
                src={`http://localhost:5000/${mapData.profile}`}
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 p-5">
              <h3 className="fs-1 mb-5">Admin Details</h3>
              <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0">
                  <tbody>
                    <tr>
                      <th className="fs-3">Id</th>
                      <td className="fs-3">{mapData.id}</td>
                    </tr>
                    <tr>
                      <th className="fs-3">Name</th>
                      <td className="fs-3">{mapData.name}</td>
                    </tr>
                    <tr>
                      <th className="fs-3">Email</th>
                      <td className="fs-3">{mapData.email}</td>
                    </tr>
                    <tr>
                      <th className="fs-3">Phone</th>
                      <td className="fs-3">{mapData.contact}</td>
                    </tr>
                    <tr>
                      <td colSpan={"2"}>
                        <div className="btn-group w-100">
                          <Link
                            to={`/update-admin/${id}`}
                            className="btn btn-red btn-lg"
                          >
                            Update
                          </Link>
                          <button
                            className="btn btn-red btn-lg"
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                          <Link to={`/`} className="btn btn-red btn-lg">
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
        </div>
      </div>
    </>
  );
}
