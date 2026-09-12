"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const { diagnostico, contato } = site;

type Stage = "intro" | "form" | "enviando" | "sucesso" | "erro";
type Answers = Record<string, string | string[]>;

const total = diagnostico.questions.length;

export function Quiz() {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const question = diagnostico.questions[index];
  const answer = answers[question?.id ?? ""];
  const progress =
    stage === "sucesso" ? 100 : (index / total) * 100;

  // Uma resposta só conta como preenchida se tiver conteúdo de verdade.
  const preenchida = Array.isArray(answer)
    ? answer.length > 0
    : typeof answer === "string" && answer.trim().length > 0;
  const podeAvancar = !question?.required || preenchida;

  function set(value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
  }

  function toggleMulti(option: string) {
    const atual = Array.isArray(answer) ? answer : [];
    set(
      atual.includes(option)
        ? atual.filter((o) => o !== option)
        : [...atual, option],
    );
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

    // Monta um e-mail legível: a pergunta inteira seguida da resposta.
    const corpo: Record<string, string> = {};
    for (const q of diagnostico.questions) {
      const valor = answers[q.id];
      corpo[q.q] = Array.isArray(valor)
        ? valor.join(", ")
        : (valor ?? "—").toString();
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: diagnostico.accessKey,
          subject: `Novo diagnóstico VN — ${answers.nome ?? "sem nome"}`,
          from_name: "Site VN — Diagnóstico",
          ...corpo,
        }),
      });

      const data = await res.json();
      setStage(data.success ? "sucesso" : "erro");
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
          <div className="flex items-baseline justify-between text-[13px] text-fg-muted">
            <span>
              Pergunta {index + 1} de {total}
            </span>
            <span className="tabular-nums">{Math.round(progress)}%</span>
          </div>
          <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full bg-accent shadow-[0_0_12px_rgba(34,197,94,0.6)]"
              initial={false}
              animate={{ width: `${progress}%` }}
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
            <div className="mt-9 flex justify-center">
              <Button size="lg" onClick={() => setStage("form")}>
                {diagnostico.intro.cta}
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>
        )}

        {stage === "form" && (
          <motion.div key={question.id} {...fade}>
            <h2 className="text-xl leading-snug font-semibold tracking-tight text-balance text-fg sm:text-2xl">
              {question.q}
            </h2>
            {!question.required && (
              <p className="mt-2 text-[13px] text-fg-muted">Opcional</p>
            )}

            <div className="mt-8">
              {question.type === "single" && (
                <div className="flex flex-col gap-3">
                  {question.options?.map((option) => {
                    const ativo = answer === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => set(option)}
                        className={`group flex items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left text-sm transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.99] ${
                          ativo
                            ? "border-accent/50 bg-accent/[0.1] text-fg"
                            : "border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] text-fg hover:border-accent/40 hover:bg-accent/[0.06]"
                        }`}
                      >
                        {option}
                        {ativo && <Check size={15} className="shrink-0 text-accent" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {question.type === "multi" && (
                <div className="flex flex-col gap-3">
                  {question.options?.map((option) => {
                    const ativo =
                      Array.isArray(answer) && answer.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleMulti(option)}
                        className={`flex items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left text-sm transition-all duration-200 active:scale-[0.99] ${
                          ativo
                            ? "border-accent/50 bg-accent/[0.1] text-fg"
                            : "border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] text-fg hover:border-accent/40"
                        }`}
                      >
                        {option}
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                            ativo
                              ? "border-accent bg-accent text-black"
                              : "border-white/20"
                          }`}
                        >
                          {ativo && <Check size={11} strokeWidth={3} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {(question.type === "text" || question.type === "tel") && (
                <input
                  type={question.type === "tel" ? "tel" : "text"}
                  value={typeof answer === "string" ? answer : ""}
                  onChange={(e) => set(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && avancar()}
                  placeholder={question.placeholder}
                  className={inputClass}
                  autoFocus
                />
              )}

              {question.type === "textarea" && (
                <textarea
                  value={typeof answer === "string" ? answer : ""}
                  onChange={(e) => set(e.target.value)}
                  placeholder={question.placeholder}
                  rows={5}
                  className={`${inputClass} resize-none`}
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
                {index + 1 === total ? "Enviar diagnóstico" : "Continuar"}
                <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>
        )}

        {stage === "enviando" && (
          <motion.div key="enviando" {...fade} className="py-16 text-center">
            <Loader2 size={22} className="mx-auto animate-spin text-accent" />
            <p className="mt-4 text-sm text-fg-muted">Enviando suas respostas…</p>
          </motion.div>
        )}

        {stage === "sucesso" && (
          <motion.div key="sucesso" {...fade} className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <Check size={22} />
            </span>
            <h2 className="text-gradient mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
              {diagnostico.sucesso.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-fg-muted text-pretty">
              {diagnostico.sucesso.body}
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" href={contato.whatsapp}>
                {diagnostico.sucesso.cta}
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
