import React from "react";

export default function Quote() {
  const sendMail = () => {
    window.location.href =
      "mailto:contacto@saludnet.com?subject=Presupuesto%20Salud-Net";
  };

  return (
  <section className="section-services" id="quote">

      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <h2 className="mb-3">Solicitud de presupuesto</h2>
            <p className="mb-4">
              Contanos tu especialidad, cantidad de profesionales y qué módulos necesitás.
            </p>
            <ul className="mb-4">
              <li>¿Cuántos profesionales y recepcionistas?</li>
              <li>¿Qué módulos? (turnos, HCE, pagos, recordatorios, etc.)</li>
              <li>¿Necesitás migrar datos?</li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-light-on-dark" type="button" onClick={sendMail}>
                Enviar por Email
              </button>
              <button className="btn btn-light-on-dark" type="button" data-bs-toggle="modal" data-bs-target="#quoteModal">
                Completar formulario
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="card h-100 p-3">
              <h6 className="mb-2">Operatoria</h6>
              <ol className="mb-0">
                <li>Te contactamos para entender el alcance.</li>
                <li>Propuesta técnica + comercial.</li>
                <li>Implementación por etapas.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de solicitud */}
      <div className="modal fade" id="quoteModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-surface">
            <div className="modal-header">
              <h5 className="modal-title">Solicitud de presupuesto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar" />
            </div>
            <div className="modal-body">
              <form className="vstack gap-3">
                <input className="form-control" type="text" placeholder="Nombre y apellido" />
                <input className="form-control" type="email" placeholder="Email" />
                <input className="form-control" type="tel" placeholder="Teléfono (opcional)" />
                <select className="form-select" defaultValue="">
                  <option value="" disabled>Seleccioná módulos</option>
                  <option>Turnos online</option>
                  <option>Historia clínica</option>
                  <option>Recordatorios</option>
                  <option>Pagos y comprobantes</option>
                </select>
                <textarea className="form-control" rows="3" placeholder="Contanos tu caso" />
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-light-on-dark" data-bs-dismiss="modal" type="button">Cancelar</button>
              <button className="btn btn-light-on-dark" type="button">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

