import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUp(props) {
  const Navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    username: Yup.string().required("Username is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
  });

  const handleSubmit = (values) => {
    const formValues = JSON.stringify(values);
    localStorage.setItem("user", formValues);
    Navigate("/sign-in");
  };

  const formik = useFormik({
    initialValues: { username: "", email: "", phone: "", password: "" },
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
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 content-center">
          <div className="bg-sec-custom rounded p-4 p-sm-5 my-4 mx-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <Link to="/">
                <h3 className="text-red">
                  <i className="fa fa-user-edit me-2">DarkPan</i>
                </h3>
              </Link>
              <h3>Sign Up</h3>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-danger">{formik.errors.username}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-danger">{formik.errors.phone}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-danger">{formik.errors.password}</div>
                )}
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="egCheck1"
                    id="egCheck1"
                    className="form-check-input"
                  />
                  <label htmlFor="egCheck1">Check me Out</label>
                </div>
                <a href="/">Forgot Password</a>
              </div>
              <button type="submit" className="btn btn-red py-3 w-100 mb-4">
                Sign Up
              </button>
              <p className="text-center mb-0">
                Already Have an account? <Link to="/sign-in">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
