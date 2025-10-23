// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span>© {new Date().getFullYear()} Salud-Net</span>
        <span className="text-accent">NeoHealth Theme</span>
      </div>
    </footer>
  );
}
