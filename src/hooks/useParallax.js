// src/hooks/useParallax.js
import { useEffect } from "react";

/** Parallax suave por capa ::before — 0.12–0.28 recomendado */
export default function useParallax(selector = ".has-parallax", strength = 0.20) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!els.length) return;

    const vh = () => window.innerHeight || document.documentElement.clientHeight;
    let rafId = null;

    const update = () => {
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - vh() / 2) / vh();
        const offsetPx = Math.max(-1, Math.min(1, progress)) * (strength * 200);
        el.style.setProperty("--parallax-offset", `${offsetPx}px`);
      });
      rafId = null;
    };

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [selector, strength]);
}
