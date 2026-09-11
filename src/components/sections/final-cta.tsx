import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

const { finalCta } = site;

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28 lg:py-36"
    >
      {/* poça de luz concentrada atrás do CTA — o ponto mais claro da página */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[420px] max-w-3xl bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.18),transparent_70%)] blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-muted text-pretty sm:text-lg">
          {finalCta.body}
        </p>
        <div className="mt-9 flex justify-center">
          <Button size="lg" href="#">
            {finalCta.cta}
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
