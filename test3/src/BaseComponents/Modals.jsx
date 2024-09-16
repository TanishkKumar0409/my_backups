import React from "react";

export default function Modals(props) {
  return (
    <>
      <div
        className="modal fade "
        id={props.ModalTarget}
        tabIndex="-1"
        aria-labelledby="offbeatpixelsModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-lg modal-dialog-centered">
          <div
            className={`modal-content bg-${props.darkTheme} text-${
              props.darkTheme === "dark" ? "light" : "dark"
            }`}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="offbeatpixelsModalLabel">
                {props.ModalHead}
              </h5>
              <button
                type="button"
                className={`btn-close btn-close-${
                  props.darkTheme === "dark" ? "light" : "dark"
                }`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <div className="ratio ratio-16x9">
                <iframe
                  src={props.ModalVideoSrc}
                  title={props.ModalHead}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="shadow rounded-5"
                ></iframe>
              </div>
              <p className="mt-3">{props.ModalInfo}</p>
              <p>{props.ModalTech}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                <i className="fas fa-times"></i> Close
              </button>
              <a
                href={props.ModalLink}
                className={`btn btn-${
                  props.darkTheme === "dark" ? "light" : "dark"
                }`}
              >
                <i className="fas fa-link"></i> View Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
