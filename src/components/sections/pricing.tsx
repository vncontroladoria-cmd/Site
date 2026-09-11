import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const { pricing } = site;

export function Pricing() {
  return (
    <section
      id="planos"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
            {pricing.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
            {pricing.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <SpotlightCard
                className={cn(
                  "h-full",
                  // O plano em destaque ganha borda de acento e glow próprio
                  plan.featured &&
                    "border-accent/30 shadow-[0_0_0_1px_rgba(94,106,210,0.25),0_8px_40px_rgba(0,0,0,0.5),0_0_80px_rgba(94,106,210,0.12)]",
                )}
              >
                <div className="flex h-full flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold tracking-tight text-fg">
                      {plan.name}
                    </h3>
                    {plan.featured && (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] text-fg/80">
                        Mais contratado
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-fg-muted">
                    {plan.description}
                  </p>

                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight text-fg tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-sm text-fg-muted">{plan.period}</span>
                  </p>

                  <ul className="mt-7 flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-sm text-fg-muted">
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-accent"
                          strokeWidth={2.25}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contato"
                    variant={plan.featured ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    {plan.cta}
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
