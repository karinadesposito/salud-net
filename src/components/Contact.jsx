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
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title mb-3">Escribinos</h5>
                <form className="vstack gap-3" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="form-label">Nombre y apellido</label>
                    <input id="name" className="form-control" type="text" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" className="form-control" type="email" placeholder="tu@correo.com" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea id="message" className="form-control" rows="4" placeholder="¿En qué podemos ayudarte?" required />
                  </div>

                  <button className="btn btn-dark-on-light w-100" type="submit">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* DERECHA: DATOS + REDES + MAPA */}
          <div className="col-12 col-lg-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">Nuestros datos</h5>

                <div className="mb-3">
                  <div className="mb-1"><strong>Dirección:</strong> Zibecchi 74, Benito Juárez, Buenos Aires, Argentina</div>
                  <div className="mb-1"><strong>Teléfono:</strong> +54 2281 123456</div>
                  <div className="mb-1">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contacto@saludnet.com" style={{ textDecoration: "none", color: "inherit" }}>
                      contacto@saludnet.com
                    </a>
                  </div>
                </div>

                <div className="mb-3">
                  <strong>Redes:</strong>
                  <div className="d-flex flex-wrap gap-2 mt-1">
                    <button className="btn btn-dark-on-light btn-sm" type="button" onClick={() => window.open("https://www.instagram.com", "_blank")}>Instagram</button>
                    <button className="btn btn-dark-on-light btn-sm" type="button" onClick={() => window.open("https://www.facebook.com", "_blank")}>Facebook</button>
                    <button className="btn btn-dark-on-light btn-sm" type="button" onClick={() => window.open("https://www.linkedin.com", "_blank")}>LinkedIn</button>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="ratio ratio-16x9" style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
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
          {/* FIN DERECHA */}
        </div>
      </div>
    </section>
  );
}


