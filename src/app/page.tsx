import { Faq } from "@/components/sections/faq";
import { ChamadaDiagnostico } from "@/components/sections/chamada-diagnostico";
import { Equipe } from "@/components/sections/equipe";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { Metodos } from "@/components/sections/metodos";
import { Pricing } from "@/components/sections/pricing";
import { Proof } from "@/components/sections/proof";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { Steps } from "@/components/sections/steps";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Steps />
        <Features />
        <Proof />
        <Metodos />
        <Equipe />
        <Pricing />
        <Faq />
        <ChamadaDiagnostico />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
