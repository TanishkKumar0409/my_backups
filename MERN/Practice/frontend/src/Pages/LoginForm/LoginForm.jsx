import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function LoginForm() {
  const reDirect = useNavigate();

  const token = localStorage.getItem("token");

  const [errorShown, setErrorShown] = useState({
    email: false,
    password: false,
  });

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        values
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        const token = response.data.token;
        localStorage.setItem("token", token);
        reDirect("/");
      }
    } catch (error) {
      if (error.status === 404) {
        toast.error(error.response.data.message);
      } else if (error.status === 500) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleToastError = (field) => {
    if (!errorShown[field]) {
      setErrorShown((prev) => ({ ...prev, [field]: true }));
      toast.error(formik.errors[field], { position: "top-right" });
    }
  };

  if (token) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return (
    <section className="container-fluid bg-dark text-light vh-100 d-flex align-items-center justify-content-center">
      <div className="col-md-5 shadow p-4 rounded-5">
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={(e) => {
                setErrorShown((prev) => ({ ...prev, email: false }));
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              autoComplete="email"
            />
            {formik.touched.email &&
              formik.errors.email &&
              handleToastError("email")}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={(e) => {
                setErrorShown((prev) => ({ ...prev, password: false }));
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password &&
              formik.errors.password &&
              handleToastError("password")}
          </div>
          <div className="d-flex justify-content-end mb-3">
            <Link to="/register" className="text-decoration-none text-light">
              Register
            </Link>
          </div>
          <button type="submit" className="btn btn-light w-100">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
