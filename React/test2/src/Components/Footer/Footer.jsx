import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p className="mb-0">
        © {new Date().getFullYear} Recipe Website. All rights reserved.
      </p>
    </footer>
  );
}
