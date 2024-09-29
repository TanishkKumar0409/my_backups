import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Registration(props) {
  

  return (
    <>
      <h1 className="m-0 p-2">Welcome to Register</h1>
      <form className="form" onSubmit={handleEmail}>
        <div className="inputBox">
          <label htmlFor="NameReg">Name:</label>
          <input
            type="text"
            id="NameReg"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label htmlFor="EmailReg">Email:</label>
          <input
            type="email"
            id="EmailReg"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label htmlFor="ContactReg">Contact:</label>
          <input
            type="text"
            id="ContactReg"
            value={Contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="inputBox">
          <label htmlFor="PasswordReg">Password:</label>
          <input
            type="password"
            id="PasswordReg"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btnreg" type="button" onClick={props.handleRegForm}>
          Already Have an Account
        </button>
        <button className="btnSub" type="submit">
          Submit
        </button>
      </form>c
    </>
  );
}
