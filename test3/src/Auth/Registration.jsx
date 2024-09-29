import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Registration(props) {
  const serviceId = "service_8q1y22g";
  const templateId = "template_gdnvmvf";
  const publicKey = "WJiPh3SwTtEYfH_Go";

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleEmail = (values) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      from_phone: values.phone,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Mail Sent Successfully");
        formik.resetForm();
      })
      .catch((error) => {
        toast.error("An error occurred: " + error.text);
      });
  };

  const handleSubmit = (values) => {
    handleEmail(values);
    console.log("Form submitted", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <h1 className="m-0 p-2">Welcome to Register</h1>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="inputBox">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="inputBox">
          <label htmlFor="phone">Contact:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            required
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="error">{formik.errors.phone}</div>
          )}
        </div>
        <div className="inputBox">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <button className="btnreg" type="button" onClick={props.handleRegForm}>
          Already Have an Account
        </button>
        <button className="btnSub" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
