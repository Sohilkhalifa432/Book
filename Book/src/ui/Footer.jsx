import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-logo">MyApp</span>
        <span className="footer-text">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </span>
        <div className="footer-links">
          <NavLink to="/service">service</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
