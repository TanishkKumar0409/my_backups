import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile(props) {
  const adminData = props.adminData;
  const redirector = useNavigate();

  const [isUpdating, setIsUpdating] = useState(false);  // Track whether we're updating the profile
  const [updatedData, setUpdatedData] = useState({
    name: adminData.name,
    email: adminData.email,
    contact: adminData.contact
  });

  const handleLogout = () => {
    localStorage.clear();
    redirector("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value
    });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Implement profile update logic here, like sending data to the backend
    console.log("Updated Profile Data:", updatedData);
    setIsUpdating(false); // After updating, switch back to profile view
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
          {/* Close button */}
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {isUpdating ? (
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={updatedData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={updatedData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={updatedData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Save Changes</button>
            </form>
          ) : (
            <div className="text-center">
              <img
                src={`http://localhost:5000/${adminData.profile}`}
                className="img-fluid rounded-circle mb-3"
                width={"100"}
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
