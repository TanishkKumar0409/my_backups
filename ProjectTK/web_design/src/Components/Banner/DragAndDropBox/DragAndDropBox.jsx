import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function DragAndDropBox() {
  const [fileNames, setFileNames] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFileNames((prevFileNames) => [
        ...prevFileNames,
        ...acceptedFiles.map((file) => file.name),
      ]);
    },
    multiple: true,
  });

  return (
    <div className="container-fluid py-5 ">
      <div className="bg-white text-dark p-md-5 p-3 rounded shadow-sm form-box">
        <form>
          <div
            {...getRootProps()}
            className="dropzone position-relative align-content-center rounded text-center p-5 border-dashed-1 overflow-hidden"
          >
            <input {...getInputProps()} />
            <p className="text-muted animate-hide">
              Drag and drop {fileNames.length ? "more" : "a"} file(s) here or
              <span className="text-primary fw-bold ms-2">click</span> to select
              files
            </p>

            <div className="dropBoxElements">
              <p className="animated-text">Drop</p>
              <p className="animated-text">Your</p>
              <p className="animated-text">Files</p>
            </div>
          </div>

          {fileNames.length > 0 && (
            <div className="mt-3">
              <strong>Selected Files:</strong>
              <ul
                className="list-group mt-2"
                style={{ maxHeight: "70px", overflow: "auto" }}
              >
                {fileNames.map((fileName, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center shadow-sm"
                  >
                    <span>{fileName}</span>
                    <button
                      type="button"
                      className="btn custom-btn btn-custom border-0 overflow-hidden btn-sm"
                      onClick={() => {
                        setFileNames((prevFileNames) =>
                          prevFileNames.filter((_, i) => i !== index)
                        );
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="row mt-4">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter Receiver Email"
                autoComplete="email"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Enter your message"
                rows="1"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <button
              type="submit"
              className="btn custom-btn btn-custom border-0 overflow-hidden"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
