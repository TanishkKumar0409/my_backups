import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const loginToken = localStorage.getItem("loginToken");
  const navLinks = loginToken
    ? [
        { to: "/main", label: "Home" },
        { to: "/main/history", label: "History" },
        { to: "/main/storage", label: "Storage" },
        { to: "/contact", label: "Contact" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/contact", label: "Contact" },
      ];

  const socialLinks = ["facebook", "instagram", "youtube"];

  return (
    <footer className="py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <p className="mb-0 fw-semibold">Email:</p>
            <a
              href="mailto:tanishkk60@gmail.com"
              className="text-dark text-decoration-none"
            >
              tanishkk60@gmail.com
            </a>
          </div>
          <div>
            <p className="mb-0 fw-semibold">Contact:</p>
            <a
              href="tel:95576213131"
              className="text-dark text-decoration-none"
            >
              95576213131
            </a>
          </div>
        </div>
        <div className="text-center mb-3">
          <Link to="/">
            <img
              src="https://img.pikbest.com/png-images/20241027/eagle-shield-emblem-logo_11012401.png!bw700"
              alt="Logo"
              className="img-fluid"
              style={{ width: "200px" }}
            />
          </Link>
          <nav className="d-flex justify-content-center my-3">
            <ul className="list-unstyled d-flex fw-bold">
              {navLinks.map((link, index) => (
                <li key={index} className="mx-3">
                  <Link to={link.to} className="text-dark text-decoration-none">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {socialLinks.map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                className="text-dark mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa-brands fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>
        <hr />
        <p className="text-center mb-0 text-secondary">
          &copy; {new Date().getFullYear()} ProjectTK. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
