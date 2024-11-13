import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

export default function SignIn(props) {
  const Navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        values
      );
      if (response.status === 200) {
        toast.success(response.data.message);

        const token = response.data.token;
        const adminData = JSON.stringify(response.data.existingAdmin);

        localStorage.setItem("token", token);
        localStorage.setItem("admin", adminData);

        Navigate("/");

        window.location.reload();
      }
    } catch (error) {
      if (error.status === 404) {
        toast.error(error.response.data.error);
      } else if (error.status === 500) {
        toast.error(error.response.data.error);
      }
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="container-fluid">
      <div
        className={`row h-100 ${
          props.theme === "sun" ? "bg-white" : "bg-black"
        } align-items-center justify-content-center`}
        style={{ minHeight: "100vh" }}
      >
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-sec-custom rounded p-4 p-sm-5 my-4 mx-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <Link to="/">
                <h3 className="text-red">
                  <i className="fa fa-user-edit me-2"> BCA </i>
                </h3>
              </Link>
              <h3>Sign In</h3>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-describedby="emailHelp"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-describedby="passwordHelp"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-red py-3 w-100 mb-4">
                Sign In
              </button>
              <p className="text-center mb-0">
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
