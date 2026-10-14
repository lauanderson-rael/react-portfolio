import { useRef } from "react";
import type { MutableRefObject } from "react";
import { gsap, prefersReducedMotion, responsiveDuration, useGSAP } from "../lib/gsap";

interface RevealOptions {
  /** Seletor dentro do scope (ex. ".reveal"). Padrão: anima o próprio root. */
  selector?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

/**
 * Reveal sutil on-scroll seguindo a skill gsap-react:
 * - useGSAP com scope (nunca seletor global)
 * - cleanup automático no unmount
 * - respeita prefers-reduced-motion
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
): MutableRefObject<T | null> {
  // `| null` no genérico: usa a sobrecarga mutável do useRef (mesma convenção do código existente).
  const root = useRef<T | null>(null);
  const {
    selector,
    y = 24,
    duration = 0.6,
    stagger = 0,
    start = "top 85%",
    once = true,
  } = options;

  useGSAP(
    () => {
      if (prefersReducedMotion() || !root.current) return;
      const targets = selector
        ? root.current.querySelectorAll<HTMLElement>(selector)
        : root.current;
      if (!targets || (targets instanceof NodeList && targets.length === 0)) return;

      gsap.from(targets, {
        y,
        opacity: 0,
        duration: responsiveDuration(duration),
        ease: "power2.out",
        stagger,
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: root.current, start, once },
      });
    },
    { scope: root },
  );

  return root;
}
