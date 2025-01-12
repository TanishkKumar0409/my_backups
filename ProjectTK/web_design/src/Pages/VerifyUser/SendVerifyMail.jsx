import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { noFileAPI } from "../../Services/API/API";
import { toast } from "react-toastify";

export default function SendVerifyMail() {
  const [email, setEmail] = useState("");
  const localUsername = JSON.parse(localStorage.getItem("user"));
  const { username } = useParams();
  const redirector = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (username !== localUsername) {
      redirector(`/verify/send/${localUsername}`);
    }
  }, [username, localUsername, redirector]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataResponse = await noFileAPI.get(`/user/${username}`);
        setData(dataResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [username]);

  useEffect(() => {
    if (data?.email) {
      setEmail(data.email);
    }
  }, [data]);

  const handleSendOtp = async () => {
    try {
      const response = await noFileAPI.post(`/user/verify/send/${username}`, {
        email,
      });
      if (response) {
        toast.success(response.data.message);
        setTimeout(() => redirector(`/verify/${username}`), 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <>
      <section className="bgGradient py-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 rounded shadow-sm p-5 mx-auto text-center bg-light">
              <h3 className="text-center mb-4 text-dark">
                Verify Your Account
              </h3>
              <p className="text-muted">
                Enter your email address to receive a verification OTP.
              </p>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSendOtp}>
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
