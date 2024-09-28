import React from "react";

export default function Form() {
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <div className="formBox">
              <div>
                <div className="card w-100 shadow">
                  <span></span>
                  <form className="d-flex flex-column">
                    <div className="d-flex labBox">
                      <label htmlFor="">Name:</label>
                      <input type="text" />
                    </div>
                    <div className="d-flex labBox">
                      <label htmlFor="">Name:</label>
                      <input type="text" />
                    </div>
                    <div className="d-flex labBox">
                      <label htmlFor="">Name:</label>
                      <input type="text" />
                    </div>
                    <div className="d-flex labBox">
                      <label htmlFor="">Name:</label>
                      <input type="text" />
                    </div>
                    <div className="d-flex labBox">
                      <label htmlFor="">Name:</label>
                      <input type="text" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
