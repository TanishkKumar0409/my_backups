import React from 'react';
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="py-4">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="text-start">
                        <p className="mb-0 fw-semibold">Email:</p><a href="mailto:tanishkk60@gmail.com" className="text-dark text-decoration-none fw-semibold">tanishkk60@gmail.com</a>
                    </div>
                    <div className="text-end">
                        <p className="mb-0 fw-semibold">Contact:</p>
                        <a href="tel:95576213131" className="text-dark text-decoration-none fw-semibold">95576213131</a>
                    </div>
                </div>


                <div className="text-center mb-3">
                    <Link to={"/"}><img
                        src="https://img.pikbest.com/png-images/20241027/eagle-shield-emblem-logo_11012401.png!bw700"
                        alt="Logo"
                        className="img-fluid fa-bounce"
                        style={{ width: '200px' }}
                    /></Link>

                    <nav className="d-flex justify-content-center align-items-center mb-3">
                        <ul className="list-unstyled d-flex fw-bold">
                            <li className="mx-3">
                                <Link to="/main" className="text-dark text-decoration-none">Home</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="/user/history" className="text-dark text-decoration-none">History</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="/user/storage" className="text-dark text-decoration-none">Storage</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="/contact" className="text-dark text-decoration-none">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="mb-3">
                        <a href="https://facebook.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <hr />
                <div className="text-center">
                    <p className="mb-0 text-secondary">&copy; {new Date().getFullYear()} ProjectTK. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
