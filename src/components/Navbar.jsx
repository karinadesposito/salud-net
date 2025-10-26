// src/components/Navbar.jsx
import React from "react";
import Logosaludnet from "../assets/logosaludnet.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={Logosaludnet} alt="Salud-Net" className="navbar-logo me-2" />
        
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#offer">Qué ofrecemos</a></li>
            <li className="nav-item"><a className="nav-link" href="#why">¿Por qué personalizar?</a></li>
            <li className="nav-item"><a className="nav-link" href="#showcase">Showcase</a></li>
            <li className="nav-item"><a className="nav-link" href="#quote">Presupuesto</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
