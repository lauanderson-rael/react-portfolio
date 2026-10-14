import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registro centralizado: deve rodar uma única vez antes de qualquer useGSAP.
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Em mobile, evita saltos quando a barra do navegador recolhe/expande.
ScrollTrigger.config({ ignoreMobileResize: true });

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Durações 20% menores no mobile para manter a sensação sutil. */
export const responsiveDuration = (base: number): number =>
  typeof window !== "undefined" && window.innerWidth < 768 ? base * 0.8 : base;

export { gsap, ScrollTrigger, useGSAP };
