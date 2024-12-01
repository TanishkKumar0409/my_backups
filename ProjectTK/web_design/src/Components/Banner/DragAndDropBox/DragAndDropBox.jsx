import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function DragAndDropBox() {
  const [fileName, setFileName] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFileName(acceptedFiles[0]?.name || "");
    },
  });

  return (
    <div className="container-fluid py-5">
      <div className="bg-light text-dark p-md-5 p-3 rounded shadow-sm">
        <form>
          <div
            {...getRootProps()}
            className="dropzone position-relative rounded text-center p-5 border border-dashed border-primary"
          >
            <input {...getInputProps()} />
            <p className="text-muted animate-hide">
              Drag and drop a file here or
              <span className="text-primary fw-bold ms-2">click</span> to select
              a file
            </p>

            <div className="dropBoxElements">
              <p className="animated-text">Drop</p>
              <p className="animated-text">Your</p>
              <p className="animated-text">File</p>
            </div>

            {fileName && (
              <p className="mt-3">
                <strong>Selected File:</strong> {fileName}
              </p>
            )}
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
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
            <button type="submit" className="btn btn-primary px-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
