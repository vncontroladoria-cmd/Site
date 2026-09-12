"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const { hero } = site;

/** Quebra a headline para aplicar gradiente de acento só na frase-chave. */
function Headline() {
  const [before, after] = hero.headline.split(hero.highlight);
  return (
    <h1 className="mx-auto max-w-4xl text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-7xl">
      <span className="text-gradient">{before}</span>
      <span className="text-gradient-accent">{hero.highlight}</span>
      <span className="text-gradient">{after}</span>
    </h1>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax cinematográfico: o conteúdo some, encolhe e desce.
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const style = reduce ? undefined : { opacity, scale, y };

  return (
    <section ref={ref} className="relative px-5 pt-32 pb-16 sm:px-8 sm:pt-40 lg:pt-48 lg:pb-24">
      <motion.div style={style} className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge>{hero.badge}</Badge>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7"
        >
          <Headline />
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted text-pretty sm:text-lg"
        >
          {hero.subhead}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button size="lg" href={hero.primaryHref} className="w-full sm:w-auto">
            {hero.primaryCta}
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
          <Button size="lg" variant="secondary" href={hero.secondaryHref} className="w-full sm:w-auto">
            {hero.secondaryCta}
          </Button>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-4 text-[13px] text-white/40"
        >
          {hero.note}
        </motion.p>
      </motion.div>

      <HeroPanel />
    </section>
  );
}

/**
 * A foto da dupla é a primeira imagem da página — quem chega vê quem
 * está por trás da VN antes de qualquer número. Entra com leve rotação
 * em X para sugerir profundidade.
 */
function HeroPanel() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="relative mx-auto mt-16 max-w-md sm:mt-20"
    >
      {/* halo por trás da foto */}
      <div
        aria-hidden
        className="absolute -inset-x-16 -top-10 bottom-0 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.16),transparent_70%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.6),0_0_120px_rgba(34,197,94,0.08)]">
        <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.18),transparent)]" />
        <img
          src={hero.image}
          alt="Nicollas Bueno e Carol Calixto, fundadores da VN — Visão do Negócio"
          className="w-full"
        />
      </div>
    </motion.div>
  );
}
