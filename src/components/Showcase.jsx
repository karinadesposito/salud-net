import React from "react";
import { scrollToId } from "../utils/scroll";
import demoVideo from "../assets/Salud-Net-video.mp4"; // ✅ import correcto del video


export default function Showcase() {
  return (
    <section className="section-services" id="showcase">
      <div className="container">
        <h2 className="mb-4 text-center">Cómo funciona</h2>

        {/* Tarjetas de ejemplo */}
        <div className="row g-3 mb-4">
          {[1, 2, 3].map((i) => (
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

        {/* Video local en lugar del iframe */}
        <div className="ratio ratio-16x9 mb-4">
          <video
            controls
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              borderRadius: "1rem",
              border: "1px solid var(--brand-border)",
              objectFit: "cover",
            }}
          >
            <source src={demoVideo} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
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


