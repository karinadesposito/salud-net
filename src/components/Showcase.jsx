import React from "react";
import { scrollToId } from "../utils/scroll";
import demoVideo from "../assets/demoJs.mp4";

export default function Showcase() {
  return (
    <section className="section-services" id="showcase">
      <div className="container text-center">
        <h2 className="mb-4">Cómo funciona</h2>

        {/* 🎬 Video ancho y centrado */}
        <div
          className="mx-auto"
          style={{
            maxWidth: "700px", // 🔹 límite visual
            aspectRatio: "21 / 9", // 🔹 formato más panorámico
          }}
        >
          <video
            controls
            autoPlay
            muted
            loop
            style={{
              width: "120",
              height: "120%",
              borderRadius: ".5rem",
              border: "1px solid var(--brand-border)",
              objectFit: "cover",
              boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            }}
          >
            <source src={demoVideo} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        {/* Botones opcionales */}
       
      </div>
    </section>
  );
}



