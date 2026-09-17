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
 * Entrada ao entrar na viewport: fade + 24px de subida, uma vez só.
 * Com prefers-reduced-motion o conteúdo já nasce visível.
 *
 * viewport.amount: "some" — dispara assim que qualquer parte do bloco
 * entra na tela. Com amount numérico (ex.: 0.2) blocos mais altos que a
 * tela nunca atingiam o percentual no celular e ficavam invisíveis.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
