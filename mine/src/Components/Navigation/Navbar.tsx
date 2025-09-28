import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent flex items-center cursor-pointer"
          >
            Tanishk Kumar
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`cursor-pointer transition-colors ${
                  location.pathname === link.href
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`cursor-pointer transition-colors ${
                    location.pathname === link.href
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
