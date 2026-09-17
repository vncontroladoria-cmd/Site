"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** atraso em segundos — use 0.08 * índice para escalonar listas */
  delay?: number;
  className?: string;
}

/**
 * Fade + 24px de subida ao montar o componente.
 *
 * NÃO usa whileInView/IntersectionObserver de propósito: navegadores
 * embutidos (Instagram, Facebook, TikTok) não disparam o observer de
 * forma confiável e o conteúdo ficava preso em opacity: 0. Animando no
 * mount, o conteúdo sempre termina visível em qualquer navegador.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
