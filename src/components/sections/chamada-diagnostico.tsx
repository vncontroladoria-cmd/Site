import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

const { chamadaDiagnostico } = site;

/**
 * Convite para o diagnóstico, posicionado no fim da página:
 * quem chega aqui já passou por métodos, equipe e eBooks.
 */
export function ChamadaDiagnostico() {
  return (
    <section
      id="diagnostico"
      className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-b from-accent/[0.08] to-transparent p-8 text-center shadow-[0_0_0_1px_rgba(34,197,94,0.12),0_8px_40px_rgba(0,0,0,0.5)] sm:p-12">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(34,197,94,0.4),transparent)]" />

            <Badge>{chamadaDiagnostico.badge}</Badge>

            <h2 className="text-gradient mx-auto mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
              {chamadaDiagnostico.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-fg-muted text-pretty">
              {chamadaDiagnostico.body}
            </p>

            <div className="mt-8 flex justify-center">
              <Button size="lg" href="/diagnostico">
                {chamadaDiagnostico.cta}
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
