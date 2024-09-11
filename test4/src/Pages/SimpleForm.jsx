import React, { useState } from "react";

export default function SimpleForm(props) {
  const [Text, setText] = useState();
  return (
    <>
      <div className="container" style={props.RootColors}>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <div className="col-md-4">
            <div className="card mt-5 shadow-lg">
              <div className="card-header">
                <h1 className="text-center">Simple Form</h1>
              </div>
              <div className="card-body">
                <form action="">
                  <div>
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="Enter Username"
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                    />
                    <input
                      type="submit"
                      className="btn btn-primary mt-3"
                      onClick={(e) => {
                        e.preventDefault();
                        window.alert("My Name is " + Text);
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
