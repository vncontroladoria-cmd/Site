import {
  BookOpen,
  ChartSpline,
  Compass,
  Layers,
  Target,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const icons: Record<string, LucideIcon> = {
  ChartSpline,
  Compass,
  Target,
  Wallet,
  BookOpen,
  Layers,
};

/**
 * Grid de 6 colunas com spans variáveis — nada de todos os cards do
 * mesmo tamanho. O card "hero" ocupa 4 colunas x 2 linhas e ancora o bloco.
 * No mobile tudo vira coluna única.
 */
const spans: Record<string, string> = {
  hero: "md:col-span-4 md:row-span-2",
  wide: "md:col-span-2 lg:col-span-3",
  normal: "md:col-span-2",
};

export function Features() {
  return (
    <section
      id="empresa"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {site.features.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
            {site.features.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-6">
          {site.features.items.map((item, i) => {
            const Icon = icons[item.icon] ?? ChartSpline;
            const isHero = item.span === "hero";

            return (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className={cn("h-full", spans[item.span] ?? spans.normal)}
              >
                <SpotlightCard className="h-full">
                  <div
                    className={cn(
                      "flex h-full flex-col p-6",
                      isHero ? "justify-between sm:p-8" : "justify-start",
                    )}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>

                    <div className={isHero ? "mt-8" : "mt-5"}>
                      <h3
                        className={cn(
                          "font-semibold tracking-tight text-fg",
                          isHero ? "text-xl sm:text-2xl" : "text-base",
                        )}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-2 leading-relaxed text-fg-muted",
                          isHero ? "max-w-md text-sm sm:text-base" : "text-sm",
                        )}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
