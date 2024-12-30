import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { noFileAPI } from "../../../Services/API/API.js";
import { toast } from "react-toastify";

export default function DeleteAccount({ onCancel, userData }) {
    const [otpSent, setOtpSent] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);

    const sendOtp = async () => {
        try {
            const response = await noFileAPI.post("/user/delete/otp", {
                email: formik.values.email,
                password: formik.values.password,
            });

            if (response.status === 200) {
                toast("OTP sent successfully");
                setOtpSent(true);
                setTimeRemaining(180);
            } else {
                toast("Failed to send OTP: " + response.data.message);
            }
        } catch (error) {
            console.error("OTP Error:", error);
            toast(error.response.data.error);
        }
    };

    const deleteAccount = async () => {
        try {
            const response = await noFileAPI.delete(`/user/delete/${userData.username}`, {
                data: { deletionOtp: formik.values.otp },
            });
            if (response.status === 200) {
                toast("Account deleted successfully");
                localStorage.clear();
                window.location.reload();
            } else {
                toast("Failed to delete account");
            }
        } catch (error) {
            console.error(error);
            toast(error.response.data.error);
        }
    };

    const formik = useFormik({
        initialValues: { email: userData.email, password: "", otp: "" },
        onSubmit: () => {
            if (!otpSent) {
                sendOtp();
            } else {
                deleteAccount();
            }
        },
    });

    useEffect(() => {
        if (timeRemaining > 0) {
            const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeRemaining === 0 && otpSent) {
            toast("OTP expired. Returning to profile.");
            onCancel();
        }
    }, [timeRemaining, otpSent, onCancel]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <div className="text-center">
            <p className="text-muted fs-5 mb-4">
                To confirm account deletion, please enter your email and password.
            </p>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="email"
                    name="email"
                    className="form-control mb-4"
                    placeholder="Enter your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <input
                    type="password"
                    name="password"
                    className="form-control mb-4"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {otpSent && (
                    <>
                        <input
                            type="text"
                            name="otp"
                            className="form-control mb-4"
                            placeholder="Enter OTP"
                            value={formik.values.otp}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <p className="text-danger mb-4">
                            Time remaining: {formatTime(timeRemaining)}
                        </p>
                    </>
                )}

                <button type="submit" className="btn btn-custom custom-btn w-100 mb-3">
                    {otpSent ? "Delete Account" : "Send OTP"}
                </button>
            </form>

            <button onClick={onCancel} className="btn btn-custom custom-btn w-100">
                Back To Profile
            </button>
        </div>
    );
}
