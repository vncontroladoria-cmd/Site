import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { site } from "@/content/site";

const { equipe } = site;

export function Equipe() {
  return (
    <section
      id="equipe"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {equipe.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
            {equipe.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {equipe.people.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.08} className="h-full">
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col gap-5 p-5 sm:flex-row sm:p-6">
                  <span className="relative block aspect-[3/4] w-full shrink-0 overflow-hidden rounded-xl border border-white/10 sm:w-40">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="text-lg font-semibold tracking-tight text-fg">
                      {person.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent">{person.role}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                      {person.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {person.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-fg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
