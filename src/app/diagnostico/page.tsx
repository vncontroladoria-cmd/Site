import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Quiz } from "@/components/sections/quiz";
import { site } from "@/content/site";

export const metadata = {
  title: `Diagnóstico gratuito — ${site.name}`,
  description: site.diagnostico.intro.body,
};

export default function DiagnosticoPage() {
  return (
    <main className="flex min-h-dvh flex-col px-5 py-10 sm:px-8">
      <Link
        href="/"
        className="inline-flex w-fit items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
      >
        <ArrowLeft size={15} />
        Voltar ao site
      </Link>

      <div className="flex flex-1 items-center justify-center py-14">
        <Quiz />
      </div>
    </main>
  );
}
