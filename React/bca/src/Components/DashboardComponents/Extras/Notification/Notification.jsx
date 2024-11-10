import React from "react";

export default function Notification() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-sec-custom rounded p-4" style={{maxHeight:"350px",overflow:"auto"}}>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="mb-0 text-theme">Notification</h6>
          </div>
          <div className="d-flex align-items-center border-bottom py-3" >
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-0">Profile Updated</h5>
                <small>15 minutes ago</small>
              </div>
              <span>Short Message goes here ....</span>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-3">
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-0">Profile Updated</h5>
                <small>15 minutes ago</small>
              </div>
              <span>Short Message goes here ....</span>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-3">
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-0">Profile Updated</h5>
                <small>15 minutes ago</small>
              </div>
              <span>Short Message goes here ....</span>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-3">
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-0">Profile Updated</h5>
                <small>15 minutes ago</small>
              </div>
              <span>Short Message goes here ....</span>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-3">
            <div className="w-100 ms-3">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-0">Profile Updated</h5>
                <small>15 minutes ago</small>
              </div>
              <span>Short Message goes here ....</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
