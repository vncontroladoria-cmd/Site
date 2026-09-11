import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

const { proof } = site;

export function Proof() {
  return (
    <section className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <figure>
            <blockquote className="text-xl leading-snug font-medium tracking-tight text-balance text-fg sm:text-2xl lg:text-3xl">
              {proof.quote}
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="h-9 w-9 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(94,106,210,0.5),rgba(94,106,210,0.1))]" />
              <span className="text-sm">
                <span className="block text-fg">{proof.author}</span>
                <span className="block text-fg-muted">{proof.role}</span>
              </span>
            </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {proof.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-6 py-5"
                >
                  <dt className="text-sm text-fg-muted">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-fg tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
