import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

const { proof, equipe } = site;

/**
 * Manifesto da VN. A foto da dupla ancora o bloco à esquerda e a frase
 * fica solta, em tamanho grande — é o momento mais "marca" da página.
 */
export function Proof() {
  return (
    <section className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_80px_rgba(0,0,0,0.6),0_0_100px_rgba(34,197,94,0.08)]">
              <img
                src={equipe.photo}
                alt="Nicollas Bueno e Carol Calixto, fundadores da VN"
                className="w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <figure>
                <blockquote className="text-2xl leading-tight font-semibold tracking-tight text-balance text-fg sm:text-3xl lg:text-4xl">
                  {proof.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="block text-fg">{proof.author}</span>
                  <span className="block text-fg-muted">{proof.role}</span>
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/[0.06] pt-8">
                {proof.stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-2xl font-semibold tracking-tight text-fg tabular-nums">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-sm leading-snug text-fg-muted">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
