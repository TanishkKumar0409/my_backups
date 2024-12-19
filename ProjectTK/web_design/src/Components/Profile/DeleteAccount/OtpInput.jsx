import React, { useState } from "react";

export default function OTPInput() {
    const [otp, setOtp] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(otp);
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter OTP"
                    maxLength="6"
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                />
                <p className="text-muted mb-4">Enter the OTP within 60 seconds.</p>
                <button className="btn btn-custom custom-btn w-100 mb-3">
                    Confirm Delete
                </button>
            </fieldset>
        </form>
    );
}
