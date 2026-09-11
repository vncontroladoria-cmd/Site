import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

/**
 * <details> nativo em vez de estado no React: funciona sem JS,
 * já é acessível por teclado e o navegador cuida de aria-expanded.
 * O ícone gira via seletor [&[open]] do Tailwind.
 */
export function Faq() {
  return (
    <section
      id="duvidas"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal>
          <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
            {site.faq.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-white/[0.06] border-t border-white/[0.06]">
            {site.faq.items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium text-fg transition-colors duration-200 hover:text-white [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    size={16}
                    className="mt-1 shrink-0 text-fg-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
