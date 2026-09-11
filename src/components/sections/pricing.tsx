import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { site } from "@/content/site";

const { ebooks } = site;

/**
 * Seção da Coleção Diagnóstico do Salão.
 * Aqui a numeração 01–04 é informação real: os volumes têm ordem.
 * Preço único para todos, por isso ele aparece uma vez só no topo,
 * em vez de repetido em cada card.
 */
export function Pricing() {
  return (
    <section
      id="ebooks"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {ebooks.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
              {ebooks.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <p className="text-sm text-fg-muted">Investimento por volume</p>
              <p className="mt-1 text-4xl font-semibold tracking-tight text-fg tabular-nums">
                {ebooks.price}
              </p>
              <p className="mt-2 text-[13px] text-fg-muted">
                {ebooks.priceNote}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ebooks.volumes.map((volume, i) => (
            <Reveal key={volume.number} delay={i * 0.06} className="h-full">
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-6">
                  <span className="text-sm font-medium text-accent tabular-nums">
                    {volume.number}
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-fg">
                    {volume.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                    {volume.body}
                  </p>
                  <Button href="#" variant="secondary" className="mt-6 w-full">
                    {ebooks.cta}
                  </Button>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
