import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function Login(props) {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password cannot exceed 20 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[\W_]/, "Password must contain at least one special character")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      toast.success("form success");
    },
  });

  return (
    <>
      <h1 className="m-0 p-2">Welcome Back</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="inputBox">
          <label htmlFor="EmailLogin">Email:</label>
          <input
            type="text"
            id="EmailLogin"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="inputBox">
          <label htmlFor="PasswordLogin">Password:</label>
          <input
            type="password"
            id="PasswordLogin"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <button type="button" className="btnreg" onClick={props.handleRegForm}>
          Create New Account
        </button>
        <button type="submit" className="btnSub">
          Submit
        </button>
      </form>
    </>
  );
}
