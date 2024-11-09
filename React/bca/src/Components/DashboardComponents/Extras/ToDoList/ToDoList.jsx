import React from "react";
import { Link } from "react-router-dom";

export default function ToDoList() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-xl-4">
        <div className="h-100 bg-sec-custom rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0 text-white">To Do List</h6>
            <Link to="/">Show All</Link>
          </div>
          <div className="d-flex mb-2">
            <input
              type="text"
              placeholder="Enter Task"
              className="form-control custom-placeholder bg-dark border-0"
            />
            <button className="btn btn-red ms-2">Add</button>
          </div>
          <div className="d-flex align-items-center border-bottom py-2">
            <input type="checkbox" className="form-check-input m-0" />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span>Short task goes here...</span>
                <button className="btn btn-sm btn-red">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-2">
            <input type="checkbox" className="form-check-input m-0" />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span>Short task goes here...</span>
                <button className="btn btn-sm btn-red">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-2">
            <input type="checkbox" className="form-check-input m-0" />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span>Short task goes here...</span>
                <button className="btn btn-sm btn-red">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center border-bottom py-2">
            <input type="checkbox" className="form-check-input m-0" />
            <div className="w-100 ms-3">
              <div className="d-flex w-100 align-items-center justify-content-between">
                <span>Short task goes here...</span>
                <button className="btn btn-sm btn-red">
                  <i className="fa fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
