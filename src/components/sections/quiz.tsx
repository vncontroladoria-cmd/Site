"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const { diagnostico, contato } = site;

type Stage = "intro" | "form" | "enviando" | "resultado" | "erro";
type Answers = Record<string, string>;

/**
 * O site.ts usa `as const`, o que faz cada pergunta virar um tipo literal
 * próprio — e aí campos opcionais como `scored` e `options` "somem" nas
 * perguntas que não os declaram. Estes tipos descrevem o formato geral e
 * o cast abaixo apaga essa diferença de uma vez.
 */
type Opcao = { label: string; weight?: number };
type Pergunta = {
  id: string;
  q: string;
  type: string;
  scored?: boolean;
  required?: boolean;
  placeholder?: string;
  options?: readonly Opcao[];
};
type Modulo = {
  id: string;
  nome: string;
  descricao: string;
  perguntas: readonly Pergunta[];
};

const modulos = diagnostico.modulos as readonly Modulo[];

/**
 * Achata os módulos numa lista linear de telas, guardando de qual módulo
 * cada pergunta veio. Assim a navegação é simples (um índice só) e ainda
 * dá para mostrar em que módulo a pessoa está.
 */
const telas = modulos.flatMap((modulo, mi) =>
  modulo.perguntas.map((pergunta, pi) => ({
    modulo,
    moduloIndex: mi,
    primeiraDoModulo: pi === 0,
    pergunta,
  })),
);

const total = telas.length;

