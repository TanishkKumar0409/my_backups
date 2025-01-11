import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [isOTPVisible, setIsOTPVisible] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes countdown in seconds
  const [isTimerActive, setIsTimerActive] = useState(false);
  const redirector = useNavigate();

  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      redirector("/"); // Redirect to home if timer expires
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer, redirector]);

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      otp:
        step === 2
          ? Yup.string()
              .length(4, "OTP must be 4 digits")
              .required("OTP is required")
          : Yup.string(),
      password:
        step === 3
          ? Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Required")
          : Yup.string(),
      confirmPassword:
        step === 3
          ? Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm password is required")
          : Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (step === 1) {
        // Step 1: Submit Email, show OTP field
        setIsOTPVisible(true);
        setStep(2); // Move to OTP step
        setIsTimerActive(true); // Start the timer for OTP step
      } else if (step === 2) {
        // Step 2: Verify OTP and move to password change
        setStep(3); // Move to password reset step
      } else if (step === 3) {
        // Step 3: Submit New Password
        alert("Password changed successfully!");
        redirector("/"); // Redirect after password change
      }
    },
  });

  return (
    <section className="bgGradient py-5 vh-100 align-content-center">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 p-5 bg-light rounded mx-auto">
            <h3 className="text-center text-dark">
              {step === 1
                ? "Enter Your Email"
                : step === 2
                ? "Verify OTP"
                : "Set New Password"}
            </h3>
            <p className="text-center mb-4 text-dark">
              {step === 1
                ? "Please enter your email to receive a password reset OTP."
                : step === 2
                ? "Enter the OTP sent to your email."
                : "Enter your new password and confirm it."}
            </p>
            <form onSubmit={formik.handleSubmit}>
              {step === 1 && (
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
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
              )}

              {step === 2 && isOTPVisible && (
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">
                    OTP (4 digits)
                  </label>
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.otp}
                  />
                  {formik.touched.otp && formik.errors.otp && (
                    <div className="text-danger">{formik.errors.otp}</div>
                  )}
                  <div className="mt-2 text-muted">
                    Time remaining:{" "}
                    <span className="text-danger">
                      {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
                      {timer % 60}
                    </span>
                  </div>
                </div>
              )}

              {step === 3 && (
                <>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <div className="text-danger">
                          {formik.errors.confirmPassword}
                        </div>
                      )}
                  </div>
                </>
              )}

              <button type="submit" className="btn btn-custom custom-btn w-100">
                {step === 1
                  ? "Submit Email"
                  : step === 2
                  ? "Verify OTP"
                  : "Submit New Password"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
