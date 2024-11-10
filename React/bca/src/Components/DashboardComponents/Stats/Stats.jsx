import React from "react";

export default function Stats() {
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-6 col-xl-3">
            <div className="bg-sec-custom rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-user-secret fa-3x text-red"></i>
              <div className="ms-3">
                <h4 className="mb-2 text-end">BCA</h4>
                <h5 className="mb-0 text-end">7 Students</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-sec-custom rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-user-tie fa-3x text-red"></i>
              <div className="ms-3">
                <h4 className="mb-2 text-end">BBA</h4>
                <h5 className="mb-0 text-end">10 Students</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-sec-custom rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-user-shield fa-3x text-red"></i>
              <div className="ms-3">
                <h4 className="mb-2 text-end">BA</h4>
                <h5 className="mb-0 text-end">12 Students</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-sec-custom rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-user-nurse fa-3x text-red"></i>
              <div className="ms-3">
                <h4 className="mb-2 text-end">BHA</h4>
                <h5 className="mb-0 text-end">3 Students</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
