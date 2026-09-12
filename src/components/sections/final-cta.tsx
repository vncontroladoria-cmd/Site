import { ArrowRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

const { finalCta, contato } = site;

const redes = [
  { label: "@vncontroladoriafinanceira", href: contato.instagram.empresa },
  { label: "@nicollas.financeiro", href: contato.instagram.nicollas },
  { label: "@carol.calixtto", href: contato.instagram.carol },
];

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28 lg:py-36"
    >
      {/* Ponto mais claro da página: a luz se concentra no CTA final. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[420px] max-w-3xl bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.16),transparent_70%)] blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
          {finalCta.body}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" href={contato.whatsapp} className="w-full sm:w-auto">
            <MessageCircle size={15} />
            WhatsApp {contato.telefone}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            href="/diagnostico"
            className="w-full sm:w-auto"
          >
            Fazer diagnóstico antes
            <ArrowRight size={15} />
          </Button>
        </div>

        <a
          href={`mailto:${contato.email}`}
          className="mt-6 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <Mail size={14} />
          {contato.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {redes.map((rede) => (
            <a
              key={rede.href}
              href={rede.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[13px] text-fg-muted transition-all duration-200 hover:border-accent/40 hover:text-fg"
            >
              <Instagram size={14} />
              {rede.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
