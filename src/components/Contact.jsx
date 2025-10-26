import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario de contacto enviado");
  };

  // Dirección real → mapa embebido dinámico
  const MAP_QUERY = encodeURIComponent(
    "Zibecchi 74, Benito Juárez, Buenos Aires, Argentina"
  );
  const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

  return (
    <section className="section-services" id="contact">
      <div className="container">
        <h2 className="mb-4 text-center">Contacto</h2>

        <div className="row g-4 align-items-stretch">
          {/* IZQUIERDA: FORMULARIO */}
          <div className="col-12 col-lg-6">
            <div className="card contact-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Escribinos</h5>

                <form className="vstack gap-3" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="form-label small mb-1">
                      Nombre y apellido
                    </label>
                    <input
                      id="name"
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label small mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      className="form-control form-control-sm"
                      type="email"
                      placeholder="tu@correo.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label small mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="form-control form-control-sm"
                      rows="3"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    />
                  </div>

                  <button
                    className="btn btn-dark-on-light w-100 btn-sm py-2"
                    type="submit"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* DERECHA: DATOS + MAPA EN LAYOUT HORIZONTAL */}
          <div className="col-12 col-lg-6">
            <div className="card contact-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Nuestros datos</h5>

                <div className="row g-3 flex-lg-nowrap align-items-start">
                  {/* DATOS */}
                  <div className="col-12 col-md-6">
                    <ul className="list-unstyled small mb-0">
                      <li className="mb-2">
                        <strong>Dirección:</strong>
                        <br />
                        Zibecchi 74
                        <br />
                        Benito Juárez, Buenos Aires
                      </li>

                      <li className="mb-2">
                        <strong>Teléfono:</strong>
                        <br />
                        +54 2281 123456
                      </li>

                      <li className="mb-2">
                        <strong>Email:</strong>
                        <br />
                        <a
                          href="mailto:contacto@saludnet.com"
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          contacto@saludnet.com
                        </a>
                      </li>

                      <li className="mb-2">
                        <strong>Redes:</strong>
                        <div className="d-flex flex-wrap gap-2 mt-1">
                          <button
                            className="btn btn-dark-on-light btn-sm"
                            type="button"
                            onClick={() =>
                              window.open(
                                "https://www.instagram.com",
                                "_blank"
                              )
                            }
                          >
                            Instagram
                          </button>
                          <button
                            className="btn btn-dark-on-light btn-sm"
                            type="button"
                            onClick={() =>
                              window.open(
                                "https://www.facebook.com",
                                "_blank"
                              )
                            }
                          >
                            Facebook
                          </button>
                          <button
                            className="btn btn-dark-on-light btn-sm"
                            type="button"
                            onClick={() =>
                              window.open(
                                "https://www.linkedin.com",
                                "_blank"
                              )
                            }
                          >
                            LinkedIn
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* MAPA */}
                  <div className="col-12 col-md-6">
                    <div
                      className="ratio ratio-4x3 rounded overflow-hidden border"
                      style={{
                        maxHeight: "160px",
                        borderColor: "rgba(0,0,0,0.08)",
                      }}
                    >
                      <iframe
                        src={MAP_EMBED_URL}
                        title="Mapa - Salud-Net"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FIN DERECHA */}
        </div>
      </div>
    </section>
  );
}
