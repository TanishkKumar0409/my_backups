import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateProfileForm from './UpdateProfileForm/UpdateProfileForm';

export default function Profile(props) {
  const adminData = props.adminData;
  const redirector = useNavigate();

  const [isUpdating, setIsUpdating] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    redirector("/");
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
            {isUpdating ? 'Update Profile' : 'Profile'}
          </h5>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {isUpdating ? (
            <UpdateProfileForm adminData={adminData} />
          ) : (
            <div className="text-center">
              <img
                src={`http://localhost:5000/${adminData.profile}`}
                className="rounded-circle mb-3"
                width={"100px"}
                height={"100px"}
                alt="User Avatar"
              />
              <h5 className="fs-1">{adminData.username}</h5>
              <p className="fs-2">{adminData.name}</p>
              <p className="fs-3">{adminData.email}</p>
              <p className="fs-4">{adminData.contact}</p>
            </div>
          )}
          <hr />
          <div className="btn-group w-100 mb-4">
            {!isUpdating ? (
              <>
                <button
                  onClick={() => setIsUpdating(true)}
                  className="btn btn-primary w-50"
                >
                  Update Profile
                </button>
                <button onClick={handleLogout} className="btn btn-danger w-50">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => setIsUpdating(false)} className="btn btn-secondary w-50">
                Back to Profile
              </button>
            )}
          </div>
        </div>
        {!isUpdating && (
          <button
            type="button"
            className="btn btn-danger btn-sm position-absolute bottom-0 end-0 m-3"
            onClick={() => alert('Delete account functionality goes here')}
          >
            <i className="fa fa-trash me-2"></i>Delete Account
          </button>
        )}
      </div>
    </>
  );
}
