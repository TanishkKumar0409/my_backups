import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function BackendNavbar() {

    const [navClass, setNavclass] = useState("");
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const pageScroll = window.scrollY;
            setNavclass(pageScroll > 100 ? "navbarCustom" : "");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path ? "active" : "";

    return (
        <header className={`responsiveNavbar position-fixed w-100 ${navClass}`} style={{ zIndex: 999 }}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4 fw-bold" to="/">
                        Project TK
                    </Link>

                    <div className="d-flex align-items-center">
                        <button
                            className="navbar-toggler border-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${isActive("/main")}`} to="/main">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${isActive("/admin/dashboard")}`} to="/admin/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}
