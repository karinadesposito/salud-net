import React from "react";
import { scrollToId } from "../utils/scroll";

export default function Offer() {
  return (
    <section className="section-services has-parallax" id="offer">
      <div className="container">
        <div className="row align-items-center g-7">
          <div className="col-12 col-md-6">
            <h2 className="mb-4">¿Qué ofrecemos?</h2>
            <p className="mb-3">
              Implementación de turnos online, recordatorios automáticos, ficha digital y panel de gestión.
            </p>
            <ul className="mb-4">
              <li>Agenda de turnos por profesional</li>
              <li>Confirmación por WhatsApp / Email</li>
              <li>Ficha editable</li>
              <li>Pagos y comprobantes</li>
            </ul>
            <div className="d-flex gap-2">
              <button
                className="btn btn-dark-on-light"
                type="button"
                onClick={() => scrollToId("quote")}
              >
                Quiero implementarlo
              </button>
              <button
                className="btn btn-dark-on-light"
                type="button"
                onClick={() => scrollToId("why")}
              >
                Ver ventajas
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1583912267559-4f5f0f1a4d7e?q=80&w=1640&auto=format&fit=crop"
                alt="Panel de Salud-Net"
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

