import React from "react";

export default function Cards(props) {
  return (
    <>
      <div
        className={`card border-${
          props.darkTheme === "dark" ? "light" : "dark"
        } h-100  bg-${props.darkTheme} text-${
          props.darkTheme === "dark" ? "light" : "dark"
        } shadow-lg`}
      >
        <div
          className={`card-header border-${
            props.darkTheme === "dark" ? "light" : "dark"
          }`}
        >
          <img
            src={props.Image}
            className="card-img-top img-fluid"
            alt="Offbeat Pixels Project"
            style={{ height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.CompanyName}</h5>
          <p className="card-text">{props.title}</p>
          <button
            className={`btn btn-${
              props.darkTheme === "dark" ? "light" : "dark"
            }`}
            data-bs-toggle="modal"
            data-bs-target={props.ModalTarget}
          >
            <i className="fas fa-eye"></i> View Project
          </button>
        </div>
      </div>
    </>
  );
}
