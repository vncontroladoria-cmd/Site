import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

const { steps } = site;

/**
 * Aqui a numeração é informação, não enfeite: o conteúdo é mesmo
 * uma sequência com ordem obrigatória (levantar -> estruturar -> fechar).
 * A linha que conecta os passos só aparece no desktop.
 */
export function Steps() {
  return (
    <section
      id="como-funciona"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {steps.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
            {steps.subtitle}
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* trilho que liga os três marcadores */}
          <span
            aria-hidden
            className="absolute top-4 right-0 left-0 hidden h-px bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1),rgba(255,255,255,0.1),transparent)] md:block"
          />

          {steps.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="relative">
              <div>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-elevated text-[13px] font-medium text-fg tabular-nums shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_24px_rgba(34,197,94,0.15)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
