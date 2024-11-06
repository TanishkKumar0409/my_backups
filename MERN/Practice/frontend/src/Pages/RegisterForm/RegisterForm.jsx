import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const [errorShown, setErrorShown] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(4, "Name must be at least 4 characters")
      .max(50, "Name cannot exceed 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/[0-9]/, "Password must contain a number")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user/new",
          values
        );
        toast.success(response.data.message);
      } catch (error) {
        if (error.status === 400) {
          toast.error(error.response.data.message);
        } else if (error.status === 500) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    },
  });

  const handleToastError = (field) => {
    if (!errorShown[field]) {
      setErrorShown((prev) => ({ ...prev, [field]: true }));
      toast.error(formik.errors[field], { position: "top-right" });
    }
  };

  return (
    <section className="container-fluid bg-dark text-light vh-100 d-flex align-items-center justify-content-center">
      <div className="col-md-5 shadow p-4 rounded-5">
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={(e) => {
                setErrorShown((prev) => ({ ...prev, name: false }));
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              autoComplete="name"
            />
            {formik.touched.name &&
              formik.errors.name &&
              handleToastError("name")}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
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
            <label className="form-label" htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              onChange={(e) => {
                setErrorShown((prev) => ({ ...prev, phone: false }));
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              autoComplete="phone"
            />
            {formik.touched.phone &&
              formik.errors.phone &&
              handleToastError("phone")}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
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
          <button type="submit" className="btn btn-light w-100">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
