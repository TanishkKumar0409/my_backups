import React from "react";
import Sidebar from "../../Components/Navigation/Sidebar/Sidebar";
import TopBar from "../../Components/Navigation/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";

export default function AddUser(props) {
  return (
    <>
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar openClass={props.openClass} />
        <div className={`content ${props.openClass}`}>
          <TopBar toggleOpenClass={props.toggleOpenClass} />
          <div className="container-fluid pt-4 px-4">
            <div className="row g-4 justify-content-center">
              <div className="col-sm-12 col-xl-6">
                <div className="bg-sec-custom rounded h-100 p-4">
                  <h2 className="mb-4">Add User</h2>
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="exampleInputName"
                        className="form-control"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="exampleInputEmail"
                        className="form-control"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPhone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="exampleInputPhone"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2">
                      <label for="exampleInputPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="exampleInputPassword"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        type="checkbox"
                        name=""
                        id="exampleCheck1"
                        className="form-check-input"
                      />
                      <label for="exampleCheck1" className="form-control-label">
                        Check me Out
                      </label>
                    </div>
                    <div className="text-end">
                      <button className="btn btn-red">Add User</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
