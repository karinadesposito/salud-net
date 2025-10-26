import React from "react";
import { scrollToId } from "../utils/scroll";
import Adm from "../assets/adm.png"; // ✅ imagen local

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
  <div className="card h-100 shadow-sm">
    <img
      src={Adm}
      alt="Personalización en Salud-Net"
      className="card-img-top"
      style={{
        objectFit: "cover",
        borderRadius: "0.5rem",
        height: "100%",
      }}
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

