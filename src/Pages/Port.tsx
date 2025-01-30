import React from "react";
import "./Port.css";

const Port = () => {
  return (
    <div className="port-container">
      <nav className="port-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Heading */}
      <p className="heading">Hello, I'm Chandana</p>

      {/* Paragraph */}
      <p className="description">
        Design isn’t just about pixels; it’s about perception. I craft
        experiences that users feel before they even realize it.
      </p>
    </div>
  );
};

export default Port;
