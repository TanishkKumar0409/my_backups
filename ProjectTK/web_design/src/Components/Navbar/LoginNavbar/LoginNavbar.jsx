import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginNavbar() {
    const [navClass, setNavclass] = useState("")
    useEffect(() => {
        window.addEventListener("scroll", () => {
            var pageScroll = window.scrollY
            setNavclass(pageScroll > 100 ? "navbarCustom" : "")
        })
    })

    return (
        <header className={`responsiveNavbar position-fixed w-100 ${navClass}`} style={{ zIndex: 999 }}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-4 fw-bold" to="/">
                        Project TK
                    </Link>

                    <Link to="/form" className="btn btn-outline-dark">Login</Link>
                </div>
            </nav>


        </header>
    );
}