export function Quiz() {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const tela = telas[index];
  const pergunta = tela?.pergunta;
  const valor = answers[pergunta?.id ?? ""] ?? "";
  const progresso = (index / total) * 100;

  const preenchida = valor.trim().length > 0;
  const podeAvancar = !pergunta?.required || preenchida;

  /** Nota de cada módulo: só perguntas pontuadas entram na conta. */
  const notas = useMemo(() => {
    return modulos
      .filter((m) => m.perguntas.some((p) => p.scored !== false))
      .map((modulo) => {
        const pontuadas = modulo.perguntas.filter((p) => p.scored !== false);
        const soma = pontuadas.reduce((acc, p) => {
          const escolhida = p.options?.find((o) => o.label === answers[p.id]);
          return acc + (escolhida?.weight ?? 0);
        }, 0);
        const pct = Math.round((soma / (pontuadas.length * 2)) * 100);
        const faixa =
          diagnostico.faixas.find((f) => pct >= f.min) ??
          diagnostico.faixas[diagnostico.faixas.length - 1];
        return { nome: modulo.nome, descricao: modulo.descricao, pct, faixa };
      });
  }, [answers]);

  // O eixo mais frágil vira a prioridade sugerida.
  const prioridade = [...notas].sort((a, b) => a.pct - b.pct)[0];

  function set(v: string) {
    setAnswers((prev) => ({ ...prev, [pergunta.id]: v }));
  }

  function avancar() {
    if (!podeAvancar) return;
    if (index + 1 < total) setIndex(index + 1);
    else enviar();
  }

  function voltar() {
    if (index > 0) setIndex(index - 1);
    else setStage("intro");
  }

  async function enviar() {
    setStage("enviando");

    const corpo: Record<string, string> = {};
    for (const t of telas) corpo[t.pergunta.q] = answers[t.pergunta.id] || "—";
    for (const n of notas) corpo[`NOTA · ${n.nome}`] = `${n.pct}% (${n.faixa.rotulo})`;
    corpo["PRIORIDADE"] = prioridade?.nome ?? "—";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: diagnostico.accessKey,
          subject: `Diagnóstico VN — ${answers.nome ?? "sem nome"}`,
          from_name: "Site VN — Diagnóstico",
          ...corpo,
        }),
      });
      const data = await res.json();
      setStage(data.success ? "resultado" : "erro");
    } catch {
      setStage("erro");
    }
  }

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const },
      };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-elevated px-4 py-3 text-sm text-fg placeholder:text-white/30 outline-none transition-colors duration-200 focus:border-accent";

  return (
    <div className="mx-auto w-full max-w-2xl">
      {(stage === "form" || stage === "enviando") && (
        <div className="mb-10">
          <div className="flex items-baseline justify-between gap-4 text-[13px]">
            <span className="text-accent">
              {tela?.modulo.nome ?? "Enviando"}
            </span>
            <span className="text-fg-muted tabular-nums">
              {index + 1} de {total}
            </span>
          </div>
          <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full bg-accent shadow-[0_0_12px_rgba(34,197,94,0.6)]"
              initial={false}
              animate={{ width: `${stage === "enviando" ? 100 : progresso}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.div key="intro" {...fade} className="text-center">
            <Badge>{diagnostico.intro.badge}</Badge>
            <h1 className="text-gradient mt-7 text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl">
              {diagnostico.intro.title}
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-fg-muted text-pretty">
              {diagnostico.intro.body}
            </p>

            <ul className="mx-auto mt-8 flex max-w-md flex-wrap justify-center gap-2">
              {modulos.map((m) => (
                <li
                  key={m.id}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[13px] text-fg-muted"
                >
                  {m.nome}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex justify-center">
              <Button size="lg" onClick={() => setStage("form")}>
                {diagnostico.intro.cta}
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>
        )}

        {stage === "form" && (
          <motion.div key={pergunta.id} {...fade}>
            {/* Abertura de módulo: a pessoa sabe que mudou de assunto. */}
            {tela.primeiraDoModulo && (
              <p className="mb-5 text-[13px] text-fg-muted">
                {tela.modulo.descricao}
              </p>
            )}

            <h2 className="text-xl leading-snug font-semibold tracking-tight text-balance text-fg sm:text-2xl">
              {pergunta.q}
            </h2>
            {!pergunta.required && (
              <p className="mt-2 text-[13px] text-fg-muted">Opcional</p>
            )}

            <div className="mt-8">
              {pergunta.type === "single" && (
                <div className="flex flex-col gap-3">
                  {pergunta.options?.map((option) => {
                    const ativo = valor === option.label;
                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => set(option.label)}
                        className={`flex items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left text-sm transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.99] ${
                          ativo
                            ? "border-accent/50 bg-accent/[0.1] text-fg"
                            : "border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] text-fg hover:border-accent/40 hover:bg-accent/[0.06]"
                        }`}
                      >
                        {option.label}
                        {ativo && (
                          <Check size={15} className="shrink-0 text-accent" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {pergunta.type === "textarea" && (
                <textarea
                  value={valor}
                  onChange={(e) => set(e.target.value)}
                  placeholder={pergunta.placeholder}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  autoFocus
                />
              )}

              {(pergunta.type === "text" || pergunta.type === "tel") && (
                <input
                  type={pergunta.type === "tel" ? "tel" : "text"}
                  value={valor}
                  onChange={(e) => set(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && avancar()}
                  placeholder={pergunta.placeholder}
                  className={inputClass}
                  autoFocus
                />
              )}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={voltar}
                className="inline-flex items-center gap-1.5 text-[13px] text-fg-muted transition-colors hover:text-fg"
              >
                <ArrowLeft size={14} />
                Voltar
              </button>

              <Button onClick={avancar} disabled={!podeAvancar} size="lg">
                {index + 1 === total ? "Ver meu diagnóstico" : "Continuar"}
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>
        )}

        {stage === "enviando" && (
          <motion.div key="enviando" {...fade} className="py-16 text-center">
            <Loader2 size={22} className="mx-auto animate-spin text-accent" />
            <p className="mt-4 text-sm text-fg-muted">
              Calculando o resultado…
            </p>
          </motion.div>
        )}

        {stage === "resultado" && (
          <motion.div key="resultado" {...fade}>
            <h2 className="text-gradient text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {diagnostico.resultado.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty">
              {diagnostico.resultado.body}
            </p>

            {prioridade && (
              <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/[0.07] p-5">
                <p className="text-[11px] tracking-widest text-accent uppercase">
                  {diagnostico.resultado.prioridadeLabel}
                </p>
                <p className="mt-2 text-lg font-semibold tracking-tight text-fg">
                  {prioridade.nome}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                  {prioridade.faixa.descricao} {prioridade.descricao}
                </p>
              </div>
            )}

            {/* Uma barra por eixo: dá para ver o desequilíbrio de relance. */}
            <div className="mt-8 flex flex-col gap-5">
              {notas.map((nota) => (
                <div key={nota.nome}>
                  <div className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-fg">{nota.nome}</span>
                    <span className="text-fg-muted tabular-nums">
                      {nota.pct}% · {nota.faixa.rotulo}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      initial={reduce ? false : { width: 0 }}
                      animate={{ width: `${nota.pct}%` }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[13px] leading-relaxed text-fg-muted">
              {diagnostico.resultado.nota}
            </p>

            <div className="mt-6">
              <Button size="lg" href={contato.whatsapp} className="w-full sm:w-auto">
                {diagnostico.resultado.cta}
              </Button>
            </div>
          </motion.div>
        )}

        {stage === "erro" && (
          <motion.div key="erro" {...fade} className="text-center">
            <p className="text-base text-fg">{diagnostico.erro}</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" onClick={enviar}>
                Tentar de novo
              </Button>
              <Button size="lg" variant="secondary" href={contato.whatsapp}>
                Chamar no WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
