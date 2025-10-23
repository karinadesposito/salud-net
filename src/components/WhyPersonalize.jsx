import React from "react";
import { scrollToId } from "../utils/scroll";

export default function WhyPersonalize() {
  return (
    <section className="section-dark has-parallax" id="why">
      <div className="container">
        <div className="row align-items-center flex-md-row-reverse g-4">
          <div className="col-12 col-md-6">
            <h2 className="mb-3">¿Por qué personalizar?</h2>
            <p className="mb-3">
              Tu identidad visual y tu modo de atención importan. Adaptamos la plataforma a tus flujos y estilo.
            </p>
            <ul className="mb-4">
              <li>Marca propia y dominio</li>
              <li>Formularios y permisos a medida</li>
              <li>Reportes y métricas según tu práctica</li>
              <li>Escalable y seguro</li>
            </ul>
            <div className="d-flex gap-2">
              <button
                className="btn btn-light-on-dark"
                type="button"
                onClick={() => scrollToId("showcase")}
              >
                Ver ejemplos
              </button>
              <button
                className="btn btn-light-on-dark"
                type="button"
                onClick={() => scrollToId("quote")}
              >
                Hablar de tu caso
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1581594693700-2271c4d1d8b6?q=80&w=1640&auto=format&fit=crop"
                alt="Personalización en Salud-Net"
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

