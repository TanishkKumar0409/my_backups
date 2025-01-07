import React, { useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm/UpdateProfileForm";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

export default function Profile(props) {
  const userData = props.userData;

  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasProfile"
        aria-labelledby="offcanvasProfileLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasProfileLabel">
            {isDeleting
              ? "Delete Account"
              : isUpdating
              ? "Update Profile"
              : "Profile"}
          </h5>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => {
              setIsUpdating(false);
              setIsDeleting(false);
            }}
          ></button>
        </div>
        <div className="offcanvas-body">
          {isDeleting ? (
            <DeleteAccount
              onCancel={() => setIsDeleting(false)}
              userData={userData}
            />
          ) : isUpdating ? (
            <UpdateProfileForm userData={userData} />
          ) : (
            <div className="text-center">
              <img
                src={`${APIurl}${userData.profile}`}
                className="rounded-circle mb-3 shadow"
                width="150px"
                height="150px"
                alt="User Avatar"
              />
              <h5 className="fs-1">{userData.username}</h5>

              <div className="d-flex justify-content-between mb-2">
                <p className="fs-2 text-muted">Name:</p>
                <p className="fs-2">{userData.name}</p>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="fs-3 text-muted">Email:</p>
                <p className="fs-3 truncated-profile">{userData.email}</p>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="fs-4 text-muted">Contact:</p>
                <p className="fs-4">{userData.contact}</p>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="fs-4 text-muted">Used Storage:</p>
                <p className="fs-4">{displaySize(userData.usedStorage)}</p>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="fs-4 text-muted">Total Storage:</p>
                <p className="fs-4">{displaySize(userData.totalStorage)}</p>
              </div>
            </div>
          )}
          <hr />
          {!isDeleting && (
            <div className="btn-group w-100 mb-4">
              {!isUpdating ? (
                <>
                  <button
                    onClick={() => setIsUpdating(true)}
                    className="btn btn-custom custom-btn w-50"
                  >
                    Update Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="btn btn-custom custom-btn w-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsUpdating(false)}
                  className="btn btn-custom custom-btn w-50"
                >
                  Back to Profile
                </button>
              )}
            </div>
          )}
          {!isUpdating && !isDeleting && (
            <div className="col text-end ">
              <button
                type="button"
                className="btn btn-custom custom-btn btn-sm"
                onClick={() => setIsDeleting(true)}
              >
                <i className="fa fa-trash me-2"></i>Delete Account
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
