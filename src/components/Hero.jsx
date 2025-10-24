import React from "react";
import { scrollToId } from "../utils/scroll";
import heroImg from "../assets/profesionales.webp";


export default function Hero() {
  return (
    <section
      className="section-dark hero parallax"
      id="home"
      style={{ "--hero-image": `url(${heroImg})` }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">Salud-Net</h1>
        <p className="lead mb-4">
          Transformá tu atención con tecnología: turnos online, agenda inteligente y una web que trabaja por vos
        </p>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-light-on-dark btn-lg" onClick={() => scrollToId("quote")} type="button">
            Solicitar presupuesto
          </button>
          <button className="btn btn-light-on-dark btn-lg" onClick={() => scrollToId("showcase")} type="button">
            Ver demo
          </button>
        </div>
      </div>
    </section>
  );
}




