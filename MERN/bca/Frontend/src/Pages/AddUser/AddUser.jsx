import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const Navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact: Yup.string()
      .matches(/^[0-9]{10}$/, "contact number must be 10 digits")
      .required("contact number is required"),
    course: Yup.string().required("Course selection is required"),
    file: Yup.mixed()
      .required("File is required")
      .test(
        "fileSize",
        "File is too large",
        (value) => value && value.size <= 1048576
      )
      .test(
        "fileType",
        "Unsupported File Format",
        (value) =>
          value &&
          ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
      ),
  });

  const initialValues = {
    name: "",
    email: "",
    contact: "",
    course: "",
    file: null,
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("contact", values.contact);
    formData.append("course", values.course);
    formData.append("profile", values.file);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.success(response.data.message);
        Navigate("/manage-user");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4 justify-content-center">
          <div className="col-sm-12 col-xl-6">
            <div className="bg-sec-custom rounded h-100 p-4">
              <h2 className="mb-4">Add User</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="file" className="form-label">
                    Upload File
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="form-control"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "file",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  {formik.touched.file && formik.errors.file && (
                    <div className="text-danger">{formik.errors.file}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-danger">{formik.errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">
                    contact
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.contact}
                  />
                  {formik.touched.contact && formik.errors.contact && (
                    <div className="text-danger">{formik.errors.contact}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="course" className="form-label">
                    Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.course}
                  >
                    <option value="">Select a course</option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                    <option value="BA">BA</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="MA">MA</option>
                    <option value="M.Tech">M.Tech</option>
                  </select>
                  {formik.touched.course && formik.errors.course && (
                    <div className="text-danger">{formik.errors.course}</div>
                  )}
                </div>

                <div className="text-end">
                  <button type="submit" className="btn btn-red">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
