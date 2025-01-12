import React from "react";
import { Link } from "react-router-dom";

export default function Profile(props) {
  const userData = props.userData;

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const APIurl = process.env.REACT_APP_API;

  const displaySize = (sizeInBytes) => {
    if (sizeInBytes >= 1024 * 1024 * 1024) {
      return `${(sizeInBytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
    } else {
      return `${(sizeInBytes / 1024 / 1024).toFixed(2)} MB`;
    }
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasProfile"
      aria-labelledby="offcanvasProfileLabel"
    >
      <div className="offcanvas-header bg-light border-bottom">
        <h5
          className="offcanvas-title text-dark fs-2 fw-bold"
          id="offcanvasProfileLabel"
        >
          Profile
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body text-center bg-light">
        {/* User Avatar */}
        <img
          src={`${APIurl}${userData.profile}`}
          className="rounded mb-4 shadow-sm"
          width="120px"
          height="120px"
          alt="User Avatar"
        />
        <h5 className="fs-3 fw-bold text-dark">{userData.username}</h5>

        {/* User Information */}
        <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
          <p className="fs-5 text-muted">Name:</p>
          <p className="fs-5 text-dark">{userData.name}</p>
        </div>

        <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
          <p className="fs-6 text-muted">Email:</p>
          <p className="fs-6 text-dark text-truncate">{userData.email}</p>
        </div>

        <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
          <p className="fs-6 text-muted">Contact:</p>
          <p className="fs-6 text-dark">{userData.contact}</p>
        </div>

        <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
          <p className="fs-6 text-muted">Used Storage:</p>
          <p className="fs-6 text-dark">{displaySize(userData.usedStorage)}</p>
        </div>

        <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
          <p className="fs-6 text-muted">Total Storage:</p>
          <p className="fs-6 text-dark">{displaySize(userData.totalStorage)}</p>
        </div>

        <div className="btn-group w-100 mb-4">
          <Link
            to={`/main/user/${userData.username}`}
            className="btn btn-custom custom-btn text-white text-nowrap w-50"
          >
            View Profile
          </Link>

          <button
            onClick={handleLogout}
            className="btn btn-custom custom-btn text-nowrap w-50"
          >
            Logout
          </button>
        </div>
        <div className="text-end ">
          {userData.status === "UNVERIFIED" ? (
            <Link to={`/verify/send/${userData.username}`} className="btn btn-sm btn-custom custom-btn text-nowrap w-50">
              Verify {userData.username}
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
