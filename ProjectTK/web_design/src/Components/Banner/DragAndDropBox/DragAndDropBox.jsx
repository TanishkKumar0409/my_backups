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
    <div className="bg-white p-3 rounded">
      <form>
        <div
          {...getRootProps()}
          className="dropzone border border-2 rounded"
          style={{
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag and drop a file here or click to select a file</p>

          {fileName && (
            <p>
              <strong>Selected File:</strong> {fileName}
            </p>
          )}
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="form-control"
              placeholder="Enter your message"
              rows="1"
            />
          </div>
        </div>

        <div className="mt-3 text-center">
          <button className="custom-btn btn-12">
            <span>Click!</span>
            <span>Read More</span>
          </button>
        </div>
      </form>
    </div>
  );
}
