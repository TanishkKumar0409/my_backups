import React, { useState } from "react";
import { useFormik } from "formik";
import { noFileAPI } from "../../../Services/API/API.js";
import { toast } from "react-toastify";

export default function DeleteAccount({ onCancel, adminData }) {
    const [otpSent, setOtpSent] = useState(false);

    const sendOtp = async () => {
        try {
            const response = await noFileAPI.post("/user/delete/otp", {
                email: formik.values.email,
                password: formik.values.password,
            });
            if (response.status === 200) {
                toast("OTP sent successfully");
                setOtpSent(true);
            } else {
                toast("Failed to send OTP: " + response.data.message);
            }
        } catch (error) {
            console.error("OTP Error:", error);
            toast("Failed to send OTP. Please try again.");
        }
    };

    const deleteAccount = async () => {
        try {
            const response = await noFileAPI.delete(`/user/delete/${adminData.username}`, {
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
            toast("Failed to delete account. Please try again.");
        }
    };

    const formik = useFormik({
        initialValues: { email: adminData.email, password: "", otp: "" },
        onSubmit: () => {
            if (!otpSent) {
                sendOtp();
            } else {
                deleteAccount();
            }
        },
    });

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
                    <input
                        type="text"
                        name="otp"
                        className="form-control mb-4"
                        placeholder="Enter OTP"
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
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
