import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

const { ebooks } = site;

/**
 * Coleção Diagnóstico do Salão.
 * A arte oficial da coleção carrega sozinha o peso visual, então ela é o
 * elemento principal e a lista de volumes fica ao lado, quieta.
 */
export function Pricing() {
  return (
    <section
      id="ebooks"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {ebooks.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
            {ebooks.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.6),0_0_100px_rgba(34,197,94,0.08)]">
              <img
                src={ebooks.image}
                alt="Coleção Diagnóstico do Salão — os quatro volumes"
                className="w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {/* A numeração aqui é real: os volumes têm ordem de leitura. */}
            <ol className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {ebooks.volumes.map((volume) => (
                <li key={volume.number} className="flex gap-4 py-4">
                  <span className="text-sm font-medium text-accent tabular-nums">
                    {volume.number}
                  </span>
                  <span>
                    <span className="block text-base font-semibold tracking-tight text-fg">
                      {volume.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-fg-muted">
                      {volume.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <span>
                <span className="block text-3xl font-semibold tracking-tight text-fg tabular-nums">
                  {ebooks.price}
                </span>
                <span className="mt-1 block text-[13px] text-fg-muted">
                  {ebooks.priceNote}
                </span>
              </span>
              <Button size="lg" href={ebooks.url}>
                {ebooks.cta}
                <ArrowUpRight size={15} />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
