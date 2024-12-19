import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { LoginValidationSchema } from "../../../Helper/FormValidationSchemas/FormValidationSchemas.js";

export default function DeleteAccount({ onCancel }) {
    const [otpSent, setOtpSent] = useState(false);
    const [timer, setTimer] = useState(0);
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");

    useEffect(() => {
        let countdown;
        if (otpSent && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (otpSent && timer === 0) {
            onCancel();
        }
        return () => clearInterval(countdown);
    }, [otpSent, timer, onCancel]);

    const handleSendOtp = () => {
        setOtpSent(true);
        setTimer(60);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
        setOtpError("");
    };

    const handleOtpValidation = () => {
        if (!otp) {
            setOtpError("OTP is required");
            return false;
        }
        return true;
    };

    const initialValues = { email: "", password: "", }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: LoginValidationSchema,
        onSubmit: (values) => {
            if (!otpSent) {
                handleSendOtp();
            } else {
                if (handleOtpValidation()) {
                    console.log("Form values:", { ...values, otp });
                }
            }
        },
    });

    return (
        <div className="text-center">
            <p className="text-muted fs-5 mb-4">
                To confirm account deletion, please enter your password and OTP.
            </p>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="email"
                    name="email"
                    className={`form-control mb-4 ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
                    placeholder="Enter your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                )}

                <input
                    type="password"
                    name="password"
                    className={`form-control mb-4 ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                )}

                {!otpSent && (
                    <button type="submit" className="btn btn-custom custom-btn w-100 mb-3">
                        Send OTP
                    </button>
                )}

                {otpSent && (
                    <>
                        <div>
                            <input
                                type="text"
                                name="otp"
                                className={`form-control mb-3 ${otpError ? "is-invalid" : ""}`}
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={handleOtpChange}
                                onBlur={handleOtpValidation}
                            />
                            {otpError && <div className="invalid-feedback">{otpError}</div>}
                            <p className="text-muted mb-4">Enter the OTP within {timer} seconds.</p>
                        </div>
                        <button type="submit" className="btn btn-custom custom-btn w-100 mb-3">
                            Confirm Delete
                        </button>
                    </>
                )}
            </form>
            <button onClick={onCancel} className="btn btn-custom custom-btn w-100">
                Back To Profile
            </button>
        </div>
    );
}
