import React from "react";
import { Link } from "react-router-dom";

export default function ProfileOffcanvas() {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasProfile"
        aria-labelledby="offcanvasProfileLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasProfileLabel">
            Profile
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="text-center">
            <img
              src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
              className="img-fluid rounded-circle mb-3"
              width={"100"}
              alt="User Avatar"
            />
            <h5>Tanishk Kumar</h5>
            <p className="text-muted">tanishkk60@gmail.com</p>
          </div>
          <hr />
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/profile" className="text-decoration-none text-dark">
                View Profile
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/settings" className="text-decoration-none text-dark">
                Settings
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/logout" className="text-decoration-none text-dark">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
