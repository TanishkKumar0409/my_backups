import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div>
          <nav>
            <Link to="/" className="logo">
              Logo
            </Link>
            <button
              className={`hamburger ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <i className="fa fa-bars"></i>
            </button>
            <ul className={isOpen ? "active" : ""}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/students">Students</Link>
              </li>
              <Link to="/students/register" className="btn3">
                Register Student
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
