import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import BannerValidationSchema from "../../../Helper/ValidationSchemas/ValidationSchema";

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

  const initialValues = {
    email: "",
    message: "",
    files: fileNames,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: BannerValidationSchema(),
    onSubmit: (values) => {
      console.log("Form submitted with values:", {
        email: values.email,
        message: values.message || "No message provided",
        files: fileNames,
      });
    },
  });

  return (
    <div className="container-fluid py-5">
      <div className="bg-white text-dark p-md-5 p-3 rounded shadow-sm form-box">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.setFieldValue("files", fileNames);
            formik.handleSubmit();
          }}
        >
          <div
            {...getRootProps()}
            className="dropzone position-relative align-content-center rounded text-center p-5 border-dashed-1 overflow-hidden"
          >
            <input {...getInputProps()} />
            <p className="text-muted animate-hide">
              Drag and drop {fileNames.length ? "more" : "a"} files here or
              <span className="text-primary fw-bold ms-2">click</span> to select
              files
            </p>

            <div className="dropBoxElements">
              <p className="animated-text">Drop</p>
              <p className="animated-text">Your</p>
              <p className="animated-text">Files</p>
            </div>
          </div>

          {formik.errors.files && formik.touched.files && (
            <div className="text-danger mt-2">{formik.errors.files}</div>
          )}

          {fileNames.length > 0 && (
            <div className="mt-3">
              <strong className="selected fs-4">
                Selected Files: <span>{fileNames.length}</span>
              </strong>
              <ul
                className="list-group mt-2"
                style={{ maxHeight: "70px", overflow: "auto" }}
              >
                {fileNames.map((fileName, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center shadow-sm"
                  >
                    <span className="truncated-file-name" >{fileName}</span>
                    <button
                      type="button"
                      className="btn custom-btn btn-custom border-0 overflow-hidden btn-sm"
                      onClick={() => {
                        const updatedFiles = fileNames.filter(
                          (_, i) => i !== index
                        );
                        setFileNames(updatedFiles);
                        formik.setFieldValue("files", updatedFiles);
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
                name="email"
                className={`form-control ${
                  formik.touched.email && formik.errors.email
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Enter Receiver Email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger text-start">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="col-md-6">
              <label htmlFor="message" className="form-label">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                placeholder="Enter your message"
                rows="1"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
            </div>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-danger text-end">
                {formik.errors.message}
              </div>
            ) : null}
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
