import React from "react";
import "../styles/Footer.css"; // CSS Import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>SkinCheck</h2>
          <p>Protect your skin, detect early, and stay healthy.</p>
        </div>

        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/prevention">Prevention</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon">🔵</a>
            <a href="#" className="icon">🟣</a>
            <a href="#" className="icon">🔴</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SkinCheck. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
