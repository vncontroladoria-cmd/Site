import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { site } from "@/content/site";

const { metodos } = site;

export function Metodos() {
  return (
    <section
      id="metodos"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {metodos.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
            {metodos.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {metodos.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08} className="h-full">
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-6 sm:p-8">
                  <span className="w-fit rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1 text-[11px] text-fg/80">
                    {item.tag}
                  </span>

                  <p className="mt-8 text-[11px] tracking-widest text-fg-muted uppercase">
                    Método · {item.number}
                  </p>
                  {/* O nome do método é o herói do card — grande e sozinho. */}
                  <h3 className="mt-1 text-4xl font-semibold tracking-tight text-fg">
                    {item.name}
                  </h3>

                  <p className="mt-5 flex-1 text-sm leading-relaxed text-fg-muted">
                    {item.body}
                  </p>

                  <p className="mt-6 border-t border-white/[0.06] pt-4 text-[13px] text-accent">
                    {item.focus}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
