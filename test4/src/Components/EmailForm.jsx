import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailForm() {
  const [rName, setRName] = useState(""); // Initialize with empty string
  const [name, setName] = useState(""); // Initialize with empty string
  const [email, setEmail] = useState(""); // Initialize with empty string
  const [phone, setPhone] = useState(""); // Initialize with empty string

  const handleSubmit = (e) => {
    e.preventDefault(); // Fix the typo
    const serviceId = "service_8q1y22g";
    const templateId = "template_gdnvmvf";
    const publicKey = "WJiPh3SwTtEYfH_Go";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: rName,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setPhone("");
        setRName("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Send a Greeting Email</h2>
      <form className="border p-4 shadow-sm rounded" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="to_name">Recipient's Name</label>
          <input
            type="text"
            className="form-control"
            id="to_name"
            name="to_name"
            required
            value={rName}
            placeholder="Enter recipient's name"
            onChange={(e) => setRName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from_name">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="from_name"
            name="from_name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="from_email">Your Email</label>
          <input
            type="email"
            value={email}
            className="form-control"
            id="from_email"
            name="from_email"
            required
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from_phone">Your Phone Number</label>
          <input
            type="text"
            value={phone}
            className="form-control"
            id="from_phone"
            name="from_phone"
            required
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Send Email
        </button>
      </form>
    </div>
  );
}
