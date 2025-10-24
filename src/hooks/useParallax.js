import { useEffect, useRef } from "react";

/**
 * useParallax
 * Mueve suavemente el elemento target con transform: translateY()
 * basado en cuánto entra/sale su contenedor del viewport.
 *
 * @param {number} speed - 0.2 a 0.35 suele ir bien. Positivo = se mueve en sentido "parallax".
 * @param {boolean} enabled - Para habilitar/deshabilitar fácilmente (ej: mobile).
 */
export default function useParallax(speed = 0.25, enabled = true) {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const el = targetRef.current;
    if (!el) return;

    // Respeta accesibilidad: si el usuario prefiere menos movimiento, no animamos
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // Usamos el contenedor padre si existe, así el movimiento depende de la sección visible
    const container = el.parentElement || el;

    let raf = null;
    const update = () => {
      const rect = container.getBoundingClientRect();
      // Sólo actualizamos si el contenedor está en el viewport
      const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
      if (isVisible) {
        const offset = -rect.top * speed;
        el.style.transform = `translateY(${offset}px)`;
      }
      raf = null;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    // Posiciona al cargar
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, enabled]);

  return targetRef;
}

