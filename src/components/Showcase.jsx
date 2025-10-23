import React from "react";
import { scrollToId } from "../utils/scroll";
import "../assets/profesionales.webp"

export default function Showcase() {
  return (
 <section className="section-services" id="showcase">

      <div className="container">
        <h2 className="mb-4 text-center">Cómo funciona</h2>

        <div className="row g-3 mb-4">
          {[1,2,3].map((i) => (
            <div className="col-12 col-md-4" key={i}>
              <div className="card h-100">
                <img
                  src={`https://picsum.photos/seed/health${i}/800/500`}
                  alt={`Pantalla ${i}`}
                  className="card-img-top"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="ratio ratio-16x9 mb-4">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Salud-Net"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "1rem", border: "1px solid var(--brand-border)" }}
          />
        </div>

        <div className="text-center">
          <button
            className="btn btn-dark-on-light"
            type="button"
            onClick={() => scrollToId("quote")}
          >
            Pedir propuesta
          </button>
        </div>
      </div>
    </section>
  );
}
