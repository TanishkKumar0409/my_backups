import React from "react";

export default function Login(props) {
  return (
    <>
      <h1 className="m-0 p-2">WelCome Back</h1>
      <form className="form">
        <div className="inputBox">
          <label htmlFor="EmailLogin">Email:</label>
          <input type="text" id="EmailLogin" />
        </div>
        <div className="inputBox">
          <label htmlFor="PasswordLogin">Password:</label>
          <input type="text" id="PasswordLogin" />
        </div>
        <button className="btnreg" onClick={props.handleRegForm}>
          Create New Account
        </button>
        <button className="btnSub">Submit</button>
      </form>
    </>
  );
}
